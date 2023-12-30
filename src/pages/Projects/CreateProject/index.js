import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Dropzone from "react-dropzone";

//Import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import { useNavigate } from "react-router-dom";
import API from '../../../common/data/FatchData';
import { useLocation } from 'react-router-dom'
const CreateProject = (props) => {
   
    
    const location = useLocation();
    const { from } = location.state;
    console.log(from);

    let navigate = useNavigate();
    const [formData, setFormData] = useState({
      amount: from.amount,
      closedate: from.closedate,
      dealname: from.dealname,
      pipeline : from.pipeline,
      dealstage: from.dealstage,
      sizeofpannels: from.sizeofpannels,
      address : from.address
    });
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();    
        API.putUpdateDeal(from.id, formData ).then((response) => {
           setSuccessMessage(response.data.message);
           console.log(successMessage);
          console.log(`Deal Updated  ${response.data}`);
          
          alert('Deal Updated successful! ');
          let path = `/apps-crm-leads`; 
             navigate(path);
        }).catch((error) => {
            alert('Error in Deal Updating! Check your Console');
        });
        
  
       
  
  
    
        console.log(successMessage);
  
  
  
  
    };
  
  
  
  
  
    useEffect(() => {
      if (successMessage) {
        const timeout = setTimeout(() => {
          setSuccessMessage('');
          setFormData({
            amount: "",
            closedate: "",
            dealname: "",
            pipeline : "",
            dealstage: ""
          });
   
        }, 15000); // Display success message for 3 seconds
        return () => clearTimeout(timeout);
      }
    
    }, [successMessage]);
  
    document.title = " Edit Deals | NuktaSoft - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
        {/* <BreadCrumb title="Create Deal" pageTitle="Pages" /> */}
        <Row>
          <Col xs={12}>

            <h1> Edit Deal </h1>

            <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">Deal Information</h2> */}




      <form onSubmit={handleSubmit}>
        <div className="mb-4">
       
                <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Amount
                    </Label>
                    <Input
                      type="text"
                        id="amount"
                      name="amount"
                      value={formData.amount}
                    onChange={handleChange}
                       placeholder="Enter Amount"
                        />
                   
                  </div>
                </CardBody>

                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Close Date
                    </Label>
                    <Input
                        type="date"
                    id="closedate"
                    name="closedate"
                    value={formData.closedate}
                    onChange={handleChange}
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Deal Name
                    </Label>
                    <Input
                       type="text"
                      id="dealname"
                      name="dealname"
                      value={formData.dealname}
                      onChange={handleChange}
                      placeholder="Enter Deal Name"
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Size of Pannals
                    </Label>
                    <Input
                       type="text"
                      id="sizeofpannals"
                      name="sizeofpannals"
                      value={formData.sizeofpannals}
                      onChange={handleChange}
                      placeholder="Enter Size Of Pannals"
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Client Address
                    </Label>
                    <Input
                       type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter Client Address"
                        />
                   
                  </div>
                </CardBody>

                {/* <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Pipeline
                    </Label>
                    <Input
                       type="text"
                      id="pipline"
                      name="pipeline"
                      // value={formData.pipeline}
                      value ={"default "}
                      onChange={handleChange}
                      placeholder="Enter pipeline"
                        />
                   
                  </div>
                </CardBody> */}


                <CardBody>
                  <div className="mb-3">
                    
                    <Label className="form-label" htmlFor="product-title-input">
                    Dealstage
                    </Label>
                    <select
                     type="text"
                     id="dealstage"
                      name="dealstage"
                      value={formData.dealstage}
                      onChange={handleChange}
                      placeholder="Enter dealstage"
                        >
                       
                          <option value="">Select Dealstage </option>
                        <option value="appointmentscheduled">appointmentscheduled</option>
                        <option value="qualifiedtobuy">qualifiedtobuy</option>
                        <option value="presentationscheduled">presentationscheduled</option>
                        <option value="decisionmakerboughtin">decisionmakerboughtin</option>
                        <option value="contractsent">contractsent</option>
                        <option value="closedwon">closedwon</option>
                        <option value="closedlost">closedlost</option>
                        
                        </select>


                   
                  </div>
                </CardBody>




             

        {successMessage && (
              <div className="bg-green-200 text-green-800 p-3 rounded-md mb-4">
              {successMessage}
              </div>
        )} 

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

export default CreateProject;