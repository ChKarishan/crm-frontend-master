import React, { useEffect, useState, useMemo } from "react";

import {
  CardBody,
  Container,
  CardHeader,
  Progress,
  Row,
  Card,
  Col,
  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

import API from "../../../common/data/FatchData";
//Import Breadcrumb
import BreadCrumb from "../../../Components/Common/BreadCrumb";

import Img2 from "../../../assets/images/companies/img-2.png";
import ReviewSlider from "../../../Components/Common/ReviewSlider";
import TableContainer from "../../../Components/Common/TableContainer";
//Import actions
import { getProducts as onGetProducts } from "../../../slices/thunks";

import {
  Rating,
  Published,
  Price,
} from "../EcommerceProducts/EcommerceProductCol";

import Revenue from "../../DashboardEcommerce/Revenue";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";



const EcommerceSellerDetail = () => {
 
  const [data, setData] = useState(null);
  let navigate = useNavigate(); 

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-ecommerce-sellers`; 
    navigate(path);
  };

  useEffect(() => {
      // Example of using the getUser function from the API file

      // Api call for Largest Sales
      API.getSales().then((response) => {
        console.log(response.data);
        setData(response.data);
        })
        .catch((error) => {
        });

    }, []);
document.title =" Sales ";

  return (
    <React.Fragment>

<div className="page-content">
 
        




              <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">All Sales</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New Sale
      
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   

            <Row>


            {(data || []).map((item, key) => (
            <Col xl={4} key={3}>

            <Link to='/apps-ecommerce-add-product' state={{ from: {
                                        
                                        
                                        totalWattage:  item.totalWattage,
                                        redline : item.redline,
                                        numberOfPanels : item.numberOfPanels,
                                        installers : item.installers,
                                        financingDetails : item.financingDetails,
                                        Price: item.Price,
                                        date: item.Date,
                                        id : item._id,
                                        agent : item.agent,


                                        
                                        
                                        
                                        } }} className="fw-medium text-reset"> 
                <Card >
                   


             

                        <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-sm flex-shrink-0">
                                        {/* <span className={`avatar-title bg-briefcase -subtle text-primary rounded-2 fs-2`}>
                                             <FeatherIcon icon={"ri-arrow-down-s-line"} className={`text-secoundry`} />
                                          
                                        </span> */}
                                        {/* <img src={avatar10} alt="" className="avatar-xs object-fit-cover rounded-circle" /> */}
                                    </div>
                                   
                                    <div className="flex-grow-1 overflow-hidden ms-3">
                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-3">{item.ItemName}</p>
                                        <div className="d-flex align-items-center mb-3">
                                        <h4 className="mb-0"> <span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={item.Price}
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
                                            
                                            {/* <span className={"fs-12 badge bg-danger-subtle text-danger"}><i className={"fs-13 align-middle me-1 ri-arrow-down-s-line"}></i>233</span> */}
                                        </div>
                                        <p className="text-muted text-truncate mb-0">{item.Date}</p>
                                    </div>
                                </div>
                            </CardBody>
                            
               
                </Card>
                  </Link>

            </Col>   
            ))}
            </Row>

</div>


          
             
        </React.Fragment>
  );
};

export default EcommerceSellerDetail;
