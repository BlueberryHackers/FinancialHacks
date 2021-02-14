var pos = 0;
var questionID;

// add parameters in each question like explanationA, explanationB, providing explanations to be printed for each answer choice
var questions = [
	// {
	// 	questionID: 1,
	// 	question: "Medical insurance is required these days and can be costly. Which plan would you like to do?",
	// 	a: "Gold plan - $500 per month",
	// 	b: "Silver plan - $250 per month",
	// 	c: "Bronze plan - $100 per month",
	// 	explanation: "",
	// 	explanationA: "That is a good choice as more expensive plans tend to have lower copays and thus you will have to spend more money for every time you go to the hospital",
	// 	explanationB: "question1explanationb",
	// 	explanationC: "question1explanationc",
	// 	imageSource: "images/money.jpg",
	// 	selectedAnswerChoice: ''
	// },
	{
		questionID: 1,
		question: "What is financial literacy?",
		a: "Knowledge of essential financial skills",
		b: "Having a high balance in your bank account",
		c: "Your ability to earn money",
		explanation: "",
		explanationA: "Good job, you have selected the correct answer! With good personal financial literacy, you will be better equipped to make smart financial choices in the future.",
		explanationB: "This answer is incorrect, the correct answer is 'Knowledge of essential financial skills'. With good personal financial literacy, you will be better equipped to make smart financial choices in the future.",
		explanationC: "This answer is incorrect, the correct answer is 'Knowledge of essential financial skills'. With good personal financial literacy, you will be better equipped to make smart financial choices in the future.",
		imageSource:"images/financial_literacy.jpg",
		selectedAnswerChoice: ''
	},
	{
		questionID: 2,
		question: "When you receive your credit card balance statement, how much of it should you pay?",
		a: "Don't pay, wait till later to pay",
		b: "Just the minimum balance",
		c: "All the money due",
		explanation: "",
		explanationA: "You should always pay your full balance everytime you get your credit card statement. Paying late will rack up high amounts of interest.",
		explanationB: "You should always pay your full balance everytime you get your credit card statement. Paying late will rack up high amounts of interest.",
		explanationC: "Good Job. You should always pay your full balance everytime you get your credit card statement. Paying late will rack up high amounts of interest. This will help you keep your interest rate low and your credit score high!",
		imageSource:"images/creditcard.jpg",
		selectedAnswerChoice: ''
	},
	{
		questionID: 3,
		question: "Which person has the highest net worth? Jack has $120,000 in assets but $200,000 in liabilities. John has $500,000 in assets but $540,000 in liabilities. William has $50,000 in assets but only $10,000 in liabilities.",
		a: "Jack",
		b: "John",
		c: "William",
		explanation: "",
    imageSource: "images/people-icon-three-free-vector-graphic-on-pixabay-people-graphics-png-960_652.png",
		explanationA: "William has the highest net worth as net worth is assets subtracted by liabilities. Even though he has the lowest amount of assets he has the lowest amount of liabilities relative to his assets.",
		explanationB: "William has the highest net worth as net worth is assets subtracted by liabilities. Even though he has the lowest amount of assets he has the lowest amount of liabilities relative to his assets.",
		explanationC: "William has the highest net worth as net worth is assets subtracted by liabilities. Even though he has the lowest amount of assets he has the lowest amount of liabilities relative to his assets.",
		imageSource:"images/networth.gif",
		selectedAnswerChoice: ''
	},
	{
		questionID: 4,
		question: "How much money is ideal for your savings account?",
		a: "None",
		b: "One Month's worth",
		c: "One Year's worth",
		explanation: "",
		explanationA: "Ideally the more savings you have the better in case of emergencies",
		explanationB: "Ideally the more savings you have the better in case of emergencies",
		explanationC: "Great Answer! Ideally the more savings you have the better in case of emergencies",
		imageSource:"images/savings.jpg",
		selectedAnswerChoice: ''
	},
	{
		questionID: 5,
		question: "How should you split your money across bank accounts?",
		a: "Put all your money inside one bank account",
		b: "Spread your money out across multiple different bank accounts",
		c: "Invest all your money into one stock or mutual fund",
		explanation: "",
		explanationA: "You should not be putting all of your money into one bank account. In case of a loss, it could take years and a big headache to recover your money. This is called concentration risk. Avoid putting all your money in one place. Spread it out. Think of it like putting all your eggs in one basket.",
		explanationB: "This is the right way to go, You should avoid putting all your money in one place, you should spread it out across multiple banks or stocks. This is called concentration risk. Think of it like putting all your eggs in one basket.",
		explanationC: "You should not be putting all of your money into one stock. In case of a loss, it could take years and a big headache to recover your money. This is called concentration risk. Avoid putting all your money in one place. Spread it out. Think of it like putting all your eggs in one basket.",
		imageSource:"images/concentrationrisk.jpg",
		selectedAnswerChoice: ''
	},
		{
		questionID: 6,
		question: "What is the highest credit score one could have?",
		a: "750",
		b: "850",
		c: "900",
		explanation: "",
		explanationA: "This answer is incorrect. The highest credit score number is 850.",
		explanationB: "Good job, this answer is correct. The highest credit score number is 850. Always aim to have a high credit score, so you can increase your financial freedom in the future.",
		explanationC: "This answer is incorrect. The highest credit score number is 850.",
		imageSource: "images/creditscorerange.jpg",
		selectedAnswerChoice: ''
	},
	{
  	questionID: 7,
		question: "What factors can affect your credit score?",
		a: "Payment history",
		b: "Length of credit history",
		c: "All of the above",
		explanation: "",
		explanationA: "Many factors can affect your credit score. The answer is all of the above. A good credit score can allow you to have greater finacial freedom, and will increase your likelihood of being able to get loans and new credit cards.",
		explanationB: "Many factors can affect your credit score. The answer is all of the above. A good credit score can allow you to have greater finacial freedom, and will increase your likelihood of being able to get loans and new credit cards.",
		explanationC: "Good job, this is the correct answer. A good credit score can allow you to have greater finacial freedom, and will increase your likelihood of being able to get loans and new credit cards.",
		imageSource:"images/creditscorerangenerdwallet.jpg",
		selectedAnswerChoice: ''
	},
	{
    questionID: 8,
		question: "Interest is a value that increases the value of money lent in exchange for delaying the payment of the debt. Credit card interests has one of the highest interest rates. Which of the following best matches the average credit card interest rate in America? ",
		a: "5.75%",
		b: "10.99%",
		c: "14.65%",
		explanation: "",
		explanationA: "5.75% is incorrect because it is too low. Since credit card debt averages around 14.65%, paying the minimum payments of 1-3% is simply not enough. To avoid this situation, it is vital to not spend money that is not currently available on your credit card.",
		explanationB: "10.99% is incorrect because it is too low. Since credit card debt averages around 14.65%, paying the minimum payments of 1-3% is simply not enough. To avoid this situation, it is vital to not spend money that is not currently available on your credit card.",
		explanationC: "14.65% is the correct answer choice. This means that every month in which you dont pay credit card debt, your debt increases on average by 14.65%. This can drastically increase your debts. Make sure not to be late on your credit card payments!",
		imageSource:"images/creditCards.jpg",
		selectedAnswerChoice: ''
	},
	{
  	questionID: 9,
		question: "The New York Stock Exchange is the primary stock marketplace in the US, where trades go on through the day. What time can you start trading stocks in the US?",
		a: "7:30 AM Eastern Time",
		b: "9:30 AM Eastern Time",
		c: "10 AM Eastern Time",
		explanation: "",
		explanationA: "This choice is incorrect. The market opens at 9:30 AM Eastern Time and closes at 4 PM Eastern Time. During this time, stocks are actively traded throughout the day.",
		explanationB: "Good job, this is the correct answer. The market opens at 9:30 AM Eastern Time and closes at 4 PM Eastern Time. During this time, stocks are actively traded throughout the day.",
		explanationC: "This choice is incorrect. The market opens at 9:30 AM Eastern Time and closes at 4 PM Eastern Time. During this time, stocks are actively traded throughout the day.",
		imageSource:"images/stock-1863880_1920.jpg",
		selectedAnswerChoice: ''
	},
	{
  	questionID: 10,
		question: "Based on the 50/30/20 rule for allocating resources, which of the following percentages should be devoted to savings?",
		a: "50",
		b: "30",
		c: "20",
		explanation: "",
		explanationA: "The correct answer is 20%. Remember, the 50/30/20 budget rule states that you should spend 50% of your after-tax pay on needs, 30% on wants, and 20% on savings",
		explanationB: "The correct answer is 20%. Remember, the 50/30/20 budget rule states that you should spend 50% of your after-tax pay on needs, 30% on wants, and 20% on savings",
		explanationC: "Good Job! Remember, the 50/30/20 budget rule states that you should spend 50% of your after-tax pay on needs, 30% on wants, and 20% on savings",
		imageSource:"images/savings.jpg",
		selectedAnswerChoice: ''
	}
];


// this get function is short for the getElementById function  
function get(x) {
	return document.getElementById(x);
}


// this function renders a question for display on the page
function renderQuestion() {
	var question, mcA, mcB, mcC;

	clearExplanation();

	quizQuestion = get("quizQuestion");

	//Checks if quiz is over
	if (pos >= questions.length) {
		finishQuiz();

		// stops rest of renderQuestion function running when test is completed
		return false;
	}

	questionID = pos + 1;

	get("test_status").innerHTML = "Question " + questionID + " of " + questions.length;

	question = questions[pos].question;
	mcA = questions[pos].a;
	mcB = questions[pos].b;
	mcC = questions[pos].c;
	img = questions[pos].imageSource;

	// display the question
	quizQuestion.innerHTML = "<h3>" + question + "</h3>";
	// display the answer options
	// the += appends to the data we started on the line above


	quizQuestion.innerHTML += "<label> <input type='radio' name='choices' value='a'> " + mcA + "</label><br>";
	quizQuestion.innerHTML += "<label> <input type='radio' name='choices' value='b'> " + mcB + "</label><br>";
	quizQuestion.innerHTML += "<label> <input type='radio' name='choices' value='c'> " + mcC + "</label><br><br>";

	// display image
	quizQuestion.innerHTML += '<img src= "' + img + '"  style="height:128px;">'

	submitAnswer.innerHTML += "<button onclick='proccessAnswer()'>Submit Answer</button>";
}

function proccessAnswer() {
	setSelectedAnswerChoice();
	removeSubmitButton();

	console.log(questions[pos]);

	questionExplanation();

	// changes position of which character user is on
	pos++;

	// then the renderQuestion function runs again to go to next question upon click of button
	explanation.innerHTML += "<button onclick='renderQuestion()'>Continue</button>";
}

function removeSubmitButton() {
	submitAnswer.innerHTML = "";
}

function clearExplanation() {
	get("explanation").style.display = "none";
	explanation.innerHTML = "";
}

// put selected answer choice into questions array
function setSelectedAnswerChoice() {
	choices = document.getElementsByName("choices");

	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}

	questions[pos].selectedAnswerChoice = choice;
}

function questionExplanation() {
	get("explanation").style.display = "block";
	var choice = questions[pos].selectedAnswerChoice;

	var exp = "";
	// gives explanation for different answer choices
	if (choice === 'a') {
		exp = questions[pos].explanationA;
	}
	else if (choice === 'b') {
		exp = questions[pos].explanationB;
	}
	else if (choice === 'c') {
		exp = questions[pos].explanationC;
	}
	explanation.innerHTML += exp + "<br><br>"
	questions[pos].explanation = exp;
}

function finishQuiz() {
	get("test_status").innerHTML = "Simulation complete";

	quizQuestion.innerHTML = "Here is a summary of your choices!<br>Answers you chose will be in blue<br><br>";

	var i;
	for (i = 0; i < questions.length; i++) {
		question = questions[i];
		quizQuestion.innerHTML += "Question " + question.questionID + "<br>"
		quizQuestion.innerHTML += question.question + "<br><br>";

		choice = question.selectedAnswerChoice;
		if (choice === 'a') {
			quizQuestion.innerHTML += "<span style='color:blue'>" + question.a + "</span><br>"
		}
		else {
			quizQuestion.innerHTML += question.a + "<br>"
		}

		if (choice === 'b') {
			quizQuestion.innerHTML += "<span style='color:blue'>" + question.b + "</span><br>"
		}
		else {
			quizQuestion.innerHTML += question.b + "<br>"
		}

		if (choice === 'c') {
			quizQuestion.innerHTML += "<span style='color:blue'>" + question.c + "</span><br>"
		}
		else {
			quizQuestion.innerHTML += question.c + "<br>"
		}

		quizQuestion.innerHTML += "<br>"
		quizQuestion.innerHTML += question.explanation + "<br>";
		quizQuestion.innerHTML += "<br><hr><br>"
	}

	// resets the variable to allow users to restart the test
	pos = 0;
	correct = 0;
}


// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);