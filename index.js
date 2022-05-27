let game;
let playerDecision;
let rock;
let paper;
let scissors;
let rpsTimeout;
let computerDecision;
let finalComputerDecision;
let playerType;
let playerNumber;
let computerNumber;
let finalComputerNumber;
let computerType;
let sum;
let gameType;
let finalComputerType;

let rpsButton = document.getElementById("rpsButton");
let buttonSound = new Audio("./Button Click Sound.mp3");
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let playerDecisionText = document.getElementById("playerDecision");
let gtnButton = document.getElementById("gtnButton");
let oeButton = document.getElementById("oeButton");
let oddButton = document.getElementById("oddButton");
let evenButton = document.getElementById("evenButton");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let button0 = document.getElementById("button0");
let reloadButton = document.getElementById("reloadButton");
let easyButton = document.getElementById("easyButton");
let hardButton = document.getElementById("hardButton");;

window.onload = windowLoad();

function windowLoad() {
    game = null;
    playerDecision = null;
    rock = "Rock";
    paper = "Paper";
    scissors = "Scissors";
    computerDecision = null;
    finalComputerDecision = null;
    playerType = null;
    playerNumber = null;
    computerNumber = null;
    finalComputerNumber = null;
    computerNumber = null;
    sum = null;
    gameType = null;


    rpsButton.style.display = "block";
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    gtnButton.style.display = "block";
    oeButton.style.display = "block";
    evenButton.style.display = "none";
    oddButton.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";
    reloadButton.style.display = "none";
    easyButton.style.display = "none";
    hardButton.style.display = "none";
}

function keyRPS() {
    buttonSound.play();

    game = "RPS";

    if (gameType === null) {
        easyButton.style.display = "block";
        hardButton.style.display = "block";
        rpsButton.style.display = "none";
        gtnButton.style.display = "none";
        oeButton.style.display = "none";
        tttButton.style.display = "none";
    }
}
function keyGTN() {
    buttonSound.play();

    game = "GTN";

    if (gameType === null) {
        easyButton.style.display = "block";
        hardButton.style.display = "block";
        rpsButton.style.display = "none";
        gtnButton.style.display = "none";
        oeButton.style.display = "none";
        tttButton.style.display = "none";
    }
}
function keyOE() {
    buttonSound.play();

    game = "OE";

    if (gameType === null) {
        easyButton.style.display = "block";
        hardButton.style.display = "block";
        rpsButton.style.display = "none";
        gtnButton.style.display = "none";
        oeButton.style.display = "none";
        tttButton.style.display = "none";
    }
}

function keyRock() {
    buttonSound.play();

    if (playerDecision === null) {
        playerDecision = rock;
    }

    clearTimeout(rpsTimeout);
    computersDecision();

    document.getElementById("playerDecision").innerHTML = "Player has chosen: " + playerDecision;
}
function keyPaper() {
    buttonSound.play();

    if (playerDecision === null) {
        playerDecision = paper;
    }

    clearTimeout(rpsTimeout);
    computersDecision();

    document.getElementById("playerDecision").innerHTML = "Player has chosen: " + playerDecision;
}
function keyScissors() {
    buttonSound.play();

    if (playerDecision === null) {
        playerDecision = scissors;
    }

    clearTimeout(rpsTimeout);
    computersDecision();

    document.getElementById("playerDecision").innerHTML = "Player has chosen: " + playerDecision;
}

function computersDecision() {
    if (gameType === "easy") {
        if (computerDecision === null) {
            computerDecision = Math.floor((Math.random() * 3) + 1);

            if (computerDecision === 1) {
                finalComputerDecision = rock;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }
            if (computerDecision === 2) {
                finalComputerDecision = paper;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }
            if (computerDecision === 3) {
                finalComputerDecision = scissors;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }

            resultF();
        }
    }
    if (gameType === "hard") {
        if (computerDecision === null) {
            if (playerDecision === rock) {
                finalComputerDecision = paper;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }
            if (playerDecision === paper) {
                finalComputerDecision = scissors;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }
            if (playerDecision === scissors) {
                finalComputerDecision = rock;

                document.getElementById("computerDecision").innerHTML = "Computer has chosen: " + finalComputerDecision;
            }

            resultF();
        }
    }
}

function resultF() {
    if (playerDecision === rock) {
        if (finalComputerDecision === rock) {
            document.getElementById("result").innerHTML = "Tie!";
        } else if (finalComputerDecision === paper) {
            document.getElementById("result").innerHTML = "Computer Wins!";
        } else if (finalComputerDecision === scissors) {
            document.getElementById("result").innerHTML = "Player Wins!";
        }
    }

    if (playerDecision === paper) {
        if (finalComputerDecision === rock) {
            document.getElementById("result").innerHTML = "Player Wins!";
        } else if (finalComputerDecision === paper) {
            document.getElementById("result").innerHTML = "Tie!";
        } else if (finalComputerDecision === scissors) {
            document.getElementById("result").innerHTML = "Computer Wins!";
        }
    }

    if (playerDecision === scissors) {
        if (finalComputerDecision === rock) {
            document.getElementById("result").innerHTML = "Computer Wins!";
        } else if (finalComputerDecision === paper) {
            document.getElementById("result").innerHTML = "Player Wins!";
        } else if (finalComputerDecision === scissors) {
            document.getElementById("result").innerHTML = "Tie!";
        }
    }
}

function keyOdd() {
    playerType = "odd";
    computerType = "even";

    oddButton.style.display = "none";
    evenButton.style.display = "none";
    button1.style.display = "block";
    button2.style.display = "block";
    button3.style.display = "block";
    button4.style.display = "block";
    button5.style.display = "block";
    button6.style.display = "block";
    button7.style.display = "block";
    button8.style.display = "block";
    button9.style.display = "block";
    button0.style.display = "block";

    document.getElementById("playerDecision").innerHTML = "Player chose " + playerType;
}
function keyEven() {
    playerType = "even";
    computerType = "odd";

    oddButton.style.display = "none";
    evenButton.style.display = "none";
    button1.style.display = "block";
    button2.style.display = "block";
    button3.style.display = "block";
    button4.style.display = "block";
    button5.style.display = "block";
    button6.style.display = "block";
    button7.style.display = "block";
    button8.style.display = "block";
    button9.style.display = "block";
    button0.style.display = "block";

    document.getElementById("playerDecision").innerHTML = "Player chose " + playerType;
}

function key1() {
    playerNumber = 1;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key2() {
    playerNumber = 2;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key3() {
    playerNumber = 3;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key4() {
    playerNumber = 4;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key5() {
    playerNumber = 5;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key6() {
    playerNumber = 6;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key7() {
    playerNumber = 7;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key8() {
    playerNumber = 8;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key9() {
    playerNumber = 9;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}
function key0() {
    playerNumber = 0;

    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    button9.style.display = "none";
    button0.style.display = "none";

    computerNumber = Math.floor(Math.random() * 10);

    switch (computerNumber) {
        case 0:
            finalComputerNumber = 1;
            break;
        case 1:
            finalComputerNumber = 2;
            break;
        case 2:
            finalComputerNumber = 3;
            break;
        case 3:
            finalComputerNumber = 4;
            break;
        case 4:
            finalComputerNumber = 5;
            break;
        case 5:
            finalComputerNumber = 6;
            break;
        case 6:
            finalComputerNumber = 7;
            break;
        case 7:
            finalComputerNumber = 8;
            break;
        case 8:
            finalComputerNumber = 9;
            break;
        case 9:
            finalComputerNumber = 0;
            break;
        default:
            location.reload();
    }

    sum = playerNumber + finalComputerNumber;

    if (sum % 2 === 0) {
        if (playerType === "even") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    } else {
        if (playerType === "odd") {
            document.getElementById("result").innerHTML = "Player won!";
        } else {
            document.getElementById("result").innerHTML = "Computer won!";
        }
    }

    if (gameType === "easy") {
        document.getElementById("playerDecision").innerHTML = "Player chose " + playerType + " and " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer got " + computerType + " and chose " + finalComputerNumber;
    } else {
        document.getElementById("playerDecision").innerHTML = "Player got " + playerType + " and chose " + playerNumber;
        document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType + " and " + finalComputerNumber;
    }
}

function keyEasy() {
    gameType = "easy";
    easyButton.style.display = "none";
    hardButton.style.display = "none";

    if (game === "RPS") {
        rockButton.style.display = "block";
        paperButton.style.display = "block";
        scissorsButton.style.display = "block";
        reloadButton.style.display = "block";

        document.getElementById("playerDecision").innerHTML = "Player has chosen:";

        altRock();

        function altRock() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + rock;
            rpsTimeout = setTimeout(altPaper, 100);
        }
        function altPaper() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + paper;
            rpsTimeout = setTimeout(altScissors, 100);
        }
        function altScissors() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + scissors;
            rpsTimeout = setTimeout(altRock, 100);
        }
    }
    if (game === "GTN") {
        setTimeout(function() {
            playerDecision = parseInt(prompt("Guess the number between 1 and 10 (included)"));
            computerDecision = Math.floor((Math.random() * 10) + 1);
            reloadButton.style.display = "block";
    
            document.getElementById("computerDecision").innerHTML = "The number is: " + computerDecision;
            document.getElementById("playerDecision").innerHTML = "Player has chosen the number: " + playerDecision;
    
            if (isNaN(playerDecision) === true) {
                location.reload();
            }
    
            if (playerDecision === computerDecision) {
                document.getElementById("result").innerHTML = "Player chose the correct number!";
            } else {
                document.getElementById("result").innerHTML = "Player didn't chose the correct number!";
            }
        }, 1);
    }
    if (game === "OE") {
        reloadButton.style.display = "block";
        evenButton.style.display = "block";
        oddButton.style.display = "block";
    }
}
function keyHard() {
    gameType = "hard";
    easyButton.style.display = "none";
    hardButton.style.display = "none";

    if (game === "RPS") {
        rockButton.style.display = "block";
        paperButton.style.display = "block";
        scissorsButton.style.display = "block";
        reloadButton.style.display = "block";

        document.getElementById("playerDecision").innerHTML = "Player has chosen:";

        altRock();

        function altRock() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + rock;
            rpsTimeout = setTimeout(altPaper, 100);
        }
        function altPaper() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + paper;
            rpsTimeout = setTimeout(altScissors, 100);
        }
        function altScissors() {
            document.getElementById("playerDecision").innerHTML = "Player has chosen: " + scissors;
            rpsTimeout = setTimeout(altRock, 100);
        }
    }
    if (game === "GTN") {
        setTimeout(function() {
            playerDecision = parseInt(prompt("Guess the number between 1 and 100 (included)"));
            computerDecision = Math.floor((Math.random() * 100) + 1);
            reloadButton.style.display = "block";
    
            document.getElementById("computerDecision").innerHTML = "The number is: " + computerDecision;
            document.getElementById("playerDecision").innerHTML = "Player has chosen the number: " + playerDecision;
    
            if (isNaN(playerDecision) === true) {
                location.reload();
            }
    
            if (playerDecision === computerDecision) {
                document.getElementById("result").innerHTML = "Player chose the correct number!";
            } else {
                document.getElementById("result").innerHTML = "Player didn't chose the correct number!";
            }
        }, 1);
    }
    if (game === "OE") {
        reloadButton.style.display = "block";
        button1.style.display = "block";
        button2.style.display = "block";
        button3.style.display = "block";
        button4.style.display = "block";
        button5.style.display = "block";
        button6.style.display = "block";
        button7.style.display = "block";
        button8.style.display = "block";
        button9.style.display = "block";
        button0.style.display = "block";

        finalComputerType = Math.floor(Math.random() * 2);

        if (finalComputerType === 0) {
            computerType = "odd";
            playerType = "even";

            document.getElementById("playerDecision").innerHTML = "Player got " + playerType;
            document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType;
        } else if (finalComputerType === 1) {
            computerType = "even";
            playerType = "odd";

            document.getElementById("playerDecision").innerHTML = "Player got " + playerType;
            document.getElementById("computerDecision").innerHTML = "Computer chose " + computerType;
        } else {
            location.reload;
        }
    }
}
