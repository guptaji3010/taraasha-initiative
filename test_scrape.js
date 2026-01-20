const fs = require('fs');

async function testFetch() {
    const url = "https://metabolicsupportuk.org/information-and-advice/az-of-imds/";
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            }
        });

        console.log("Status:", response.status);
        const text = await response.text();
        console.log("Length:", text.length);
        if (response.status === 200) {
            fs.writeFileSync('test_page.html', text);
            console.log("Saved test_page.html");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

testFetch();
