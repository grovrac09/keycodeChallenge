const key = document.getElementById("key");
const placement = document.getElementById("placement");
const which = document.getElementById("which");
const code = document.getElementById("code");

document.addEventListener("keydown", (event) => {
    key.textContent = `${event.key}`;
    placement.textContent = `${event.location}`;
    which.textContent = `${event.which}`;
    code.textContent = `${event.code}`;
})


