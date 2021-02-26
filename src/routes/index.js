import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Product from '../pages/Product';


const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/product/:code' component={Product} />
      <Route component={Error} />
    </Switch>
  )
}

export default Routes;