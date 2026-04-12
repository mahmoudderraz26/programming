/* ======================================================
    Menu Script
    ===================================================== */
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
    "arabic", "islamic", "hisgeo", "english", "french",
    "math", "physic", "svt", "philosophy",
  ];

  let sum = 0;
  for (let id of subjects) {
    const input = document.getElementById(id);
    if (!input) continue;

    const value = parseFloat(input.value);
    
    if (isNaN(value)) {
      alert("الرجاء إدخال جميع النقاط");
      input.focus();
      return;
    }
    if (value < 0 || value > 20) {
      alert("الرجاء إدخال نقاط بين 0 و 20 فقط لكل مادة");
      input.focus();
      return;
    }
    sum += value;
  }

  const average = sum / subjects.length;
  document.getElementById("average").value = average.toFixed(2);
  
  const gradeElement = document.getElementById("grade");
  if (gradeElement) {
    let text = "";
    let bgColor = "";
    const textColor = "white";

    // منطق التقديرات
    if (average <= 5) {
      text = "استدراكية";
      bgColor = "black";
    } else if (average < 10) {
      text = "تحت المعدل";
      bgColor = "red";
    } else if (average < 12) {
      text = "لا بأس به";
      bgColor = "grey";
    } else if (average < 14) {
      text = "حسن";
      bgColor = "orange";
    } else if (average < 16) {
      text = "حسن جدا";
      bgColor = "green";
    } else {
      text = "ممتاز";
      bgColor = "gold";
    }

    gradeElement.value = text;  
    gradeElement.style.backgroundColor = bgColor;
    gradeElement.style.color = textColor;
  }
}

/* ======================================================
    Calculator Script
    ========================================================= */

    const display = document.getElementById("display");

function appendToDisplay(input) {
  if(!display) return;
  
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  // 1. منع البدء بعملية حسابية (ما عدا علامة الناقص للأرقام السالبة)
  if (display.value === "" && ["+", "*", "/"].includes(input)) {
      return; 
  }

  // 2. منع تكرار العمليات الحسابية المتتالية
  if (operators.includes(lastChar) && operators.includes(input)) {
    display.value = display.value.slice(0, -1) + input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  if(display) display.value = "";
}

function deleteLast() {
  if(display) display.value = display.value.slice(0, -1);
}

function calculate() {
  if(!display || display.value === "") return;

  try {
    // الأمان: استخدام new Function بدلاً من eval
    // هذا يعزل الكود المنفذ ويمنع الوصول للمتغيرات المحلية
    const result = new Function('return ' + display.value)();
    
    // التأكد من أن النتيجة رقم مقبول
    if (result === Infinity || isNaN(result)) {
        display.value = "Error";
    } else {
        display.value = result;
    }
  } catch (error) {
    display.value = "Error";
    // تفريغ الشاشة بعد ثانية ونصف عند حدوث خطأ
    setTimeout(clearDisplay, 1500);
  }
}