let index = async () => {
    let stds = await getStd();
    let clgs = await getCol();
    let coms = await getCom();
    let jobs = await getjob();

    let stdbox = document.getElementById("Students");
    let clgbox = document.getElementById("Colleges");
    let combox = document.getElementById("Companies");
    let jobbox = document.getElementById("Jobs");

    stdbox.innerHTML = `
        <h2>Students</h2>
        <span class="count">0</span>
    `;

    clgbox.innerHTML = `
        <h2>Colleges</h2>
        <span class="count">0</span>
    `;

    combox.innerHTML = `
        <h2>Companies</h2>
        <span class="count">0</span>
    `;

    jobbox.innerHTML = `
        <h2>Jobs</h2>
        <span class="count">0</span>
    `;

    animateCount(stdbox.querySelector(".count"), 0, stds.length);
    animateCount(clgbox.querySelector(".count"), 0, clgs.length);
    animateCount(combox.querySelector(".count"), 0, coms.length);
    animateCount(jobbox.querySelector(".count"), 0, jobs.length);
};

index();



function animateCount(element, start, end, duration = 1500) {
    let startTime = null;

    function update(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;

        const value = Math.min(
            Math.floor(start + (end - start) * (progress / duration)),
            end
        );

        element.innerText = value;

        if (progress < duration) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}
