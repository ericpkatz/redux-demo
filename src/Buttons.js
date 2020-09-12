import React from 'react';
import { connect } from 'react-redux'; 
import { incrementRed, incrementBlue } from './store';

const Buttons = ({ red, blue, incRed, incBlue, display})=> {
  console.log(display);
  return (
    <div className={ display === 'big' ? 'big': ''}>
      <button className='red' onClick={ incRed }>Red ({ red })</button>
      <button className='blue' onClick={ incBlue }>Blue ({ blue })</button>
    </div>
  );
}

export default connect(
  ({ red, blue })=> {
    return {
      red,
      blue
    };
  },
  (dispatch)=> {
    return {
      incRed: ()=> dispatch(incrementRed()),
      incBlue: ()=> dispatch(incrementBlue()),
    }
  },
)(Buttons);
