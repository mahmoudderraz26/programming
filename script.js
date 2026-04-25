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
    Search input & button
    =================================================== */
function executeSearch() {
    const inputField = document.getElementById('searchInput');
    const query = inputField.value.toLowerCase().trim();
    
    // مصفوفة البيانات مع إضافة "وصف قصير" لكل مقال
    const articles = [
        { 
            keywords: ["html", "إتش تي إم إل", "اتش تي ام ال"], 
            title: "تعرف على html", 
            url: "https://mahmoudderraz26.github.io/programming/html/html1.html",
            description: "ابدأ بتعلم html من الألف إلى الياء"
        },
        { 
            keywords: ["css", "ccs", "csc", "تنسيق", "سي اس اس", "سي إس إس"], 
            title: "أساسيات CSS", 
            url: "css-basics.html",
            description: "ابدأ بتعلم css من الألف إلى الياء"
        },
        { 
            keywords: ["javascript", "javascribt", "js", "جافاسكريبت", "جافا سكريبت"], 
            title: "تعلم الجافاسكريبت", 
            url: "js-course.html",
            description: "ابدأ رحلتك في البرمجة الحقيقية وتعلم كيفية إضافة التفاعل لموقعك باستخدام JavaScript..."
        }
    ];

    // الحالة الأولى: الحقل فارغ
    if (query === "") {
        inputField.value = ""; // مسح أي مسافات
        inputField.placeholder = "عذرا ! يرجى إدخال كلمة للبحث.";
        inputField.classList.add("error-placeholder"); // اختيارياً لإضافة لون أحمر
        return;
    }

    // البحث عن جميع النتائج المطابقة (وليس نتيجة واحدة فقط)
    const results = articles.filter(article => 
        article.keywords.some(keyword => keyword.includes(query)) || 
        article.title.toLowerCase().includes(query)
    );

    // الحالة الثانية: لا توجد نتائج
    if (results.length === 0) {
        inputField.value = "";
        inputField.placeholder = "عذرا ! لا يوجد محتوى عن " + query + "، جرب البحث بكلمات أخرى";
        return;
    }

    // الحالة الثالثة: وجود نتائج - تخزينها في الذاكرة المؤقتة والذهاب لصفحة النتائج
    // سنستخدم localStorage لنقل البيانات لصفحة النتائج
    localStorage.setItem('searchQuery', query);
    localStorage.setItem('searchResults', JSON.stringify(results));
    
    // التوجيه لصفحة نتائج البحث
    window.location.href = "https://mahmoudderraz26.github.io/programming/html/html1.html";
}





/* ======================================================
    quiz
    =================================================== */
function checkAnswers() {
    // 1. تعريف الإجابات الصحيحة بناءً على الـ value الموجودة في الـ HTML
    const correctAnswers = {
        question1: "Hyper Text Markup Language",
        question2: "br",
        question3: "target-blank",
        question4: "ol",
        question5: "body {color: black;}",
        question6: "color",
        question7: "font-size",
        question8: "no",
        question9: "firstAnswerOfQ9",
        question10: "equal",
    };

    let score = 0;
    const totalQuestions = 10;
    const pointsPerAnswer = 2;

    // 2. الحصول على جميع بيانات النموذج
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    // 3. حلقة تكرارية للتحقق من الإجابات
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = "question" + i;
        const userAnswer = formData.get(questionName);

        if (userAnswer === correctAnswers[questionName]) {
            score += pointsPerAnswer;
        }
    }

    // 4. عرض النتيجة في الحقل المخصص
    const resultField = document.getElementById('quizResult');
    resultField.value = "نتيجتك هي: " + score + " من " + (totalQuestions * pointsPerAnswer);
    
    if (score >= 12) {
        resultField.style.color = "green";
    } else {
        resultField.style.color = "red";
    }
}



/* ======================================================
    Calculator Script
    =================================================== */

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