const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

burger.addEventListener("click", function () {
    burger.classList.toggle("on");
    nav.classList.toggle("showNav");
})

