/* ======================================================
    Menu Script
    ========================================================= */
const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");
btn.addEventListener("click", function (e) {
  menu.classList.toggle("open");
  e.stopPropagation();
});
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("open");
  }
});

/* ======================================================
    Result Calculator Script
    ========================================================= */

function calculer() {
  const subjects = [
    "arabic",
    "islamic",
    "hisgeo",
    "english",
    "french",
    "math",
    "physic",
    "svt",
    "philosophy",
  ];

  let sum = 0;
  for (let id of subjects) {
    const value = parseFloat(document.getElementById(id).value);
    if (isNaN(value)) {
      alert("الرجاء إدخال جميع النقاط");
      return;
    }
    if (value < 0 || value > 20) {
      alert("الرجاء إدخال نقاط بين 0 و 20 فقط لكل مادة");
      document.getElementById(id).focus();
      return;
    }
    sum += value;
  }

  const average = sum / subjects.length;
  document.getElementById("average").value = average.toFixed(2);
}

/* ======================================================
    Calculator Script
    ========================================================= */

const display = document.getElementById("display");

function appendToDisplay(input) {
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

if (operators.includes(lastChar) && operators.includes(input)) {
  display.value = display.value.slice(0, -1) + input;
} else {
  display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1500);
  }
}