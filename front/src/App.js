import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import Home from '../src/components/Home'
const App = () => {

  // const myStyle = {
  //   fontWeight: 'bold',
  //   color: '#b82514',
  //   textDecoration: 'none'
  // };

  return (
    <div>
      <h1>클래스101</h1>
      
      <Route path='/products' component={Home}/>
      
    </div>
  );
}

export default App;
