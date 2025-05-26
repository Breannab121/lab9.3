const email = document.querySelector('label');
const password = document.querySelector('label-2');




button.addEventListener('click', function (e){
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.')
    } else if (email.validity.valueMissing) {
        email.setCustomValidity('We need your email address to contact you!')
    } else {
        email.setCustomValidity('');
    }
    errorMessageEmail.textContent = email.validationMessage;
});

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

 document.getElementById("submit").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill out both username and password.");
    } else {
      // Do your login action here
      alert("Form submitted!");
    }
  });