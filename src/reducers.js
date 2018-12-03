import {
  UPDATE_SCORE,
  UPDATE_LIVES,
  REDUCE_LIVES,
  INCRESE_SCORE,
} from './actions.js';

const INITIAL_STATE = {
  score: 0,
  lives: 3,
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.value
      };
    case UPDATE_LIVES:
      return {
        ...state,
        lives: action.value
      };
    case REDUCE_LIVES:
      return {
        ...state,
        lives: state.lives - action.value
      };
    case INCRESE_SCORE:
      return {
        ...state,
        score: state.score + action.value
      };
    default:
      return state;
  }
};

export default app;