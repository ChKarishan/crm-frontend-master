import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";

import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  ModalBody,
  Label,
  Input,
  Modal,
  ModalHeader,
  Form,
  ModalFooter,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormFeedback
} from "reactstrap";

import 'react-toastify/dist/ReactToastify.css';

import API from "../../common/data/FatchData";


const CrmCompanies = () => {
  
  const [data, setData] = useState(null);

  
  useEffect(() => {
      // Example of using the getUser function from the API file
     


      // Api call for Largest Sales
      API.getAllContactsFromHubspot().then((response) => {
        console.log(response.data);
        setData(response.data);
        })
        .catch((error) => {
        });


     




    }, []);


  document.title = "All Contacts | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
    <div className="page-content">
          <Container fluid>
            <BreadCrumb title="All Contacts" pageTitle="Pages" />
            <Row>
              <Col xs={12}>
  
                  <Card >
                      <CardHeader className="align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">All Contacts</h4>
                          <div className="flex-shrink-0">
                              <UncontrolledDropdown className="card-header-dropdown">
                                  <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                      <span className="text-muted">02 Nov 2021 to 31 Dec 2021<i className="mdi mdi-chevron-down ms-1"></i></span>
                                  </DropdownToggle>
                                  <DropdownMenu className="dropdown-menu-end" end>
                                      <DropdownItem>Today</DropdownItem>
                                      <DropdownItem>Last Week</DropdownItem>
                                      <DropdownItem>Last Month</DropdownItem>
                                      <DropdownItem>Current Year</DropdownItem>
                                  </DropdownMenu>
                              </UncontrolledDropdown>
                          </div>
                      </CardHeader>
  
                      <CardBody>
                          <div className="table-responsive table-card grow" >
                          <SimpleBar style={{ maxHeight: "324px" }}>
                              <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                  <thead className="text-muted table-light">
                                      <tr className="text-muted">
                                          <th scope="col" style={{ width: "20%" }}>Email </th>
                                          <th scope="col" style={{ width: "20%" }}>FirstName</th>
                                         
                                          <th scope="col" style={{ width: "16%" }}>Creating Date</th>
                                      </tr>
                                  </thead>
                                  {/* style={ "overflow-y: auto ; max-height: 100px"} */}
                               
                                  <tbody className="overflow-auto">
                                 
                                      {( data || []).map((item, index) => (
  
                                          <tr key={index}>
                                              <td>{item.properties.email}</td>
                                              <td>{item.properties.firstname}</td>
                                            
                                              <td>{item.properties.createdate}</td>
                                            
  {/* 
                                              <td><img src={item.img} alt="" className="avatar-xs rounded-circle me-2" />
                                                  <Link to="#" className="text-body fw-medium">{item.representativeName}</Link></td>
                                              <td><span className={"badge bg-" + item.badgeClass + "-subtle text-"+item.badgeClass + " p-2"}>{item.status}</span></td>
                                              <td><div className="text-nowrap">{item.statusValue}</div></td> */}
                                          </tr>
                                      ))}
                                    
                      
                     
                                  </tbody>
                                
                              </table>
                              </SimpleBar>
                          </div>
                      </CardBody>
                  </Card>
    
                  <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Submit
        </button>
              
  
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment >
  );
};

export default CrmCompanies;
