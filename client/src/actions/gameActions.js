import dispatcher from '../dispatcher/dispatcher';
import { GAME } from '../constants/gameConsts';

export const init = () => {
    dispatcher.dispatch({
        type: GAME.INIT
    });
};

export const playTurn = data => {
    dispatcher.dispatch({
        type: GAME.PLAY_TURN,
        data: data
    });
};

export const switchTurn = sign => {
    dispatcher.dispatch({
        type: GAME.SWITCH_TURN,
        data: sign
    });
};

export const notifyGameEnd = () => {
    dispatcher.dispatch({
        type: GAME.END_OF_GAME,
    });
};


export const setGameState = data => {
    dispatcher.dispatch({
        type: GAME.SET_GAME_STATE,
        data: data
    });
};

export const updateBoard = data => {
    dispatcher.dispatch({
        type: GAME.UPDATE_BOARD,
        data: data
    });
};

