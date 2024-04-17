const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const isUpperCase = (string) => /^[A-Z]*$/.test(string)
const busynessElementSelectors = ["div#i4", "div#i3", "div#i2", "div.i6w5N"]


async function getBusyness(places) {
    // Launch the browser in headless mode
    const browser = await puppeteer.launch({
        headless: false, args: [
            '--window-size=1920,600'
        ],
    });

    // Disable geolocation permission to prevent unwanted popups
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://www.google.com", ["geolocation"])

    // Create a new page
    const page = await browser.newPage();

    // JSON object keyed by place ID
    let busyness = {};

    // Loop over each place
    for (var place of places) {
        // Search place on google maps and wait for it to load
        let failed = false;
        let URL = `https://www.google.com/search?client=safari&rls=en&q=${encodeURIComponent(place.address + " " + place.name)}&ie=UTF-8&oe=UTF-8#ip=1`;
        await page.goto(URL, { timeout: 3000 }).catch(async _ => {
            await page.goto(URL, { timeout: 5000, waitUntil: 'networkidle2' }).catch(_ => {
                failed = true;
            });
        });
        if (failed) continue;
        await page.waitForSelector("#result-stats")

        // Check if busyness element is present
        let busynessElementFound = false;
        let busynessElement = null;
        for (var elementSelector of busynessElementSelectors) {
            busynessElement = await page.$(elementSelector);
            if (busynessElement) {
                busynessElementFound = true;
                break;
            }
        }

        // If it is not present continue to next place
        if (!busynessElementFound) continue;

        // Click right time
        const time = await page.$(`[data-hour="${new Date().getHours()}"]`);
        if (!time) continue;
        await time.click();
        await new Promise(r => setTimeout(r, 500));

        // Keep checking for the value of the busyness element 3 times
        let value = "";
        for (let i = 0; i < 3; i++) {
            value = await busynessElement.evaluate(el => el.textContent)
            if (value != "") break;

            await new Promise(r => setTimeout(r, 500));
        }

        // If no value still found continue to next place
        if (value == "") continue;

        // Check if busyness is live
        let live = false;
        if (value.includes("Live")) live = true;

        // Attempt to get percentage
        let bars = await page.$$(`[data-hour="${new Date().getHours()}"] > .kFDszc > div`);
        let percentage = 0;
        for (let bar of bars) {
            let height = await page.evaluate(el => el.getAttribute("style"), bar);
            percentage = parseFloat(height.split(":")[1].replace("px;", ""));
        }

        // Validate the busyness status
        value = value.split(":")[1].substring(1);
        let status = value.charAt(0);
        for (let i = 1; i < value.length; i++) {
            let char = value.charAt(i);
            if (isUpperCase(char)) break;
            status += char;
        }

        // Put busyness in JSON object
        busyness[place.id] = {
            live: live,
            status: status,
            percentage: percentage
        }
    }

    await browser.close();
    return busyness;
}

exports.getBusyness = getBusyness