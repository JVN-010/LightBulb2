const switchButt = document.querySelector(".switch");
const body = document.body;

switchButt.addEventListener("click", () => {
  body.classList.toggle("on");
});
