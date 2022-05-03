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
    let validate = 0;

    let fname = document.getElementById("inputFirstName").value;
    let lname = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let emailRegex = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z]{2,6}$/;
    let password = document.getElementById("inputPassword").value;
    let confirmPassword = document.getElementById("inputConfirmPassword").value;
    let phoneNumber = document.getElementById("inputPhoneNumber").value;    
    let phoneNumberRegex = "^[0-9]{10}$";
    let inputGender = document.querySelector('input[name="gender"]:checked');

    if (fname == '') {
        document.getElementById("messageFirstName").innerHTML =
            "Please Enter your First Name";
    }
    else if (!isNaN(fname.match(/^[A-Za-z]+$/))) {
        document.getElementById("messageFirstName").innerHTML =
            "Please Enter a Valid First Name";
    }
    if (lname == '') {
        document.getElementById("messageLastName").innerHTML =
            "Please Enter your Last Name";
    }
    else if (!isNaN(lname.match(/^[A-Za-z]+$/))) {
        document.getElementById("messageLastName").innerHTML =
            "Please Enter a Valid Last Name";
    }
    if (email == '') {
        document.getElementById("messageEmail").innerHTML =
            "Please Enter your Email Id";
    }
    else if (!email.match(emailRegex)) {
        document.getElementById("messageEmail").innerHTML =
            "Please Enter a Valid Email Id";
            validate = 1;
    }
    if (password == '') {
        document.getElementById("messagePassword").innerHTML =
            "Please Enter your Password";
    }
    if (confirmPassword == '') {
        document.getElementById("messageConfirmPassword").innerHTML =
            "Please Confirm your Password";
    }
    if (password != confirmPassword) {
        document.getElementById("messageConfirmPassword").innerHTML = "Passwords did not match";
    }
    if (phoneNumber == '') {
        document.getElementById("messagePhoneNumber").innerHTML =
            "Please Enter your Phone Number";
            validate = 1;
    }
    else if (!phoneNumber.match(phoneNumberRegex)) {
        document.getElementById("messagePhoneNumber").innerHTML =
            "Please Enter a valid Phone Number";
            validate = 1;
    }
    if (inputGender == null) {
        document.getElementById("messageGender").innerHTML =
            "Please Enter your Gender";
    }

    if(validate === 0) {
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
    document.getElementById("reset").click();
}