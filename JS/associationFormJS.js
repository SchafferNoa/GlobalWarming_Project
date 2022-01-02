// form validation - add messages to required fields that are empty or not in them format.
function validateForm() {
    // get the variable from the document
    let firstName = document.forms["ourForm"]["firstName"].value;
    let lastName = document.forms["ourForm"]["lastName"].value;
    let Phone = document.forms["ourForm"]["Phone"].value;
    let email = document.forms["ourForm"]["email"].value;
    //check if the first name is not null and not letter, alert about this and return
    if (firstName != "") {
        for (let i = 0; i < firstName.length; i++) {
            let n = firstName.charCodeAt(i);
            let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);
            if (strStartsWithALetter==false)
            {
                alert('Please enter only Letters');
                return false;
                break;
            }    
        }
    
        
    }
    //check if the last name is not null and not letter, alert about this and return

    if (lastName != "") {
        for (let i = 0; i < lastName.length; i++) {
            let n = lastName.charCodeAt(i);
            let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);
            if (strStartsWithALetter==false)
            {
                alert('Please enter only Letters');
                return false;
                break;
            }
            
        }
    }
    //check if the first name is null

    if (firstName == "") {
        alert('Field first name marked with " * " must be filled out');
        return false;
    }

    //check if the last name is null
    if (lastName == "") {
        alert(`Field 'last name'marked with " * " must be filled out`);
        return false;
    }

    //check if the phone is null
    if (Phone == "") {
        alert(`Field 'phone number'marked with " * " must be filled out`);
        return false;
    }

   //check if the phone number is suitable to format

    var formatPhone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!Phone.match(formatPhone)){
        alert("The phone number is not valid")

        return false;
    } 
  //check if the email is null
    if (email == "") {
        alert(`Field 'Email' marked with " * " must be filled out`);
        return false;
    }
    //check if the email is suitable to format

    var regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(!email.match(regx)){
        alert("The email address is not valid")

        return false;
    } 
  


}



// show "other" text box
function ShowHideOther(flexCheckChecked4) {
    let otherTxt = document.getElementById("otherValue");
    otherTxt.style.display = flexCheckChecked4.checked ? "block" : "none";
}


    
    






