// List variables to be used at top for easy reference.
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerNumber = document.querySelector("#timer-number")
const instructions = document.querySelector('.instructions')
const questionContainer = document.querySelector('#question-container')

let currentQuestionIndex = 0;
let timer = 60;

// Questions and answers for index using questions const.
const questions = [
    {
        questions: "What is the command to start a new template in your Index?",
        answers: ["Please", "!+Enter", "MDN Docs", "Ask Brad/Grady"],
        correct: "!+Enter"
    },
    
    {
        questions: "What does NOT go into your professionally-written README file?",
        answers: ["Installation", "License", "Credits", "Pineapple Pizza"],
        correct: "Pineapple Pizza"
    },

    {
        questions: "In what type of file should you be able to commonly be able to change your styles of your page?",
        answers: ["Index", "Javascript", "CSS", "README"],
        correct: "CSS"
    },

    {
        questions: "What GIT command allows you to pull documents from a subject repository?",
        answers: ["git pull origin main", "git push origin main", "git add -A", "git help"],
        correct: "git pull origin main"
    },

    {
        questions: "In a number index in Javascript what position does the integer 0 hold?",
        answers: ["0", "It doesn't", "1", "I don't understand the question"],
        correct: "1"
    }
];

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
});


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(currentQuestionIndex)
}

function showQuestion(questionIndex) {
    questionElement.innerHTML = ""
    answerButtonsElement.innerHTML = ""
    questionElement.innerText = questions[questionIndex].questions
    questions[questionIndex].answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        button.addEventListener('click', () => {
            if (i === question.answer) {
                correctAnswers++;
            } else {
                timer -= 10;
            }
            nextQuestion();
        });
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', (selectAnswer))
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

let sec = 60
function startTimer() {
    console.log('timer need to subtract')
    var timer = setInterval(function() {
        sec--;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        if(sec < 0) {
            clearInterval(timer);
            alert('Time is Up!')
        }
    }, 1000);
}

function selectAnswer(event) {
    const selectedButton = event.target.innerHTML
    const correct = questions[currentQuestionIndex].correct
    if(selectedButton === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove("hide");
        currentQuestionIndex++ 
        showQuestion(currentQuestionIndex)
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        questionContainerElement.innerHTML = ""
        }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide')    
    }   else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }   else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};





