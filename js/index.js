const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu-link");


function onToggleClick(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

function closeMenuLinkOnClick() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


export function toggleMobileNav() {
    hamburger.addEventListener("click", onToggleClick);
    navLinks.forEach(function(link) {
        link.addEventListener("click",closeMenuLinkOnClick);
    })
}

toggleMobileNav();