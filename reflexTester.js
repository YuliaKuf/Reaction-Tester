var startTime = new Date().getTime();
let bestTime = 10000;
let w = window.innerWidth;
let h = window.innerHeight;

//Functaion to make our random shape appear
function makeShapeAppear(){
    
    document.getElementById("changingShape").style.display = "block";
    startTime = new Date().getTime();

}

function callToMakeShapeAppear() {

    setTimeout(makeShapeAppear,Math.random() * 2000);

}

//First time the shape will appear
callToMakeShapeAppear();

//ON Shape Click 
document.getElementById("changingShape").onclick = function() {


    document.getElementById("changingShape").style.display = "none";

    let endTime = new Date().getTime();
    let timeElapsed = (endTime - startTime)/1000;

    if(timeElapsed < bestTime){

        bestTime = timeElapsed;

        alert("You Beat the best time! with a new record of: " +bestTime);
    } else {

        alert("Good luck beating the best score next time best score is curently: " + bestTime +" and your score is: " + timeElapsed); 
    }

    document.getElementById("timeCounter").innerHTML = "Time Count: " + timeElapsed;

    //Changing the shape - variables
    let randomWidth = Math.floor(Math.random() * 500 ) + 10 + "px";
    let randomHeight = Math.floor(Math.random() * 500 ) + 10 + "px";
    let randomRadius = Math.floor(Math.random() * 100 ) + "px";

    //Actually Changing the shape
    this.style.width = randomWidth;
    this.style.height = randomHeight;
    this.style.borderRadius = randomRadius;

    //Changing the color - variables
    let randomColor = "#" + Math.floor(Math.random() * 16777215 ).toString(16);

    //Actually Changing the color
    this.style.backgroundColor = randomColor;

    //Changing the location - variables
  
    let randomTop =  Math.floor(Math.random() * ((h-400) - parseInt(randomHeight))) + "px";
    let randomLeft = Math.floor(Math.random() * ((w)- parseInt(randomWidth))) + "px";

    //Actually Changing the location
    this.style.top = randomTop;
    this.style.left  = randomLeft;

    startTime = new Date().getTime();

    callToMakeShapeAppear();

}


