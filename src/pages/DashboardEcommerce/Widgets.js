import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { ecomWidgets } from "../../common/data";
import { useEffect, useState } from 'react';
import API from '../../common/data/FatchData';



const Widgets = () => {

    const [largestSale, setLargestSales] = useState(null);
    const [mostReferral, setMostReferral] = useState(null);
    const [bestDoorNocker, setBestDoorNocker] = useState(null);
    const [bestCloser, setBestCloser] = useState(null);
    const [mostMegawattsSold, setMostMegawattsSold] = useState(null);
    const [mostPannelsSold, setMostPannelsSold] = useState(null);
    
    useEffect(() => {
        // Example of using the getUser function from the API file
       

        API.getMostReferral().then((response) => {
            setMostReferral(response.data);
        }).catch((error) => {
        });


        // Api call for Largest Sales
        API.getLargestSale().then((response) => {
            setLargestSales(response.data);
          })
          .catch((error) => {
          });


       


    // Api call for Most Magawatt Sales
        API.getSaleWithMostWattage().then((response) => {
            setMostMegawattsSold(response.data.Price);
          })
          .catch((error) => {
          });


    // Api call for Most Pannels Solds
          API.getSaleWithMostPannels().then((response) => {
            setMostPannelsSold(response.data.Price);
          })
          .catch((error) => {
          });
      



      }, []);

    return (
        <React.Fragment>
            {/* {ecomWidgets.map((item, key) => ( */}
              
                 {/* <Row  xl={4} md={6} className="mr-10">  */}

            <div className="col-xl-12">
                <div className="card crm-widget">
                    <div className="card-body p-0">
                        <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                            {/* {(crmWidgets).map((widget, index) => ( */}
                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Largest Sale
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={largestSale}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Most Referal
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={mostReferral}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Best Door Nocker
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={bestDoorNocker}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Best Closer
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={bestCloser}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">most Megawatts Sold
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={''}
                                                        suffix={'MW'}
                                                        // separator={}
                                                        end={mostMegawattsSold}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">most Pannels Sold</h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i> */}
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={''}
                                                        suffix={'MW'}
                                                        // separator={}
                                                        end={mostPannelsSold}
                                                        // decimals={2}
                                                        duration={2}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                          
                            

                        </div>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    );
};

export default Widgets;