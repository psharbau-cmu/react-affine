import React, { Component } from 'react';
import './App.css';
// import affine from 'react-affine';
// let AfWin = affine.AfWin;
import AfWin from './AfWin';


class App extends Component {
  render() {
    return <AfWin style={{width:'100vw', height:'100vh', backgroundColor:'#39c'}}/>
  }
}

export default App;
