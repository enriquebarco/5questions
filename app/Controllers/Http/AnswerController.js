'use strict'

const Answer = use('App/Models/Answer')

const User = use('App/Models/User');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport( {
    service: "Outlook365",
    auth: {
        user: "enriquebarco1@hotmail.com",
        pass: "SimpleSolutions1"
    }
});

class AnswerController {
    async home({ view }) {

        // Fetch answers
        const answers = await Answer.all();

        return view.render('layouts.dashboard', { answers: answers.toJSON() });

    }

    async create({ request, response }) {

        const answer = new Answer;

            answer.answer1 = request._body.Q1;
            answer.answer2 = request._body.Q2;
            answer.answer3 = request._body.Q3;
            answer.answer4 = request._body.Q4;
            answer.answer5 = request._body.Q5;

            await answer.save();
            
            const options = {
                from: "enriquebarco1@hotmail.com",
                to: "enriquebarco1@hotmail.com",
                subject: "5Questions have been answered!",
                text: `Answer to question 1: ${request._body.Q1}; Answer to question 2: ${request._body.Q2}; Answer to question 3: ${request._body.Q3}; Answer to question 4: ${request._body.Q4}; Answer to question 5: ${request._body.Q5};  `,
            };
            
            transporter.sendMail(options, function(err, info) {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log("sent " + info.response);
            })

        return response.redirect('/success');
    }
}

module.exports = AnswerController
