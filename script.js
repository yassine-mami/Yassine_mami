// Get the hamburger icon and the nav list
const hamburgerIcon = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

// Toggle the visibility of the menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
    // Toggle the 'menu-open' class on the body to disable scrolling
    document.body.classList.toggle('menu-open');
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzI1z82mjXhGQ35rKA7cc5V8Ohx0PK2pJK6X0SQzCqJISIQ__osP0G9JPKwCzHHors/exec'

const form = document.forms['contactForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(Response => alert("Thank you! Your message has been sended successfuly."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})

