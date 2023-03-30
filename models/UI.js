export class UI {
    constructor() {

    }

    /**
     * 
     * @param {string} text question to render 
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
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
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
        `

        const container = document.getElementById('container')
        container.innerHTML = quizHTML
    }

    showProgress(currentIndex, total) {
        const progress = document.getElementById('progress')
        progress.innerHTML = `Question ${currentIndex} of ${total}`
    }
}