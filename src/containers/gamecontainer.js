import Game from '../components/game';
import { connect } from 'react-redux';
import { jumpTo, squareClick } from '../redux/actions';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        jumpTo: step => { dispatch(jumpTo(step))},
        handleClick: number => { dispatch(squareClick(number))}
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;