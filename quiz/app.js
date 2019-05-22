function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // Soal
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // Jawaban
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
	// questions, [A, B, C,D], Answer
    new Question("Siapa gua?", ["Aryo", "Bhodro", "Irawan", "Ahmad"], "Aryo"),
    new Question("Siapa dia?", ["Aryo", "Bhodro", "Irawan", "Ahmad"], "Bhodro"),
    new Question("Siapa mereka?", ["Aryo", "Bhodro", "Irawan", "Ahmad"], "Irawan"),
    new Question("Siapa saya?", ["Aryo", "Bhodro", "Irawan", "Ahmad"], "Aryo"),
    new Question("Siapa kamu?", ["Aryo", "Bhodro", "Irawan", "Ahmad"], "Aryo")
];

var quiz = new Quiz(questions);
populate();