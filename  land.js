const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = form.elements['name'].value.trim();
    let email = form.elements['email'].value.trim();
    let message = form.elements['message'].value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    window.location.href = 'thank-you.html';
});
