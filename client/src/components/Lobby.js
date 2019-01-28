import React, { Component } from 'react';
import axios from 'axios';
import { Wrapper, LobbyLayout, RoomsList, RoomItem, RoomForm, PlayerDetails } from './styles/styled-components';
import { addRoom, getRooms, joinRoom, getPlayer } from '../actions/dataActions';
import DataStore from '../stores/DataStore';
import DATA from '../constants/dataConsts';
import Room from '../models/Room';

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    border: '1px solid black',
    flexBasis: '50%',
};

const buttonStyle = {
    border: '1px solid black',
    borderRadius: '10px',
    width: '80%',
    height: '12%',
    margin: '5px',
    cursor: 'pointer',

};

const inputStyle = {
    margin: '5px',
    width: '80%',
    height: '10%',
    outline: 'none',
    // padding: '0',
    caretColor: 'red',
    borderRadius: '10px',
    border: '1px solid black',
};

export default class Lobby extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            player: {},
            rooms: [],
            newRoomName: ''
        }
        this.joinRoom = this.joinRoom.bind(this);
        this.addRoom = this.addRoom.bind(this);
    }

    //todo check for duplicity
    /**
     * add a new room to the rooms list and join
     */
    addRoom() {
        console.log('create room');
        //check if room name is available
        let room = new Room(this.state.newRoomName); //todo add player here
        addRoom(room);
        //join the room
        this.joinRoom(this.state.player, this.state.newRoomName);
        //reset newRoomName
        // this.setState({newRoomName: ''});

        //send room to server
        // axios.post('http://localhost:3001/rooms', {
            
        // });

    }
    
    /**
     * join to an existing room
     */
    joinRoom(player, roomName) {
        //
        joinRoom([player, roomName]);
        
        this.props.history.push('/game');
        
    }

    componentDidMount() {
        //get rooms list
        //
        DataStore.on(DATA.GET_PLAYER, (player) => {
            this.setState({player: player});
        });

        DataStore.on(DATA.GET_ROOMS, newRooms => {
            this.setState({rooms: newRooms});
        });
        // DataStore.on(DATA.JOIN_ROOM, () => {});
        getRooms();
        getPlayer();

    }



    componentWillUnmount() {
        DataStore.removeAllListeners();
    }

    //todo distinct between avilable and non-available rooms
    //todo check for empty room name
    //todo check for duplicity
    render() {
        const activeRooms = this.state.rooms.map(room => 
            <RoomItem key={room.name} onClick={() => {this.joinRoom(this.state.player, room.name)}}>{room.name}<p>full</p></RoomItem>
        );
        
        return (
            <Wrapper>
                <LobbyLayout>
                    <div style={divStyle}>
                    <PlayerDetails>
                        <p>
                            pic
                        </p>
                        <p>
                        name:
                        </p>
                        <p>
                        score:
                        </p>
                    </PlayerDetails>
                    <RoomForm>
                        <h2 style={{ flexBasis: '10%' }}>Add Room</h2>
                        <input style={inputStyle} type='text' placeholder='New Room Name' value={this.state.newRoomName} onChange={e => this.setState({ newRoomName: e.target.value })} />
                        <button style={buttonStyle} onClick={this.addRoom}>Create</button>
                    </RoomForm>
                    </div>
                    <div style={divStyle}>
                        <h2 style={{ flexBasis: '10%' }}>Rooms</h2>

                    <RoomsList>
                        {activeRooms}
                    </RoomsList>
                    </div>

                </LobbyLayout>
            </Wrapper>
        );
    }
}
