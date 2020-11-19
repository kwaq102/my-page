import SmoothScroll from "../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills";
import Gumshoe from "../../node_modules/gumshoejs/dist/gumshoe.polyfills";

const scroll = new SmoothScroll('a[href*="#"]', {
    durationMax: 800,
    updateURL: false
});

const spy = new Gumshoe('.navigation a');