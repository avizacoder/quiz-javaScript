import { questions } from "./data/questions.js"
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz the main quiz Objet
 * @param {UI} ui ui Objet
 */

const renderPage = (quiz, ui) => {


    if(quiz.isEnded()) {
        ui.showScores(quiz.score)
    }else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showImg(quiz.getQuestionIndex().image)

        ui.showChoices(quiz.getQuestionIndex().choices, currentChoice => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }

    console.log('Hello world')

}

const render = (quiz, ui) => {
    console.log('Hello world')
}

function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()

    renderPage(quiz, ui)
    render(quiz, ui)
}

main()