
//select nav
const nav = document.querySelector("nav");

function handleScroll(){
console.log(window)
    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}


window.onscroll = handleScroll;

window.addEventListener("scroll",handleScroll)