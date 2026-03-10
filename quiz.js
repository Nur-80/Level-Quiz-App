// Multi-Level Quiz JS

const levelData = {
    1:[ /* 10 questions Level 1 */ 
        {question:"HTML পূর্ণরূপ কী?", answers:
            [
                {text:"Hyper Text Markup Language", correct:true},
                {text:"Home Tool Markup Language", correct:false},
                {text:"Hyperlinks Text Mark Language", correct:false},
                {text:"None", correct:false}
            ]
        },
        {question:"CSS is used for?", answers:
            [
                {text:"Structure", correct:false},
                {text:"Server", correct:false},
                {text:"Style", correct:true},
                {text:"Database", correct:false}
            ]
        },
        {question:"JavaScript is?", answers:
            [
                {text:"Server", correct:false},
                {text:"Database", correct:false},
                {text:"Browser", correct:false},
                {text:"Programming Language", correct:true}
            ]
        },
        {question:"<br> tag?", answers:
            [
                {text:"Line Break", correct:true},
                {text:"Bold", correct:false},
                {text:"Paragraph", correct:false},
                {text:"Header", correct:false}
            ]
        },
        {question:"Which attribute for image alt text?", answers:
            [
                {text:"title", correct:false},
                {text:"alt", correct:true},
                {text:"src", correct:false},
                {text:"longdesc", correct:false}
            ]
        },
        {question:"CSS property for text color?", answers:
            [
                {text:"text-color", correct:false},
                {text:"font-color", correct:false},
                {text:"background-color", correct:false},
                {text:"color", correct:true}
            ]
        },
        {question:"JS comments symbol?", answers:
            [
                {text:"//", correct:true},
                {text:"/* */", correct:true},
                {text:"#", correct:false},
                {text:"<!-- -->", correct:false}
            ]
        },
        {question:"HTML largest heading?", answers:
            [
                {text:"<h6>", correct:false},
                {text:"<head>", correct:false},
                {text:"<h1>", correct:true},
                {text:"<header>", correct:false}
            ]
        },
        {question:"CSS padding adds?", answers:
            [
                {text:"Inside space", correct:true},
                {text:"Outside space", correct:false},
                {text:"Border", correct:false},
                {text:"Margin", correct:false}
            ]
        },
        {question:"Alert Hello World JS?", answers:
            [
                {text:"alertBox('Hello World')", correct:false},
                {text:"msg('Hello World')", correct:false},
                {text:"msgBox('Hello World')", correct:false},
                {text:"alert('Hello World')", correct:true}
            ]
        }
    ],
    2:[ /* 10 questions Level 2 */ 
        {question:"Which tag for paragraph?", answers:
            [
                {text:"<p>", correct:true},
                {text:"<para>", correct:false},
                {text:"<paragraph>", correct:false},
                {text:"<div>", correct:false}
            ]
        },
        {question:"CSS for font size?", answers:
            [
                {text:"text-size", correct:false},
                {text:"font-style", correct:false},
                {text:"font-size", correct:true},
                {text:"size", correct:false}
            ]
        },
        {question:"JS function syntax?", answers:
            [
                {text:"function myFunc()", correct:true},
                {text:"function:myFunc()", correct:false},
                {text:"func myFunc()", correct:false},
                {text:"function = myFunc()", correct:false}
            ]
        },
        {question:"HTML list tag?", answers:
            [
                {text:"<ol>", correct:false},
                {text:"<li>", correct:false},
                {text:"<list>", correct:false},
                {text:"<ul>", correct:true}
            ]
        },
        {question:"CSS background color?", answers:
            [
                {text:"bgcolor", correct:false},
                {text:"background-color", correct:true},
                {text:"color", correct:false},
                {text:"background-style", correct:false}
            ]
        },
        {question:"JS variable declaration?", answers:
            [
                {text:"let x=5;", correct:true},
                {text:"var x==5;", correct:false},
                {text:"x=5;", correct:false},
                {text:"int x=5;", correct:false}
            ]
        },
        {question:"HTML link tag?", answers:
            [
                {text:"<link>", correct:false},
                {text:"<href>", correct:false},
                {text:"<a>", correct:true},
                {text:"<url>", correct:false}
            ]
        },
        {question:"JS equality operator?", answers:
            [
                {text:"==", correct:true},
                {text:"=", correct:false},
                {text:"===", correct:false},
                {text:"!==", correct:false}
            ]
        },
        {question:"CSS margin adds?", answers:
            [
                {text:"Inside space", correct:false},
                {text:"Padding", correct:false},
                {text:"Border", correct:false},
                {text:"Outside space", correct:true}
            ]
        },
        {question:"HTML meta tag used for?", answers:
            [
                {text:"Paragraph", correct:false},
                {text:"Page info", correct:true},
                {text:"Heading", correct:false},
                {text:"Link", correct:false}
            ]
        }
    ],
    3:[ /* 10 questions Level 3 */ 
        {question:"HTML full form?", answers:
            [
                {text:"Hyper Text Markup Language", correct:true},
                {text:"Home Tool Markup Language", correct:false},
                {text:"Hyperlinks Text Mark Language", correct:false},
                {text:"None", correct:false}
            ]
        },
        {question:"CSS is used for?", answers:
            [
                {text:"Structure", correct:false},
                {text:"Server", correct:false},
                {text:"Style", correct:true},
                {text:"Database", correct:false}
            ]
        },
        {question:"JavaScript is?", answers:
            [
                {text:"Server", correct:false},
                {text:"Database", correct:false},
                {text:"Browser", correct:false},
                {text:"Programming Language", correct:true}
            ]
        },
        {question:"<br> tag?", answers:
            [
                {text:"Line Break", correct:true},
                {text:"Bold", correct:false},
                {text:"Paragraph", correct:false},
                {text:"Header", correct:false}
            ]
        },
        {question:"Which attribute for image alt text?", answers:
            [
                {text:"title", correct:false},
                {text:"alt", correct:true},
                {text:"src", correct:false},
                {text:"longdesc", correct:false}
            ]
        },
        {question:"CSS property for text color?", answers:
            [
                {text:"text-color", correct:false},
                {text:"font-color", correct:false},
                {text:"background-color", correct:false},
                {text:"color", correct:true}
            ]
        },
        {question:"JS comments symbol?", answers:
            [
                {text:"//", correct:true},
                {text:"/* */", correct:true},
                {text:"#", correct:false},
                {text:"<!-- -->", correct:false}
            ]
        },
        {question:"HTML largest heading?", answers:
            [
                {text:"<h6>", correct:false},
                {text:"<head>", correct:false},
                {text:"<h1>", correct:true},
                {text:"<header>", correct:false}
            ]
        },
        {question:"CSS padding adds?", answers:
            [
                {text:"Inside space", correct:true},
                {text:"Outside space", correct:false},
                {text:"Border", correct:false},
                {text:"Margin", correct:false}
            ]
        },
        {question:"Alert Hello World JS?", answers:
            [
                {text:"alertBox('Hello World')", correct:false},
                {text:"msg('Hello World')", correct:false},
                {text:"msgBox('Hello World')", correct:false},
                {text:"alert('Hello World')", correct:true}
            ]
        }
    ],
    4:[ /* 10 questions Level 4 */ 
        {question:"Which tag for paragraph?", answers:
            [
                {text:"<p>", correct:true},
                {text:"<para>", correct:false},
                {text:"<paragraph>", correct:false},
                {text:"<div>", correct:false}
            ]
        },
        {question:"CSS for font size?", answers:
            [
                {text:"text-size", correct:false},
                {text:"font-style", correct:false},
                {text:"font-size", correct:true},
                {text:"size", correct:false}
            ]
        },
        {question:"JS function syntax?", answers:
            [
                {text:"function myFunc()", correct:true},
                {text:"function:myFunc()", correct:false},
                {text:"func myFunc()", correct:false},
                {text:"function = myFunc()", correct:false}
            ]
        },
        {question:"HTML list tag?", answers:
            [
                {text:"<ol>", correct:false},
                {text:"<li>", correct:false},
                {text:"<list>", correct:false},
                {text:"<ul>", correct:true}
            ]
        },
        {question:"CSS background color?", answers:
            [
                {text:"bgcolor", correct:false},
                {text:"background-color", correct:true},
                {text:"color", correct:false},
                {text:"background-style", correct:false}
            ]
        },
        {question:"JS variable declaration?", answers:
            [
                {text:"let x=5;", correct:true},
                {text:"var x==5;", correct:false},
                {text:"x=5;", correct:false},
                {text:"int x=5;", correct:false}
            ]
        },
        {question:"HTML link tag?", answers:
            [
                {text:"<link>", correct:false},
                {text:"<href>", correct:false},
                {text:"<a>", correct:true},
                {text:"<url>", correct:false}
            ]
        },
        {question:"JS equality operator?", answers:
            [
                {text:"==", correct:true},
                {text:"=", correct:false},
                {text:"===", correct:false},
                {text:"!==", correct:false}
            ]
        },
        {question:"CSS margin adds?", answers:
            [
                {text:"Inside space", correct:false},
                {text:"Padding", correct:false},
                {text:"Border", correct:false},
                {text:"Outside space", correct:true}
            ]
        },
        {question:"HTML meta tag used for?", answers:
            [
                {text:"Paragraph", correct:false},
                {text:"Page info", correct:true},
                {text:"Heading", correct:false},
                {text:"Link", correct:false}
            ]
        }
    ],
    
};

let currentLevel = localStorage.getItem('currentLevel') || 1;
currentLevel = parseInt(currentLevel);

const questions = levelData[currentLevel];

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("level-title").innerText = "Level " + currentLevel;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    questionNumber.innerHTML = "Question " + (currentQuestionIndex+1) + " of " + questions.length;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.style.background = "green";
        score++;
    } else {
        selectedBtn.style.background = "red";
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true") button.style.background="green";
        button.disabled=true;
    });

    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "Your Score: " + score + " / " + questions.length;
    questionNumber.innerHTML = "";

    if(score === questions.length){
        nextButton.innerText = "Next Level";
        nextButton.style.display="block";
    } else {
        nextButton.innerText = "Try Again";
        nextButton.style.display="block";
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length-1){
        currentQuestionIndex++;
        showQuestion();
    } else {
        if(score === questions.length){
            // Unlock next level
            let unlocked = parseInt(localStorage.getItem('unlockedLevel')) || 1;
            if(currentLevel+1 > unlocked){
                localStorage.setItem('unlockedLevel', currentLevel+1);
            }
            // Go to Home
            window.location.href = "index.html";
        } else {
            // Retry same level
            startQuiz();
        }
    }
});

startQuiz();