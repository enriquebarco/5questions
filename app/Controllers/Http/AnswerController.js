'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {
    async home({ view }) {

        // Fetch answers
        const answers = await Answer.all();

        return view.render('layouts.dashboard', { answers: answers.toJSON() });

    }

    async create({ request, response, session }) {

        const answer = new Answer;
        console.log(response)

            answer.answer1 = request._body.Q1;
            answer.answer2 = request._body.Q2;
            answer.answer3 = request._body.Q3;
            answer.answer4 = request._body.Q4;
            answer.answer5 = request._body.Q5;

            await answer.save();

        return response.redirect('/dashboard');
    }
}

module.exports = AnswerController
