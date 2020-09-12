import React from 'react';
import { connect } from 'react-redux'; 
import { incrementRed, incrementBlue } from './store';

const Stats = ({ red, blue, helpRed, helpBlue })=> {
    if(red === blue){
      return 'It is tied'
    }
    if(red > blue){
      return (
        <div>Red is winning <button onClick={ helpBlue }>Help Blue</button></div>
      );
    }
    return ( 
      <div>Blue is winning <button onClick={ helpRed }>Help Red</button></div>
    );
};


const mapStateToProps = (state)=> {
  return {
    red: state.red,
    blue: state.blue
  };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    helpRed: ()=> dispatch(incrementRed()),
    helpBlue: ()=> dispatch(incrementBlue()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Stats);
