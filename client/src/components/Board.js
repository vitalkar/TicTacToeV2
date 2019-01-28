import React, { Component } from 'react';
import { GameBoard, EndOfGameWindow } from './styles/styled-components';
import Cell from './Cell';
import Lobby from './Lobby';

import GameStore from '../stores/GameStore';
import {GAME, WIN_SEQUENCE} from '../constants/gameConsts';
import { removeRoom } from '../actions/dataActions';
import { notifyGameEnd } from '../actions/gameActions';
import { Link, Route } from 'react-router-dom';


export default class Board extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        
        //todo steps
        //represents the count of game turns
        this.step = 0; 

        this.state = {
            currSign: this.props.sign,
            board: [],
            play: false,
            // prompt: false,
        }
        console.log(this.props);
        
        //
        // this.goBack = this.goBack.bind(this);

    }

    /**
     * 
     */
    play = (i) => {
        // 
        if(!this.state.play) {
            return;
        }
        //mark the proper cell
        let b = [...this.state.board];
        b[i] = this.state.currSign;
        //check the game state from the 3rd game step
        if (this.step > 3) {
            this.checkGameState(b);
        }
        this.step++;
        this.setState({
            board: [...b],
            currSign: (this.state.currSign === 'X') ? 'O' : 'X'
        });


    }


    initBoard = () => {        
        //determine who which shape starts
        // const sign = this.getRandomSign();
        
        // let initialBoard = new Array(9).fill(' ');
        
        this.setState({
            currSign: this.props.sign,
            board: new Array(9).fill(' '),
            play: true,
            // prompt: false
        });

    }

    /**
     * determine end of game
     */
    checkGameState = board => {

            //if the current postions has the same sign
            // WIN_SEQUENCE.map(seq => console.log(seq));
            const res = WIN_SEQUENCE.find(seq =>  board[seq[0]] === board[seq[1]] &&
                 board[seq[0]] === board[seq[2]] && board[seq[0]] !== ' ');
            
            if (res || (this.step === 8 && !res)) {
                this.setState({
                    play: false,
                    // prompt: true,
                });
                console.log(this.state.currSign, ' wins');
                notifyGameEnd();
                
                //todo prompt winner
                

            } 
    }
    /**
     * save game data
     */
    save = () => {
        console.log('save');      
    };

    componentDidMount() {
        this.initBoard();
    }

    //todo propmpt winner
    //todo update leader board
    //todo add game result: draw or win
    //todo 

    render() {         
        const board = this.state.board.map((v, i) =>
            <Cell key={i} value={v} onClick={() => this.play(i)}></Cell>);           
        return (                
                <GameBoard>
                    {board}
                </GameBoard>
        );
    }
}
