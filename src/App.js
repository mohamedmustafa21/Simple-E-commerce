import './App.css';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';

import { Provider } from 'react-redux';
import store from './components/redux/store';
import DATA from './Data';
import CartBtn from './components/Buttons/CartBtn';

function App() {

  const [cart, setcart] = useState([]) 
  const [remove,setRemove] = useState([cart])
  // console.log(remove)
  
  return (
    <Provider store={store}>
    <Header  cart={cart} />
     <Routes>
    
      <Route path='/' element={<Home/>}  />

       <Route exact path='/home' element={<Home cart={cart}/>}  />
      <Route exact path='/products' element={<Product/>}  />
      <Route exact path='/products/:id' element={<SingleProduct cart={cart} setcart={setcart} remove={remove} setRemove={setRemove}  />}  />
      <Route exact  path='/about' element={<About/>}  />
      <Route exact path='/contact' element={<Contact/>}  /> 
      <Route exact path='/cart' element={<CartBtn cart={cart} setcart={setcart}/>}  /> 
 

     
                     
              

     

     </Routes>
     
     
    </Provider>
  );
}

export default App;
