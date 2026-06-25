```javascript id="ovgk0z"
// Smooth fade-in animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

const hiddenElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .cert-card"
);

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Active navigation highlighting

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// Header shadow on scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";
    }

});


// Scroll-to-top button creation

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Add CSS classes dynamically

const style = document.createElement("style");

style.innerHTML = `
.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

.nav-links a.active{
    color:#2563eb;
    font-weight:700;
}
`;

document.head.appendChild(style);
```
