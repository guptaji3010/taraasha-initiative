const baseUrl = "https://clinicaltrials.gov/api/v2/studies";
const queryParams = new URLSearchParams({
    "query.cond": "Lysosomal Storage Diseases",
    "filter.overallStatus": "RECRUITING",
    "pageSize": "1",
    "sort": "LastUpdatePostDate:desc",
    "fields": "NCTId,BriefTitle,OverallStatus,ContactsLocationsModule,BriefSummary,ArmsInterventionsModule,SponsorCollaboratorsModule,StatusModule"
});

fetch(`${baseUrl}?${queryParams.toString()}`)
    .then(async res => {
        if (!res.ok) {
            console.error("Status:", res.status);
            const text = await res.text();
            console.error("Error:", text);
        } else {
            const data = await res.json();
            console.log("SUCCESS!");
        }
    })
    .catch(err => console.error("Exception:", err));
