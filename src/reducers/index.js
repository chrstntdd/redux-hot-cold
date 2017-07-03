import { START_NEW_GAME, MAKE_GUESS, TOGGLE_MODAL } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showModal: false
};

export const hotColdReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_GAME:
      return Object.assign({}, initialState, {
        correctAnswer: action.correctAnswer
      });
    case MAKE_GUESS:
      const guess = parseInt(action.guess, 10);
      if (isNaN(guess)) {
        return Object.assign({}, state, {
          feedback: 'Please enter a valid number.'
        });
      }
      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = "You're Ice Cold...";
      } else if (difference >= 30) {
        feedback = "You're Cold...";
      } else if (difference >= 10) {
        feedback = "You're Warm";
      } else if (difference >= 1) {
        feedback = "You're Hot!";
      } else {
        feedback = 'You got it!';
      }
      return Object.assign({}, state, {
        feedback,
        guesses: state.guesses.concat(action.guess)
      });
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        showModal: !state.showModal
      });
    default:
      return state;
  }
};
