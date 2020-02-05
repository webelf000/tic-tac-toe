import { calculateWinner } from './actions';

const initState = {
    history: [
            {
                squares: Array(9).fill(null)
            }
        ],
        stepNumber: 0,
        xIsNext: true
}

function rootReducer(state=initState, action) {
    let tempstate = {...state};
    switch (action.type) {
        case "NEWGAME":
            return initState;
        case "SQUARE":
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[action.index]) {
                return;
            }
            squares[action.index] = state.xIsNext ? "X" : "O";
            tempstate.history = [
                ...history,
                {squares: squares}
            ];
            tempstate.stepNumber = history.length;
            tempstate.xIsNext = !state.xIsNext;
            return tempstate;
        case "JUMPTO":
            tempstate.stepNumber = action.step;
            tempstate.xIsNext = ((action.step % 2) === 0);
            return tempstate;
        default:
            return state;
    }
}
export default rootReducer;