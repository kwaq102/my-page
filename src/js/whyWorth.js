const btnReadMore = document.querySelector('.read-more');
const txt = document.querySelector('.why-worth-text');

const showText = () => {
    txt.classList.toggle('show');
    txt.classList.contains('show') ? btnReadMore.textContent = "Zamknij" : btnReadMore.textContent = "Czytaj więcej"

}

btnReadMore.addEventListener('click', showText)