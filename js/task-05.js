const inputElem = document.querySelector("#name-input");
const nameElem = document.querySelector("#name-output");
const onInputName = (event) => {
  const userName = event.currentTarget.value;
  console.log(userName);
  return (nameElem.textContent = userName ? `${userName}` : "незнакомец");
};

inputElem.addEventListener("input", onInputName);
