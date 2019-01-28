import React, { Component } from 'react';
import { Wrapper, LeaderBoardLayout, LeadersList } from './styles/styled-components';
import axios from 'axios';

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1%',
};

export default class ScoreList extends Component {

    constructor(props) {
        super(props);

        //get players
    }

    render() {

        const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(leader => <li key={leader} style={itemStyle}> {leader} <p>score</p>  </li>);

        return (
            <Wrapper>
                <LeaderBoardLayout>
                    <h2>Leader Board</h2>
                    <LeadersList>
                        {players}
                    </LeadersList>    
                </LeaderBoardLayout>
            </Wrapper>
        );
    }
}
