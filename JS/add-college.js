let baseURL = "https://placementstracker-4.onrender.com/api";

document.getElementById("collegeForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let collegeData = {
        college_id: document.getElementById("college_id").value,
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        affiliated_to: document.getElementById("affiliated_to").value,
        established_year: Number(document.getElementById("established").value)
    };

    try {
        let res = await fetch(`${baseURL}/colleges`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collegeData)
        });

        if (res.ok) {
            alert("College added successfully!");
            document.getElementById("collegeForm").reset();
        } else {
            alert("Failed to add college");
        }
    } catch (error) {
        console.error(error);
        alert("Server error occurred");
    }
});
