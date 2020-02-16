let button = document.getElementById("button");
const timehtml = document.getElementById("timer");
const mensajes = document.getElementById("mensajes");
let time = 0;
let timer = 0;
button.addEventListener("click", () => {
  button.classList.add("animate");
});

button.addEventListener("animationstart", e => {
  mensajes.textContent = `La animación ${e.animationName} ha comenzado`;
  timer = setInterval(() => {
    time += 0.1;
    timehtml.textContent = time;
  }, 100);
});
button.addEventListener("animationend", e => {
  clearInterval(timer);
  time = 0;
  mensajes.textContent = `La animación ${e.animationName} ha terminado`;

  button.classList.remove("animate");
});
