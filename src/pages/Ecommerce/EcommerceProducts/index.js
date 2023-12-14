import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  Row,
  Card,
  CardBody,
  Input,
  CardHeader,
  Label,
  Col,
} from "reactstrap";
import classnames from "classnames";

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
import { Rating, Published, Price } from "./EcommerceProductCol";
//Import data
import { productsData } from "../../../common/data";

//Import actions
import { getProducts as onGetProducts, deleteProducts } from "../../../slices/thunks";
import { isEmpty } from "lodash";
import Select from "react-select";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createSelector } from "reselect";



const EcommerceProducts = (props) => {

  const [formData, setFormData] = useState({
    Name: '',
    phonenumber: '',
  
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);

     
      API.postCreateSale(formData).then((response) => {
         setSuccessMessage(response.data.message);
        console.log(`Add installer ${response.data}`);
        // setMostPannelsSold(response.data.Price);
      })
      .catch((error) => {
      });

  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('');
 
      }, 15000); // Display success message for 3 seconds
      return () => clearTimeout(timeout);
    }
   
  
  }, [successMessage]);

  document.title = "Add Installers";



  return (
    <React.Fragment>
    <div className="page-content">
    <Container fluid>
      <BreadCrumb title="Add Installers" pageTitle="Add Installers" />
      <Row>
        <Col xs={12}>

          <h1> Add Installers </h1>

          <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
    {/* <h2 className="text-2xl font-bold mb-4">Deal Information</h2> */}



    {successMessage && (
        <div className="bg-green-200 text-green-800 p-3 rounded-md mb-4">
          {successMessage}
        </div>
      )} 



    <form onSubmit={handleSubmit}>
      <div className="mb-4">
     
              <Card>
              <CardBody>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                  Name 
                  </Label>
                  <Input
                    type="text"
                      id="Name"
                    name="Name"
                    value={formData.Name}
                  onChange={handleChange}
                     placeholder="Enter Name"
                      />
                 
                </div>
              </CardBody>


              <CardBody>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="product-title-input">
                  Phone Number
                  </Label>
                  <Input
                     type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                      />
                 
                </div>
              </CardBody>



           

              <div className="text-center mb-3">
              <button type="submit" className="btn btn-secondary align-bottom">
                Submit
              </button>
              </div>


    
            </Card>


      </div>
    
 

    
      
    </form>
  </div>



        </Col>
      </Row>
    </Container>
  </div>
  </React.Fragment>
   
  );
};

export default EcommerceProducts;
