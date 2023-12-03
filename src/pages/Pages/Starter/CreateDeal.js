import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';


import axios from "axios";
// import { dealsStatus } from "../../common/data";
// import { bestSalers } from '../../../common/data';
import { bestSalers } from '../../../common/data/leaderBoard';
import SimpleBar from "simplebar-react";
import { result } from 'lodash';

const CreateDeal = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000'); // Replace with your server endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          console.log(jsonData)
          setData(jsonData);
          console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  document.title = "all Sales   | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="All Sales" pageTitle="Pages" />
          <Row>
            <Col xs={12}>

              <h1> Create Deals Pages</h1>



            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateDeal;