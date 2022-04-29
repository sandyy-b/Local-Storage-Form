let id = "";
// localStorage.clear();

function validation() {
    let fname = document.getElementById("inputFirstName").value;
    let lname = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let confirmPassword = document.getElementById("inputConfirmPassword").value;
    let phoneNumber = document.getElementById("inputPhoneNumber").value;
    {
        if (fname == '') {
            document.getElementById("messageFirstName").innerHTML =
                "Please Enter your First Name";
        }
        else if (fname != '') {
            document.getElementById("messageFirstName").innerHTML = " ";
        }
    }

    {
        if (lname == '') {
            document.getElementById("messageLastName").innerHTML =
                "Please Enter your Last Name";
        }
        else if (lname != '') {
            document.getElementById("messageLastName").innerHTML = " ";
        }
    }
    {
        if (email == '') {
            document.getElementById("messageEmail").innerHTML =
                "Please Enter your Email Id";
        }
        else if (email != '') {
            document.getElementById("messageEmail").innerHTML = " ";
        }
    }
    {
        if (password == '') {
            document.getElementById("messagePassword").innerHTML =
                "Please Enter your Password";
        }
        else if (password != '') {
            document.getElementsById("messagePassword").innerHTML = " ";
        }
    }
    {
        if (confirmPassword == '') {
            document.getElementById("messageConfirmPassword").innerHTML =
                "Please Confirm your Password";
        }
        else if (confirmPassword != '') {
            document.getElementById("messageConfirmPassword").innerHTML = " ";
        }
    }
    {
        if (phoneNumber == '') {
            document.getElementById("messagePhoneNumber").innerHTML =
                "Please Enter your Phone Number";
        }
        else if (phoneNumber != '') {
            document.getElementsById("messagePhoneNumber").innerHTML = " ";
        }
    }
}

function setData() {

}

function displayData() {

}