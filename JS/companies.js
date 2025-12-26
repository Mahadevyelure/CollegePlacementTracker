let comp_cont = document.getElementById("com-container");

let allCompanies;

/* ---------- FETCH COMPANIES ---------- */
let callCompanies_from_api = async () => {
    allCompanies = await getCom();
    console.log(allCompanies);
    displayCompanies(allCompanies);
};

callCompanies_from_api();

/* ---------- DISPLAY COMPANIES ---------- */
let displayCompanies = (comps) => {
    comp_cont.innerHTML = comps.map((ele) => `
        <div class="company-card">
            <h2>${ele.company_id}</h2>
            <h4>${ele.name}</h4>
            <h5>${ele.industry}</h5>

            

          
        </div>
    `).join("");
};

/* ---------- FILTER : ALL ---------- */
document.getElementById("all_companies").addEventListener("click", () => {
    displayCompanies(allCompanies);
});

/* ---------- FILTER : IT ---------- */
document.getElementById("it_companies").addEventListener("click", () => {
    let it = allCompanies.filter(ele => ele.industry === "IT Services");
    displayCompanies(it);
});

/* ---------- FILTER : NON-IT ---------- */
document.getElementById("PRODUCT").addEventListener("click", () => {
    let nonit = allCompanies.filter(ele => ele.industry === "Product Based");
    displayCompanies(nonit);
});
