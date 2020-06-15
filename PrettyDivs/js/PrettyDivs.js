/*

    N220 Section 25750
    Harmanjot Singh
    Pretty Divs, All In a Row
    11 April 2020

*/

// object to store the controls
const controls = {
    // output divs
    parentDiv: null,
    outputDivOne: null,
    outputDivTwo: null,
    outputDivThree: null
}

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Pretty Divs, All In a Row</h1>";

    // parent div
    createParentDiv();
    // keep executing this loop until we reach 3 in counting
    for(let i = 0; i <= 2; i++) {
        if(i==0) { // create the first div by calling the function
            createDivOne("grey", "200px", "200px", "5px", "left");
        } else if(i==1) { // create the second div by calling the function
            createDivTwo("grey", "200px", "200px", "5px", "left");
        } else { // create the third div by calling the function
            createDivThree("grey", "200px", "200px", "5px", "left");
        }   
    }
}

// create parent div function
function createParentDiv() {
    // create the div
    controls.parentDiv = document.createElement("div");
    controls.parentDiv.id = "parentid";
    document.body.appendChild(controls.parentDiv);
}

// create div function
function createDivOne(bgColor, width, height, marginAllSides, move) {
    // create the div
    controls.outputDivOne = document.createElement("div");
    controls.outputDivOne.id = "red";
    // background color
    controls.outputDivOne.style.backgroundColor = bgColor;
    // width
    controls.outputDivOne.style.width = width;
    // height
    controls.outputDivOne.style.height = height;
    // margin
    controls.outputDivOne.style.margin = marginAllSides;
    // float
    controls.outputDivOne.style.float = move;
    // add the event listner function
    controls.parentDiv.addEventListener("click", changeColors)
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputDivOne);
}

// create div function
function createDivTwo(bgColor, width, height, marginAllSides, move) {
    // create the div
    controls.outputDivTwo = document.createElement("div");
    controls.outputDivTwo.id = "green";
    // background color
    controls.outputDivTwo.style.backgroundColor = bgColor;
    // width
    controls.outputDivTwo.style.width = width;
    // height
    controls.outputDivTwo.style.height = height;
    // margin
    controls.outputDivTwo.style.margin = marginAllSides;
    // float
    controls.outputDivTwo.style.float = move;
    // add the event listner function
    controls.parentDiv.addEventListener("click", changeColors)
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputDivTwo);
}

// create div function
function createDivThree(bgColor, width, height, marginAllSides, move) {
    // create the div
    controls.outputDivThree = document.createElement("div");
    controls.outputDivThree.id = "blue";
    // background color
    controls.outputDivThree.style.backgroundColor = bgColor;
    // width
    controls.outputDivThree.style.width = width;
    // height
    controls.outputDivThree.style.height = height;
    // margin
    controls.outputDivThree.style.margin = marginAllSides;
    // float
    controls.outputDivThree.style.float = move;
    // add the event listner function
    controls.parentDiv.addEventListener("click", changeColors)
    // append it to the document body
    controls.parentDiv.appendChild(controls.outputDivThree);
}

function changeColors(e) {
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target.id;
        if(clickedItem == "red") {
            controls.outputDivOne.style.backgroundColor = "red"; 
        } else if(clickedItem == "green") {
            controls.outputDivTwo.style.backgroundColor = "green";
        } else {
            controls.outputDivThree.style.backgroundColor = "blue";
        }
    }
    e.stopPropagation();
}

// // change the color function
// function colorRed(event) {
//     // background color
//     this.style.backgroundColor = "red"; 
// }

// // change the color function
// function colorGreen(event) {
//     // background color
//     this.style.backgroundColor = "green"; 
// }

// // change the color function
// function colorBlue(event) {
//     // background color
//     this.style.backgroundColor = "blue"; 
// }