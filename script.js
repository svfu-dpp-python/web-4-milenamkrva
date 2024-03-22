function checkAnswers() {
let score = 0;
let q1Answer = document.querySelector('input[name="q1"]:checked').value;
let q2Answer = document.querySelector('input[name="q2"]:checked').value;
let q3Answer = document.querySelector('input[name="q3"]:checked').value;
let q4Answer = document.querySelector('input[name="q4"]:checked').value;
let q5Answer = document.querySelector('input[name="q5"]:checked').value;
let q6Answer = document.querySelector('input[name="q6"]:checked').value;

if (q1Answer === "Париж") {
score++;
}
if (q2Answer === "Нью-Дели") {
score++;
}
if (q3Answer === "Сеул") {
score++;
}
if (q4Answer === "Анкара") {
score++;
}
if (q5Answer === "Претория" || q5Answer === "Кейптаун" ) {
score++;
}
if (q6Answer === "Дамаск") {
score++;
}


alert(`Правильных ответов: ${score}`);
}