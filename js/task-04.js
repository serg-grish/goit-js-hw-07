let counterValue = document.getElementById("value");
const incr = document.querySelector('button[data-action="increment"]');
const decr = document.querySelector('button[data-action="decrement"]');
let valueValue = +counterValue.textContent;
incr.addEventListener("click", () => {
  ++valueValue;
  return (counterValue.textContent = valueValue);
});
decr.addEventListener("click", () => {
  --valueValue;
  return (counterValue.textContent = valueValue);
});
