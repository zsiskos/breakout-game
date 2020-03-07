let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//sets initial location
let x = canvas.width/2;
let y = canvas.height-30;
//sets increments that x(-ve = left) and y(-ve = down) 
let dx = 2;
let dy = -2;
let ballRadius = 10;
//controllers height and width
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;
//controller buttons
let rightPressed = false;
let leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    //to make ball bounce off edges 
}

function drawPaddle() {
    ctx.beginPath();
    //to make box first 2 vals spcify the coordinates of top left corner on the box(x and y), the 2nd two ref the width and height
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD"
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //clears canvas of previously draw item
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    // every time it runs it changes in increments
    x += dx;
    y += dy;
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    } 
    //handles paddle movement
    if (rightPressed) {
        paddleX += 7;
    } else if (leftPressed) {
        paddleX -= 7;
    }
}

//Handles key press, when pressed down  = true, let go == false
function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

//event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



//makes a ball at setInterval
setInterval(draw, 10);






//stretch goals: - random colour every time it hits the wall







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
