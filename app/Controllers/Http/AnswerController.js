'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
    async home({ view }) {

        // Fetch answers
        const answers = await Answer.all();

        return view.render('index', { answers: answers.toJSON() });
    }
}

module.exports = AnswerController
