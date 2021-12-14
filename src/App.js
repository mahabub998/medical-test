import React from 'react';
import './App.css';
import Header from './Components/Home/Header/Header';
import Product from './Components/Home/Product/Product';
import Navbar from './Components/Shared/Navbar/Navbar';
import People from './Components/Home/People/People';
import Categories from './Components/Home/Categories/Categories';
import SingleProduct from './Components/Home/SingleProduct/SingleProduct';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/Shared/Footer/Footer';

// <Routes>
// <Route path="/" element={<Header />} />
// <Route path="/product" element={<Product />} />
// <Route path="/about" element={<People />} />
// <Route path="/login" element={<Categories />} />
// <Route path="/single" element={<SingleProduct />} />
// </Routes>




function App() {
  return (
    <div className="App">
 
    <Navbar />
   
     <Routes>

<Route path="/" element={<Home />} />
<Route exact path="/" element={<Home />} />
<Route path="/product" element={<Product />} />
<Route path="/about" element={<Categories />} />
 <Route path="/single" element={<SingleProduct />} />
 <Route path="*" element={<ErrorPage />}/>
 </Routes>
 <Footer />
    </div>
  );
}

export default App;
