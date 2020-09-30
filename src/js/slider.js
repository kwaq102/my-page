import {
    tns
} from "../../node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 2,
    speed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    autoWidth: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    lazyload: true,
    autoHeight: true
});