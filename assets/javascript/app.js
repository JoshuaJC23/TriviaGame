$(document).ready(function () {
    game = $("#game");
    game.hide();
    $("#submit").hide();
    $("#timer").hide();
    $("#begin").click(function () {
        $("#begin").hide();
        $("#timer").show();
        game.show();
        $("#submit").show();
        run();
        showQuestions();
    })
$("#submit").click(function(){
    showResults();
    stop();
})

})
var game;
var timer = 50;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;

    $("#timershow").html("<h2>" + timer + "</h2>");

    if (timer === 0) {

        // alert("Times Up");

        stop();
        showResults();

    }
}

function stop() {
    clearInterval(intervalId);
}


var myQuestions;

myQuestions = [
    {
        question: "How many Home Alone movies are there?",
        answers: {
            a: "5",
            b: "3",
            c: "2",
            d: "4"
        },
        correctAnswer: "5",
    },
    {
        question: "Will Ferrel is in which Christmas movie?",
        answers: {
            a: "The Polar Express",
            b: "The Santa Clause",
            c: "Elf",
            d: "Home Alone"
        },
        correctAnswer: "Elf",
    },
    {
        question: "Which actor plays the Grinch in How the Grinch Stole Christmas?",
        answers: {
            a: "Tim Allen",
            b: "Adam Sandler",
            c: "Tom Hanks",
            d: "Jim Carey",
        },
        correctAnswer: "Jim Carey",
    },
    {
        question: "Which reindeer has the red nose?",
        answers: {
            a: "Comet",

            b: "Prancer",
            c: "Rudolph",
            d: "Blitzen"
        },
        correctAnswer: "Rudolph",
    },
    {
        question: "Who gives the narration of the Birth of Christ in It's a Charlie Brown Christmas?",
        answers: {
            a: "Linus",
            b: "Lucy",
            c: "PigPen",
            d: "Charlie",
        },
        correctAnswer: "Linus",
    },
    {
        question: "What do the burglers in Home Alone call themselves as a nickname?",
        answers: {
            a: "The Two Amigos",
            b: "The Wet Bandits",
            c: "The Lonely Losers",
            d: "Double Trouble"
        },
        correctAnswer: "The Wet Bandits"
    },
];

var timer = 60;

function showResults() {
    var correctAnswer =0;
    var incorrectAnswer = 0;
    var notAnswered = 0;

    for(var i = 0; i < myQuestions.length; i++){
        var rightAnswer = myQuestions[i].correctAnswer;
        var theirAnswer = $(`input[name='question${i}']:checked`).val();
        if(!theirAnswer) {
            notAnswered++;
        } else if(theirAnswer === rightAnswer) {
            correctAnswer++;
        }
        else{
            incorrectAnswer++;
        }
    }

    game.hide();
    $("#timer").hide();
    $("#submit").hide();
    $("#results").html(`
    <div>
        <h3>Correct: ${correctAnswer}</h3>
        <h3>Incorrect: ${incorrectAnswer} </h3>
        <h3>Not Answered: ${notAnswered}</h3>
    </div>
    `);

}

function showQuestions() {
    for(var i = 0; i < myQuestions.length; i++){
        console.log(Object.values(myQuestions[i]));
        var question = myQuestions[i].question;
        var a = myQuestions[i].answers.a;
        var b = myQuestions[i].answers.b;
        var c = myQuestions[i].answers.c;
        var d = myQuestions[i].answers.d;

        game.append( $(`<div>
        ${question}
        <input type= "radio" name="question${i}" value="${a}"></input>${a}
        <input type= "radio" name="question${i}" value="${b}"></input>${b}
        <input type= "radio" name="question${i}" value="${c}"></input>${c}
        <input type= "radio" name="question${i}" value="${d}"></input>${d}
        </div> `));
    }
    

}

