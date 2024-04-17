const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const isUpperCase = (string) => /^[A-Z]*$/.test(string)
const busynessElements = ["div#i4", "div#i3", ""]


async function getBusyness(places) {
    // Launch the browser in headless mode
    const browser = await puppeteer.launch({
        headless: true, args: [
            '--window-size=1920,600'
        ],
    });

    // Disable geolocation permission to prevent unwanted popups
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://www.google.com", ["geolocation"])

    // Create a new page
    const page = await browser.newPage();

    for (var place of places) {
        // Search place on google maps and wait for it to load
        await page.goto(`https://www.google.com/search?client=safari&rls=en&q=${encodeURIComponent(place.address + " " + place.name)}&ie=UTF-8&oe=UTF-8#ip=1`);
        await page.waitForSelector("#result-stats")


    }
}

async function getBusyness(place) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: true, args: [
            '--window-size=1920,600'
        ],
    });
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://www.google.com", ["geolocation"])
    const page = await browser.newPage();

    // Search place on google maps
    await page.goto(`https://www.google.com/search?client=safari&rls=en&q=${encodeURIComponent(place.address + " " + place.name)}&ie=UTF-8&oe=UTF-8#ip=1`);
    await page.waitForSelector("#result-stats")

    // Look for busyness element
    let element = await page.$(`div#i4`);
    if (!element) {
        element = await page.$(`div#i3`);
        if (!element) {
            element = await page.$(`div#i2`);
            if (!element) {
                element = await page.$(`div.i6w5N`);
                if (!element) {
                    await browser.close();
                    return { success: false, error: "could not find busyness element" };
                }
            }
        }
    }

    // Click right time
    const time = await page.$(`[data-hour="${new Date().getHours()}"]`);
    if (!time) {
        await browser.close();
        return { success: false, error: "no busyness data" };
    }
    await time.click();
    await new Promise(r => setTimeout(r, 500));

    // Keep checking for the value of the busyness element 3 times
    let value = "";
    for (let i = 0; i < 3; i++) {
        value = await element.evaluate(el => el.textContent)
        if (value != "") {
            break
        }

        await new Promise(r => setTimeout(r, 500));
    }

    // If no value still found return error
    if (value == "") {
        await browser.close();
        return { success: false, error: "no busyness data" };
    }

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

    // Close browser
    await browser.close();

    // Validate the busyness status
    value = value.split(":")[1].substring(1);
    let busyness = value.charAt(0);
    for (let i = 1; i < value.length; i++) {
        let char = value.charAt(i);
        if (isUpperCase(char)) break;
        busyness += char;
    }

    // Return the busyness
    return { success: true, live: live, busyness: busyness, percentage: (percentage / 75) * 100 };
}

exports.getBusyness = getBusyness