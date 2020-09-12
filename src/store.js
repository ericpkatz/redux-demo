const {createStore} = require('redux');

const store = createStore((state = { red: 0, blue: 0}, action)=> {
  console.log(action);
  if(action.type === 'INC_RED'){
    state = {...state, red : state.red + 1 }; 
  }
  if(action.type === 'DEC_RED'){
    state = {...state, red : state.red - 1 }; 
    //state.red = state.red - 1;
  }
  if(action.type === 'SET_RED'){
    state = {...state, red : action.stanley }; 
    //state.red = state.red - 1;
  }
  if(action.type === 'INC_BLUE'){
    state = {...state, blue : state.blue + 1 }; 
  }
  if(action.type === 'DEC_BLUE'){
    state = {...state, blue : state.blue - 1 }; 
    //state.red = state.red - 1;
  }
  return state;
});

export default store;
