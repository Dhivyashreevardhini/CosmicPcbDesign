document.body.classList.add("js-enabled");

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   FILE UPLOAD
========================= */

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", () => {

    if (fileInput.files.length > 0) {

        fileName.textContent =
            fileInput.files[0].name;

    } else {

        fileName.textContent =
            "Upload Gerber / BOM / PCB Design / Other";

    }

});


/* =========================
   QUOTE FORM
========================= */

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        quoteForm.querySelector('[name="name"]').value.trim();

    const email =
        quoteForm.querySelector('[name="email"]').value.trim();

    const phone =
        quoteForm.querySelector('[name="phone"]').value.trim();


    if (!name || !email || !phone) {

        formMessage.textContent =
            "Please fill all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your quote request has been received.";


    quoteForm.reset();

    fileName.textContent =
        "Upload Gerber / BOM / PCB Design / Other";


    setTimeout(() => {

        formMessage.textContent = "";

    }, 5000);

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   PCB PARALLAX EFFECT
========================= */

const pcbBoard = document.querySelector(".pcb-board");

window.addEventListener("mousemove", (event) => {

    if (!pcbBoard) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 80;

    const y =
        (window.innerHeight / 2 - event.clientY) / 80;


    pcbBoard.style.transform =
        `rotate(-8deg) translate(${x}px, ${y}px)`;

});
