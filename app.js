const key = document.getElementById("key");
const placement = document.getElementById("placement");
const which = document.getElementById("which");
const code = document.getElementById("code");
const header = document.getElementById("header");
const pageOpen = document.getElementById("pageOpen");

document.addEventListener("keydown", (event) => {
    pageOpen.style.display = "none";
    key.textContent = `${event.key}`;
    placement.textContent = `${event.location}`;
    which.textContent = `${event.which}`;
    code.textContent = `${event.code}`;
    header.textContent = `${event.which}`;
})


