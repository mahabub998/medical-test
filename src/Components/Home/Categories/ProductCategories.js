import React,{useState,useEffect} from 'react';
import FakeData from '../../FakeData.json'
import CategoriesDetails from './CategoriesDetails/CategoriesDetails';
import Lakme from '../../../images/Lakme.jpg'
import './ProductCategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faHospitalAlt,faUserAstronaut,faHeartbeat,faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons'


<i class="fas faUmbrellaBeach"></i>

const ProductCategories = () => {
    const [productCategory,setProductCategory] = useState([])

    useEffect( () => {
        setProductCategory(FakeData)
    },[])
    console.log(productCategory)
    return (
        <section>
            <div className="row">
            <div className="col-md-4 backgraound-color">
             <div className="ms-5 m-5 ">
             
             <h4> <FontAwesomeIcon icon={faHospitalAlt} /> Medication </h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faHospitalAlt} />  Allergies</h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faUserAstronaut} /> Cosmetics</h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faHospitalAlt} /> Dietary SupplyMentis</h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faHeartbeat} /> Health</h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faHospitalAlt} /> Medicine</h4>
             <br></br>
             <h4><FontAwesomeIcon icon={faUmbrellaBeach} />  Protection</h4>

             <img className="mt-5" src={Lakme} alt=""></img>
             </div>
            
            </div>
            <div className="col-md-8">
              <div className="row">
              {
                productCategory.map((category) => <CategoriesDetails category={category}></CategoriesDetails>)
              }
              </div>
            </div>
            
            </div>
        </section>
    );
};

export default ProductCategories;