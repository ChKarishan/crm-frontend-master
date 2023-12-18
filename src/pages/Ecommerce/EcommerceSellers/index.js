import React, { useEffect, useState } from "react";
//Import Flatepicker
import { useNavigate } from "react-router-dom";
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
const EcommerceSellers = () => {
  let navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    numberOfPanels: null,
    totalWattage: null,
    redline: '',
    Price : null,
    financingDetails: '',
    Date : '',
    Installers : []

  });
  const [successMessage, setSuccessMessage] = useState('');
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };








  const [checkedItems, setCheckedItems] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (value) => {
   
    // Check if the value is already in the array
    const isChecked = checkedItems.includes(value);

    // If it's checked, remove it; otherwise, add it
    if (isChecked) {
      // setFormData({ ...formData.Installers.filter(item => item !== value) });
      setCheckedItems(checkedItems.filter(item => item !== value));
    } else {
    setCheckedItems([...checkedItems, value]);
    }

    // await setFormData({ ...formData, "Installers": checkedItems });
    // console.log(formData);


  };

  const [data, setData] = useState(null);


  useEffect(() => {
    // Example of using the getUser function from the API file

    // Api call for Largest Sales
    API.getAllInstaller().then((response) => {
      console.log(response.data);
      setData(response.data);
      })
      .catch((error) => {
      });

  }, []);







  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkedItems);
    //  setFormData({ ...formData, "Installers": checkedItems });
 

    let obj = {
      numberOfPanels: formData.numberOfPanels,
    totalWattage: formData.totalWattage,
    redline: formData.redline,
    Price : formData.Price,
    financingDetails: formData.financingDetails,
    Date : formData.Date,
    installers : checkedItems

     }

     console.log(`obj valie ${obj}`);
     console.log(obj);
     
      API.postCreateSale(obj).then((response) => {
         setSuccessMessage(response.data.message);
        console.log(`Add Sales ${response.data}`);
        // setMostPannelsSold(response.data.Price);
        alert('Sales added successful!');
        let path = `/dashboard-crm`; 
           navigate(path);


      })
      .catch((error) => {

        alert('failed! Check console for details.');

      });
  

      



  };

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage(' ');
 
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

                <h2 className="px-3 "> Add Installers</h2>

        {(data || []).map((item, key) => (
          <div className="px-3 fs-16">
            <input
            className="form-check-input mb-3"
            type="checkbox"
            // value=  `item.name`
            checked={checkedItems.includes(item._id)}
            onChange={() => handleCheckboxChange(item._id)}
        />
          <label>
        {item.name}
        
      </label>
      </div>


                ))}


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