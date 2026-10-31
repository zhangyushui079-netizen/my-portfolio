"use strict";


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("menu-hidden");
});


const projectSearch = document.getElementById("projectSearch");
const projectFilter = document.getElementById("projectFilter");
const projects = document.querySelectorAll(".project");
const projectMessage = document.getElementById("projectMessage");

projectSearch.addEventListener("input", showProjects);


projectFilter.addEventListener("change", showProjects);


function showProjects() {
    const searchWord = projectSearch.value.toLowerCase();
    const selectedCategory = projectFilter.value;

    let visibleCount = 0;

    projects.forEach(function (project) {
        const title = project.querySelector("h3").textContent.toLowerCase();
        const category = project.dataset.category;

        const matchesSearch = title.includes(searchWord);
        const matchesCategory =
            selectedCategory === "all" || selectedCategory === category;

        if (matchesSearch && matchesCategory) {
            project.hidden = false;
            visibleCount++;
        } else {
            project.hidden = true;
        }
    });

    projectMessage.textContent =
        "Projects found: " + visibleCount;
}


const detailButtons = document.querySelectorAll(".detailButton");
const projectDetails = document.getElementById("projectDetails");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        projectDetails.textContent = button.dataset.description;
    });
});


const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        topButton.hidden = false;
    } else {
        topButton.hidden = true;
    }
});


topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const visitorMessage = document.getElementById("visitorMessage");
const characterCount = document.getElementById("characterCount");

visitorMessage.addEventListener("input", function () {
    characterCount.textContent =
        "Characters: " + visitorMessage.value.length + " / 300";
});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const message = visitorMessage.value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
    } else {
        formMessage.textContent =
            "Your form is valid. This demo does not send messages.";
    }
});


const year = document.getElementById("year");
year.textContent = new Date().getFullYear();