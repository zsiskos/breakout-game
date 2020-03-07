var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//sets initial location
var x = canvas.width/2;
var y = canvas.height-30;
//sets increments that x(-ve = left) and y(-ve = down) 
var dx = 2;
var dy = -2;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //clears canvas of previously draw item
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    // every time it runs it changes in increments
    x += dx;
    y += dy;
}
//makes a ball at setInterval
setInterval(draw, 10);











// //ORIGINAL TUTORIAL CODE - KEEP FOR REFERENCE UNTIL NOT NEEDED

// //Makes a red square
// ctx.beginPath();
// //to make box first 2 vals spcify the coordinates of top left corner on the box, the 2nd two ref the width and height
// ctx.rect(200, 200, 100, 100);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// //makes a green circle
// ctx.beginPath();
// //Takes 6 parameters - x and y coordinates, arc radius, start and end angle, direction - false for clockwise, true for counter-clockwise)
// ctx.arc(140, 160, 40, 0, Math.PI*2, false);
// ctx.strokeStyle = "rgba(0, 68, 0, 1)";
// ctx.fillStyle = "green";
// ctx.stroke();
// ctx.fill();
// ctx.closePath();


// //makes a blue rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.fillStyle = "blue";
// ctx.stroke();
// ctx.fill();
// ctx.closePath();
