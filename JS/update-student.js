const BASE_URL = "https://placementstracker-4.onrender.com/api";

document.getElementById("updateStatusForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const studentId = document.getElementById("student_id").value.trim();
    const profileImage = document.getElementById("profile_image").value.trim();
    const placementStatus = document.getElementById("placement_status").value;

    let payload = {};

    if (profileImage) {
        payload.personal_info = {
            profile_image: profileImage
        };
    }

    if (placementStatus) {
        payload.placement_status = placementStatus;
    }

    if (Object.keys(payload).length === 0) {
        alert("Please update at least one field");
        return;
    }

    try {
        const res = await fetch(`${BASE_URL}/students/${studentId}`, {
            method: "PUT",   // backend expects PUT
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Response:", data);

        if (res.ok) {
            alert("Student updated successfully ✅");
            document.getElementById("updateStatusForm").reset();
        } else {
            alert(data.message || "Update failed ❌");
        }
    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});
