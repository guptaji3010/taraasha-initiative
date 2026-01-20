const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

async function debug() {
    console.log("Launching...");
    const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
    const page = await browser.newPage();
    const url = "https://metabolicsupportuk.org/condition/pompe-disease/";

    try {
        console.log(`Going to ${url}`);
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        const title = await page.title();
        console.log("Title:", title);

        await page.screenshot({ path: 'debug_pompe.png' });
        const html = await page.content();
        fs.writeFileSync('debug_pompe.html', html);

        // Quick check for content
        const toggleCount = await page.evaluate(() => document.querySelectorAll('.et_pb_toggle').length);
        console.log("Toggles found:", toggleCount);

        const textLength = await page.evaluate(() => document.body.innerText.length);
        console.log("Body text length:", textLength);

    } catch (e) {
        console.error(e);
    } finally {
        await browser.close();
    }
}
debug();
