const navEl = document.querySelector(".navEL");
const navOpen = document.querySelector("#opener");

navOpen.addEventListener("click", () => {
  navEl.classList.toggle("open");
});
