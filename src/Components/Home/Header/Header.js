import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section>
        <div className="bg_handle ">
         <div className="">
         <h1 className="text-white ms-5 header_text">sun protection creme <br></br>Cream Spf50</h1>
         <h5 className=" ms-5 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since .
         </h5>
         <button className="ms-5 mt-5 bg bg-primary p-1">Buy Now</button>
         </div>
        </div>
        <div className="d-flex  mt-5">
         <div >
          <h1 className="text_position">what do you need today?</h1>
         <p className="text_position">check your featured products and details</p>
         </div>
         <div>
           <button className="btn btn-primary p-1 mt-3 button_control">View All ></button>
         </div>
        </div>
        </section>
    );
};

export default Header;