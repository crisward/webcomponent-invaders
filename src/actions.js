export const updateScore = (value) => (
  {type: 'UPDATE_SCORE',value: value}
)
export const updateLives = (value) => (
  {type: 'UPDATE_LIVES',value: value}
)
export const increaseScore = (value) => (
  { type: 'INCRESE_SCORE',value: value}
)
export const reduceLives = (value) => (
  {type: 'REDUCE_LIVES',value: value}
)
export const addAlien = (value) => (
  {type: 'ADD_ALIEN',value: value}
)