import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu' 
import RevealOnScroll from './modules/RevealOnScroll'



new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new RevealOnScroll(document.querySelectorAll(".features-item"), 75)


let mobileMenu = new MobileMenu();


if (module.hot) {
    module.hot.accept()
}


