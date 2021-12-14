import React from 'react';

const CategoriesDetails = (props) => {
    const {name,img,price,offer} = props.category;
    return (
        <div className="col-md-6 justify-content-between shadow">
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

export default CategoriesDetails;