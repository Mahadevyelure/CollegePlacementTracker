let clg_cont = document.getElementById("clg-container");

let allColleges;

/* ---------- FETCH COLLEGES ---------- */
let callColleges_from_api = async () => {
    try {
        allColleges = await getCol();
        console.log(allColleges);
        displayColleges(allColleges);
    } catch (err) {
        console.error("Error fetching colleges", err);
    }
};

callColleges_from_api();

/* ---------- DISPLAY COLLEGES ---------- */
let displayColleges = (clgs) => {
    clg_cont.innerHTML = clgs.map((ele) => `
        <div class="clg-card">
            <h3>${ele.name}</h3>
            <p><strong>College ID:</strong> ${ele.college_id}</p>
            <p><strong>Type:</strong> ${ele.type}</p>
            <p><strong>Affiliated To:</strong> ${ele.affiliated_to}</p>
            <p><strong>Established:</strong> ${ele.established_year}</p>
        </div>
    `).join("");
};

/* ---------- FILTER : ALL ---------- */
document.getElementById("all_colleges").addEventListener("click", () => {
    displayColleges(allColleges);
});

/* ---------- FILTER : GOVERNMENT ---------- */
document.getElementById("govt_colleges").addEventListener("click", () => {
    let govt = allColleges.filter(ele => ele.type === "Government");
    displayColleges(govt);
});

/* ---------- FILTER : PRIVATE ---------- */
document.getElementById("private_colleges").addEventListener("click", () => {
    let privateClg = allColleges.filter(ele => ele.type === "Private");
    displayColleges(privateClg);
});
