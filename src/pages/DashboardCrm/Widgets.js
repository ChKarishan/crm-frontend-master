import React from 'react';
import { crmWidgets } from "../../common/data";
import CountUp from "react-countup";
import API from '../../common/data/FatchData';
import { useEffect, useState } from 'react';


const Widgets = () => {
 
    const [annualSale, getAnnualSale] = useState(null);
    const [leadConversations, getLeadConversations] = useState(null);
    const [dailyIncome, getdailyIncome] = useState(null);
    const [annualdeals, getannualdeals] = useState(null);



    useEffect(() => {
        // Example of using the getUser function from the API file

        API.getLeadConversations().then((response) => {
            getLeadConversations(response.data);
        })

        API.getannualdeals().then((response) => {
            console.log(response.data);
            getannualdeals(response.data);
        })

        API.getDailyAverageSale().then((response) => {
            getdailyIncome(response.data);
        })
        .catch((error) => {
        });
       
        API.getAnnualSale().then((response) => {
            getAnnualSale(response.data);
          })
          .catch((error) => {
          });


        //   API.postUser(data).then((response) =>{
        //     console.log(response.data);
        //   }).catch((error)=>{});




      }, []);

    
    return (
        <React.Fragment>
            <div className="col-xl-12">
                <div className="card crm-widget">
                    <div className="card-body p-0">
                        <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                            {/* {(crmWidgets).map((widget, index) => ( */}
                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Annual Sale
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
                                                        end={annualSale}
                                                        decimals={2}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                          

                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Deals Closed Won
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={leadConversations}
                                                        // decimals={2}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Daily Average Sale
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={dailyIncome}
                                                        decimals={2}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13 mb-3">Annual Deals 
                                        {/* <i className={ "ri-arrow-up-circle-line text-success fs-18 float-end align-middle"}></i> */}
                                        </h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={ "ri-exchange-dollar-line display-6 text-muted fs-3"}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h4 className="mb-0"><span className="counter-value" data-target="197">
                                                    <CountUp
                                                        start={0}
                                                        // prefix={'$'}
                                                        // suffix={'%'}
                                                        // separator={}
                                                        end={annualdeals}
                                                        // decimals={2}
                                                        duration={4}
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