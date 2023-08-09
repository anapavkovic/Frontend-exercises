import css from "./style.css"
import $ from "jquery";

window.onblur = function () { document.title = 'you went?'; }
window.onfocus = function () { document.title = 'Bite Toothpaste Bits-Zero Waste Toothpaste Tablets and More'; }

const scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementsByClassName("navBar"); //da je by id onda ne bi trebalo petljat dole oko onog [0]
    const links = document.querySelectorAll(".navBar a");

  if (document.documentElement.scrollTop > 100) {
    navBar[0].classList.add("pa-fixed-header");//html collection

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

  } else {
      console.log(navBar)
    navBar[0].classList.remove("pa-fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
  }
}
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  scrollNavbar();
  myFunction();
};
















