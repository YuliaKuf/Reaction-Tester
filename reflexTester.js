let startTime = new Date().getTime();
let bestTime = 10000;
let w = window.innerWidth;
let h = window.innerHeight;
let randomWidth = 50 + "px";
let randomHeight = 50 + "px";
let randomRadius = "50%";

const shape = document.getElementById("changingShape");
const timeCount = document.getElementById("timeCounter");

//Functaion to make our random shape appear
function makeShapeAppear() {
  shape.style.display = "block";
  startTime = new Date().getTime();
}

function callToMakeShapeAppear() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

function getRandomshape() {
  return Math.random() * 350 + "px";
}
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeShape() {
  shape.style.width = getRandomshape();
  shape.style.height = getRandomshape();
  shape.style.borderRadius = getRandomshape();
  shape.style.backgroundColor = getRandomColor();
}

//First time the shape will appear
callToMakeShapeAppear();

//ON Shape Click
shape.onclick = function () {
  shape.style.display = "none";

  let endTime = new Date().getTime();
  let timeElapsed = (endTime - startTime) / 1000;

  if (timeElapsed < bestTime) {
    bestTime = timeElapsed;

    alert("You Beat the best time! with a new record of: " + bestTime);
  } else {
    alert(
      "Good luck beating the best score next time best score is curently: " +
        bestTime +
        " and your score is: " +
        timeElapsed
    );
  }

  timeCount.innerHTML = "Time Count: " + timeElapsed;

  changeShape();

  //Changing the location
  let randomTop =
    Math.floor(Math.random() * (h - 400 - parseInt(randomHeight))) + "px";
  let randomLeft =
    Math.floor(Math.random() * (w - parseInt(randomWidth))) + "px";
  shape.style.top = randomTop;
  shape.style.left = randomLeft;

  startTime = new Date().getTime();

  callToMakeShapeAppear();
};
