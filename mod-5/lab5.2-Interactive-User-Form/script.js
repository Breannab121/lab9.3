// Select all necessary DOM elements (form, inputs, error message spans).
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const registrationForm = document.getElementById('registrationForm');

const errorMessageUser = document.getElementById('usernameError');
const errorMessageEmail = document.getElementById('emailError');
const errorMessagePassword = document.getElementById('passwordError');
const errorMessageConfirm = document.getElementById('confirmPasswordError');


window.addEventListener('DOMContentLoaded',function(){
    const user = localStorage.getItem('username')
    console.log(user); 
    if (user) {
        userName.value=user
    }
});




// Add input event listeners to each field (inputElement.validity) Implementing Custom Error Messages
// username
userName.addEventListener('input', function(event) {
     if (userName.validity.valueMissing) {
        userName.setCustomValidity('We need your username');
    } else {
        userName.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    errorMessageUser.textContent = userName.validationMessage;
});




//email
email.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    } else if (email.validity.valueMissing) {
        email.setCustomValidity('We need your email address to contact you!');
    } else {
        email.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    errorMessageEmail.textContent = email.validationMessage;
});


//password
password.addEventListener('input', function(event) {
    if (password.validity.tooLong) {
        password.setCustomValidity('minimum of 8 charcters');
    } else if (password.validity.valueMissing) {
        password.setCustomValidity('We need your password');
    } else {
        password.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    errorMessagePassword.textContent = password.validationMessage;
});



//confirm password
confirmPassword.addEventListener('input', function(event) {
    if (confirmPassword.validity.tooLong) {
        confirmPassword.setCustomValidity('minimum of 8 charcters');
    } else if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity('We need you to confirm password');
    } else {
        confirmPassword.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    errorMessageConfirm.textContent = confirmPassword.validationMessage;
});

//CHeck if password match

confirmPassword.addEventListener('blur', function () {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
  }

  errorMessageConfirm.textContent = confirmPassword.validationMessage;
});

//Form submission: Add a submit event listener to the form. event.preventDefault().

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission
 
    if (!registrationForm.checkValidity()) {
       // This will show built-in validation (e.g., "Please fill out this field")
    registrationForm.reportValidity();
    return;
    } 
    alert('Form submitted! Name: ' + userName.value);
    localStorage.setItem('username', userName.value)
    // Here you would typically send data to a server using fetch() or XMLHttpRequest
    // e.g., fetch('/submit-form', { method: 'POST', body: formData });
    registrationForm.reset(); // Optionally reset the form
  });
 