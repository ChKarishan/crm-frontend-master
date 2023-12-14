import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { recentOrders } from '../../common/data';
import { useEffect, useState } from 'react';
import API from '../../common/data/FatchData';
import { useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";




const RecentOrders = () => {
    let navigate = useNavigate(); 

    const [allNews, setAllNews] = useState(null);

    API.getAllNews().then((response) => {
        setAllNews(response.data);
      })
      .catch((error) => {
      });

      const handleClick = () => {
        console.log("Button clinck");
        // Use the history object to navigate to the other page
        let path = `/apps-calendar`; 
        navigate(path);
      };
  



    return (
        <React.Fragment>


<Col xxl={12}>
                
                   



                <Card className="card-height-100">
                     <CardHeader className="align-items-center d-flex bg-secondary">
                        <h4 className="card-title mb-0 flex-grow-1 text-white">Recent News</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">
                                {/* <i className="ri-file-list-3-line align-middle"></i> Add New */}
                                Add New
                            </button>
                        </div>
                    </CardHeader>
                    
                    <CardBody>
                        <div className="table-responsive">
                        {/* <SimpleBar style={{ maxHeight: "324px" }}> */}
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "30%" }}>Heading</th>
                                        <th scope="col" style={{ width: "20%" }}>Discription</th>
                                        <th scope="col" style={{ width: "20%" }}></th>
                                       
                                    </tr>
                                </thead>

                                <tbody>
                                    {(allNews || []).map((item, key) => (
                                        <tr key={key}>
                                            <td>{item.heading}</td>

                                            <td > <p className="half-line-ellipsis">{item.discription} </p></td>

                                            <td>
                                            
                                                <Link to="/apps-ecommerce-orders" state={{ from: {dealname : item.heading ,  
                                                          amount:  item.discription
                                        } }}   className="text-body fw-medium">View details</Link></td>
                                               
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* </SimpleBar> */}
                        </div>
                    </CardBody>
                    {/* <p className="half-line-ellipsis"> Hi my name is Shazib. this tst is for tesintg piurejkb to check fbre over flow of the thes kfh. so I am going to test </p> */}
                </Card>
            </Col>




          
        </React.Fragment>
    );
};

export default RecentOrders;