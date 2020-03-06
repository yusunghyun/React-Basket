import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import CartContainer from './containers/CartContainer';

const App = () => {

  // const myStyle = {
  //   fontWeight: 'bold',
  //   color: '#b82514',
  //   textDecoration: 'none'
  // };

  return (
    <div>
      <h1>클래스101</h1>
      <Switch>
        <Route path='/cart' component={CartContainer}/>
        <Route path='/products' component={Home}/>
      </Switch>

      
    </div>
  );
}

export default App;
