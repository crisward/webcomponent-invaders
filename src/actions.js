export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_LIVES = 'UPDATE_LIVES';
export const INCRESE_SCORE = 'INCRESE_SCORE';
export const REDUCE_LIVES = 'REDUCE_LIVES';

export const updateScore = (score) => {
  return {
    type: UPDATE_SCORE,
    value: score
  };
};

export const updateLives = (lives) => {
  return {
    type: UPDATE_LIVES,
    value: lives
  };
};

export const increaseScore = (value) => {
  return {
    type: INCRESE_SCORE,
    value: value
  };
};

export const reduceLives = (value) => {
  return {
    type: REDUCE_LIVES,
    value: value
  };
};

