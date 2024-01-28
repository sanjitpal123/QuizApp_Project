let QuizData = [
    {
        question: "Q1: Who has most century in cricket",
        Option1: "Rohit Sharma",
        Option2: " Sachin Tendulkar",
        Option3: " Virat Kholi",
        Option4: "MSD",
        ans: "ans2"
    },
    {
        question: " Q2:Who has most higest run in  odi in one match",
        Option1: "Rohit Sharma",
        Option2: "Sachin Tendulkar",
        Option3: "Virat Kholi",
        Option4: "MSD",
        ans: "ans1"
    },
    {
        question: " Q3:Who has second  most century in cricket",
        Option1: " Rohit Sharma",
        Option2: " Sachin Tendulkar",
        Option3: " Virat Kholi",
        Option4: "MSD",
        ans: "ans3"
    },
    {
        question: " Q4:Who has most sixes in cricket",
        Option1: " Rohit Sharma",
        Option2: " Sachin Tendulkar",
        Option3: " Virat Kholi",
        Option4: "MSD dhoni",
        ans: "ans1"
    },
]
let question = document.querySelector("h1");
let op1 = document.querySelector("#option1");
let op2 = document.querySelector("#option2");
let op3 = document.querySelector("#option3");
let op4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
let currentindex = 0;
let score = 0;
function display() {
    question.innerHTML = QuizData[currentindex].question;
    op1.innerHTML = QuizData[currentindex].Option1;
    op2.innerHTML = QuizData[currentindex].Option2;
    op3.innerHTML = QuizData[currentindex].Option3;
    op4.innerHTML = QuizData[currentindex].Option4;
}
display();
function getanswer() {
    let answer;
    answers.forEach((element) => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
}
function deleteall() {
    answers.forEach((element) => {

        return element.checked = false
    });

}
function newgame() {
    currentindex = 0;
    display();
    score = 0;

    // Remove the previous score element if it exists
    let previousScoreElement = document.querySelector("#scoreshow .score");
    if (previousScoreElement) {
        document.querySelector("#scoreshow").removeChild(previousScoreElement);
    }

    let previousScoreElement2 = document.querySelector("#scoreshow .playagain");
    if (previousScoreElement2) {
        document.querySelector("#scoreshow").removeChild(previousScoreElement2);
    }
    document.querySelector("#scoreshow").style.display = "none";
}


let submitbtn = document.querySelector("#submit");


submitbtn.addEventListener("click", (e) => {

    let answerget = getanswer();
    if (answerget === QuizData[currentindex].ans) {
        score++;
        console.log(score);
    }
    deleteall();

    currentindex++;
    if (currentindex < QuizData.length) {
        display();
    }
    else {
        let scoreshow = document.querySelector("#scoreshow");
        scoreshow.style.display = "block";
        let p = document.createElement('p');
        p.classList = "score";
        let playagain = document.createElement("button");

        playagain.innerHTML = 'Playagain';
        playagain.classList = "playagain"
        p.innerHTML = `Score is ${score}/ ${QuizData.length}`;
        scoreshow.appendChild(p);
        scoreshow.appendChild(playagain);
        playagain.addEventListener("click", (e) => {
            newgame();


        })
    }

})

