import '../styles/styles.css';
import 'lazysizes'                        //leverage npm packege lazysizes
import MobileMenu from './modules/MobileMenu' 
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new RevealOnScroll(document.querySelectorAll(".features-item"), 75)
let mobileMenu = new MobileMenu();
let modal   //just to create global variable

//loading model.js on the fly 
document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if(typeof modal =="undefined") {
            import(/*webpackChunkName: "modal" */'./modules/Modal').then(x => {  //x represents file we just loaded
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)              
             }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})


if (module.hot) {
    module.hot.accept()
}


