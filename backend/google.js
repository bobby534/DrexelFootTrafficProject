const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const isUpperCase = (string) => /^[A-Z]*$/.test(string)

class Place {

    constructor(placeName, placeId, placeAddress, mapNumber, category) {
        this.placeName = placeName;
        this.placeId = placeId;
        this.placeAddress = placeAddress;
        this.mapNumber = mapNumber;
        this.category = category;
    };

    getPlaceName() {
        return this.placeName;
    };

    getPlaceId() {
        return this.placeId;
    };

    getPlaceAddress() {
        return this.placeAddress;
    };

}



async function getBusyness(place) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: 'shell', args: [
        '--window-size=1920,600',
        '--single-process'
      ], });
    const context = browser.defaultBrowserContext();
    context.overridePermissions("https://www.google.com", ["geolocation"])
    const page = await browser.newPage();

    // Search place on google maps
    await page.goto(`https://www.google.com/search?client=safari&rls=en&q=${encodeURIComponent(place.getPlaceAddress() + " " + place.getPlaceName())}&ie=UTF-8&oe=UTF-8#ip=1`);
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
    let percentage = null;
    if (live) {
        percentage = await page.$(`[data-hour="${new Date().getHours()}"] > .kFDszc > .ycghLd`);
    } else {
        percentage = await page.$(`[data-hour="${new Date().getHours()}"] > .kFDszc > .xuAAaf`);
    }
    const height = await page.evaluate(el => el.getAttribute("style"), percentage);
    console.log(height)

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
    return { success: true, live: live, busyness: busyness };
}

async function main() {
    console.log(await getBusyness(new Place
        (
            "Old City Food Market",
            "ChIJH_2okFHGxokR9BAIWfuSvyo",
            "202 Market St, Philadelphia, PA 19106",
            "23A",
            "Dining"
        )))
}

main()