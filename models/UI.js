export class UI {
    time = 30;
    interval;
    constructor() {
    }

    /**
     * 
     * @param {string} text question to render 
     */
    showQuestion(text) {
        this.quizVisibility()
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }

    /**
     * 
     * @param {string} img render to img
     */
    showImg(img) {
       document.getElementById('images').src = img
    } 

    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++ ) {
            const button = document.createElement('button')
            button.innerHTML = choices[i]
            button.className = 'answer_button'
            button.addEventListener('click', () => callback(choices[i]))

            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score the total score 
     */
    showScores(score) {
        const quizHTML = `
            <h1 class="result-question">Result</h1>
            <h2 class="score-question">Your Score: <span>${score}</span></h2>
        `

        const container = document.getElementById('container')
        container.innerHTML = quizHTML
    }

    showProgress(currentIndex, total) {
        const progress = document.getElementById('progress')
        progress.innerHTML = `Question ${currentIndex} of ${total}`
    }

    timeInterval() {
        this.interval = setInterval(() => {
             this.time--
             if(this.time == 0) {

                const message = document.getElementById('message-danger')
                message.innerHTML = 'Perdiste la partida'
                message.style.visibility = 'visible'

                document.getElementById('time').style.visibility = 'hidden'
                document.getElementById('start-quiz').style.display = 'none'

                clearInterval(this.showProgress(1, 10))
                clearInterval(this.interval)

             }

             const time = document.getElementById('time')
             time.innerHTML = `${this.time} s`
             
         },1000)
    }

    quizVisibility() {
        const startQuizButton = document.getElementById('start-quiz')
        const quiz = document.getElementById('quiz')

        startQuizButton.addEventListener('click',() => {
            startQuizButton.style.visibility = 'hidden'
            quiz.style.visibility = 'visible'
            this.timeInterval()
        }) 
    }

    // glosary

    questionsGlosary(...glosary) {
        const questionsGlosary = document.getElementById('glosaryofwords')

        glosary.forEach(element => {
            element.forEach(item => {
                questionsGlosary.innerHTML += `<div class="glosary"> 
                <img src="${item.image} alt="image anwer" class="image"> 
                <p>${item.text} - <span class="answer">${item.answer}</span></p>
                </div>`
            })
        })
    }

}