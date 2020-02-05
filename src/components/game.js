import React from 'react';
import Board from './board';
import { calculateWinner } from '../redux/actions';

class Game extends React.Component {
    render() {
        const history = this.props.history;
        const current = history[this.props.stepNumber];
        const winner = calculateWinner(current.squares);
    
        const moves = history.map((step, move) => {
            const desc = move ?
            'Go to move #' + move :
            'Go to game start';
            return (
            <li key={move}>
                <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
            </li>
            );
        });
    
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }
    
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={i => this.props.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;