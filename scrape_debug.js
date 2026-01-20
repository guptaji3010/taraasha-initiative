const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = "https://metabolicsupportuk.org/information-and-advice/az-of-imds/";

async function scrape() {
    console.log("Launching details...");
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        console.log("Navigating...");
        await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 60000 });

        // Debug: Screenshot
        await page.screenshot({ path: 'debug_main_page.png' });
        console.log("Screenshot saved.");

        // Debug: Get Page Title and some content
        const title = await page.title();
        console.log("Page Title:", title);

        // Broad link extraction
        const links = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
                .map(a => ({ text: a.innerText, href: a.href }))
                .filter(l => l.href.includes('metabolicsupportuk.org')); // Broad filter
        });

        console.log(`Total links found on page: ${links.length}`);

        // precise filter
        const diseaseLinks = links.filter(l => l.href.includes('/condition/'));
        console.log(`Disease links found: ${diseaseLinks.length}`);

        if (diseaseLinks.length === 0) {
            console.log("Sample links found:", links.slice(0, 5));
            return;
        }

        const uniqueLinks = [...new Map(diseaseLinks.map(item => [item.href, item])).values()];

        const results = [];
        for (let i = 0; i < uniqueLinks.length; i++) {
            // ... (Just scrape one for now to prove it works, or all if confident)
            // I will comment out the loop for this debug run just to see if links are found
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await browser.close();
    }
}

scrape();
