
const INITIAL_STATE = {
  score: 0,
  lives: 3,
};

const app = (state = INITIAL_STATE, action) => {
  const reducers = {
    'UPDATE_SCORE':(value)=> ({...state,score: value}),
    'UPDATE_LIVES':(value)=> ({...state,lives: value}),
    'REDUCE_LIVES':(value)=> ({...state,lives: state.lives - value}),
    'INCRESE_SCORE':(value)=> ({...state,score: state.score + value}),
  }
  return reducers[action.type] ? reducers[action.type](action.value) : state
}


export default app;