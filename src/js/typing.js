const box = document.querySelector('.professions');
const professions = [
    "Strony internetowe",
    "Marketing w internecie",
    "Copywriting",
    "Social media"
];

let wordIndex = 0
let professionsIndex = 0;
let oldTime = 0;

const speed = 50;
const stop = 2000;

let activeDOMElement = box;

const typing = (newTime) => {
    if (newTime - oldTime > speed) {
        const letter = professions[professionsIndex].substr(wordIndex, 1);
        if (wordIndex === professions[professionsIndex].length) {
            if (professionsIndex === professions.length - 1) {
                return setTimeout(() => {
                    box.textContent = "";
                    professionsIndex = 0;
                    wordIndex = 0;
                    requestAnimationFrame(typing)
                }, stop)
            }
            return setTimeout(() => {
                box.textContent = "";
                professionsIndex++
                wordIndex = 0;
                requestAnimationFrame(typing)
            }, stop)

        } else if (wordIndex === 0) {
            const h4 = document.createElement('h4');
            box.appendChild(h4);
            activeDOMElement = h4;
        }

        activeDOMElement.textContent += letter;
        oldTime = newTime;
        wordIndex++
    }

    requestAnimationFrame(typing)
}

typing()