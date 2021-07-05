const inputElem = document.querySelector("input");
console.log(inputElem);
const renderElem = document.querySelector('[data-action="render"]');
console.log(renderElem);
const destroyElem = document.querySelector('[data-action="destroy"]');
console.log(destroyElem);
const boxesElem = document.querySelector("#boxes");
console.log(boxesElem);

const createBoxes = (amount) => {
  const arrayElem = [];
  for (let i = 0; i < amount * 10; i += 10) {
    const randomColor = () => {
      let col = Math.round(255.0 * Math.random());
      const r = col.toString(16);
      col = Math.round(255.0 * Math.random());
      const g = col.toString(16);
      col = Math.round(255.0 * Math.random());
      const d = col.toString(16);
      col = r + g + d;
      return col;
    };
    let elem = document.createElement("div");
    elem.style.width = `${30 + i}px`;
    elem.style.height = `${30 + i}px`;
    elem.style.backgroundColor = `#${randomColor()}`;
    elem.style.borderRadius = "10px";
    elem.style.margin = "5px";
    elem.style.borderStyle = "solid";
    elem.style.borderColor = "#a0a0a0";
    elem.classList = "box-element";
    arrayElem.push(elem);
    //boxesElem.appendChild(elem);
  }
  console.log(arrayElem);
  boxesElem.append(...arrayElem);
  //return console.log(boxesElem);
};

const onCreateElem = () => {
  const amount = Number(inputElem.value);
  createBoxes(amount);
  //console.log(amount);
  //console.log('Создать');
};

renderElem.addEventListener("click", onCreateElem);

const onDestroyElem = () => {
  boxesElem.textContent = "";
  //console.log('Очистить');
};

destroyElem.addEventListener("click", onDestroyElem);
