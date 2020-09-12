/*
import React, { Component } from 'react';
import store from './store';

function connect(Inner){
  class Connected extends Component{
    constructor(){
      super();
      this.state = store.getState();
    }
    componentDidMount(){
      store.subscribe(()=> this.setState(store.getState()));
    }
    render(){
      return <Inner {...this.state } dispatch={ store.dispatch }/>
    }
  }
  return Connected;
}

export default connect;
*/
