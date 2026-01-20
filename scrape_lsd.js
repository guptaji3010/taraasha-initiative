const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const fs = require('fs');

const BASE_URL = "https://metabolicsupportuk.org/information-and-advice/az-of-imds/";

async function scrape() {
    console.log("Launching Stealth Browser...");
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();

    try {
        console.log("Navigating to main list...");
        await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // Extract links
        const links = await page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a'));
            return anchors
                .filter(a => a.href.includes('/condition/'))
                .map(a => ({ name: a.innerText.trim(), url: a.href }));
        });

        // Deduplicate
        const uniqueLinks = [...new Map(links.map(item => [item.url, item])).values()];
        console.log(`Found ${uniqueLinks.length} diseases.`);

        // Filter for specific LSDs to save time and focus on user request
        const targetKeywords = [
            "neimann", "niemann", "mps ", "mucopoly", "gaucher", "fabry", "krabbe",
            "sandhoff", "tay-sachs", "metachromatic", "mld", "batten", "cln",
            "cystinosis", "mannosidosis", "fucosidosis", "sialidosis", "pompe",
            "wolman", "mucolipidosis", "gangliosidosis", "sulfatase", "galactosialidosis",
            "hunter", "hurler", "sanfilippo", "maroteaux", "sly"
        ];

        const filteredLinks = uniqueLinks.filter(l =>
            targetKeywords.some(k => l.name.toLowerCase().includes(k) || l.url.toLowerCase().includes(k))
        );

        console.log(`Found ${filteredLinks.length} relevant LSD links out of ${uniqueLinks.length} total.`);

        const results = [];

        for (let i = 0; i < filteredLinks.length; i++) {
            const link = filteredLinks[i];
            console.log(`[${i + 1}/${filteredLinks.length}] Scraping: ${link.name}`);

            try {
                // Use the same page to avoid opening/closing tabs continuously
                await page.goto(link.url, { waitUntil: 'domcontentloaded', timeout: 60000 });

                // Wait for content (Toggles or H1)
                try {
                    await page.waitForSelector('.et_pb_toggle', { timeout: 5000 });
                } catch (e) {
                    // console.log("No toggles found (might use headers)");
                }

                const data = await page.evaluate((diseaseName, diseaseUrl) => {
                    const getText = (headerKeywords) => {
                        const keywords = Array.isArray(headerKeywords) ? headerKeywords : [headerKeywords];

                        // Strategy 1: Toggles (Divi)
                        const toggles = Array.from(document.querySelectorAll('.et_pb_toggle'));
                        const toggle = toggles.find(t => {
                            const title = t.querySelector('.et_pb_toggle_title')?.innerText?.toLowerCase() || "";
                            return keywords.some(k => title.includes(k.toLowerCase()));
                        });
                        if (toggle) {
                            return toggle.querySelector('.et_pb_toggle_content')?.innerText?.trim() || "";
                        }

                        // Strategy 2: Headers (H2-H5)
                        const headers = Array.from(document.querySelectorAll('h2, h3, h4, h5'));
                        const header = headers.find(h => {
                            const title = h.innerText.toLowerCase();
                            return keywords.some(k => title.includes(k.toLowerCase()));
                        });

                        if (header) {
                            let content = "";
                            let curr = header.nextElementSibling;
                            // Grab text until next header or large container
                            while (curr && !['H1', 'H2', 'H3', 'H4', 'H5'].includes(curr.tagName) && content.length < 2000) {
                                content += curr.innerText + "\n";
                                curr = curr.nextElementSibling;
                            }
                            return content.trim();
                        }
                        return "";
                    };

                    const img = document.querySelector('.et_pb_toggle_content img')?.src ||
                        document.querySelector('.et_pb_image_wrap img')?.src ||
                        document.querySelector('img.wp-post-image')?.src || "";

                    // Extract logic with multiple keyword fallbacks
                    return {
                        id: diseaseName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                        name: diseaseName,
                        url: diseaseUrl,
                        image: img,
                        description: getText(["What is", "Overview", "Definition"]) || document.querySelector('.et_pb_module_inner')?.innerText?.substring(0, 300) || "",
                        causes: getText(["What causes", "Causes", "Etiology"]),
                        symptoms: getText(["symptoms", "signs"]),
                        diagnosis: getText(["diagnosis", "diagnosed", "testing"]),
                        treatment: getText(["treatment", "treated", "management", "therapy"]),
                        inheritance: getText(["inheritance", "inherited", "genetics"]),
                        references: getText(["references", "sources"])
                    };
                }, link.name, link.url);

                if (data.description || data.symptoms) {
                    console.log(`  > Success: Found content for ${link.name}`);
                    results.push(data);
                } else {
                    console.log(`  > Warning: No content found for ${link.name}`);
                }

            } catch (e) {
                console.error(`Failed to scrape ${link.name}: ${e.message}`);
            }
        }

        fs.writeFileSync('src/data/diseases_lsd_targeted.json', JSON.stringify({ diseases: results }, null, 2));
        console.log("Success! Saved to src/data/diseases_lsd_targeted.json");

    } catch (e) {
        console.error("Main Error:", e);
    } finally {
        await browser.close();
    }
}
scrape();
