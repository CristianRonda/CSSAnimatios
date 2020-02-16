let button = document.getElementById("button");
let ball = document.getElementById("ball");
button
  ? button.addEventListener("click", () => {
      document.body.classList.add("animate");
      ball.addEventListener("transitionend", e => {
        const { propertyName } = e;
        if (propertyName === "top") document.body.classList.remove("animate");
      });
    })
  : console.log("No esta bien puesto el id");
/*
let toggle = document.getElementById("toggle-menu");
let hidden = 0;
toggle.addEventListener("click", () => {
  console.log("holad");
  let body = document.body;
  body.classList.toggle("translate");
  hidden === 0 ? (hidden += 1) : (hidden -= 1);
  hidden
    ? body.classList.add("overflow-hidden")
    : body.classList.remove("overflow-hidden");
  // body.addEventListener("transitionend", () => {
  //   if (!body.classList.toggle("translate")) {
  //     body.classList.remove("overflow-hidden");
  //   }
  // });
});
*/
