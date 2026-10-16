// ===== DOM References =====
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const clearScoreBtn = document.querySelector("#clear-score-btn");
const msgContainer = document.querySelector("#msg-container");
const msg = document.querySelector("#msg");
const resultIcon = document.querySelector("#result-icon");
const turnSymbol = document.querySelector("#turn-symbol");
const turnBadge = document.querySelector("#turn-badge");
const scoreOEl = document.querySelector("#score-o-val");
const scoreXEl = document.querySelector("#score-x-val");

// ===== Game State =====
let turnO = true;   // true = Player O's turn, false = Player X's turn
let count = 0;       // number of moves made
let scores = { O: 0, X: 0 };
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// ===== Update Turn Indicator =====
const updateTurnIndicator = () => {
    turnSymbol.textContent = turnO ? "O" : "X";
    turnBadge.className = `turn-badge ${turnO ? "player-o" : "player-x"}`;
};

// ===== Box Click Handler =====
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.disabled || gameOver) return;

        const currentPlayer = turnO ? "O" : "X";
        box.innerText = currentPlayer;
        box.classList.add(turnO ? "played-o" : "played-x");
        box.disabled = true;
        count++;

        const winResult = checkWinner();
        if (winResult) {
            highlightWinners(winResult.pattern);
            setTimeout(() => showWinner(winResult.winner), 400);
            gameOver = true;
            return;
        }

        if (count === 9) {
            gameDraw();
            gameOver = true;
            return;
        }

        turnO = !turnO;
        updateTurnIndicator();
    });
});

// ===== Check Winner =====
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const v1 = boxes[a].innerText;
        const v2 = boxes[b].innerText;
        const v3 = boxes[c].innerText;

        if (v1 !== "" && v1 === v2 && v2 === v3) {
            return { winner: v1, pattern };
        }
    }
    return null;
};

// ===== Highlight Winning Cells =====
const highlightWinners = (pattern) => {
    pattern.forEach((idx) => {
        boxes[idx].classList.add("winning-cell");
    });
};

// ===== Show Winner Overlay =====
const showWinner = (winner) => {
    msg.innerText = `🎉 Player ${winner} Wins!`;
    resultIcon.textContent = winner === "O" ? "🟣" : "🩷";
    msgContainer.classList.remove("hide");
    disableBoxes();

    // Update score with bump animation
    scores[winner]++;
    const scoreEl = winner === "O" ? scoreOEl : scoreXEl;
    scoreEl.textContent = scores[winner];
    scoreEl.classList.remove("bump");
    void scoreEl.offsetWidth; // force reflow for re-animation
    scoreEl.classList.add("bump");
};

// ===== Draw =====
const gameDraw = () => {
    msg.innerText = "It's a Draw!";
    resultIcon.textContent = "🤝";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// ===== Disable All Boxes =====
const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

// ===== Enable / Reset All Boxes =====
const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
        box.className = "box"; // remove played-o, played-x, winning-cell
    });
};

// ===== Reset Game (keep scores) =====
const resetGame = () => {
    turnO = true;
    count = 0;
    gameOver = false;
    enableBoxes();
    msgContainer.classList.add("hide");
    updateTurnIndicator();
};

// ===== Clear Scores =====
const clearScores = () => {
    scores = { O: 0, X: 0 };
    scoreOEl.textContent = "0";
    scoreXEl.textContent = "0";
    resetGame();
};

// ===== Event Listeners =====
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
clearScoreBtn.addEventListener("click", clearScores);

// ===== Init =====
updateTurnIndicator();
