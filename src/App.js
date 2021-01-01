import React from 'react';
import {Route} from 'react-router-dom';
import Header  from './component/Header/header.component'
import HomePage from './Pages/homePage';
import CheckoutPage from './Pages/checkoutPage';
import './App.css'
const App=()=> {
  return (
    <div className='app'>
    <Header/>
  <Route exact path='/' component={HomePage} />
  <Route exact path='/cart' component={CheckoutPage}></Route>
  </div>
  );
}

export default App;
