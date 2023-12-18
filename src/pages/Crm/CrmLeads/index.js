import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody,Table, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import SimpleBar from "simplebar-react";
import API from '../../../common/data/FatchData';


import 'react-toastify/dist/ReactToastify.css';


const CrmLeads = () => {

  const [data, setData] = useState(null);

  
  useEffect(() => {
      // Example of using the getUser function from the API file
     


      // Api call for Largest Sales
      API.getAllDealsFormHubsport().then((response) => {
        console.log(response.data);
        setData(response.data);
        })
        .catch((error) => {
        });


     




    }, []);

  document.title = "All Deals | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
  <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="All Deals" pageTitle="Pages" /> */}
          <Row>
            <Col xs={12}>

                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary">
                        <h4 className="card-title mb-0 flex-grow-1 text-white">All Deals</h4>
                        <div className="flex-shrink-0">
                            {/* <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted">02 Nov 2021 to 31 Dec 2021<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end" end>
                                    <DropdownItem>Today</DropdownItem>
                                    <DropdownItem>Last Week</DropdownItem>
                                    <DropdownItem>Last Month</DropdownItem>
                                    <DropdownItem>Current Year</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </div>
                    </CardHeader>

                    {/* <CardBody>
                        <div className="table-responsive table-card grow" >
                        <SimpleBar style={{ maxHeight: "324px" }}>
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr className="text-muted">
                                        <th scope="col">Deal Name</th>
                                        <th scope="col" style={{ width: "20%" }}>Amount</th>
                                        <th scope="col" >Closing Date</th>
                                        <th scope="col" style={{ width: "16%" }}>Creating Date</th>
                                        <th scope="col" style={{ width: "12%" }}>Deal Stage</th>
                                        <th scope="col" style={{ width: "12%" }}>pipeline</th>
                                    </tr>
                                </thead>
                                
                             
                                <tbody className="overflow-auto">
                               
                                    {( data || []).map((item, index) => (

                                        <tr key={index}>
                                            <td>{item.properties.dealname}</td>
                                            <td>{item.properties.amount}</td>
                                            <td>{item.properties.closedate}</td>
                                            <td>{item.properties.createdate}</td>
                                            <td>{item.properties.dealstage}</td>
                                            <td>{item.properties.pipeline}</td>
                                        </tr>
                                    ))}
                                  
                    
                   
                                </tbody>
                              
                            </table>
                            </SimpleBar>
                        </div>
                    </CardBody> */}

{/* 
                    <CardHeader>
                      <h3>Installers List</h3>
                 
                  
</CardHeader> */}


<div className="table-responsive">
<Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">Deal Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Dealstage</th>
            <th scope="col">Pipeline</th>


        </tr>
    </thead>
    <tbody>
    {(data || []).map((item, key) => (

        <tr>
            
            <td>{item.properties.dealname}</td>
            <td>{item.properties.amount}</td>
            <td>{item.properties.dealstage}</td>
            <td>{item.properties.pipeline}</td>
            <td>
                                            
            <Link to='/apps-ecommerce-order-details' state={{ from: {dealname : item.properties.dealname ,  
                    amount:  item.properties.amount,
                    closedate : item.properties.closedate,
                    createdate: item.properties.createdate,
                    dealstage : item.properties.dealstage,
                    pipeline: item.properties.pipeline
            } }}   className="text-body ">Details</Link></td>
                                           
                                    
           
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

export default CrmLeads;