import React, { useEffect, useState } from "react";
import API from "../../../common/data/FatchData";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Input,
  Label,
 } from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { useNavigate } from "react-router-dom";
const CrmDeals = () => {
  

  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '',
    closedate: '',
    dealname: '',
    pipeline : '',
    dealstage: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   

  //     API.postCreateDeal(formData).then((response) => {
  //        setSuccessMessage(response.data.message);
  //       console.log(`deal created ${response.data}`);

  //       alert('Deals Created successfully!');
  //       let path = `/dashboard-crm`; 
  //       navigate(path);
  //       // setMostPannelsSold(response.data.Price);
  //     })
  //     .catch((error) => {
  //       alert('Error.');
  //     });

  // };



  const handleSubmit = (e) => {
    e.preventDefault();    
      API.postCreateDeal(formData).then((response) => {
         setSuccessMessage(response.data.message);
         console.log(successMessage);
        console.log(`Deal created ${response.data}`);
        
        alert('Deal added successful!');
        let path = `/apps-crm-companies`; 
           navigate(path);
      }).catch((error) => {
          alert('Error in Deal Creatation! Check your Console');
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

  document.title = " Create Deals | Velzon - React Admin & Dashboard Template";

  return (
      <React.Fragment>



    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Deal" pageTitle="Pages" />
        <Row>
          <Col xs={12}>

            <h1> Create Deal </h1>

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
                     pipeline
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
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    
                    <Label className="form-label" htmlFor="product-title-input">
                    dealstage
                    </Label>
                    <select
                     type="text"
                     id="dealstage"
                      name="dealstage"
                      value={formData.dealstage}
                      onChange={handleChange}
                      placeholder="Enter dealstage"
                        >
                          <option value="">Select dealstage value</option>
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

export default CrmDeals;