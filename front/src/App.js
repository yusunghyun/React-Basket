import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import CartContainer from './containers/CartContainer';
import ProductContainer from './containers/ProductContainer';

const App = () => {

  // const myStyle = {
  //   fontWeight: 'bold',
  //   color: '#b82514',
  //   textDecoration: 'none'
  // };

  return (
    <div>
      <h1>클래스101</h1>
      <NavLink to='/cart'>장바구니!!</NavLink>
      
      <Switch>
        <Route path='/cart' component={CartContainer}/>
        <Route path='/products' component={ProductContainer}/>
      </Switch>

      
    </div>
  );
}

export default App;
