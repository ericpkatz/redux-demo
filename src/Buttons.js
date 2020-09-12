import React, { Component}  from 'react';
import store from './store';

export default class Buttons extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(()=> this.setState(store.getState()));
  }
  render(){
    const { red, blue } = this.state;
    return (
      <div>
        <button className='red' onClick={()=> store.dispatch({ type: 'INC_RED'})}>Red ({ red })</button>
        <button className='blue' onClick={()=> store.dispatch({ type: 'INC_BLUE'})}>Blue ({ blue })</button>
      </div>
    );
  }
}
