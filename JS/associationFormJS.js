// form validation - add messages to required fields that are empty
function validateForm() {
    // first name validation
    let firstName = document.forms["ourForm"]["firstName"].value;
    let lastName = document.forms["ourForm"]["lastName"].value;
    let Phone = document.forms["ourForm"]["Phone"].value;
    let email = document.forms["ourForm"]["email"].value;
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

                    
    
    
    
    // check required inputs are filled
    // first name validation
    if (firstName == "") {
        alert(`Field 'first name'marked with " * " must be filled out`);
        return false;
    }

    // last name validation
    if (lastName == "") {
        alert(`Field 'last name'marked with " * " must be filled out`);
        return false;
    }

    // phone validation
    if (Phone == "") {
        alert(`Field 'phone number'marked with " * " must be filled out`);
        return false;
    }

    // phone validation
    if (email == "") {
        alert(`Field 'Email'marked with " * " must be filled out`);
        return false;
    }


}



// show "other" text box
function ShowHideOther(flexCheckChecked4) {
    let otherTxt = document.getElementById("otherValue");
    otherTxt.style.display = flexCheckChecked4.checked ? "block" : "none";
}






