// document.body.style.backgroundImage = "url('./assets/krzyztopor-castle-1232338.jpg') ";


const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer')
const startButton = document.getElementById('start-btn')
const villainBox = document.getElementById('flexbox-villainContainer')
const playerBox = document.getElementById('flexbox-playerContainer')
const quizBox = document.getElementsByClassName('quiz')

startButton.addEventListener('click', startGame)



let shuffledQuestions, currentQuestionIndex //default for both to be undefined
let correctAnswers = 0 
let wrongAnswers= 0 

//start game
//hide the start button
//https://www.w3schools.com/js/js_array_sort.asp for the math.random & sort of questions
//display (unhide/remove hide) the question and next button https://www.w3schools.com/jsref/prop_element_classlist.asp
//must call the function to display the questions

function startGame(){
    console.log('game started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() =>Math.random()-.5)
    currentQuestionIndex =0
    questionContainer.classList.remove('hide')
    setNextQuestion()  //want the question to display
    

}
//Display Question - need to getelementbyId to display question and answers
//https://www.w3schools.com/jsref/prop_node_innertext.asp to pull in the intext for both the questions and answers
//https://www.w3schools.com/jsref/jsref_foreach.asp - for each answer to display each button.
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 
//next question or end of game

function setNextQuestion(question){
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex]) 
        
        if(correctAnswers == 5){
        villainBox.innerHTML =  '<img src=\'./Assets/daggers (10).jpg\'>'
        playerBox.classList.add('hide')
        questionContainer.innerText = "You slayed the villain!" 
            

        }else if(wrongAnswers == 5){
        playerBox.innerHTML =  '<img src=\'./Assets/potions (7).jpg\'>'  
        questionContainer.innerText = "Game Over"
        villainBox.classList.add('hide')
        }
         
        }
    
         
//create a new button that has the answer in it for each question


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
        answerElement.appendChild(button)
    })
}

//this will loop through the answers and remove the original answer buttons
function resetState() {
    while (answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}


//needs to know where to start shuffling questions so currentquestionIndex starting at 0

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset

    


// //select answer
function selectAnswer(e) {
    const selectedButton =e.target
    const correct = selectedButton.dataset.correct
    if(correct){ 
        let btn1= document.getElementsByClassName("btn1")[correctAnswers]
        btn1.innerHTML = '<img src=\'./Assets/potions (2).jpg\'>';
        correctAnswers++;
        
    }else{
        let btn2= document.getElementsByClassName("btn2")[wrongAnswers]
        btn2.innerHTML = '<img src=\'./Assets/potions (2).jpg\'>';
        wrongAnswers++;
        
    }
    currentQuestionIndex++
    setNextQuestion()
    
   }



 


const questions = [

    {
        question: "Which film ranked first in domestic box office for 2019?",
        answers: [
            {text: 'Captain Marvel', correct: false},
            {text: 'Star Wars: Episode IX - The Rise of Skywalker', correct: false},
            {text: 'Toy Story 4', correct: false},
            {text: 'Avengers: Endgame', correct: true},
        ]
    },
        
    {
        question: "Which Actress played Danielle De Barbarac in the film Ever After?",
        answers: [
            {text: 'Maggie Gyllenhall', correct: false},
            {text: 'Drew Barrymore', correct: true},
            {text: 'Scarlett Johansson', correct: false},
            {text: 'Jennifer Connelly', correct: false},
        ]
    },
    
    {
        question: "What actor played the Joker in 2019?", 
        answers: [
            {text: 'Heath Ledger ', correct: false},
            {text: 'Joaquin Phoenix', correct: true},
            {text: 'Jared Leto ', correct: false},
            {text: 'Jack Nicholson', correct: false},
         ]
    }, 

    {
        question: "What sequel made over 200,000,000 in 2019?", 
        answers: [
            {text: 'Jumanji: The Next Level', correct: false},
            {text: 'It Chapeter Two ', correct: true},
            {text: 'The Secret Life of Pets 2', correct: false},
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
            {text: 'Bruce Willis ', correct: false},
            {text: 'Christopher Walken', correct: false},
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
            {text: 'Return of the Mummy ', correct: true},
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
            {text: 'Morgan Freeman', correct: false},
            {text: 'Alanis Morissette', correct: false},
            {text: 'John Travolta', correct: true},
        ],
    },

    {
        question:"How many Fast and the Furious full length movies are there as of 2022?",
        answers: [
            {text: 'Six', correct: false},
            {text: 'Seven', correct: false},
            {text: 'Eight', correct: false},
            {text: 'Nine', correct: true},
        ],
    },

    {
        question:"In Ready Player One, what famous vehicle did Parzival drive?",
        answers: [
            {text: 'Elanor from Gone in 60 Seconds', correct: false},
            {text: 'Delorian from Back to the Future', correct: true},
            {text: 'Charger from Fast and The Furious', correct: false},
            {text: 'Chevy Implala from Super Natural', correct: false},
        ],
    },

    {
        question:"What movie stared Leonardo DiCaprio as U.S Marshal Teddy Daniels investigating the implausible escape of a murderess from an insane asylum?",
        answers: [
            {text: 'Shutter Island', correct: true},
            {text: 'Inception', correct: false},
            {text: 'Catch Me If You Can', correct: false},
            {text: 'Revolutionary Road', correct: false},
        ],
    },

    {
        question:"What movie started Val Kilmer as Bruce Wayne?",
        answers: [
            {text: 'Batman Begins', correct: false},
            {text: 'Batman Returns', correct: false},
            {text: 'Batman & Robin', correct: false},
            {text: 'Batman Forever', correct: true},
        ],
    },
    {
        question:"Which of the following actors stared in the 2019 hit 'Knives Out'?",
        answers: [
            {text: 'Chris Hemsworth', correct: false},
            {text: 'Bradley Cooper', correct: false},
            {text: 'Leonardo DiCaprio', correct: false},
            {text: 'Joseph Gordon-Levitt', correct: true},
        ],
    },

    {
        question:"What 2021 series tells the story of a high-school girls soccer players who survive a plane crash deep in the Ontario wilderness?",
        answers: [
            {text: 'Jackrabbits', correct: false},
            {text: 'Yellowjackets', correct: true},
            {text: 'Riverhawks', correct: false},
            {text: 'Shockers', correct: false},
        ],
    },

    {
        question:"The CW series'Reign' followed the life of what nobel? ",
        answers: [
            {text: 'Queen Elizabeth II', correct: false},
            {text: 'Queen Victoria', correct: false},
            {text: 'Mary Queen of Scots', correct: true },
            {text: 'Catherine the Great', correct: false},
        ],
    },

    {
        question:"What Netflix series stars Henry Cavill as Geralt, a mutated monster hunter?",
        answers: [
            {text: 'The Witcher', correct: true},
            {text: 'The Haunting of Hill House', correct: false},
            {text: 'Shadowhunters: The Mortal Instruments', correct: false},
            {text: 'Hemlock Grove', correct: false},
        ],
    },

    {
        question:"Which of the following is NOT a part of the 'American Horror Story' universe",
        answers: [
            {text: 'Freak Show', correct: false},
            {text: 'Hotel', correct: false},
            {text: 'Coven', correct: false},
            {text: 'Blyth Manor', correct: true},
        ],
    },

    {
        question:"Which actor did NOT star in the 1994 film 'The Shawshank Redemption'?",
        answers: [
            {text: 'James Whitmore', correct: false},
            {text: 'Tim Robbins', correct: false},
            {text: 'Kevin Costner', correct: true},
            {text: 'Morgan Freeman', correct: false},
        ],
    },
]