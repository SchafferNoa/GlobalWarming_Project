// form validation - add messages to required fields that are empty
function validateForm() {
    // first name validation
    let firstName = document.forms["ourForm"]["firstName"].value;
    let lastName = document.forms["ourForm"]["lastName"].value;
    let Phone = document.forms["ourForm"]["Phone"].value;
    let email = document.forms["ourForm"]["email"].value;

    // check required inputs are filled
    // first name validation
    if (firstName == "") {
        alert(`all fields marked with " * " must be filled out`);
        return false;
    }

    // last name validation
    else if (lastName == "") {
        alert(`all fields marked with " * " must be filled out`);
        return false;
    }

    // phone validation
    else if (Phone == "") {
        alert(`all fields marked with " * " must be filled out`);
        return false;
    }

    // phone validation
    else if (email == "") {
        alert(`all fields marked with " * " must be filled out`);
        return false;
    }

    // check formats for rellevant fields
    // check phone format


    // check email format


    // check name format


}

// show "other" text box
function ShowHideOther(flexCheckChecked4) {
    let otherTxt = document.getElementById("otherValue");
    otherTxt.style.display = flexCheckChecked4.checked ? "block" : "none";
}






