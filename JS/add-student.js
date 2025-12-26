let baseURL = "https://placementstracker-4.onrender.com/api";

document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let studentData = {
        personal_info: {
            full_name: document.getElementById("full_name").value,
            gender: document.getElementById("gender").value,
            date_of_birth: document.getElementById("dob").value,
            profile_image: document.getElementById("profile_image").value
        },
        academic_info: {
            college_id: document.getElementById("college_id").value,
            department: document.getElementById("department").value,
            degree: document.getElementById("degree").value,
            graduation_year: Number(document.getElementById("graduation_year").value),
            cgpa: Number(document.getElementById("cgpa").value),
            backlogs: Number(document.getElementById("backlogs").value)
        },
        skills: {
            programming: document.getElementById("programming").value.split(",").map(s => s.trim()),
            databases: document.getElementById("databases").value.split(",").map(s => s.trim()),
            tools: document.getElementById("tools").value.split(",").map(s => s.trim())
        },
        placement_status: document.getElementById("placement_status").value
    };

    try {
        let res = await fetch(`${baseURL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentData)
        });

        if (res.ok) {
            alert("Student added successfully!");
            document.getElementById("studentForm").reset();
        } else {
            alert("Failed to add student");
        }
    } catch (error) {
        console.error(error);
        alert("Error occurred");
    }
});
