import React, { Component}  from 'react';
import store from './store';

export default class Stats extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(()=> this.setState(store.getState()));
  }
  render(){
    const { red, blue } = this.state;
    if(red === blue){
      return 'It is tied'
    }
    if(red > blue){
      return (
        <div>Red is winning <button onClick={()=> store.dispatch({ type: 'INC_BLUE'})}>Help Blue</button></div>
      );
    }
    return ( 
      <div>Blue is winning <button onClick={()=> store.dispatch({ type: 'INC_RED'})}>Help Red</button></div>
    );
  }
}
