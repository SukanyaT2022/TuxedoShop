

function submitWholeForm() {

 
  
  var firstName = document.forms['myFormJvScript']['Fname'].value;
  
  if (firstName.length < 2) {
  alert('First name is not valid');

  }

  var lastName = document.forms['myFormJvScript']['Lname'].value;
  if (lastName.length < 2) {
   alert('Last name is not valid');
  }



  
}
