import React, { Component } from 'react';
import axios from 'axios';
import Board from './Board';
import { Wrapper, GameLayout, GameHeader, PlayerInfo, EndOfGameWindow } from './styles/styled-components';
import DataStore from '../stores/DataStore';
import DATA from '../constants/dataConsts';
import { getRoom, getPlayer, joinRoom } from '../actions/dataActions';
import GameStore from '../stores/GameStore';
import { GAME } from '../constants/gameConsts';



export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roomName: '',
            players: [],// [new Player(), new Player()]
            initSign: this.generateSign(),
            prompt: false, //prompt on end of game
        };
    }
    //todo add: game state, players, generate sign
    //todo on end of game: continue or return
    /**
     * 
     */
    generateSign() {
        return (Math.random < 0.5) ? 'X' : 'O';
    };
    /**
     * 
     */
    initGame = () => {
        this.setState({
            prompt: false,
        });
    };

    componentDidMount() {
        //get room
        DataStore.on(DATA.GET_ROOM, room => {
            console.log(room);
            
            this.setState({
                roomName: room.name,
                players: room.players,
            });
            
        });

        DataStore.on(DATA.JOIN_ROOM, player => {
            console.log('sombody new joined the room');
            console.log(player);
            
            // 1st player in the room
            if (this.state.players.length === 0) {
                this.setState({
                    players: [player]
                });

                this.generateSign();                
                
            // 2nd player in the room
            } else if (this.state.players.length === 1) {
                this.setState({
                    players: [...this.state.players, player]
                });               
                
                //determine remaining sign
            }

        });

        GameStore.on(GAME.END_OF_GAME, () => {
            this.setState({
                prompt: true
            });
        })

        getRoom();
        getPlayer();        
    }

    componentWillUnmount() {
        //todo  
    }

    render() {
        
        const p1 = (this.state.players.length >= 1) ? this.state.players[0].name : '',
             p2 = (this.state.players.length === 2) ? this.state.players[1].name : '';

        let display;
        //if end of game
        if (this.state.prompt) {
            display = (<EndOfGameWindow>
                        <button onClick={this.initGame}>Keep Playing</button>
                            <h3>OR</h3>
                        <button onClick={this.props.history.goBack}>Back To Lobby</button>
                       </EndOfGameWindow>);
        } else {
            display = <Board sign={this.state.initSign} />;
        }

        return (
            <Wrapper>
                <GameHeader>
                    <PlayerInfo>{p1}</PlayerInfo>
                    <div style={{diaply: 'flex', flexDirection: 'column'}}>
                        <p>{this.state.roomName}</p> 
                        <p>Current: {this.state.initSign}</p> 
                    </div>
                    <PlayerInfo>{p2}</PlayerInfo>
                </GameHeader>
                <GameLayout>
                    {display}
                </GameLayout>
            </Wrapper>
        );
    }
}
