const tictactoe = () => {

    const player1 = "X";
    const player2 = "O";  
    let turn = 0;

    let gameboard = [
        " ", " ", " ",
        " ", " ", " ",  
        " ", " ", " "
    ]

    const playerMove = (position, symbol) => {
        if (gameboard[position] === " ") {
            gameboard[position] = symbol;
            turn++;
        } else {
            console.log("Position already taken");
        }
    }

    const game = (position) => {
        while (!checkWinner()) {
            if (turn % 2 === 0) {
                playerMove(position, player1);
            } else {
                playerMove(position, player2);
            }
        }

        return checkWinner();
    }

    const checkWinner = () =>{
        let x = 0;
        let y = 0;
        let z = 0;

        for (let i = 0; i < 3; i++) {
            if (gameboard[x] === gameboard[x + 1] && gameboard[x + 1] === gameboard[x + 2] && gameboard[x] !== " ") {
                return gameboard[x];
            } 
            
            if (gameboard[y] === gameboard[y + 3] && gameboard[y + 3] === gameboard[y + 6] && gameboard[y] !== " ") {
                return gameboard[y];
            } 

            if (gameboard[z] === gameboard[z + 4] && gameboard[z + 4] === gameboard[z + 8] && gameboard[z] !== " ") {
                return gameboard[z];
            } else if (gameboard[z + 2] === gameboard[z + 4] && gameboard[z + 4] === gameboard[z + 6] && gameboard[z + 2] !== " ") {
                return gameboard[z + 2];
            }

            x += 3;
            y += 1;
            
        }

        return turn === 9 ? "Draw" : null;
    }

    return {
        game, 
        gameBoard
    }
}

