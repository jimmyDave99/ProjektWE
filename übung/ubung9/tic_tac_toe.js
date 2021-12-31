/*
 * source : https://bl.ocks.org/kerryrodden/c456439dfbe5dcacb74f79af8df66653
 */

const GRID_DIMENSION = 3;
const CELL_SIZE = 100;
const MARGIN = 30;

function createSVGLine([x1, y1], [x2, y2]) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    return line;
}

function createSVGCross(size) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const line1 = createSVGLine([-size, -size], [size, size]);
    const line2 = createSVGLine([-size, size], [size, -size]);
    g.appendChild(line1);
    g.appendChild(line2);
    return g;
}

class Tic_Tac_Toe {

    constructor() {
        this.boardState = new Array(GRID_DIMENSION).fill(null).map(column => new Array(GRID_DIMENSION).fill(null));
        this.turn = 1;
        this.gameOver = false;
        this.filledSquares = 0;
        this.boardView = this.initializeBoardView();
        this.displayMessage('Spieler 1 spiel zuerst');
        this.boardView.addEventListener('click', event => {
            const gridX = Math.floor((event.pageX - MARGIN) / CELL_SIZE);
            const gridY = Math.floor((event.pageY - MARGIN) / CELL_SIZE);
            this.handleTurn(gridX, gridY);
        });
    }

    initializeBoardView() {
        const div = document.getElementById('spiel');
        const boardSize = GRID_DIMENSION * CELL_SIZE;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', boardSize + (MARGIN * 2));
        svg.setAttribute('height', boardSize + (MARGIN * 2));
        div.appendChild(svg);
        const board = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        board.setAttribute('transform', 'translate(' + MARGIN + ',' + MARGIN + ')');
        svg.appendChild(board);
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', boardSize);
        rect.setAttribute('height', boardSize);
        rect.setAttribute('fill', 'white');
        board.appendChild(rect);
        for (let i = 1; i < GRID_DIMENSION; i++) {
            let line1 = createSVGLine([CELL_SIZE * i, 0], [CELL_SIZE * i, boardSize]);
            let line2 = createSVGLine([0, CELL_SIZE * i], [boardSize, CELL_SIZE * i]);
            line1.setAttribute('class', 'grid');
            board.appendChild(line1);
            line2.setAttribute('class', 'grid');
            board.appendChild(line2);
        }
        return board;
    }

    handleTurn(gridX, gridY) {
        if (this.gameOver || this.boardState[gridX][gridY] !== null) {
            return;
        }
        const symbol = this.createPlayerSymbol(gridX, gridY);
        this.boardView.appendChild(symbol);
        this.boardState[gridX][gridY] = this.turn;
        this.filledSquares++;

        if (this.playerHasWon()) {
            this.gameOver = true;
            this.displayMessage('Player ' + this.turn + ' has won!');
        } else if (this.filledSquares === GRID_DIMENSION * GRID_DIMENSION) {
            this.gameOver = true;
            this.displayMessage('The game ended in a draw');
        } else {
            // It's the other player's turn.
            this.changeTurn();
        }
    }

    changeTurn() {
        this.turn = this.turn % 2 + 1;
        this.displayMessage('Spieler ' + this.turn);
    }
    createPlayerSymbol(gridX, gridY) {
        const offset = CELL_SIZE / 2;
        const symbolSize = CELL_SIZE / 5;
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', 'translate(' + (gridX * CELL_SIZE + offset) + ',' + (gridY * CELL_SIZE + offset) + ')');
        g.setAttribute('class', 'player' + this.turn);
        if (this.turn === 1) {
            const cross = createSVGCross(symbolSize);
            g.appendChild(cross);
        } else {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('r', symbolSize);
            g.appendChild(circle);
        }
        return g;
    }

    playerHasWon() {
        if (this.boardState[0].some((cell, i) => this.boardState.every(row => row[i] === this.turn))) {
            return true;
        }
        if (this.boardState.some(column => column.every(cell => cell === this.turn))) {
            return true;
        }
        if (this.boardState.every((column, i) => this.boardState[i][i] === this.turn)) {
            return true;
        }
        if (this.boardState.every((column, i) => this.boardState[i][GRID_DIMENSION - 1 - i] === this.turn)) {
            return true;
        }
        return false;
    }

    displayMessage(nachricht) {
        document.getElementById('info').textContent = nachricht;
    }
}

new Tic_Tac_Toe();