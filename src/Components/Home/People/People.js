import React from 'react';
import Mask from '../../../images/mask.jpg';
import './People.css';

const People = () => {
    return (
        <section>
            <div className="row">
             <div className="col-md-4 ">
             <div className="ms-5 textControl">
             <h1>Stay Safe</h1>
             <h1>Wear a Mask!!</h1>
             <p className="color-text"><small>About Covid 19 >></small></p>
             </div>
             </div>
             <div className="col-md-8">
              <div>
              <img className="mask_people" src={Mask} alt=""></img>
              </div>
             </div>
            </div>
        </section>
    );
};

export default People;