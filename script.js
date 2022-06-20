const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".header__menu");

hamburguer.addEventListener("click",() => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".header__links").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

