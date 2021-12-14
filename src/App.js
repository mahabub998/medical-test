import React from 'react';
import './App.css';
import Header from './Components/Home/Header/Header';
import Product from './Components/Home/Product/Product';
import Navbar from './Components/Shared/Navbar/Navbar';
import People from './Components/Home/People/People';
import Categories from './Components/Home/Categories/Categories';
import SingleProduct from './Components/Home/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Product />
    <People />
    <Categories />
    <SingleProduct />
    </div>
  );
}

export default App;
