import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import FeatherIcon from "feather-icons-react";
import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  Form,
  Input,
  Label,
  Table,
  FormFeedback,
  CardHeader,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";

import API from "../../common/data/FatchData";


//formik
import { useFormik } from "formik";
import * as Yup from "yup";

//redux
import { useDispatch } from "react-redux";
import { addNewInvoice as onAddNewInvoice } from "../../slices/thunks";
import { Parallax } from "swiper";

const   InvoiceCreate = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [ispaymentDetails, setispaymentDetails] = useState(null);
  const [isCurrency, setisCurrency] = useState("$");

  function handleispaymentDetails(ispaymentDetails) {
    setispaymentDetails(ispaymentDetails);
  }

  function handleisCurrency(isCurrency) {
    setisCurrency(isCurrency);
  }

  const paymentdetails = [
    {
      options: [
        { label: "Payment Method", value: "Payment Method" },
        { label: "Mastercard", value: "Mastercard" },
        { label: "Credit Card", value: "Credit Card" },
        { label: "Visa", value: "Visa" },
        { label: "Paypal", value: "Paypal" },
      ],
    },
  ];

  const allstatus = [
    {
      options: [
        { label: "Select Payment Status", value: "Select Payment Status" },
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Refund", value: "Refund" },
      ],
    },
  ];

  const allcurrency = [
    {
      options: [
        { label: "$", value: "($)" },
        { label: "£", value: "(£)" },
        { label: "₹", value: "(₹)" },
        { label: "€", value: "(€)" },
      ],
    },
  ];

  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(0);
  const [tax, setTax] = useState(0);
  const [dis, setDis] = useState(0);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    let tax = (0.125 * rate * count);
    let dis = (0.15 * rate * count);

    if ((rate && count) && isNaN !== 0) {
      setCharge(65);
    } else {
      setCharge(0);

    }
    setTax(tax);
    setDis(dis);
  }, [rate, count]);

  const dateFormat = () => {
    let d = new Date(),
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return ((d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear()).toString());
  };

  const [date, setDate] = useState(dateFormat());

  const dateformate = (e) => {
    const date = e.toString().split(" ");
    const joinDate = (date[2] + " " + date[1] + ", " + date[3]).toString();
    setDate(joinDate);
  };



  document.title = "Referral System | Nuktasoft - React Admin & Dashboard Template";

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      postalcode: "",
      registration: "",
      email: "",
      website: "",
      contact: "",
      invoiceId: "",
      date: "",
      name: "",
      status: "",
      country: "",
      amount: "",
      billing_address: "",
      billing_phone: "",
      billing_taxno: "",
      shipping_name: "",
      shipping_address: "",
      shipping_phone: "",
      shipping_taxno: "",
      product_name: "",
    },
    validationSchema: Yup.object({
      postalcode: Yup.string().required("This field is required"),
      registration: Yup.string().required("Please Enter a registration no"),
      email: Yup.string().required("Please Enter a Email"),
      website: Yup.string().required("Please Enter a website"),
      contact: Yup.string().required("Please Enter a contact number"),
      invoiceId: Yup.string().required("This field is required"),
      name: Yup.string().required("Please Enter a Full name"),
      // country: Yup.string().required("Please Enter a Country"),
      billing_address: Yup.string().required("Please Enter a Address"),
      billing_phone: Yup.string().required("Please Enter a Phone Number"),
      billing_taxno: Yup.string().required("Please Enter a tax Number"),
      shipping_name: Yup.string().required("Please Enter a Full name"),
      shipping_address: Yup.string().required("Please Enter a Address"),
      shipping_phone: Yup.string().required("Please Enter a Phone Number"),
      shipping_taxno: Yup.string().required("Please enter a tax Number"),
      product_name: Yup.string().required("Please Enter a product Name"),
    }),
    onSubmit: (values) => {
      const newInvoice = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        postalcode: values.postalcode,
        registration: values.registration,
        email: values.email,
        website: values.website,
        contact: values.contact,
        invoiceId: values.invoiceId,
        date: date,
        name: values.name,
        status: values.status,
        country: "United States of America",
        amount: Math.round(rate * count + tax + charge - dis),
        billing_address: values.billing_address,
        billing_phone: values.billing_phone,
        billing_taxno: values.billing_taxno,
        shipping_name: values.shipping_name,
        shipping_address: values.shipping_address,
        shipping_phone: values.shipping_phone,
        shipping_taxno: values.shipping_taxno,
        product_name: values.product_name,
      };
      dispatch(onAddNewInvoice(newInvoice));
      history("/apps-invoices-list");
      validation.resetForm();
    },
  });


  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);
  const [parent, setParent] = useState(null);

  
  useEffect(() => {
      // Example of using the getUser function from the API file
     


      // Api call for Largest Sales
      API.getGenealogy().then((response) => {
        console.log(response.data);
        setCode(response.data.genealogy.user.referralCode);
        setData(response.data.genealogy.user.children);
        setParent(response.data.genealogy.user.parent);

        })
        .catch((error) => {
        });


     




    }, []);


  return (
    <div className="page-content">
      <Container fluid>
        {/* <BreadCrumb title="Referral System" pageTitle="Referral System" /> */}
        <Row className="justify-content-center">
      

          <Col xl={3}>
            <Card className="card-animate">
              <CardHeader className="bg-secondary" >
                <h2 className="text-white ">Referral Code</h2>
              </CardHeader>
            </Card>
            </Col>

            <Col xl={3}>
            <Card >
              <CardHeader>
                <h2>{code}</h2>
              </CardHeader>
            </Card>
            </Col>
          
          
        </Row>
        {/* <h1>Referrals Persons</h1> */}
      

        <Row> 
      <Col xl  = {6}>       
      
    
      <Card className="card-animate">
      <CardHeader className="align-items-center d-flex bg-secondary ">             
                  <h4 className="card-title mb-0 flex-grow-1 text-white">children</h4>      
              </CardHeader>
              {(data || []).map((item, key) => ( 
                    <CardBody>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className=" fw-Large  mb-0">
                          
                          Name : {'\t'}  {item.username}
                          </h5>
                          <h5 className=" fw-Large  mb-0">
                          
                          Email : {'\t'}  {item.email}
                          </h5>
                          <h5 className=" fw-Large  mb-0">
                          
                          Referral Code : {'\t'}  {item.referralCode}
                          </h5>
                        </div>
                        
                      </div>
                      
                      <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                    </CardBody>
                    ))}
       </Card>

      



                  
    

        
</Col>




<Col xl  = {6}>   

      <Card className="card-animate">
      <CardHeader className="align-items-center d-flex bg-secondary ">             
                  <h4 className="card-title mb-0 flex-grow-1 text-white">Parent</h4>      
              </CardHeader>

              { parent && 
                <CardBody>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className=" fw-Large  mb-0">
                          
                          Name : {'\t'}  {parent.username}
                          </h5>
                          <h5 className=" fw-Large  mb-0">
                          
                          Email : {'\t'}  {parent.email}
                          </h5>
                          <h5 className=" fw-Large  mb-0">
                          
                          Referral Code : {'\t'}  {parent.referralCode}
                          </h5>
                        </div>
                        
                      </div>
                      
                    
                    </CardBody>

                     }
       </Card>
        
</Col> 

</Row>

      






      </Container>
    </div>
  );
};

export default InvoiceCreate;
