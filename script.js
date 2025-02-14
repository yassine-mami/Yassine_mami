// Get the hamburger icon and the nav list
const hamburgerIcon = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

// Toggle the visibility of the menu when the hamburger icon is clicked
hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
    // Toggle the 'menu-open' class on the body to disable scrolling
    document.body.classList.toggle('menu-open');
});