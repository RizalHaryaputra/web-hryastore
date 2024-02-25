// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')

//Ketika menu diclick
document.querySelector('#menu').
    onclick = (e) => {
        navbarNav.classList.toggle('active');
        e.preventDefault()
    };

// Ketika diclick diluar navbar, nav hilang
const menu = document.querySelector('#menu')
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})


// Ketika search diklik
const searchBox = document.querySelector('#search-box')
const navbarSearch = document.querySelector('.search-form')
document.querySelector('#search').
    onclick = (e) => {
        navbarSearch.classList.toggle('active');
        searchBox.focus()
        e.preventDefault()
    };

// Ketika diclick diluar Search, search hilang
const search = document.querySelector('#search')
document.addEventListener('click', function (e) {
    if (!search.contains(e.target) && !navbarSearch.contains(e.target)) {
        navbarSearch.classList.remove('active')
    }
})

// Ketika shopping cart diklik
const navbarShoppingCart = document.querySelector('.shopping-cart')
const shoppingCart = document.querySelector('#shopping-cart')
const productShoppingCart = document.querySelector('.shopping-cart-product')

shoppingCart.
    onclick = (e) => {
        navbarShoppingCart.classList.toggle('active')
        e.preventDefault()
    }


// Ketika diklik diluar shopping cart akan hilang
document.addEventListener('click', function (e) {
    if (!navbarShoppingCart.contains(e.target) && !shoppingCart.contains(e.target)) {
        navbarShoppingCart.classList.remove('active')
    }
})

// Memunculkan detail product
const detailProduct = document.querySelector('.modal')
const closeIcon = document.querySelector('.close-icon')
const modalContainer = document.querySelector('.modal-container')

document.querySelectorAll('a#eye-icon').forEach((element) => {
    element.onclick = function (e) {
        detailProduct.classList.toggle('active');
        e.preventDefault();
    };
});


document.querySelector('.close-icon').
    onclick = (e) => {
        detailProduct.classList.remove('active')
        e.preventDefault()
    }

window.onclick = (e) => {
    if (e.target == detailProduct) {
        detailProduct.classList.remove('active')

    }
}

// Slide images
const slides = document.querySelectorAll('.about-img img')
let slideIndex = 0
let intervalId = null

document.addEventListener('DOMContentLoaded', initializeSlider())

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add('active');
        intervalId = setInterval(nextImage, 5000);

    }

}

function showImage(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slides[slideIndex].classList.add('active');

}

function nextImage() {
    slideIndex++;
    showImage(slideIndex);
}

function prevImage() {
    clearInterval(intervalId)
    slideIndex--;
    showImage(slideIndex);
}

const productCard = document.querySelectorAll('.product-card');
console.log(productCard);
productCard.forEach(e => console.log(e));

const p = document.querySelector('.navbar-nav');
console.log(p);

