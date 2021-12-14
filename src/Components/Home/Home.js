import React from 'react';
import Header from './Header/Header';
import Product from './Product/Product';
import People from './People/People';
import Categories from './Categories/Categories';
import SingleProduct from './SingleProduct/SingleProduct';


const Home = () => {
    return (
        <div>
        <Header />
       
        <Product />
        <People />
        <Categories />
        <SingleProduct />
        </div>
    );
};

export default Home;