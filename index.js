// reference html elements
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const title = document.getElementById("title");
const minusBtn = document.getElementById("minus-btn");
const totalBtn = document.getElementById("total-btn");
const plusBtn = document.getElementById("plus-btn");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const clearBtn = document.getElementById("clear-btn");
const containerName = document.getElementById("container-name");
let count = 0;
let countStr = "";

saveBtn.addEventListener("click", function () {
  let titleValue = `${inputEl.value} Counter App`;
  title.innerHTML = titleValue;
  inputEl.value = "";
  containerName.style.display = "none";
});

minusBtn.addEventListener("click", function () {
  count--;
  countEl.textContent = count;
});

plusBtn.addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});

totalBtn.addEventListener("click", function () {
  countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
});

clearBtn.addEventListener("click", function () {
  title.innerHTML = `Counter App`;
  countStr = "";
  saveEl.textContent = "";
  count = 0;
  countEl.textContent = count;
  containerName.style.display = "inline";
});
