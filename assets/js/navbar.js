document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.main-navbar');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
    });

    const subMenuToggles = document.querySelectorAll('.nav-item i.fas.fa-angle-down');

    subMenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            const subMenu = toggle.parentElement.nextElementSibling;
            subMenu.classList.toggle('show');
        });
    });
});