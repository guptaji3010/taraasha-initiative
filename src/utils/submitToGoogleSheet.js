const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwe5_KWZxYW8427A8OvW-Vb6ZtyHsSsI90vWcntnIiR7bMx6W0FjnkEGOR7BfA9Y9o/exec";

/**
 * Submits form data to the Google Sheet via Apps Script.
 * Uses 'no-cors' mode, so we cannot read the response, but the submission works.
 * @param {Object} data - Key-value pairs of form data
 * @returns {Promise<{success: boolean, error?: any}>}
 */
export const submitToGoogleSheet = async (data) => {
    try {
        // Convert data to URLSearchParams for application/x-www-form-urlencoded
        const formBody = new URLSearchParams();
        Object.keys(data).forEach(key => {
            // Ensure values are strings
            formBody.append(key, String(data[key] || ""));
        });

        // Add a form_type if not present, useful for filtering in the sheet
        if (!data.form_type) {
            formBody.append("form_type", "General");
        }

        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Essential for Google Apps Script client-side calls
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody.toString(),
        });

        return { success: true };
    } catch (error) {
        console.error("Google Sheet Submission Error:", error);
        return { success: false, error };
    }
};
