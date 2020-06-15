/*

    N220 Section 25750
    Harmanjot Singh
    Mixmillion Colors
    11 April 2020

*/

// object to store the controls
const controls = {
    // output divs
    outputDivOne: null,
    outputDivTwo: null,
    outputDivThree: null,
    // heading divs
    redDiv: null,
    greenDiv: null,
    blueDiv: null,
    // red button total
    addRedTotal: 0,
    // green button total
    addGreenTotal: 0,
    // blue button total
    addBlueTotal: 0
}

// main function
function main() {
    // heading
    document.body.innerHTML = "<h1>Mixamillion Colors</h1>";

    // call all the necessary functions
    createDivOne();
    createDivTwo();
    createRedHead();
    redBtnOne();
    redBtnTwo();
    redBtnThree();
    createGreenHead();
    greenBtnOne();
    greenBtnTwo();
    greenBtnThree();
    createBlueHead();
    blueBtnOne();
    blueBtnTwo();
    blueBtnThree();

}

// create first div
function createDivOne(){
    // create the div
    controls.outputDivOne = document.createElement("div");
    // background color
    controls.outputDivOne.style.backgroundColor = "black";
    // width
    controls.outputDivOne.style.width = "800px";
    // height
    controls.outputDivOne.style.height = "200px";
    // margin
    controls.outputDivOne.style.marginBottom = "10px";
    // append it to the document body
    document.body.appendChild(controls.outputDivOne);
}

// create the second div
function createDivTwo() {
    // create the div
    controls.outputDivTwo = document.createElement("div");
    // width
    controls.outputDivTwo.style.width = "800px";
    // height
    controls.outputDivTwo.style.height = "50px";
    // RGB text
    controls.outputDivTwo.innerHTML += "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";
    // border 
    controls.outputDivTwo.style.border = "4px solid black";
    // bottom margin
    controls.outputDivTwo.style.marginBottom = "30px";
    // append it to the document body
    document.body.appendChild(controls.outputDivTwo);
}

// create the red heading
function createRedHead() {
    // create the div
    controls.redDiv = document.createElement("div");
    // height
    controls.redDiv.style.height = "30px";
    // Text
    controls.redDiv.innerHTML += "<h3 style='color: red;'>Red: </h3>";
    // append it to the document body
    document.body.appendChild(controls.redDiv);
    
}

// create the red +1 button
function redBtnOne() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+1";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "redOne(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the red +5 button
function redBtnTwo() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+5";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "redTwo(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the red +10 button
function redBtnThree() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+10";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "redThree(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the green heading
function createGreenHead() {
    // create the div
    controls.greenDiv = document.createElement("div");
    // height
    controls.greenDiv.style.height = "30px";
    // Text
    controls.greenDiv.innerHTML += "<h3 style='color: green;'>Green: </h3>";
    // append it to the document body
    document.body.appendChild(controls.greenDiv);
}

// create the green +1 button
function greenBtnOne() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+1";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "greenOne(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// crea the green +5 button
function greenBtnTwo() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+5";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "greenTwo(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the green +10 button
function greenBtnThree() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+10";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "greenThree(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the blue heading
function createBlueHead() {
    // create teh div
    controls.blueDiv = document.createElement("div");
    // height
    controls.blueDiv.style.height = "30px";
    // Text
    controls.blueDiv.innerHTML += "<h3 style='color: blue;'>Blue: </h3>";
    // append it to the document body
    document.body.appendChild(controls.blueDiv);
}

// create the blue +1 button
function blueBtnOne() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+1";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "blueOne(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the blue +5 button
function blueBtnTwo() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+5";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "blueTwo(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// create the blue +10 button
function blueBtnThree() {
    // create the button
    controls.outputDivThree = document.createElement("button");
    // font size
    controls.outputDivThree.style.fontSize = "12px";
    // width
    controls.outputDivThree.style.width = "100px";
    // height
    controls.outputDivThree.style.height = "32px";
    // position
    controls.outputDivThree.style.position = "relative";
    // button text
    controls.outputDivThree.innerHTML += "+10";
    // set the attribute
    controls.outputDivThree.setAttribute("onclick", "blueThree(event)");
    // append it to the document body
    document.body.appendChild(controls.outputDivThree);
}

// calcuate the red color
function redOne() {
    // add 1 to the red total
    controls.addRedTotal += 1;
    // green and blue total
    controls.addGreenTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calcuate the red color
function redTwo() {
    // add 5 to the red total
    controls.addRedTotal += 5;
    // green and blue total
    controls.addGreenTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calcuate the red color
function redThree() {
    // add 10 to the red total
    controls.addRedTotal += 10;
    // green and blue total
    controls.addGreenTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the green color
function greenOne() {
    // add 1 to the green total
    controls.addGreenTotal += 1;
    // red and blue total
    controls.addRedTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the green color
function greenTwo() {
    // add 5 to the green total
    controls.addGreenTotal += 5;
    // red and blue total
    controls.addRedTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the green color
function greenThree() {
    // add 10 to the green total
    controls.addGreenTotal += 10;
    // red and blue total
    controls.addRedTotal;
    controls.addBlueTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the blue color
function blueOne() {
    // add 1 to the blue total
    controls.addBlueTotal += 1;
    // red and green total
    controls.addRedTotal;
    controls.addGreenTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the blue color
function blueTwo() {
    // add 5 to the blue total
    controls.addBlueTotal += 5;
    // red and green total
    controls.addRedTotal;
    controls.addGreenTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}

// calculate the blue color
function blueThree() {
    // add 10 to the blue total
    controls.addBlueTotal += 10;
    // red and green total
    controls.addRedTotal;
    controls.addGreenTotal;

    // rgb set
    let rgbSet = "rgb("+ controls.addRedTotal + "," + controls.addGreenTotal + "," + controls.addBlueTotal +")";
    controls.outputDivOne.style.backgroundColor = rgbSet;
    // Text
    controls.outputDivTwo.innerHTML = "<p style='text-align:center;'> current color: rgb("+ controls.addRedTotal + ", " + controls.addGreenTotal + ", " + controls.addBlueTotal +")</p>";

    // For debugging purposes
    // console.log("r " + controls.addRedTotal + " g " + controls.addGreenTotal + " b " + controls.addBlueTotal);
}


