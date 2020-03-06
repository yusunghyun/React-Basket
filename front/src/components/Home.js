import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import ProductContainer from '../containers/ProductContainer'

const Home = () => {
  

  return (
    <div>
      <NavLink to='/cart'>장바구니!!</NavLink>
      <ProductContainer/>
    </div>
  );
};

export default Home;