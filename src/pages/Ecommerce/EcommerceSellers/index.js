import React, { useEffect, useState } from "react";
//Import Flatepicker
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  CardBody,
  CardHeader,
  Container,
  Card,
  Row,
  Col,
  Input,
  ModalHeader,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  Form,
} from "reactstrap";

import API from "../../../common/data/FatchData";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Select from "react-select";

//redux
import { useSelector, useDispatch } from "react-redux";
// Import actions
import { getSellers as onGetSellers } from "../../../slices/thunks";
import SellerChats from "./SellerChats";
import { createSelector } from "reselect";

const EcommerceSellers = () => {
  // const dispatch = useDispatch();
  // const [sellerList, setSellerList] = useState([]);
  // const [modal, setModal] = useState(false);
  // const [companyType, setcompanyType] = useState(null);

  // const selectsellerData = createSelector(
  //   (state) => state.Ecommerce.sellers,
  //   (sellers) => sellers
  // );
  // // Inside your component
  // const sellers = useSelector(selectsellerData);

  // useEffect(() => {
  //   setSellerList(sellers);
  // }, [sellers]);

  // useEffect(() => {
  //   dispatch(onGetSellers());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(sellers)) setSellerList(sellers);
  // }, [sellers]);

  // const toggle = () => {
  //   if (modal) {
  //     setModal(false);
  //   } else {
  //     setModal(true);
  //   }
  // };

  // //Tab
  // const [activeTab, setActiveTab] = useState("1");
  // const toggleTab = (tab) => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };

  // const companytypes = [
  //   {
  //     options: [
  //       { label: "Select type", value: "Select type" },
  //       { label: "All", value: "All" },
  //       { label: "Merchandising", value: "Merchandising" },
  //       { label: "Manufacturing", value: "Manufacturing" },
  //       { label: "Partnership", value: "Partnership" },
  //       { label: "Corporation", value: "Corporation" },
  //     ],
  //   },
  // ];

  // function handlecompanyType(companyType) {
  //   setcompanyType(companyType);
  // }

  // const category = (e) => {
  //   if (e === "All") {
  //     var filter = sellers.filter((item) => item.category !== e);
  //   } else {
  //     filter = sellers.filter((item) => item.category === e);
  //   }
  //   setSellerList(filter);
  // };


  const [formData, setFormData] = useState({
    numberOfPanels: '',
    totalWattage: '',
    redline: '',
    Price : '',
    financingDetails: '',
    Date : '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);

     
      API.postCreateSale(formData).then((response) => {
         setSuccessMessage(response.data.message);
        console.log(`Add Sales ${response.data}`);
        // setMostPannelsSold(response.data.Price);
      })
      .catch((error) => {
      });
  





  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage('Failed to add sales');
 
      }, 15000); // Display success message for 3 seconds
      return () => clearTimeout(timeout);
    }
   
  
  }, [successMessage]);

  document.title = "Add New Sales";
  return (
    <React.Fragment>
      <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Add New Sales" pageTitle="Add New Sales" />
        <Row>
          <Col xs={12}>

            <h1> Add New Sales </h1>

            <div className="max-w-md mx-auto m-4 p-6 bg-white rounded-md shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">Deal Information</h2> */}



      {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded-md mb-4">
            {successMessage}
          </div>
        )} 



      <form onSubmit={handleSubmit}>
        <div className="mb-4">
       
                <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    numberOfPanels
                    </Label>
                    <Input
                      type="text"
                        id="numberOfPanels"
                      name="numberOfPanels"
                      value={formData.numberOfPanels}
                    onChange={handleChange}
                       placeholder="Enter number Of Panels"
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    totalWattage
                    </Label>
                    <Input
                       type="text"
                      id="totalWattage"
                      name="totalWattage"
                      value={formData.totalWattage}
                      onChange={handleChange}
                      placeholder="Enter total Wattage"
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Date
                    </Label>
                    <Input
                        type="date"
                    id="Date"
                    name="Date"
                    value={formData.Date}
                    onChange={handleChange}
                        />
                   
                  </div>
                </CardBody>


           

                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    redline
                    </Label>
                    <Input
                       type="text"
                      id="redline"
                      name="redline"
                      value={formData.redline}
                      // value ={"default "}
                      onChange={handleChange}
                      placeholder="Enter redline"
                        />
                   
                  </div>
                </CardBody>



                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    financingDetails
                    </Label>
                    <Input
                       type="text"
                      id="financingDetails"
                      name="financingDetails"
                      value={formData.financingDetails}
                      // value ={"default "}
                      onChange={handleChange}
                      placeholder="Enter Financing Details"
                        />
                   
                  </div>
                </CardBody>


                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                    Price
                    </Label>
                    <Input
                       type="text"
                      id="Price"
                      name="Price"
                      value={formData.Price}
                      // value ={"default "}
                      onChange={handleChange}
                      placeholder="Enter Price"
                        />
                   
                  </div>
                </CardBody>






                <CardBody>
                  {/* <div className="mb-3">
                    
                    <Label className="form-label" htmlFor="product-title-input">
                    dealstage
                    </Label>
                    <select
                     type="text"
                     id="dealstage"
                      name="dealstage"
                      value={formData.dealstage}
                      onChange={handleChange}
                      placeholder="Enter dealstage"
                        >
                          <option value="">Select dealstage value</option>
                        <option value="appointmentscheduled">appointmentscheduled</option>
                        <option value="qualifiedtobuy">qualifiedtobuy</option>
                        <option value="presentationscheduled">presentationscheduled</option>
                        <option value="decisionmakerboughtin">decisionmakerboughtin</option>
                        <option value="contractsent">contractsent</option>
                        <option value="closedwon">closedwon</option>
                        <option value="closedlost">closedlost</option>
                        </select>


                   
                  </div> */}
                </CardBody>




                {/* <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Deal Stage
                    </Label>
                    <Input
                     type="text"
                     id="pipeline"
                      name="pipeline"
                      value={formData.pipeline}
                      onChange={handleChange}
                      placeholder="Enter pipeline"
                        />
                        
                   
                  </div>
                </CardBody> */}


                {/* <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                     Deal Stage
                    </Label>
                    <select
                    id="dealstage"
                   name="dealstage"
                   value={formData.dealstage}
                   onChange={handleChange}
                        >
                          <option value="">Select Deal Stage</option>
                        <option value="contractsent">contractsent</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Closed">Closed</option>
                        </select>


                   
                  </div>
                </CardBody> */}

                <div className="text-center mb-3">
                <button type="submit" className="btn btn-secondary align-bottom">
                  Submit
                </button>
                </div>


      
              </Card>


        </div>
      
   

      
        
      </form>
    </div>



          </Col>
        </Row>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default EcommerceSellers;