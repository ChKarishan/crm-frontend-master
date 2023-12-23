
//   Create News   //

import React, { useEffect, useState } from "react";

import API from "../../common/data/FatchData";
import {
  Card,
  CardBody,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  TabPane,
  ModalHeader,
  Row,
  Col
} from "reactstrap";




import BreadCrumb from "../../Components/Common/BreadCrumb";

import { useNavigate } from "react-router-dom";
const Calender = () => {


  
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    heading: '',
    discription: '',
  
  });
  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);

     
    API.postCreateNews(formData).then((response) => {
       setSuccessMessage(response.data.message);
      console.log(`deal created ${response.data}`);
      // setMostPannelsSold(response.data.Price);
      alert('News added successful!');
      let path = `/dashboard`; 
         navigate(path);
    })
    .catch((error) => {
      alert('failed to add news! Check console for details.');
    });
  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('Failed to Create Deals');
 
      }, 15000); // Display success message for 3 seconds
      return () => clearTimeout(timeout);
    }
  
  }, [successMessage]);


  document.title = "Add News | NuktaSoft - React Admin & Dashboard Template";
  return (
    <React.Fragment>



    <div className="page-content">
      <Container fluid>
        {/* <BreadCrumb title="Add News" pageTitle="Add News" /> */}
        <Row>
          <Col xs={10}>

            <h1> Add News </h1>

            <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">Contracts Information</h2> */}



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
                    Heading
                    </Label>
                    <Input
                      type="heading"
                        id="heading"
                      name="heading"
                      value={formData.heading}
                    onChange={handleChange}
                       placeholder="Enter heading"
                        />
                   
                  </div>
                </CardBody>

                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Discription
                    </Label>
                    <Input
                        type="text"
                    id="discription"
                    name="discription"
                    value={formData.discription}
                    onChange={handleChange}
                    placeholder="Enter Discription"
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
      
        {/* <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Submit
        </button> */}

      
      
        
      </form>
    </div>



          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
    
  );

};



export default Calender;