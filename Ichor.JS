const titel = document.getElementById("titel");

titel.addEventListener("mouseenter", () => {
  titel.textContent = "Test";
});

titel.addEventListener("mouseleave", () => {
  titel.textContent = "THIS WEBSITE IS STILL BEING BUILT";
});