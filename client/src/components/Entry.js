import React, { Component } from 'react';
import axios from 'axios';
import { Wrapper, EnterForm, Warning } from './styles/styled-components';
import Player from '../models/Player';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { save, addPlayer } from '../actions/dataActions';
import DataStore from '../stores/DataStore';

const inputStyle = {
    margin: '5px',
    width: '50%',
    height: '5%',
    outline: 'none',
    caretColor: 'red',
    borderRadius: '10px',
    border: '1px solid black',
    // borderShadow: 'none',
};
const buttonStyle = {
    margin: '10px',
    width: '30%',
    height: '10%',
    font: '20px',
    borderRadius: '20px',
    cursor: 'pointer',
    border: '1px solid black',
};


export default class Entry extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            // valid: false,
            errors: {}
        };
        this.errors = {
            username: '',
            password: '',
            duplicity: ''
        };
        this.submit = this.submit.bind(this);
        // this.validate = this.validate.bind(this);
    }
    /**
     * submit form
     */
    submit() {
        
        //if form is valid
        if (this.validate()) {
            console.log('form is valid');
            //check if player name exists
            
            //create Player
            let player = new Player(this.state.username);
            // console.log(player);
            //todo pass to db
            //emit to game store
            addPlayer(player);
            

            axios.post('http://localhost:3001/users', {
                data: 'just data'
            });

            //redirect to lobby
            this.props.history.push('/lobby')

        }  else {
            console.log('form is not valid');
            
        }
        
    }
    /**
     * validate form
     */
    validate() {
        const warning = 'field must contain at least 3 characters';
        this.errors.username = (this.state.username.length < 3) ? warning : '';
        this.errors.password = (this.state.password.length < 3) ? warning : '';
        //check if name already exists
        this.errors.duplicity = '';
        this.setState({errors: this.errors});
        return (this.errors.username === '' && this.errors.password === '') ? true : false ;
    }
    
    /**
     * check for user name duplicity
     */
    checkDuplicity() {

    } 

    render() {
        return (
                <Wrapper>
                    <h1 style={{height: '10%'}}>ENTER</h1>
                    <EnterForm>
                    <input style={inputStyle} type='text' placeholder=' username' value={this.state.username} onChange={e => this.setState({ username: e.target.value })} autoFocus />
                        <Warning>{this.state.errors.username}</Warning>
                        <input style={inputStyle} type='password' placeholder=' password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                        <Warning>{this.state.errors.password}</Warning>
                        <input style={buttonStyle} type='button' value='Enter' disabled={!this.state.username || !this.state.password} onClick={this.submit} />
                    </EnterForm>
                </Wrapper>
        );
    }
}

