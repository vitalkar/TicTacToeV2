import dispatcher from '../dispatcher/dispatcher';
import DATA from '../constants/dataConsts';

export const addPlayer = (player) => {
    dispatcher.dispatch({
        type: DATA.ADD_PLAYER,
        data: player
    });
};

export const getPlayer = () => {
    dispatcher.dispatch({
        type: DATA.GET_PLAYER
    });
};

export const addRoom = room => {
    dispatcher.dispatch({
        type: DATA.ADD_ROOM,
        data: room
    });
};

export const removeRoom = roomName => {
    dispatcher.dispatch({
        type: DATA.REMOVE_ROOM,
        data: roomName
    });
};



export const joinRoom = (data) => {
    console.log(data);
    
    dispatcher.dispatch({
        type: DATA.JOIN_ROOM,
        data: data
    });
};

export const getRoom = () => {
    dispatcher.dispatch({
        type: DATA.GET_ROOM,
    });
};

export const getRooms = () => {
    dispatcher.dispatch({
        type: DATA.GET_ROOMS
    });
};



