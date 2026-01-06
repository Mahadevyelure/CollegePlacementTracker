let std_cont = document.getElementById("std-container");
let statusFilter = document.getElementById("statusFilter");

let allStudents;

let callStudents_from_api = async () =>{
    allStudents = await getStd();
    console.log(allStudents);
    displayStudents(allStudents)
    
}

callStudents_from_api()

let displayStudents = async(stds) => {
    // let allStudents = await getStd();

    std_cont.innerHTML = stds.map((ele) => `
        <div class="std-card"> 
            <img src="${ele.personal_info.profile_image}" alt="Student Image">
            <H3><strong>Student Id:</strong> ${ele.student_id}</H3>
            <h4>${ele.personal_info.full_name}</h4>
            <p><strong>College Id:</strong> ${ele.academic_info.college_id}</p>
            <p><strong>Status:</strong> ${ele.placement_status}</p>
        </div>
    `).join("");
};
// displayStudents()


let all_stds = document.getElementById('all_students')

all_stds.addEventListener('click', () =>{
    displayStudents(allStudents)
})

let placed_std = document.getElementById("placed_students")

placed_std.addEventListener("click", () =>{
    let filterPlaced = allStudents.filter((ele) =>{
        return ele.placement_status === 'Placed'
    });
    displayStudents(filterPlaced)
})


let not_Placed_Std = document.getElementById("not_placed_students")

not_Placed_Std.addEventListener("click", () =>{
    let filterNotPlaced = allStudents.filter((ele) =>{
        return ele.placement_status === 'Not Placed'
    });
    displayStudents(filterNotPlaced)
})
 