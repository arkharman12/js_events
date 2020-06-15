/*

    N220 Section 25750
    Harmanjot Singh
    Flash Cards
    11 April 2020

*/

// object to store the controls
const controls = {
    // output divs
    outputDiv: null,
    outputDivTwo: null,
    outputDivThree: null,
    outputDivFour: null
}

// array of objects with question and answers
let questions = [
    {
        question: "What two keys can’t open any door?", 
        answer: "A monkey and a donkey"
    },
    {
        question: "Which weighs more, a pound of feathers or a pound of bricks?", 
        answer: "Neither. They both weigh exactly one pound"
    },
    {
        question: "What has four eyes but can’t see?", 
        answer: "Mississippi"
    },
    {
        question: "Why aren’t koalas actual bears?", 
        answer: "The don’t meet the koalafications."
    }
];

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Flash Cards</h1>";

    // keep executing this loop until counting is finished
    for(let i = 0; i < questions.length; i++) {
        if(i==0) {
            // create the first button
            controls.outputDiv = document.createElement("button");
            // font size
            controls.outputDiv.style.fontSize = "18px";
            // width
            controls.outputDiv.style.width = "500px";
            // height
            controls.outputDiv.style.height = "32px";
            // bottom margin
            controls.outputDiv.style.marginBottom = "32px";
            // right margin
            controls.outputDiv.style.marginRight = "16px";
            // put the question in the button inner html
            controls.outputDiv.innerHTML += questions[i].question;
            // set the attribute
            controls.outputDiv.setAttribute("onclick", "answerOne(event)");
            // custom attribute
            controls.outputDiv.setAttribute("data-answerOne", String(questions[i].answer));
            // append it to the document body
            document.body.appendChild(controls.outputDiv);
        } else if (i==1) {
            // create the second button
            controls.outputDivTwo = document.createElement("button");
            // font size
            controls.outputDivTwo.style.fontSize = "18px";
            // width
            controls.outputDivTwo.style.width = "500px";
            // height
            controls.outputDivTwo.style.height = "32px";
            // bottom margin
            controls.outputDivTwo.style.marginBottom = "32px";
            // right margin
            controls.outputDivTwo.style.marginRight = "16px";
            // put the question in the button inner html
            controls.outputDivTwo.innerHTML += questions[i].question;
            // set the attribute
            controls.outputDivTwo.setAttribute("onclick", "answerTwo(event)");
            // custom attribute
            controls.outputDivTwo.setAttribute("data-answerTwo", String(questions[i].answer));
            // append it to the document body
            document.body.appendChild(controls.outputDivTwo);
        } else if (i==2) {
            // create the third button
            controls.outputDivThree = document.createElement("button");
            // font size
            controls.outputDivThree.style.fontSize = "18px";
            // width
            controls.outputDivThree.style.width = "500px";
            // height
            controls.outputDivThree.style.height = "32px";
            // bottom margin
            controls.outputDivThree.style.marginBottom = "32px";
            // right margin
            controls.outputDivThree.style.marginRight = "16px";
            // put the question in the button inner html
            controls.outputDivThree.innerHTML += questions[i].question;
            // set the attribute
            controls.outputDivThree.setAttribute("onclick", "answerThree(event)");
            // custom attribute
            controls.outputDivThree.setAttribute("data-answerThree", String(questions[i].answer));
            // append it to the document body
            document.body.appendChild(controls.outputDivThree);
        } else {
            // create the fourth button
            controls.outputDivFour = document.createElement("button");
            // font size
            controls.outputDivFour.style.fontSize = "18px";
            // width
            controls.outputDivFour.style.width = "500px";
            // height
            controls.outputDivFour.style.height = "32px";
            // bottom margin
            controls.outputDivFour.style.marginBottom = "32px";
            // right margin
            controls.outputDivFour.style.marginRight = "16px";
            // put the question in the button inner html
            controls.outputDivFour.innerHTML += questions[i].question;
            // set the attribute
            controls.outputDivFour.setAttribute("onclick", "answerFour(event)");
            // custom attribute
            controls.outputDivFour.setAttribute("data-answerFour", String(questions[i].answer));
            // append it to the document body
            document.body.appendChild(controls.outputDivFour);
        }
    }
}

// function for answer one
function answerOne(evt) {
    // get the answer one 
    let stringOne = evt.target.getAttribute("data-answerOne");
    // replace the existing div
    controls.outputDiv.innerHTML = stringOne;
}

// function for answer two
function answerTwo(evt) {
    // get the answer two 
    let stringTwo = evt.target.getAttribute("data-answerTwo");
    // replace the existing div
    controls.outputDivTwo.innerHTML = stringTwo;
}

// function for answer three
function answerThree(evt) {
    // get the answer three 
    let stringThree = evt.target.getAttribute("data-answerThree");
    // replace the existing div
    controls.outputDivThree.innerHTML = stringThree;
}

// function for answer four
function answerFour(evt) {
    // get the answer four 
    let stringFour = evt.target.getAttribute("data-answerFour");
    // replace the existing div
    controls.outputDivFour.innerHTML = stringFour;
}