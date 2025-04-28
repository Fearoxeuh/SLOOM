const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
    navMenu.classlist.toggle("show");
});
closeMenu.addEventListener("click", () => {
    navMenu.classlist.toggle("show");
});

mobiscroll.settings = {
    lang: 'fr',
    theme: 'ios',
    themeVariant: 'light'
}