// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

// Ketika menu diclick
document.querySelector ('#menu').onclick = () =>  {
    navbarNav.classList.toggle('active');
};

// Ketika diclick diluar navbar, nav hilang
const menu = document.querySelector ('#menu')
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})
