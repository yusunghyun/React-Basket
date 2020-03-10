import React from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import CartContainer from './containers/CartContainer';
import ProductContainer from './containers/ProductContainer';
import {withRouter} from 'react-router-dom'

const App = ({prop,history,location}) => {
  React.useEffect(()=>{
    history.push('/products')
  },[])
  
  return (
    <div>
      <div>
        <h1 className='cart'>클래스101</h1>
      </div>
      <Switch>
        <Route path='/cart' component={CartContainer}/>
        <Route path='/products' component={ProductContainer}/>
      </Switch>

      
    </div>
  );
}

export default withRouter(App);
