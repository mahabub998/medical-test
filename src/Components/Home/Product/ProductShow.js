import React from 'react';
import './ProductShow.css';

const ProductShow = (props) => {
    const {name,offer,price,img} = props.product;

    return (
        <div className="col-md-4 justify-content-between">
            <div class="card" style={{width: "18rem"}}>
            <p className="text-white ms-auto offer_style ">{offer}</p>
  <img src={img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h6 className="text_color"> RS from {price}</h6>
    
    
  </div>
</div>
        </div>
    );
};

export default ProductShow;