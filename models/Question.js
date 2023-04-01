export class Question {

    /**
     * 
     * @param {string} text  this is text of the question
     * @param {string[]} choices this are the choices of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(text, choices, answer, image) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.image = image
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice) {
        return choice === this.answer
    }
}
