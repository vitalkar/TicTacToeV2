import React, { Component } from 'react';
import { CellLayout } from './styles/styled-components';

import GameStore from '../stores/GameStore';
import GAME from '../constants/gameConsts';
import { updateBoard, playTurn } from '../actions/gameActions';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            // currSign: 'x',
        }
    }



    componentDidMount() {
        

        // GameStore.on(GAME.SWITCH_TURN, (sign) => {
        //     this.setState({currSign: sign})
        // });

    }

    render() {
        return (
            <CellLayout onClick={this.props.onClick}>
                {this.props.value}
            </CellLayout>
        );
    }
}
