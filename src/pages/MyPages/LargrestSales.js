import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import BreadCrumb from '../../../Components/Common/BreadCrumb';
import BreadCrumb from '../../Components/Common/BreadCrumb';


const LargestSales = () => {
  document.title = "LargestSales | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="LargestSales" pageTitle="MyPages" />
          <Row>
            <Col xs={12}>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default LargestSales;