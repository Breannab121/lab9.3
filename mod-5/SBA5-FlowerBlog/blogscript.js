const email = document.querySelector('.email');
const button = document.querySelector('.button');
const message = document.getElementById('message');
const description = document.querySelector('.description');

button.addEventListener('click', function(e) {
    if (email.value) {
        message.innerHTML = ('Thank you for subscribing')
        email.value = '';
        email.style.display = 'none'; // hides the input
        button.style.display = 'none'; // hides the button too
        description.style.display = 'none';
    } else {
        return;
    }
});