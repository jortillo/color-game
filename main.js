var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColor(clickedColor);
            }
            else{
                messageDisplay.textContent = "Try Again!"
                this.style.backgroundColor = "#212121";
            }
        })
    }
}

function reset(){
    h1.style.backgroundColor = "steelblue";
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a random color from color array
    pickedColor = pickColor();
    
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
}

resetButton.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a random color from color array
    pickedColor = pickColor();
    
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;


function changeColor(color){
    for(var i = 0; i < color.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length); 

    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r +", " + g + ", " + b + ")";
}