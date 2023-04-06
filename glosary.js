import { questions } from "./data/questions.js"
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz the main quiz Objet
 * @param {UI} ui ui Objet
 */

const renderPage = (quiz, ui) => {
    ui.questionsGlosary(quiz.questions)

}

function main() {
    const quiz = new Quiz(questions)
    const ui = new UI()

    renderPage(quiz, ui)
}

main()