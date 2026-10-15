
const typing = document.getElementById("typing");
const roles = ["Web Developer", "Python Programmer", "Data Analyst"];

let index = 0;

setInterval(() => {
    index = (index + 1) % roles.length;
    typing.textContent = roles[index];
}, 2000);

document.getElementById("year").textContent =
    new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    status.textContent =
        "Thank you, " + name +
        "! Your form is validated. Connect a backend to receive messages.";

    form.reset();
});
