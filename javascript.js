const box = document.querySelector(".box");
const button = document.getElementById("myButton");
const message = document.getElementById("message");
let attempts = 0;
const maxAttempts = 5;

button.addEventListener("mouseover", () => {
  if (attempts < maxAttempts) {
    attempts++;
    const xPos = Math.random() * (box.offsetWidth - button.offsetWidth);
    const yPos = Math.random() * (box.offsetHeight - button.offsetHeight);

    button.style.left = xPos + "px";
    button.style.top = yPos + "px";

    if (attempts === maxAttempts) {
      button.removeAttribute("disabled");
    }
  }
});

button.addEventListener("click", () => {
  message.innerHTML =
    "<b>Happy World Environment Day 2023</b><br><br><br>Let us unite in our commitment to protect and preserve our planet, not just on World Environment Day, but every single day.";
  message.style.display = "block";
  button.style.display = "none";
  document.body.style.backgroundImage =
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDU8kv-PQXfsUUQZ6OVMKcFIMLyMO84WCgMbIVshYoliYUO9SIZ_22A09HNj00yvngv74&usqp=CAU")';
});
