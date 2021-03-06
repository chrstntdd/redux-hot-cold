import React from 'react';
import { connect } from 'react-redux';
import { makeGuess } from '../actions/index';
import './guess-form.css';

export class GuessForm extends React.Component {
  makeGuess(e) {
    e.preventDefault();
    const value = this.input.value;
    this.props.dispatch(makeGuess(value));
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.makeGuess(e)}>
        <input
          type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter your guess"
          required
          ref={input => (this.input = input)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
