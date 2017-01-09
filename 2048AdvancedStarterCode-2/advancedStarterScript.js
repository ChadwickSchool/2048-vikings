
//2D array initialized with sample values. To get a blank board initialize all the values to zero
//var board = [[2048,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var board = [];
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var R = '82';
var score = 0;
var gameStartAmount = 2;
var hScore = 0;



//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push(0);
		}
		board.push(innergrid);
	}
	for(var i = 0; i < gameStartAmount; i++)
	{
		addTile();
	}
	printBoard();

}

function addTile() {
	//place a 2 on a random spot in the board
	var x = Math.round(Math.random()*3); //get the function to keep running WHILE (hint hint) there's no 2 at that position
	var y = Math.round(Math.random()*3);
	while(board[x][y] !== 0)
	{
		x = Math.round(Math.random()*3); //get the function to keep running WHILE (hint hint) there's no 2 at that position
		y = Math.round(Math.random()*3);
	}
	board[x][y] = 2;
	console.log("x " + x + " y " + y);
}

function printBoard(){
	document.getElementById("score").innerHTML = "Score: " + score + "   " + "High Score " + hScore + "";
	document.getElementById("score").style.color = "";

	hScore == score;

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			//if the tile is not zero, put it on the board
			if(board[i][j] !== 0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else //it's a zero
			{
				document.getElementById(boardID).innerHTML = "";
			}
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#ff0400";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ff9000";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#faff00";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#6aff00";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#00ffcb";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#00c3ff";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#0021ff";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#a326d6";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#ff00d8";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#a3005f";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#f9d3ca";
					break;
				default:
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					//similar to the else statement. If none of the other cases execute, this statement will execute
			}
		}
	}
}
//show students an ascii conversion tool.
document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
    if (e.keyCode == UP_ARROW) {
        // // up arrow
				combineUp();
				for(var i=0; i < board.length; i++)
				{
					moveTilesUp();
				}
				addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        // console.log("Pressed down");
				combineDown();
				for(var i=0; i < board.length; i++)
				{
					moveTilesDown();
				}
				addTile();

    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
      //  console.log("Pressed left");
			combineLeft();
			for(var i=0; i < board.length; i++)
			{
				 moveTilesLeft();
			}
			addTile();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       console.log("Pressed right");
			 combineRight();
			for(var i=0; i < board.length; i++)
			{
				moveTilesRight();
			}
			addTile();

    }
		else if (e.keyCode == R) {
			hScore == score;
			resetGame();
			for(var i = 0; i < gameStartAmount; i++)
			{
				addTile();
			}
			score = 0;
		}
    printBoard(); //have to recall print board to get the board to update
};

function moveTilesUp()
{

    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
            }

        }

    }

}

function moveTilesDown()
{

    for(var r=3; r >= 0; r--)
    {
        for(var c=0; c < board[r].length; c++)
        {
            if(r !== 3 && board[r][c] !== 0 && board[r+1][c] === 0) //replace with while loop
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
            }

        }

    }

}

function moveTilesLeft()
{

    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
            }

        }

    }

}

function moveTilesRight()
{

    for(var r=0; r < board.length; r++)
    {
        for(var c=3; c >= 0; c--)
        {
            if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
            }

        }

    }

}

function combineUp()
{
	for(var r=0; r < board.length; r++)
	{
			for(var c=0; c<board[r].length; c++)
			{
				if(r !== 0  && board[r][c] !== 0 && board[r][c] === board[r-1][c])
				{
					var tileTotal = parseInt(board[r-1][c]) + parseInt(board[r][c]);
					updateScore(board[r-1][c]);
					updateHigh(board[r-1][c]);
					board[r-1][c] = tileTotal;
					board[r][c] = 0;

				}
			}
	}
}

function combineDown()
{
	for(var r=3; r >= 0; r--)
	{
			for(var c=0; c<board[r].length; c++)
			{
				if(r !== 3  && board[r][c] !== 0 && board[r][c] === board[r+1][c])
				{
					var tileTotal = parseInt(board[r+1][c]) + parseInt(board[r][c]);
					updateScore(board[r+1][c]);
					updateHigh(board[r+1][c]);
					board[r+1][c] = tileTotal;
					board[r][c] = 0;

				}
			}
	}
}

function combineLeft()
{
	for(var r=0; r < board.length; r++)
	{
			for(var c=0; c<board[r].length; c++)
			{
				if(c !== 0  && board[r][c] !== 0 && board[r][c] === board[r][c-1])
				{
					var tileTotal = parseInt(board[r][c-1]) + parseInt(board[r][c]);
					updateScore(board[r][c-1]);
					updateHigh(board[r][c-1]);
					board[r][c-1] = tileTotal;
					board[r][c] = 0;

				}
			}
	}
}

function combineRight()
{
	for(var r=0; r < board.length; r++)
	{
			for(var c=3; c >= 0; c--)
			{
				if(c !== 3  && board[r][c] !== 0 && board[r][c] === board[r][c+1])
				{
					var tileTotal = parseInt(board[r][c+1]) + parseInt(board[r][c]);
					updateScore(board[r][c+1]);
					updateHigh(board[r][c+1]);
					board[r][c+1] = tileTotal;
					board[r][c] = 0;

				}
			}
	}
}

function updateScore(newScore) {
	score+=newScore;
}

function resetGame(){
	{

	    for(var r=0; r < board.length; r++)
	    {
	        for(var c=0; c<board[r].length; c++)
	        {
						board[r][c] = 0;
	        }

	    }

	}
}

function updateHigh(theScore) {
	if(score > hScore)
	{
		hScore+=theScore;
	}
}
