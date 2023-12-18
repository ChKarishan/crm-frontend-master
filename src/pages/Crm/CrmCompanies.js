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
  Table,
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
                      <CardHeader className="align-items-center d-flex bg-secondary">
                          <h4 className="card-title mb-0 flex-grow-1 text-white">All Contacts</h4>
                          {/* <div className="flex-shrink-0">
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
                          </div> */}
                      </CardHeader>
  
                      <div className="table-responsive">
<Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Creatation Deal</th>
           


        </tr>
    </thead>
    <tbody>
    {(data || []).map((item, key) => (

        <tr>
            
            <td>{item.properties.firstname}</td>
            <td>{item.properties.email}</td>
            <td>{item.properties.createdate}</td>
         
           
             {/* <td>
                                            
           <Link to='/apps-ecommerce-order-details' state={{ from: {dealname : item.properties.dealname ,  
                    amount:  item.properties.amount,
                    closedate : item.properties.closedate,
                    createdate: item.properties.createdate,
                    dealstage : item.properties.dealstage,
                    pipeline: item.properties.pipeline
            } }}   className="text-body ">Details</Link></td>
                                           
                                     */}
           
        </tr>


    ))}

    
 
    </tbody>
</Table>
</div>
                  </Card>
    
                
              
  
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment >
  );
};

export default CrmCompanies;
