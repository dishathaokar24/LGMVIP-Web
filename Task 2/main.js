function enroll() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let link = document.getElementById("link").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("addStudent").innerHTML += `
                <div class="row">
                    <div class="column" style="border: 1px solid black;">
                        <p style= "text-align:center;">Image</p>
                    </div>
                    <div class="column" style="border: 1px solid black;">
                        <p style= "text-align:center;">Description</p>
                    </div>
                </div>
                <div class="row">
                    <div class="column" style="border: 1px solid black;">
                        <img src=${link} alt="Student Photo" width= "200" height="170">
                    </div>
                    <div class="column" style="border: 1px solid black;">
                        <p>${name}</p>
                        <p>${gender}</p>
                        <p>${email}</p>
                        <p>${website}</p>
                    </div>
                </div>
                
                `;
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("website").value = "";
                document.getElementById("link").value = "";
                document.getElementById("male").checked = false;
                document.getElementById("female").checked = false;
                document.getElementById("java").checked = false;
                document.getElementById("html").checked = false;
                document.getElementById("css").checked = false;
}
function allClear() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("link").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("java").checked = false;
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
}
