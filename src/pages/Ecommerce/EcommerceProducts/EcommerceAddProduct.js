import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
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
import API from "../../../common/data/FatchData";


import { Link, useNavigate } from "react-router-dom";


import { useLocation } from 'react-router-dom';

const EcommerceAddProduct = (props) => {


  let navigate = useNavigate(); 
  const location = useLocation()
  const { from } = location.state;

  console.log(`state is ${from.Price}`)


  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-ecommerce-sellers`; 
    navigate(path);
  };
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example of using the getUser function from the API file

    // Api call for Largest Sales
    console.log(from.installers);
    API.getListInstaller(from.installers).then((response) => {
      console.log(response.data);
      setData(response.data.results);
      })
      .catch((error) => {
      });

      console.log(data);
  }, []);





  document.title = "Sales Details | Velzon - React Admin & Dashboard Template";




  return (
    <React.Fragment>
    <div className="page-content">
       <Container fluid>
         <BreadCrumb title="Sales Details" pageTitle="Sales Details" /> 


         <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">Sales Details</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add Sales
                                
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   


  

 
    <Col xl={12}>
      <div className="d-flex flex-column h-100">
        <Row>
          
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
                        totalWattage
                        
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.totalWattage} 
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
                      
                      numberOfPanels
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.numberOfPanels}
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
                      
                        Date
                        
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.date}
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
                        Agent
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.agent}
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
                     Price
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.Price}
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
                      redline
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.redline} 
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
                      financingDetails
                      </p>
                      <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.financingDetails} 
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





<Card>
<CardHeader>
                      <h3>Installers List</h3>
                 
                  
</CardHeader>
    <div className="table-responsive">
<Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Assignee</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
    {(data || []).map((item, key) => (

        <tr>
            <td className="fw-medium">{key+1}</td>
            <td>{item.name}</td>
            <td>{item.phoneNumber}</td>
            {/* <td><span className="badge bg-primary-subtle text-primary">Backlog</span></td> */}
            <td>Lanora Sandoval</td>
            <td>$4,521</td>
            <td>
              

              <i className="ri-delete-bin-line bg-secoundry"></i>
            </td>
        </tr>


    ))}

    
 
    </tbody>
</Table>
</div>
</Card>

    <div>
        <Card>
        <Col>
          <div>
            {/* <Label htmlFor="exampleFormControlTextarea5" className="form-label">Example Textarea</Label> */}
            <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
          </div>
          </Col>
          <div className="mt-4">
          <button className="btn btn-secondary w-10" type="submit">Add Notes</button>
         </div>
        </Card>
        
       
    </div>


  

    </Container>
    </div>
  </React.Fragment>
  );
};

export default EcommerceAddProduct;