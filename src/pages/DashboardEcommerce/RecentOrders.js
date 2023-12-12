import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { recentOrders } from '../../common/data';
import { useEffect, useState } from 'react';
import API from '../../common/data/FatchData';
import { useNavigate } from "react-router-dom";



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
            <Col xl={12}>
                <Card>
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
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr>
                                        {/* <th scope="col">Date</th> */}
                                        <th scope="col">Heading</th>
                                        <th scope="col">Discription</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {(allNews || []).map((item, key) => (<tr key={key}>
                                     
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    {/* <img src={item.img} alt="" className="avatar-xs rounded-circle" /> */}
                                                </div>
                                                <div className="flex-grow-1">{item.heading}</div>
                                            </div>
                                        </td>
                                        <td>{item.discription}</td>
                                       
                                       
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentOrders;