"use strict";

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


const search = document.getElementById("search");
const projects = document.querySelectorAll(".project");

search.addEventListener("input", function () {
    const word = search.value.toLowerCase();

    projects.forEach(function (project) {
        const text = project.textContent.toLowerCase();
        project.hidden = !text.includes(word);
    });
});

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email.includes("@") && email.includes(".")) {
        message.textContent = "Email format looks valid.";
    } else {
        message.textContent = "Please enter a valid email.";
    }
});

console.log("Portfolio JavaScript is running.");