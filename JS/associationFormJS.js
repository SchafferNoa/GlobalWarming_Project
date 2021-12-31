// // form validation - add messages to required fields that are empty
// function validateForm() {
//     // last name validation
//     let lastName = document.forms["ourForm"]["lastName"].value;
//     if (firstName == "" || lastName == "" || Phone == "" || email == "") {
//         alert("All fields marked with '*' must be filled out");
//         return false;
//     }
// }

function validateForm() {
    var checkEmail = document.getElementById("email");
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


// document.getElementById("flexCheckChecked").onclick = function () {
//     var otherCheckbox = document.querySelector('input[value="other"]');
//     var otherText = document.querySelector('input[id="otherValue"]');
//     otherText.style.visibility = 'hidden';

//     otherCheckbox.addEventListener('change', () => {
//         if (otherCheckbox.checked) {
//             otherText.style.visibility = 'visible';
//             otherText.value = '';
//         } else {
//             otherText.style.visibility = 'hidden';
//         }
//     });
// }





