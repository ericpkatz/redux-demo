const {createStore} = require('redux');

const INC_RED = 'INC_RED';
const INC_BLUE = 'INC_BLUE';

const store = createStore((state = { red: 0, blue: 0}, action)=> {
  console.log(action);
  if(action.type === INC_RED){
    state = {...state, red : state.red + 1 }; 
  }
  if(action.type === 'SET_RED'){
    state = {...state, red : action.stanley }; 
    //state.red = state.red - 1;
  }
  if(action.type === INC_BLUE){
    state = {...state, blue : state.blue + 1 }; 
  }
  return state;
});

const incrementRed = ()=> {
  return {
    type: INC_RED
  };
};

const incrementBlue = ()=> {
  return {
    type: INC_BLUE
  };
};

export default store;
export { incrementRed, incrementBlue };
