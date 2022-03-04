# 5Questions

This is the first time I use the AdonisJS framework, and I must admit it was really fun! Especially because I applied MVC rather than using ReactJS on the front-end. Certain things tie really well together such as the routing and the authorization. So much easier than using json web token and bcryptJS once you understand what is going on. Especially when you consider the web guards. I also found it interacts really well with mySQL - you write much less code at the end of the day when compared to KnexJS. Validators are especially fun to work with and easy to replicate once you've built one, it felt almost like cheating using it across all my forms!

I used nodemailer to send the mail with the dynamically generated data, and I used jsPDF to automatically download a dynamically generated PDF to the server.

## Installation

1) Clone the repository and open it on your source code editor
2) Install and setup mySQL if you have not already
    
    2.1) Add a database titled "5questions"

3) Install dependencies
4) Input password into transporter for nodemailer function in AnswerController (line 12) - I will email this to you
5) You should be ready to go!
