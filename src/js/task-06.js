const form = document.querySelector("#validation-input");
form.addEventListener("blur", onCheckForm);
function onCheckForm(event) {
  if (event.target.value.length === +event.target.dataset.length) {
    form.className = "valid";
  } else {
    form.className = "invalid";
  }
}
