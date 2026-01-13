const baseUrl = "https://clinicaltrials.gov/api/v2/studies";

async function test(name, params) {
    const queryParams = new URLSearchParams(params);
    console.log(`\n--- Test: ${name} ---`);
    console.log(`URL: ${baseUrl}?${queryParams.toString()}`);
    try {
        const res = await fetch(`${baseUrl}?${queryParams.toString()}`);
        if (!res.ok) {
            console.log("Creating error...");
            const text = await res.text();
            console.log("FAILED:", res.status, text);
        } else {
            const data = await res.json();
            console.log("SUCCESS. First Item:", data.studies ? data.studies[0]?.protocolSection?.identificationModule?.nctId : "No studies");
        }
    } catch (e) {
        console.log("EXCEPTION:", e.message);
    }
}

async function run() {
    // Base Case
    await test("Base", {
        "query.cond": "Lysosomal Storage Diseases",
        "filter.overallStatus": "RECRUITING",
        "pageSize": "1",
        "fields": "NCTId,BriefTitle"
    });

    // Add Sort
    await test("Sort", {
        "query.cond": "Lysosomal Storage Diseases",
        "filter.overallStatus": "RECRUITING",
        "pageSize": "1",
        "sort": "LastUpdatePostDate:desc",
        "fields": "NCTId,BriefTitle"
    });

    // Add ArmsInterventionsModule
    await test("ArmsInterventionsModule", {
        "query.cond": "Lysosomal Storage Diseases",
        "filter.overallStatus": "RECRUITING",
        "pageSize": "1",
        "fields": "NCTId,BriefTitle,ArmsInterventionsModule"
    });

    // Add SponsorCollaboratorsModule
    await test("SponsorCollaboratorsModule", {
        "query.cond": "Lysosomal Storage Diseases",
        "filter.overallStatus": "RECRUITING",
        "pageSize": "1",
        "fields": "NCTId,BriefTitle,SponsorCollaboratorsModule"
    });

    // Add StatusModule
    await test("StatusModule", {
        "query.cond": "Lysosomal Storage Diseases",
        "filter.overallStatus": "RECRUITING",
        "pageSize": "1",
        "fields": "NCTId,BriefTitle,StatusModule"
    });
}

run();
