const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener('scroll',() =>{
    console.log(window.scrollY);
    const windowpisition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active",windowpisition);
    menuNav.classList.remove('menu-active')
});
