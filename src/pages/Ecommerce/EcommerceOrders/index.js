import React, { useEffect, useState, useMemo, useCallback } from "react";
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
  Modal,
  ModalHeader,
  Form,
  ModalBody,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import * as moment from "moment";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
import DeleteModal from "../../../Components/Common/DeleteModal";
import { isEmpty } from "lodash";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

//Import actions
import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "../../../slices/thunks";

import Loader from "../../../Components/Common/Loader";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ExportCSVModal from "../../../Components/Common/ExportCSVModal";
import { createSelector } from "reselect";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EcommerceOrders = (props) => {
  let navigate = useNavigate(); 
  const location = useLocation()
  const { from } = location.state
  console.log(`state is ${from.date}`)

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-calendar`; 
    navigate(path);
  };



  document.title = "News Details | Nuktasoft - React Admin & Dashboard Template";
  return (
    <React.Fragment>
    <div className="page-content">
       <Container fluid>
         {/* <BreadCrumb title="News Details" pageTitle="News Details" />  */}


         <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">News Details</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add News
                                
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   


  
    <Col xl={12}>
      <div className="d-flex flex-column h-100">
        <Row>
          {/* {props.map((widget, key) => ( */}
            <Col xl={12}>
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
                        Heading
                        
                      </p>
                      <h5 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.dealname} 
                        </span>
                      </h5>
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


            <Col xl={12}  >
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
                      <h6 className="fs-22 fw-semibold ff-secondary mb-0">
                        <span className="counter-value" data-target="36894">
                          {from.amount}
                        </span>
                      </h6>
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


          
      
        </Row>
        
      </div>
    </Col>




    </Container>
    </div>
  </React.Fragment>
  
  );
};

export default EcommerceOrders;


