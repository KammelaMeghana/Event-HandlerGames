let myBox = document.getElementById("myBox");
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Ouch 😒";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it😢";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.textContent = "Click Me😊";
});
