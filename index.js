document.body.style.backgroundImage = "url('./assets/krzyztopor-castle-1232338.jpg') ";

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    correctAnswer()
})
// Start game
function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() =>Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    
}
//next question
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
//select answer
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
 
function selectAnswer(e) {
    const selectedButton =e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        }else {
            element.classList.add('wrong')
        }
    }
}
let correctAnswers = 0
let wrongAnswers=0

function correctAnswer(correct){
if (correct) {
        element.classList.add('correct')
        let btn1= document.getElementsByClassName("btn1")[correctAnswers]
        btn1.innerHTML = "<img src = \'./assets/potions (7).png'>";
        correctAnswers++
    }else {
        element.classList.add('wrong')
        let btn2= document.getElementsByClassName("btn2")[wrongAnswers]
        btn2.innerHTML = "<img src = \'./assets/potions (7).png'>";
        wrongAnswers++
    }
}
console.log(correctAnswers)

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Which film ranked first in domestic box office for 2019?",
        answers: [
            {text:'Captain Marvel', correct: false},
            {text: 'Star WArs: Episode IX - The Rise of Skywalker', correct: false},
            {text:'Toy Story 4', correct: false},
            {text:'Avengers: Endgame', correct: true},
        ]
    },
        
    {
        question: "Which Actress played Danielle De Barbarac in the film Ever After?",
        answers: [
            {text:'Maggie Gyllenhall', correct: false},
            {text: 'Drew Barrymore', correct: true},
            {text: 'Scarlett Johansson', correct: false},
            {text: 'Jennifer Connelly', correct: false},
        ]
    },
    
    {
        question: "What actor played the Joker in 2019?", 
        answers: [
            {text:'Heath Ledger ', correct: false},
            {text: 'Joaquin Phoenix', correct: true},
            {text: 'Jared Leto ', correct: false},
            {text: 'Jack Nicholson', correct: false},
         ]
    }, 
    {
        question: "What sequel made over 200,000,000 in 2019?", 
        answers: [
            {text: 'Jumanji: The Next Level', correct: false},
            {text:'It Chapeter Two ', correct: true},
            {text:'The Secret Life of Pets 2', correct: false},
            {text: 'Zombieland: Double Tap', correct: false},
        ]
    },
    {
        question: "Which actor was the voice of Buzz Lightyear in Disney Pixar's Toy Story Franchise?",
        answers: [
            {text: 'Timmothy Hutton', correct: false},
            {text: 'Tom Hardy', correct: false},
            {text: 'Tim Allen', correct: true},
            {text: 'Tom Hanks', correct: false},
        ]
    },
    {
        question:"Which Actor did not star in 1994's Pulp Fiction?",
        answers: [
            {text:'Bruce Willis ', correct: false},
            {text:'Christopher Walken', correct: false},
            {text: 'Harvey Keitel', correct: false},
            {text: 'Patricia Arquette', correct: true},
        ]
    },
    {
        question:"What did Hannibal Lecter eat with some fava beans and a nice Chianti?",
        answers: [
            {text: 'Brain ', correct: false},
            {text: 'Lung ', correct: false},
            {text: 'Kindney', correct: false},
            {text: 'Liver ', correct: true},
        ]
    },
    {
        question: "Which of the following did Tom Cruise NOT star in?",
        answers: [
            {text:'Return of the Mummy ', correct: true},
            {text: 'Legends ', correct: false},
            {text: 'Mission Impossible ', correct: false},
            {text: 'Rock of Ages', correct: false},
        ]
    },
    {
        question: "In Top Gun, who was Maverick's Radar Intercept Officer and best friend?",
        answers: [
            {text: 'Viper', correct: false},
            {text: 'Goose', correct: true},
            {text: 'Ice Man', correct: false},
            {text: 'Cougar', correct: false},
        ]
    },
    {
        question:"Which of the following actors did not play God on the big screen?", 
        answers :[
            {text: 'Rob Zomie', correct: false},
            {text:'Morgan Freeman', correct: false},
            {text: 'Alanis Morissette', correct: false},
            {text: 'John Travolta', correct: true},
        ],
    },
        
]
const questionCheck = document.querySelectorAll('questions')
questions.forEach((questions, idx) => {
    console.log(questions, idx)
})
