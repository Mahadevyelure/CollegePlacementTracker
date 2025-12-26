let baseURL = "https://placementstracker-4.onrender.com/api";

document.getElementById("companyForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let companyData = {
        company_id: document.getElementById("company_id").value,
        name: document.getElementById("name").value,
        industry: document.getElementById("industry").value
    };

    try {
        let res = await fetch(`${baseURL}/companies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(companyData)
        });

        if (res.ok) {
            alert("Company added successfully!");
            document.getElementById("companyForm").reset();
        } else {
            alert("Failed to add company");
        }
    } catch (error) {
        console.error(error);
        alert("Server error occurred");
    }
});
