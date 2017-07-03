import React from 'react';
import { connect } from 'react-redux';
import { startNewGame, toggleModal } from '../actions/index';
import './top-nav.css';

export class TopNav extends React.Component {
  newGame(e) {
    e.preventDefault();
    this.props.dispatch(startNewGame());
  }

  toggleModal(e) {
    e.preventDefault();
    this.props.dispatch(toggleModal());
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#" onClick={e => this.toggleModal(e)}>
              What?
            </a>
          </li>
          <li>
            <a className="new" href="#" onClick={e => this.newGame(e)}>
              + New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(TopNav);
