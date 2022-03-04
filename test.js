const { jsPDF } = require("jspdf");

const createPDF = ( answer1, answer2, answer3, answer4, answer5) => {
    const doc = new jsPDF();

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

    doc.save("a4.pdf")
}

createPDF("this is the first answer");