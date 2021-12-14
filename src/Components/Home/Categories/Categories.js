import React from "react";
import "./Categories.css";
import ProductCategories from './ProductCategories';

const Categories = () => {
  return (
    <section>
      <div className="mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="ms-5">
              <h1>Categories</h1>
              <p>
                lorem ipsum dolor sit amet .conscrtur adipisicing elit.Tellus
                tottor posuee laoreat et ac .Fames facilisi convallis lorem non
                cicerro.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex ">
              <h1 className="textControl_new">New Arrival</h1>
              <button className="btn btn-primary contorl">View All</button>
            </div>
            <p>
              lorem ipsum dolor sit amet.consecteur dolor sit amet.Nunc loprem
              pertium.lorem ipsum doller sit amet.
            </p>
          </div>
        </div>
        <ProductCategories></ProductCategories>
      </div>


      
    </section>
  );
};

export default Categories;
