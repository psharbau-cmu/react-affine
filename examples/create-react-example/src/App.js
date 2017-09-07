import React, { Component } from 'react';
import './App.css';
// import affine from 'react-affine';
// let AfWin = affine.AfWin;
import AfWin from './AfWin';
import AfImg from './AfImg';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#39c', margin:'20vh auto', width:'640px'}}>
        <AfWin width={640} height={480}>
          <AfImg angle={5} width={42} />
        </AfWin>
      </div>
    );
      
  }
}

export default App;
