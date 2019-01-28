import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { AppLayout, Wrapper } from './styles/styled-components';
import Entry from './Entry';
import Lobby from './Lobby';
import Game from './Game';
import LeaderBoard from './LeaderBoard';

export default class App extends Component {
  render() {
    return (
        <Router>
          <AppLayout>
            <Link to='/'>entry</Link>-- 
            <Link to='/lobby'>lobby</Link>-- 
            <Link to='/game'>game</Link>-- 
            <Link to='/leaderboard'>leader-board</Link> 
            <div>
            <Switch>
              <Route exact path='/' component={Entry} />
              <Route path='/lobby' component={Lobby} />
              <Route path='/game' component={Game} />
              <Route path='/leaderboard' component={LeaderBoard} /> 
            </Switch>
            </div>

          </AppLayout>
        </Router >
    );
  }
}
//todo end of game animation
//todo spinner
/**

 */

