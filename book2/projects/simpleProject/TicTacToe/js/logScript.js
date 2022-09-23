//Tic tac toe game 
let btn = document.querySelectorAll('button[class = size]');
let restart = document.getElementById('restart');
let modalWindow = document.querySelector(".modalWindow"); 
let showPlayer = document.querySelector("#player");

let clickedX  = false;                              //need for clickedk or not
let clickedOnce= false;                             //  check user click
let drawOrnot = 0;                                  // know draw or not
let board = Matrix(3, 3);                           // check empty values
let valObj = {};


// function userVal inithalize value
function userVal() {

    //old version js
    /* for(let i = 0;i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            if(!clickedX) {
                clickedX = true; 
                btn[i].innerHTML = "X";
                btn[i].style.verticalAlign = "top";
            }else {
                clickedX = false; 
                btn[i].innerHTML = "O";
                btn[i].style.verticalAlign = "top";
            }
        });
    } */

    //new js code
    btn.forEach((val, i) => {
        val.addEventListener("click",(e) => {
            if(!clickedX) {
                clickedX = true;              
                val.disabled = true;
                drawOrnot++;
                valObj[i] = "X";
                val.innerText = "X";
                val.style.verticalAlign= "top";

            }else {
                clickedX = false;
                val.disabled = true;
                drawOrnot++;
                valObj[i] = "O";
                val.innerText = "O";
                val.style.verticalAlign = "top";
            }
            
            //convert to matrix and check...
            let k = Object.keys(valObj); 


          //  if(+k[k.length - 1] == 8) {  егер барлыгы 9 толык болганда гана 
                for(let i =  0;i < 9; i++) {

                    if(i >= 0 && i < 3 ) {

                        board[0][i] = valObj[i];

                    }
                    else if(i >= 3 && i < 6) {

                        board[1][i - 3] = valObj[i];

                    }
                    else  if(i >= 6 && i < 9) {

                        board[2][i - 6] = valObj[i];

                    }
                }
           // }
            
            //show winner
            if(ticTacToeWinner(board, "X")) {
                showPlayer.innerText = "Player X win";
                modalWindow.style.display = "block";
                console.log(`Player X win`);
             
            }else if(ticTacToeWinner(board,"O")) {
                  showPlayer.innerText = "Player O win";
                  modalWindow.style.display = "block";
                console.log("Player O win");
            
            }else if(drawOrnot == 9) {
                draw();
            }



        }, true);


    });
}


//restart
function restartGame() {
    restart.addEventListener("click", () => {
        btn.forEach(items => {
            document.location.reload();
        });
    });
}



//draw  or  not 
function draw() {

        showPlayer.innerText = "Draw 🤝";
        modalWindow.style.display = "block";
        console.log("draw");
    
}

 

// create matrix 
function Matrix(rows, columns) {
    let jaggedarray = new Array(rows);

    for(let i = 0;i < columns;i++) {
        jaggedarray[i] = new Array(rows);

    }

    return jaggedarray;
}



//check tic tack toe functions 
function checkRow(rowArr, letter) {
    for(let i = 0; i < 3; i++) {
        if(rowArr[i] != letter) {       
                return false;                                 //check Rows
            }       
    }

    return true;
}

function checkColumn(gameBoardMatrix,columnIndex, letter) {
    for(let i = 0; i< 3; i++) {
        if(gameBoardMatrix[i][columnIndex] != letter) {
            return false;                                    // check column with get index
        }
    }

    return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {         
    let rowWin = checkRow(gameBoardMatrix[0], letter)    || 
                    checkRow(gameBoardMatrix[1], letter) ||
                    checkRow(gameBoardMatrix[2], letter);

    let colWin  = checkColumn(gameBoardMatrix, 0, letter) || 
                  checkColumn(gameBoardMatrix, 1, letter) || 
                  checkColumn(gameBoardMatrix, 2, letter);


    let diagonalWinLeftToRight = (gameBoardMatrix[0][0] == letter && 
                                    gameBoardMatrix[1][1] == letter &&
                                    gameBoardMatrix[2][2] == letter);

    let diagonalWinRightToLeft = (gameBoardMatrix[0][2] == letter &&
                                    gameBoardMatrix[1][1] == letter &&
                                    gameBoardMatrix[2][0] == letter);


    return rowWin || colWin        ||                         // cehck all combination 
            diagonalWinRightToLeft || diagonalWinLeftToRight;
}



//call function
userVal();
restartGame();
