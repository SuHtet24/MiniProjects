let cells = document.querySelectorAll('.cell');
let currentPlayer = 'O'; 
let moveAllowed = true;
let swapUsed = false; 

const resultDisplay = document.getElementById('result');

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => cells[index].textContent === player);
    });
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = ''; 
        cell.style.color = ''; 
    });
    currentPlayer = 'O'; 
    moveAllowed = true;
    swapUsed = false; 
    resultDisplay.textContent='';
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', function() {
        if (!moveAllowed) return; 

        if (!cell.textContent) { 
            cell.textContent = currentPlayer;
            cell.style.color = currentPlayer === 'O' ? 'red' : 'grey';

            if (checkWin(currentPlayer)) {
                resultDisplay.textContent = `勝者は ${currentPlayer}`;
                moveAllowed = false;
            } else if (Array.from(cells).every(cell => cell.textContent)) {
                resultDisplay.textContent=('引き分け');
                moveAllowed = false;
            } else {
                currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
            }
        } else if (cell.textContent !== currentPlayer && !swapUsed) { 
            let originalContent = cell.textContent;
            cell.textContent = currentPlayer;
            cell.style.color = currentPlayer === 'O' ? 'red' : 'grey';
            if (checkWin(currentPlayer)) {
                cell.textContent = originalContent;
                cell.style.color = originalContent === 'O' ? 'red' : 'grey';
            } else {
                swapUsed = true;
                currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
            }
        }
    });
});

document.getElementById('reset-button').addEventListener('click', resetGame);





