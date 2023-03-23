var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('questionContainer')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
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


var sec = 60
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


document.getElementById

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
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
}

var questions = [
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

var quiz = new quiz(questions);
populate
