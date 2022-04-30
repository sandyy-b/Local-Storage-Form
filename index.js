let id = "";
// localStorage.clear();

window.addEventListener('load', function () {
    let formInput = document.querySelectorAll('.form-control');
    for (var i = 0; i < formInput.length; i++) {
        formInput[i].addEventListener('keyup', function (e) {
            var inputid = e.target.id
            var inputval = document.getElementById(inputid).value;
            if (inputval != '') {
                if (document.getElementById(inputid).nextElementSibling) {
                    document.getElementById(inputid).nextElementSibling.innerHTML = '';
                }
            }
        });
    }
});


function validation() {
    let fname = document.getElementById("inputFirstName").value;
    let lname = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let confirmPassword = document.getElementById("inputConfirmPassword").value;
    let phoneNumber = document.getElementById("inputPhoneNumber").value;

    if (fname == '') {
        document.getElementById("messageFirstName").innerHTML = "Please Enter your First Name";
    }
    if (lname == '') {
        document.getElementById("messageLastName").innerHTML =
            "Please Enter your Last Name";
    }
    if (email == '') {
        document.getElementById("messageEmail").innerHTML =
            "Please Enter your Email Id";
    }
    if (password == '') {
        document.getElementById("messagePassword").innerHTML =
            "Please Enter your Password";
    }
    if (confirmPassword == '') {
        document.getElementById("messageConfirmPassword").innerHTML =
            "Please Confirm your Password";
    }
    // if (phoneNumber == '') {
    //     document.getElementById("messagePhoneNumber").innerHTML =
    //         "Please Enter your Phone Number";
    // }
    else {
        setData();
    }

}

function setData() {
    let getFirstName = document.getElementById('inputFirstName').value;
    let getLastname = document.getElementById('inputLastName').value;
    let getEmail = document.getElementById("inputEmail").value;
    let getPhoneNumber = document.getElementById('inputPhoneNumber').value;
    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    user_records.unshift({
        'firstName': getFirstName.trim(),
        'lastName': getLastname.trim(),
        'email': getEmail,
        'phoneNumber': getPhoneNumber
    })
    user_records = localStorage.setItem("users", JSON.stringify(user_records));
    window.location.href = 'table.html';
} 