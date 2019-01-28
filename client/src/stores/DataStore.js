import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import DATA from '../constants/dataConsts';
import Room from '../models/Room';
import Player from '../models/Player';

class DataStore extends EventEmitter {
    constructor() {
        super();
        this.rooms = [new Room('one'), new Room('two'), new Room('three')];
        this.room = new Room();
        this.player = new Player();
    }

    addPlayerToRoom() {

    }

    handleActions(action) {
        switch (action.type) {
            case DATA.ADD_PLAYER:
                //set current player
                this.player = action.data;
                break;
            case DATA.GET_PLAYER:
                this.emit(DATA.GET_PLAYER, this.player);
                break;
            case DATA.ADD_ROOM:
                console.log('ADD ROOM');
                console.log(action.data);
                
                let room = action.data;
                //add an empty room to the rooms array
                this.rooms.push(room);
                // this.emit(DATA.GET_ROOMS, this.rooms);
                break;
            case DATA.JOIN_ROOM:
                console.log('JOIN ROOM');
                //set current room 
                // console.log(action.data);
                const [player, roomName] = action.data;
                this.room = this.rooms.find(room => room.name === roomName); 
                //add player to the current room
                this.room.players.push(player);
                //update the rooms array
                const index = this.rooms.findIndex(room => room.name === roomName);
                this.rooms[index] = this.room;
                //send the updated rooms array
                this.emit(DATA.JOIN_ROOM, player);
                this.emit(DATA.GET_ROOMS, this.rooms);
                break;

            case DATA.GET_ROOMS:
                this.emit(DATA.GET_ROOMS, this.rooms);
                break;
            case DATA.GET_ROOM:
                // const room = this.rooms.find(room => room.name === action.data);                
                this.emit(DATA.GET_ROOM, this.room);
                break;
                //todo clear room
            default:
                break;
        }
    }
}

const dataStore = new DataStore();
dispatcher.register(dataStore.handleActions.bind(dataStore));
export default dataStore;