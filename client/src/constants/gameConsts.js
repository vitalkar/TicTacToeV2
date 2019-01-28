export const GAME = {
    INIT: 'INIT',
    SWITCH_TURN: 'SWITCH_TURN',
    // END: 'END',
    GET_BOARD_STATE: 'GET_BOARD_STATE',
    SET_GAME_STATE: 'SET_GAME_STATE',
    UPDATE_BOARD: 'UPDATE_BOARD',
    PLAY_TURN: 'PLAY_TURN',
    END_OF_GAME: 'END_OF_GAME',
};

export const WIN_SEQUENCE = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// export default GAME;