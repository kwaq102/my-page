const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

const home = document.querySelector('.navigation ul li .home');
const offer = document.querySelector('.navigation ul li .offer');
const about = document.querySelector('.navigation ul li .about');
const projects = document.querySelector('.navigation ul li .projects');
const contact = document.querySelector('.navigation ul li .contact');

burger.addEventListener("click", function () {
    burger.classList.toggle("on");
    nav.classList.toggle("showNav");
})

const goTo = () =>{
    burger.classList.remove("on");
    nav.classList.remove("showNav");
}

home.addEventListener('click', goTo);
offer.addEventListener('click', goTo);
about.addEventListener('click', goTo);
projects.addEventListener('click', goTo);
contact.addEventListener('click', goTo);
