const categoriesListRef = document.querySelector("#categories");
const categoriesListItemRef = categoriesListRef.querySelectorAll(".item");

console.log(`В списке ${categoriesListItemRef.length} категории.`);

categoriesListItemRef.forEach((category) => {
  console.log("=========================");
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});
