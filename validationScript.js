// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value
let inputfield = document.getElementById('inputField');
    
    
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  let strRegex = /^[a-z0-9]+$/;
  let result = strRegex.test(inputfield.value);
  if (!result){
    alert('Input must be alphanumeric');
    event.preventDefault();
  }
  else {
    alert('Form submitted successfully');
    document.getElementById('myForm').submit()
  }
  

})

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message