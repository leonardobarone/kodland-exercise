let button = document.getElementById("btn-nav-mobile");
let navbar = document.getElementById("nav-mobile");

button.addEventListener('click', () => {
    navbar.classList.toggle("display-none");
})