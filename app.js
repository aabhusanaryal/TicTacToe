const container = document.querySelector("#container");
let char = "O";
let isGameOver = false;
const playButton = document.querySelector("#playButton");
const playAgain = document.querySelector("#playAgain");
const player1NameInput = document.querySelector("#player1Name");
const player2NameInput = document.querySelector("#player2Name");
const winData = document.querySelector("#winData");
const nameForm = document.querySelector("#nameForm");

const playerInfo = {
    O: { name: "Player 1", score: 0 },
    X: { name: "Player 2", score: 0 },
};

nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    playGame();
    console.log("Submited");
    //Show the grid
    container.style.display = "flex";
    //Hide the play button
    playButton.style.display = "none";
    player1Name.style.display = "none";
    player2Name.style.display = "none";
    player1Name = player1NameInput.value;
    player2Name = player2NameInput.value;
    playerInfo.O.name = player1Name;
    playerInfo.X.name = player2Name;
});

const charToggle = () => {
    char = char === "X" ? "O" : "X";
};

const valArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const gameOver = (winChar) => {
    //winChar is the winning character
    console.log(winChar);
    isGameOver = true;
    playAgain.style.display = "initial";
    winData.innerText = `${playerInfo[winChar].name} wins!!!`;
};

const checker = () => {
    // Checking Rows
    // First Row
    if (valArr[0][0] === valArr[0][1] && valArr[0][0] === valArr[0][2]) {
        gameOver(valArr[0][0]);
    }
    // Second Row
    if (valArr[1][0] === valArr[1][1] && valArr[1][0] === valArr[1][2]) {
        gameOver(valArr[1][0]);
    }
    // Third Row
    if (valArr[2][0] === valArr[2][1] && valArr[2][0] === valArr[2][2]) {
        gameOver(valArr[2][0]);
    }

    //Checking Cols
    // First Col
    if (valArr[0][0] === valArr[1][0] && valArr[0][0] === valArr[2][0]) {
        gameOver(valArr[0][0]);
    }
    // Second Col
    if (valArr[0][1] === valArr[1][1] && valArr[0][1] === valArr[2][1]) {
        gameOver(valArr[0][1]);
    }
    // Third Row
    if (valArr[0][2] === valArr[1][2] && valArr[0][2] === valArr[2][2]) {
        gameOver(valArr[0][2]);
    }

    // Checking Diagonal
    // Left to right
    if (valArr[0][0] === valArr[1][1] && valArr[0][0] === valArr[2][2]) {
        gameOver(valArr[0][0]);
    }
    // Right to left
    if (valArr[0][2] === valArr[1][1] && valArr[0][2] === valArr[2][0]) {
        gameOver(valArr[0][2]);
    }
};

function playGame() {
    //Creating 9 boxes
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //Creating and adding boxes
            const innerBox = document.createElement("div");
            innerBox.classList.add("unclickedBox");
            container.append(innerBox);

            //eventListener for boxes
            innerBox.addEventListener("click", () => {
                //checking if the box is unclicked
                if (
                    innerBox.getAttribute("class") === "unclickedBox" &&
                    !isGameOver
                ) {
                    //Makes clicked box unclickable
                    innerBox.classList.add("clickedBox");
                    innerBox.classList.remove("unclickedBox");
                    //Puts O or X
                    innerBox.innerText = char;
                    //Send the data to array
                    valArr[i][j] = char;
                    //Change Character
                    charToggle();
                    checker();
                }
            });
        }
    }
}

// playButton.addEventListener("click", () => {
//     playGame();
//     //Show the grid
//     container.style.display = "flex";
//     //Hide the play button
//     playButton.style.display = "none";
// });

// playGame();

// playAgain.addEventListener("click", () => {
//   container.innerHTML = "";
//   playGame();
// });

// playAgain.addEventListener("click", window.location.reload);
