import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody,Table, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import SimpleBar from "simplebar-react";
import API from '../../../common/data/FatchData';


import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const CrmLeads = () => {
    let navigate = useNavigate(); 

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

    const handleClick = () => {
        console.log("Button clinck");
        // Use the history object to navigate to the other page
        let path = `/apps-crm-deals`; 
        navigate(path);
      };

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
                        <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New  
                           
                            </button>
                    </CardHeader>

                   


<div className="table-responsive">
<Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">Deal Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Dealstage</th>
            <th scope="col">Pannels Size</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Pipeline</th> */}


        </tr>
    </thead>
    <tbody>
    {(data || []).map((item, key) => (

        <tr>
            
            <td>{item.dealname}</td>
            <td>{item.amount}</td>
            <td>{item.dealstage}</td>
            
            <td>{item.sizeofpannals}</td>
            <td>{item.address}</td>

            <td>
                                            
                                            <Link to='/apps-projects-create' state={{ from: {dealname : item.dealname ,  
                                                    amount:  item.amount,
                                                    closedate : item.closedate,
                                                    createdate: item.createdate,
                                                    dealstage : item.dealstage,
                                                    pipeline: item.pipeline,
                                                    address : item.address,
                                                    sizeofpannals : item.sizeofpannals,
                                                    id : item.dealId
                                            } }}   className="text-body ">Edit </Link> </td>

            <td>
                                            
            <Link to='/apps-ecommerce-order-details' state={{ from: {dealname : item.dealname ,  
                    amount:  item.amount,
                    closedate : item.closedate,
                    createdate: item.createdate,
                    dealstage : item.dealstage,
                    pipeline: item.pipeline,
                    address : item.address,
                    sizeofpannals : item.sizeofpannals,
                    id : item.dealId
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