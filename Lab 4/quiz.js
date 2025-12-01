const qs = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Where is the Taj Mahal?", answer: "agra" },
    { question: "What is 4 + 4?", answer: "8" },
    { question: "How many days are in a year?", answer: "365" },
    { question: "Which fruit is yellow in colour?", answer: "banana" }
];

function startQuiz() {
    let score = 0; 

    for (let i = 0; i < qs.length; i++) {
        let userAns = prompt(qs[i].question);

        if (userAns) {
            userAns = userAns.toLowerCase().trim();
        } else {
            userAns = ""; 
        }

        if (userAns === qs[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! The correct answer is: " + qs[i].answer);
        }
    }

    alert("Quiz Completed! \nYour Score: " + score + "/" + qs.length);
}

startQuiz();
