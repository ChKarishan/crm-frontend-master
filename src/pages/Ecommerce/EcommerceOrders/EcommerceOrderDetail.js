import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table,
  Label,
  CardHeader,
  Collapse
} from "reactstrap";

import DashboardCharts from "../../DashboardJob/DashboardCharts";

import classnames from "classnames";
import { Link } from "react-router-dom";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { productDetails } from "../../../common/data/ecommerce";
import EcommerceOrderProduct from "./EcommerceOrderProduct";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";

const EcommerceOrderDetail = (props) => {

  const location = useLocation()
  const { from } = location.state
  console.log(`state is ${from.date}`)



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
                            <button type="button"  className="btn btn-soft-secondary btn-sm">

                            Add Installers
                                {/* <i className="ri-file-list-3-line align-middle"></i> Add New */}
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
        <tr>
            <td className="fw-medium">01</td>
            <td>Implement new UX</td>
            <td>+932 3244 3422</td>
            {/* <td><span className="badge bg-primary-subtle text-primary">Backlog</span></td> */}
            <td>Lanora Sandoval</td>
            <td>$4,521</td>
            <td>
                {/* <div className="dropdown">
                    <Link to="#" role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                        <li><Link className="dropdown-item" to="#">View</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                    </ul>
                </div> */}

              <i className="ri-delete-bin-line bg-secoundry"></i>
            </td>
        </tr>
        <tr>
            <td className="fw-medium">02</td>
            <td>Design syntax</td>
            <td>+932 3244 3421</td>
            {/* <td><span className="badge bg-secondary-subtle text-secondary">In Progress</span></td> */}
            <td>Calvin Garrett</td>
            <td>$7,546</td>
            <td>
                {/* <div className="dropdown">
                    <Link to="#" role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                        <li><Link className="dropdown-item" to="#">View</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                    </ul>
                </div> */}
                <i className="ri-delete-bin-line bg-secoundry"></i>
            </td>
        </tr>
        <tr>
            <td className="fw-medium">03</td>
            <td>Configurable resources</td>
            <td>+932 3244 3422</td>
            {/* <td><span className="badge bg-success-subtle text-success">Done</span></td> */}
            <td>Florence Guzman</td>
            <td>$1,350</td>
            <td>
                {/* <div className="dropdown">
                    <Link to="#" role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                        <li><Link className="dropdown-item" to="#">View</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                    </ul>
                </div> */}
             
                <i className="ri-delete-bin-line bg-secoundry"></i>

            </td>
        </tr>
        <tr>
            <td className="fw-medium">04</td>
            <td>Implement extensions</td>
            <td>+932 3244 3422</td>
            {/* <td><span className="badge bg-secondary-subtle text-secondary">In Progress</span></td> */}
            <td>Maritza Blanda</td>
            <td>$4,521</td>
            <td>
                {/* <div className="dropdown">
                    <Link to="#" role="button" id="dropdownMenuLink8" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                        <li><Link className="dropdown-item" to="#">View</Link></li>
                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                    </ul>
                </div> */}
                <i className="ri-delete-bin-line bg-secoundry"></i>
            </td>
        </tr>
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

export default EcommerceOrderDetail;