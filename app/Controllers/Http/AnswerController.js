'use strict'

const Answer = use('App/Models/Answer')
const nodemailer = require('nodemailer');
const { jsPDF } = require("jspdf");

// function to generate in-mail
const transporter = nodemailer.createTransport( {
    service: "Outlook365",
    auth: {
        user: "enriquebarco1@hotmail.com",
        pass: "SimpleSolutions1"
    }
});

//function to generate pdf
const createPDF = ( answer1, answer2, answer3, answer4, answer5) => {
    const doc = new jsPDF();
    const docTitleRaw = new Date().toLocaleDateString("en-US");
    const docTitle = docTitleRaw.replace(/\\|\//g,'');
    

    doc.text("5Questions Have Been Answered!", 60, 30);
    doc.text("Answer for Question 1", 10, 70);
    doc.text(`1) ${answer1}`, 10, 80);
    doc.text("Answer for Question 2", 10, 95);
    doc.text(`1) ${answer2}`, 10, 105);
    doc.text("Answer for Question 3", 10, 120);
    doc.text(`1) ${answer3}`, 10, 130);
    doc.text("Answer for Question 4", 10, 145);
    doc.text(`1) ${answer4}`, 10, 155);
    doc.text("Answer for Question 5", 10, 170);
    doc.text(`1) ${answer5}`, 10, 180);

    doc.save(`${docTitle}.pdf`)
}

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

            //save answers to sql database
            await answer.save();

            //call function to create PDF
            createPDF(request._body.Q1, request._body.Q2, request._body.Q3, request._body.Q4, request._body.Q5);
            
            const options = {
                from: "enriquebarco1@hotmail.com",
                to: "enriquebarco1@hotmail.com",
                subject: "5Questions have been answered!",
                text: `Answer to question 1: ${request._body.Q1}; Answer to question 2: ${request._body.Q2}; Answer to question 3: ${request._body.Q3}; Answer to question 4: ${request._body.Q4}; Answer to question 5: ${request._body.Q5}; `,
            };
            
            //send in-mail to admin using options above
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
