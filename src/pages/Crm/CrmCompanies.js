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

import { useNavigate } from "react-router-dom";


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

    let navigate = useNavigate(); 

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-crm-contacts`; 
    navigate(path);
  };

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

                          <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New  
                             {/* adding new comment */}
                                {/* <i className="ri-file-list-3-line align-middle"></i> Add New */}
                            </button>
                      
                      </CardHeader>
  
                      <div className="table-responsive">
<Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Creatation</th>
           


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
