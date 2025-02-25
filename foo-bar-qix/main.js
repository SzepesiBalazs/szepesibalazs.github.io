import NumberTransformer from "./src/NumberTransfomer.js";
const transformer = new NumberTransformer();

const inputElement = document.getElementById("inputNumber");
const outputElement = document.getElementById("transformedOutput");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;
  const result = transformer.numberChanger(inputValue);
  outputElement.innerHTML = result;
});

window.validateNumberLength = function (input) {
  input.value = input.value.replace(/[^0-9]/g, "");
};
