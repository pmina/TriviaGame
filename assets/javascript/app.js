// Questions

var questions = [{
    question: "1. Emma Watson is known for playing which character in Harry Potter?",
    answers: ["Luna Lovegood", "Hermione Granger", "Ginny Weasley", "Rita Skeeter"],
    correctAnswer: "Hermione Granger",
}, {
    question: "2. In what year was the first Harry Potter movie released?",
    answers: ["1999", "2000", "2001", "2002"],
    correctAnswer: "2001",
}, {
    question: "3. Who played Lord Voldemort in the movies?",
    answers: ["Jeremy Irons", "Tom Hiddleston", "Gary Oldman", "Ralph Fiennes"],
    correctAnswer: "Ralph Fiennes",
}, {
    question: "4. Who guards the entrance to the Gryffindor common room?",
    answers: ["The Grey Lady", "The Fat Friar", "The Bloody Baron", "The Fat Lady"],
    correctAnswer: "The Fat Lady",
}, {
    question: "5. Who is NOT a member of the Order of the Phoenix?",
    answers: ["Cornelius Fudge", "Mad-Eye Moody", "Professor Snape", "Remus Lupin"],
    correctAnswer: "Cornelius Fudge",
}, {
    question: "6. A wizard who cannot do magic is known as a:",
    answers: ["Bleaker", "Squib", "Duddle", "Wizont"],
    correctAnswer: "Squib",
}, {
    question: "7. The three kinds of balls used in Quidditch are Bludgers, Snitches, and...",
    answers: ["Quaffles", "Wiffles", "Boccis", "Foozles"],
    correctAnswer: "Quaffles",
}, {
    question: "8. How many Weasley siblings are there?",
    answers: ["5", "7", "10", "3"],
    correctAnswer: "7",
}];

var quiz = $("#quizArea");

$(document).on("click", "#start", function(){
    game.start();
});

$(document).on("click", "#done", function(){
    game.done();
});

var game = {
    correct:0,
    incorrect: 0,
    counter: 45,
    countdown: function(){
        game.counter--;
        $("#countDown").html(game.counter);

        if (game.counter === 0){
            console.log("Time up!");
            game.done();

        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#subcontainer").prepend("<h2> Time Remaining: <span id='countDown'> 45 </span> Seconds </h2>");
        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            quiz.append("<h2>" + questions[i].question + "</h2>");
            for (var a = 0; a <questions[i].answers.length; a++) {
                quiz.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[a] + '">' + questions[i].answers[a]);
            }
        }
        quiz.append("<button id='done'>Done</button>"); 
    }

}

