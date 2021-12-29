function validateForm() {
    var checkEmail = document.getElementById(email);
    var stopFirst = checkEmail.indexOf("@");
    var stopSecond = checkEmail.lastIndexOf(".");
    if (stopSecond + 2 >= checkEmail.length || stopFirst < 1 || stopSecond < stopFirst + 2) {
        window.alert("The email address is not valid");
        checkEmail.focus();
        return false;
    }

    var first_name = document.formS.first_name;
    var last_name = document.formS.last_name;
    var tel = document.formS.tel;

    var letters = /^[A-Za-z]+$/;
    if (first_name.value.match(letters)) {
        return true;
    }
    else if (first_name.value.match(letters) == False) {
        window.alert("The first name need to be only letters");
    }
    if (last_name.value.match(letters)) {
        return true;
    }
    else if (last_name.value.match(letters) == False) {
        window.alert("The last name need to be only letters");
    }

}



