import React from 'react';
import { render } from 'react-dom';
import store from './store';
import Stats from './Stats';
import Buttons from './Buttons';
import { Provider } from 'react-redux';

store.subscribe(()=> console.log(store.getState()));

class App extends React.Component{
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
        <button onClick={()=> store.dispatch({ type: 'SET_RED', stanley: 100})}>Make Red 100</button>
        <Stats />
        <Buttons display='big'/>
        <Buttons />
        <Buttons />
      </div>
    );
  }
}

render(<Provider store={ store }><App /></Provider>, document.querySelector('#root'));
