import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  Table,
  FormFeedback,
  Form,
} from "reactstrap";

import DashboardCharts from "../../DashboardJob/DashboardCharts";

import classnames from "classnames";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { productDetails } from "../../../common/data/ecommerce";
import EcommerceOrderProduct from "./EcommerceOrderProduct";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import API from "../../../common/data/FatchData";


const EcommerceOrderDetail = (props) => {


  const location = useLocation()
  let navigate = useNavigate(); 
  const { from } = location.state
  console.log(from)

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-crm-deals`; 
    navigate(path);
  };

  // get Notes




  const [myVariable, setvar] = useState(null);
  const [syncs, setSyncs] = useState(null);

  useEffect(() => {
  
    // Getting Notes Api Data
    API.getDealNote(from.id).then((response) => {

      console.log(response.data);
      setvar(response.data);
      })
      .catch((error) => {
      });

      // console.log(data);
  }, []);




  
  // Post Notes

  const [formData, setFormData] = useState({
    deal : from.id,
    noteText: '',
  
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
     
    // Posting Notes In Data Base
    API.postDealNote(formData).then((response) => {
      //  setSuccessMessage(response.data.message);
      console.log(`note is added ${response.data}`);

      alert('Added Note successful!');
      setSyncs(formData.noteText);
      
      
     
      setSyncs(formData.noteText);
      setFormData({ ...formData, 'noteText': '' });
     
    })
    .catch((error) => {
      alert('failed to add Note! Check console for details.');
      // setvar({...myVariable, 'id' : "12345678", 'deal': 'abcdef' , 'noteText' : formData.noteText, '__v':0});
      // setFormData({ ...formData, 'noteText': '' });
      // setSyncs(formData.noteText);
    });
  };

















  document.title = "Deal Details";
  return (
   




    <React.Fragment>
    <div className="page-content">
       <Container fluid>
         <BreadCrumb title="Deal Details" pageTitle="Deal Details" /> 


         <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">Deals Details</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New Deal
                                
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   


  
    <Col xl={12}>
      <div className="d-flex flex-column h-100">
        <Row>
          {/* {props.map((widget, key) => ( */}
            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                        {/* {dealname} */}
                        {/* {widget.lable} */}
                        Name
                        
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.dealname} 
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {/* <DashboardCharts
                        // seriesData={widget.series}
                        seriesData={[95]} 
                        colors= '#3cd188'
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                      
                        Amount
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.amount}
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                     
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                      
                        Closing Date
                        
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.closedate}
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {/* <DashboardCharts
                        // seriesData={widget.series}
                        seriesData={[95]} 
                        colors= '#3cd188'
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                        Creatation Date
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.createdate}
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {/* <DashboardCharts
                        // seriesData={widget.series}
                        seriesData={[95]} 
                        colors= '#3cd188'
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                     
                       Deal Stage
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.dealstage}
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {/* <DashboardCharts
                        // seriesData={widget.series}
                        seriesData={[95]} 
                        colors= '#3cd188'
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={6} md={6} >
              <Card className="card-animate overflow-hidden">
                <div
                  className="position-absolute start-0"
                  style={{ zIndex: "0" }}
                >
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 120"
                    width="200"
                    height="120"
                  >
                    <path
                      id="Shape 8"
                      style={{ opacity: ".05", fill: "#FF2D01" }}
                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                    />
                  </svg>
                </div>
                <CardBody style={{ zIndex: "1" }}>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="text-uppercase fw-medium text-muted text-truncate mb-3">
                      pipeline
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.pipeline} 
                        </span>
                      </h4>
                    </div>
                    <div className="flex-shrink-0">
                      {/* <DashboardCharts
                        // seriesData={widget.series}
                        seriesData={[95]} 
                        colors= '#FF9882'
                      /> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
      
        </Row>
        
      </div>
    </Col>


    {{myVariable , syncs }&&
            

         

            <Card>
        <CardHeader>
                              <h3>Notes about this Sale</h3>
                         
                          
        </CardHeader>
            <div className="table-responsive">
        <Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
           
        
            <tbody>
            {(myVariable || []).map((item, key) => (
        
                <tr>
                
                    <td>{item.noteText}</td>
                   
                 
                </tr>
        
        
            ))}

{syncs && 
            <tr>
             <td> {syncs}</td>
            </tr>
          }
            
         
            </tbody>
        </Table>
        </div>
        </Card>
        
        }



        
<form onSubmit={handleSubmit}>
        <div className="mb-4">
       
                <Card>
               

                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Notes
                    </Label>
                    <Input
                        type="text"
                    id="noteText"
                    name="noteText"
                    value={formData.noteText}
                    onChange={handleChange}
                        />
                   
                  </div>
                </CardBody>


   



                

                <div className="text-center mb-3">
                <button type="submit" className="btn btn-secondary align-bottom">
                  Add notes
                </button>
                </div>
 

      
              </Card>


        </div>
      
     

      
      
        
      </form>

    




{/* 
    <div>
        <Card>
        <Col>
          <div>
           
            <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
          </div>
          </Col>
          <div className="mt-4">
          <button className="btn btn-secondary w-10" type="submit">Add Notes</button>
         </div>
        </Card>
        
       
    </div> */}


  

    </Container>
    </div>
  </React.Fragment>
  );
};

export default EcommerceOrderDetail;