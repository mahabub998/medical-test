import React,{useState,useEffect} from 'react';
import FakeData from "../../FakeData.json"
import ProductS from './ProductS';

const SingleProduct = () => {
    const [singlesProducts,setSinglesProducts] = useState([])
    useEffect( () => {
        setSinglesProducts(FakeData)

    },[])
    console.log(singlesProducts)
    return (
        <div className="row ms-5 mt-5">
            {
                singlesProducts.map(product => <ProductS product={product}></ProductS>) 
            }
        </div>
    );
};

export default SingleProduct;