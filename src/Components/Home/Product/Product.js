import React,{useState,useEffect} from 'react';
import FakeData from '../../FakeData.json';
import ProductShow from './ProductShow';

const Product = () => {
   const [products,setProducts] = useState([])


   useEffect(() => {
       setProducts(FakeData)
      
   }, [])
   console.log(products)

    return (
        <div className="row ms-5 mt-5">
            {
                products.map((product) => <ProductShow product={product}></ProductShow>)
            }
        </div>
    );
};

export default Product;