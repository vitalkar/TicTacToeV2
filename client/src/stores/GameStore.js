import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import { GAME } from '../constants/gameConsts';

class GameStore extends EventEmitter {
    constructor() {
        super();
        
        // this.room = {};
        // this.players = [];
        this.currSign = '';
        this.board = [];    
    }

    updateBoard(data) {
        let [key, val] = data;
        this.board[key] = val;
    }

    handleActions(action) {
        switch (action.type) {
            case GAME.INIT:
                //set current sign
                this.emit(GAME.INIT);
                break;
            case GAME.SWITCH_TURN:
                //change current sign 
                
                break;
            case GAME.SET_GAME_STATE:

                // const [] = (action.data);
                this.emit(GAME.SET_GAME_STATE, action.data)
                
                break;

            case GAME.PLAY_TURN: 
                // this.emit(GAME.PLAY_TURN, this. );               
                break;
        
            case GAME.END_OF_GAME:                
                this.emit(GAME.END_OF_GAME);
                break;
        
            default:
                break;
        }
    }
}

const gameStore = new GameStore();
dispatcher.register(gameStore.handleActions.bind(gameStore));
export default gameStore;