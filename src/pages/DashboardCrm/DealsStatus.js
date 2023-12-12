import React, { useEffect, useState } from 'react';
import avatar10 from "../../assets/images/users/avatar-10.jpg";

import { Card, CardBody, CardHeader, Col , Row, Button, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import FeatherIcon from "feather-icons-react";
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { dealsStatus } from "../../common/data";
import SimpleBar from "simplebar-react";
import API from '../../common/data/FatchData';
import { useNavigate } from "react-router-dom";

const DealsStatus = () => {

    
  const [data, setData] = useState(null);
  let navigate = useNavigate(); 

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-crm-deals`; 
    navigate(path);
  };


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



    return (
        <React.Fragment>

 
        


              <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">Deals Status</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New  
                             {/* adding new comment */}
                                {/* <i className="ri-file-list-3-line align-middle"></i> Add New */}
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   

            <Row>


            {(data || []).map((item, key) => (
            <Col xl={4} key={3}>

            <Link to='/apps-ecommerce-order-details' state={{ from: {dealname : item.properties.dealname ,  
                                        amount:  item.properties.amount,
                                        closedate : item.properties.closedate,
                                        createdate: item.properties.createdate,
                                        dealstage : item.properties.dealstage,
                                        pipeline: item.properties.pipeline
                                        
                                        
                                        
                                        } }} className="fw-medium text-reset"> 
                <Card >
                   


             

                        <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-sm flex-shrink-0">
                                        {/* <span className={`avatar-title bg-briefcase -subtle text-primary rounded-2 fs-2`}>
                                             <FeatherIcon icon={"ri-arrow-down-s-line"} className={`text-secoundry`} />
                                          
                                        </span> */}
                                        <img src={avatar10} alt="" className="avatar-xs object-fit-cover rounded-circle" />
                                    </div>
                                   
                                    <div className="flex-grow-1 overflow-hidden ms-3">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-3">{item.properties.dealname}</p>
                                        <div className="d-flex align-items-center mb-3">
                                        <h4 className="mb-0"> <span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={item.properties.amount}
                                                        decimals={2}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                            <h4 className="fs-4 flex-grow-1 mb-0"> </h4>
                                                {/* {item.subCounter.map((item,key)=>(<span className="counter-value me-1" data-target="825" key={key}>
                                                    <CountUp
                                                        start={0}
                                                        suffix={item.suffix}
                                                        separator={item.separator}
                                                        end={item.counter}
                                                        duration={4}
                                                    />
                                                </span>))} */}
                                            
                                            <span className={"fs-12 badge bg-danger-subtle text-danger"}><i className={"fs-13 align-middle me-1 ri-arrow-down-s-line"}></i>233</span>
                                        </div>
                                        <p className="text-muted text-truncate mb-0">{item.properties.dealstage}</p>
                                    </div>
                                </div>
                            </CardBody>
                            
               
                </Card>
                  </Link>

            </Col>   
            ))}
            </Row>


          
        </React.Fragment>
    );
};

export default DealsStatus;