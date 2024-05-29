const obj = {
    titles: [
        'lesson1 - hello alert',
        'lesson2 - variables',
        'lesson3 - if else',
        'lesson4 - function',
        'lesson5 - return',
        'lesson6 - While',
        'lesson7 - For',
        'lesson8 - Array',
        'lesson9 - DOM/tasks',
        'lesson10 - DOM + Timing',
        'lesson11 - Timing + Date',
        'lesson12 - object',
        'lesson13 - JSON',
        "Lasson14 - LocalStorage",
        "Lasson15 - arrow-functions",
        "Lasson16 - setinterval,settimeout",
        "Lasson17 - callbacks,fetch",
        "Lasson18 - switch",
        "Lasson19 - promise,async-await ",
        "Lasson20 - student - class",
        "Lasson21 - prototype,gallery,",
        "Lasson22 -  fetch - login ",
        "Lasson23 - Date Objects",
    ],
    subTitles: [
        "מה ניתן לעשות עם ()alert ?",//ד
        "איזו מההצהרות הבאות על משתנים ב-JavaScript היא נכונה?",//ד
        "איזו מהפעולות הבאות אינה אפשרית עם הצהרות if-else ב-JavaScript?",//ג
        "איזה מהשמות הבאים אינו שם שמור לפונקציה ב-JavaScript?",//א
        "מה יהיה הערך המוחזר מהפונקציה  function testReturn() {return;} ?",//ד
        "איזו מההצהרות הבאות לגבי לולאות ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי לולאת forEach ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי מערכים ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי עבודה עם ה-DOM ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי עבודה עם ה-DOM ותזמון (Timing) ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי עבודה עם תזמון ותאריך ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי אובייקטים ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי JSON ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי Local Storage ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי פונקציות חץ ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי הפונקציות setTimeout ו- setInterval ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי callbacks ו- fetch ב-JavaScript היא נכונה?",//ד
        "איזו מההצהרות הבאות לגבי מבנה switch ב-JavaScript היא נכונה?",//ד
        "איזו מההצהרות הבאות לגבי Promises ו-async/await ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי מחלקות (Classes) ב-JavaScript היא נכונה?",//ב
        'מהי תפקודה של פונקציית fetch בתהליך התחברות באמצעות JavaScript?',//ג
        'מהי תפקודה של Date Objects ב-JavaScript?',//א
    ],
    questions: ["סמן את התשובה"],
    options: [


        'א. לשלוח לדף אהרה עם טקסט',
        'ב. לעצור את הדף ולתת אהרה עם טקסט',
        'ג. לשלוח לקונסול אהרה עם טקסט',
        'ד. גם תשובה א וגם תשובה ב',

        'משתנה שהוגדר באמצעות var הוא בעל תחום בלוק (block scope) .א',
        'משתנה שהוגדר באמצעות let הוא בעל תחום פונקציה (function scope) .ב',
        'משתנה שהוגדר באמצעות const  ג. ניתן לשנות את ערכו לאחר ההגדרה הראשונית',
        'משתנה שהוגדר באמצעות let הוא בעל תחום בלוק (block scope) .ד',

        'א. ביצוע פעולות שונות בהתאם לתנאים שונים ',
        'ב. השוואת מספרים ובדיקת תנאים לוגיים',
        'ג. יצירת לולאות חוזרות ונשנות ',
        'ד. ביצוע השמה של ערכים למשתנים',

        'calculate .א',
        'eval .ב',
        'return .ג',
        'function .ד',

        'א. מחרוזת ריקה (""), כי הפונקציה לא מחזירה כלום ',
        ' הערך undefined,ב. כי הפונקציה מחזירה כלום באופן מפורש',
        'הערך null,ג. כי הפונקציה לא מחזירה ערך',
        'השגיאה SyntaxError, כי לא ניתן להשתמש ב-returnד. בלי ערך מוחזר',

        'לולאת forא. תמיד תבוצע לפחות פעם אחת',
        'לולאת do...while תתבצע לפחות פעם אחת, גם אם התנאי בתחילתה הוא false .ב',
        'לולאת while ג. לא יכולה להכיל תנאים מורכבים ',
        'לולאת for...in משמשת לאיטרציה על ערכי מערך (array values) .ד',

        'forEach עוברת על כל אלמנט במערך ומפעילה פונקציית callback א. על כל אחד מהם',
        'forEach לא מקבלת פונקציית callback .ב',
        'forEach עוברת על אובייקטים (objects) ולא על מערכים (arrays) .ג',
        'forEach יכולה לעצור את הלולאה עם פקודת break .ד',

        'מערך ב-JavaScript א. יכול להכיל רק סוג אחד של נתונים (לדוגמה, רק מספרים או רק מחרוזות)',
        'אורך של מערך ב-JavaScript ב. הוא קבוע ואינו יכול להשתנות לאחר שהמערך נוצר',
        'ניתן להוסיף אלמנטים למערך ב-JavaScript באמצעות המתודה push .ג',
        'ד. ניתן לגשת לאלמנט האחרון במערך על ידי שימוש באינדקס -1',

        'ניתן להשתמש ב-DOM כדי לשנות את מבנה ה-HTMLא. של הדף רק בזמן הטעינה הראשונית של הדף',
        'document.getElementById מחזירה רשימה של כל האלמנטים המתאימים ב-DOM .ב',
        'document.createElement משמשת ליצירת אלמנט HTML חדש ב-DOM .ג',
        'אי אפשר לשנות את תוכן הטקסט של אלמנט ב-DOM באמצעות JavaScript .ד',

        'ניתן להשתמש ב-setTimeoutא. כדי לחזור על פעולה כל מספר קבוע של מילישניות',
        'setIntervalב. משמשת לביצוע פעולה כל מספר קבוע של מילישניות',
        'clearInterval משמשת לביטול פעולת תזמון שהוגדרה עם setTimeout .ג',
        'אי אפשר לשנות את ה-DOM מתוך פונקציית callback של setTimeout .ד',

        'האובייקט Date ב-JavaScriptא. מתחיל את הספירה שלו מהשנה 2000',
        'ניתן להשתמש ב-setTimeoutב. כדי לבצע פעולה כל מספר קבוע של מילישניות',
        'הפונקציה setIntervalג. מבצעת פעולה אחת בלבד לאחר זמן קבוע',
        'המתודה getFullYear של אובייקט Dateד. מחזירה את החודש הנוכחי',

        'א. ניתן להוסיף תכונה חדשה לאובייקט לאחר יצירתו',
        'אובייקטים ב-JavaScriptב. לא יכולים להכיל פונקציות בתור ערכים של תכונות',
        'ג. יש לגשת לתכונות של אובייקט באמצעות סוגריים מרובעים בלבד',
        'כל המפתחות של אובייקט ב-JavaScriptד. חייבים להיות מספרים',

        'JSONא. הוא פורמט טקסטואלי המשמש לשמירה והעברת מידע בין שרת ולקוח',
        'ב-JSONב. ניתן להשתמש בפונקציות כערכים של מאפיינים באובייקטים',
        'ניתן להשתמש בהערות בתוך קבצי JSON ב-JavaScript .ג',
        'JSONד. מאפשר לשמור נתונים בפורמט בינארי',

        'Local Storageא. הוא מנגנון השמירה בדפדפן המאפשר שמירת מידע בפורמט בינארי',
        'מידע שמאוחסן ב-Local Storageב. נשאר זמין גם לאחר סגירת הדפדפן',
        'ניתן לשמור רק מחרוזות ב-Local Storage,ג. ולא אובייקטים או מערכים',
        'ניתן לשנות מידע ב-Local Storage רק בקובץ ה-HTMLד. עצמו',

        'א. פונקציות חץ אינן יכולות להיות מתודות של אובייקט',
        'פונקציות חץ אינן משתמשות במילת המפתח function .ב',
        'פונקציות חץ אינן מצביעות ל-thisג. שלהן באופן אוטומטי',
        'ד. פונקציות חץ אינן מאפשרות להעביר פרמטרים ללא צורך בסוגריים',

        'הפונקציה setTimeout מפעילה פעולה פעם אחת לאחר זמן קבוע, בעוד ש-setIntervalא. מפעילה אותה פעולה מחדש באופן מחזורי לאורך זמן',
        'אם פונקציה מועברת כארגומנט לפונקציה setTimeout או setInterval,ב. יש להעביר את הפונקציה בלבד, בלי לציין את הסוגריים',
        'הפונקציה setIntervalג. מפעילה את הפעולה שניתנת לה כארגומנט באופן אוטומטי כאשר הדף נטען',
        'הפונקציה setTimeout ד. משנה את זמן ההפעלה שלה על פי פרמטר שנמסר בקריאה לה',

        'פונקציה fetch מחזירה תוצאה סטטית, ולא ניתן להשתמש ב-callbacksא. איתה',
        'Callback הוא פונקציה המופעלת לפני קריאת fetch .ב',
        'פונקציה fetchג. משמשת לבצע קריאות רשת אסינכרוניות ולקבלת מידע משרת רחוק',
        'Callbackד. הוא פונקציה שמועברת כארגומנט לפונקציה אחרת ומופעלת לאחר השלמת פעולת הקריאה',

        'הביטויים case במבנה switch א. יכולים להיות רק מספרים שלמים',
        'מבנה switch נמוך לקריאה וניתן להשתמש בו תמיד במקום if-else .ב',
        'במבנה switch ניתן להשתמש רק עבור תנאים מוחלטים (exact conditions) .ג',
        'במקרה שבו אין התאמה במבנה switch, הוא יבצע את התנאי הבא (default)ד. בכל מקרה',

        'Promisesא. מייצגות כלי לטיפול בקריאות אסינכרוניות ובניית רצפי קריאות',
        'באמצעות async/awaitב. ניתן להפוך פונקציות למסומנות בכיחודיות ולבצע קריאות אסינכרוניות בצורה נקייה ומובנית',
        'פונקציות async ג. יכולות להחזיר ישירות את הערך המחזיר, בניגוד לפונקציות שעשויות להחזיר ערך אחר',
        'Promises ו-async/awaitד. הן תכונות המאפשרות לקרוא לפונקציות באופן סינכרוני בלבד',

        'מחלקה (Class) היא כלי שמאפשר ליצור אובייקטים רבים באמצעות קונסטרוקטור ופונקציות קבועות (methods) .א',
        'באמצעות מחלקות ב-JavaScript ניתן ליצור ירושה (inheritance)ב. וקוד נקי ומנוסח',
        'כל האובייקטים הנוצרים מאותה מחלקה (Class)ג. משתמשים באותו הקונסטרוקטור והפונקציות הקבועות',
        'מחלקה (Class) ב-JavaScript ניתנת לשימוש רק עם מנועי גרסאות חדשות יותר, כגון V8 או SpiderMonkey .ד',

        'א. לאפשר גישה לתוכן של דף אינטרנט מסוים',
        'ב. לבצע קריאות רשת אסינכרוניות ולשלוף מידע משרת רחוק',
        'ג. לבצע אימות ואימות של פרטי המשתמש על ידי שליחת פרטים לשרת ובדיקתם',
        'ד. לשלוף סטטוס קוד מהשרת בכדי לאמת את תקינות פרטי ההתחברות',

        'א. לאפשר יצירה וניהול של תאריכים ושעות בפורמטים שונים',
        'ב. לבצע פעולות מתמטיות על תאריכים ושעות, כמו חיבור, חיסור, וחילוק',
        'ג. ליצור אירועים על בסיס תאריך ושעה מסוימים ולהתעדכן בהתאם',
        'ד. לאפשר הצגה ופירוט מידע אודות התאריך והשעה הנוכחיים',

    ],
    lis1: ["נכון", "לא נכון"],
    lis2: ["נכון", "לא נכון"],
    lis3: ["נכון", "לא נכון"],
    lis4: ["נכון", "לא נכון"],
};

const results = [];
const flex = document.createElement("div");
flex.classList.add('flex')
document.body.appendChild(flex);

function question1TrueLabel(lis, trueLabel, falseLabel) {
    return lis === trueLabel ? "נכון" : "לא נכון";
}

function question1FalseLabel(lis, trueLabel, falseLabel) {
    return lis === falseLabel ? "נכון" : "לא נכון";
}

for (let i = 0; i < obj.titles.length; i++) {
    const currentQuestion = obj.questions[i % obj.questions.length];
    const div = document.createElement("div");
    div.innerHTML = `
        <h1>${obj.titles[i % obj.titles.length]}</h1>
        <h2>${obj.subTitles[i % obj.subTitles.length]}</h2>
        <p>${currentQuestion}</p>
        <button onclick="checkAnswer(${i})">בדוק</button>
        <ol>
            <li id="answer1-${i}">${obj.options[(i * 4)]}</li>
            <li id="answer2-${i}">${obj.options[(i * 4) + 1]}</li>
            <li id="answer3-${i}">${obj.options[(i * 4) + 2]}</li>
            <li id="answer4-${i}">${obj.options[(i * 4) + 3]}</li>
        </ol>
    `;
    flex.appendChild(div);
    console.log(i++)
}

function updateAnswerStyle(answerElement, isCorrect) {
    answerElement.style.backgroundColor = isCorrect ? 'green' : 'red';
    answerElement.style.color = 'white';
    answerElement.style.fontWeight = 'bold';
}

function checkAnswer(questionIndex) {
    const userAnswers = [
        document.getElementById(`answer1-${questionIndex}`),
        document.getElementById(`answer2-${questionIndex}`),
        document.getElementById(`answer3-${questionIndex}`),
        document.getElementById(`answer4-${questionIndex}`),
    ];
    const correctAnswers = [
        question1TrueLabel(obj.lis1[questionIndex], 'false', 'true'),
        question1FalseLabel(obj.lis2[questionIndex], 'true', 'false'),
        question1TrueLabel(obj.lis3[questionIndex], 'false', 'true'),
        question1FalseLabel(obj.lis4[questionIndex], 'true', 'false'),
    ];

    userAnswers.forEach((answerElement, index) => {
        const isCorrect = answerElement.innerText === correctAnswers[index];
        updateAnswerStyle(answerElement, isCorrect);
    });

    const result = userAnswers.every((answerElement) => answerElement.style.backgroundColor === 'green');
    if (result) {
        alert('תשובות נכונות!');
    } else {
        alert('יש טעויות, נסה שוב.');
    }

    results.push({
        question: obj.titles[questionIndex % obj.titles.length],
        userAnswers: userAnswers.map((answerElement) => answerElement.innerText),
        correctAnswers,
        result,
    });

    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `
        <p>${obj.titles[questionIndex % obj.titles.length]}</p>
        <p>תשובות המשתמש: ${userAnswers.map((answerElement) => answerElement.innerText).join(', ')}</p>
        <p>תשובות נכונות: ${correctAnswers.join(', ')}</p>
        <p>תוצאה: ${result ? 'נכון' : 'לא נכון'}</p>
    `;
    resultContainer.style.marginTop = "16px";
    flex.appendChild(resultContainer);
}

const showResultsButton = document.createElement("button");
showResultsButton.textContent = "הצג תוצאות לכל השאלות";
showResultsButton.onclick = () => {
    results.forEach((result, index) => {
        alert(`שאלה 
        ${index + 1}:\n${result.question}\nתשובות המשתמש:
        ${result.userAnswers.join(', ')}\nתשובות נכונות:
        ${result.correctAnswers.join(', ')}\nתוצאה:
        ${result.result ? 'נכון' : 'לא נכון'}`);
    });
};
flex.appendChild(showResultsButton);

function displayTotalScore() {
    const totalCorrect = document.querySelectorAll('li[style="background-color: green;"]').length;
    const totalQuestions = obj.titles.length;

    alert(`סך כל התשובות הנכונות: ${totalCorrect} מתוך ${totalQuestions}`);
}

const checkTotalButton = document.createElement("button");
checkTotalButton.classList.add('button');
// checkTotalButton.style.padding = "6px 12px";
// checkTotalButton.style.borderRadius = "10px";
// checkTotalButton.style.fontSize = "16.9px";
// checkTotalButton.style.fontWeight = "650";
checkTotalButton.textContent = "בדוק סך כל התשובות";
checkTotalButton.onclick = displayTotalScore;
flex.appendChild(checkTotalButton);
