const mobile_nav = document.querySelector(".mobile-nav-menu");

const nav_bar = document.querySelector(".navbar");

const toggleNavbar = () => {
    nav_bar.classList.toggle("active");
};

mobile_nav.addEventListener('click',() => toggleNavbar()); 