const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const hrefs = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
})

Array.from(hrefs).forEach(link => {
    link.addEventListener('click', function(e) {
        hamburger.click();
    });
});