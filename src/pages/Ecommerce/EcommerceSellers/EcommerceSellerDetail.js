import React, { useEffect, useState, useMemo } from "react";

import {
  CardBody,
  Container,
  Progress,
  Row,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
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
  // const dispatch = useDispatch();

  // const ecomsellerData = createSelector(
  //   (state) => state.Ecommerce.products,
  //   (products) => products
  // );
  // // Inside your component
  // const products = useSelector(ecomsellerData);

  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   if (products && !products.length) {
  //     dispatch(onGetProducts());
  //   }
  // }, [dispatch,products]);

  // useEffect(() => {
  //   setProductList(products);
  // }, [products]);

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "#",
  //       Cell: () => {
  //         return <input type="checkbox" className="form-check-input"/>;
  //       },
  //     },
  //     {
  //       Header: "Product",
  //       Cell: (product) => (
  //         <>
  //           <div className="d-flex align-items-center">
  //             <div className="flex-shrink-0 me-3">
  //               <div className="avatar-sm bg-light rounded p-1">
  //                 <img
  //                   src={process.env.REACT_APP_API_URL + "/images/products/" + product.row.original.image}
  //                   alt=""
  //                   className="img-fluid d-block"
  //                 />
  //               </div>
  //             </div>
  //             <div className="flex-grow-1">
  //               <h5 className="fs-14 mb-1">
  //                 <a
  //                   href="apps-ecommerce-product-details"
  //                   className="text-body"
  //                 >
  //                   {" "}
  //                   {product.row.original.name}
  //                 </a>
  //               </h5>
  //               <p className="text-muted mb-0">
  //                 Category :{" "}
  //                 <span className="fw-medium">
  //                   {" "}
  //                   {product.row.original.category}
  //                 </span>
  //               </p>
  //             </div>
  //           </div>
  //         </>
  //       ),
  //     },
  //     {
  //       Header: "Stock",
  //       accessor: "stock",
  //       filterable: false,
  //     },
  //     {
  //       Header: "Price",
  //       accessor: "price",
  //       filterable: false,
  //       Cell: (cellProps) => {
  //         return <Price {...cellProps} />;
  //       },
  //     },
  //     {
  //       Header: "Orders",
  //       accessor: "orders",
  //       filterable: false,
  //     },
  //     {
  //       Header: "Rating",
  //       accessor: "rating",
  //       filterable: false,
  //       Cell: (cellProps) => {
  //         return <Rating {...cellProps} />;
  //       },
  //     },
  //     {
  //       Header: "Published",
  //       accessor: "publishedDate",
  //       filterable: false,
  //       Cell: (cellProps) => {
  //         return <Published {...cellProps} />;
  //       },
  //     },
  //     {
  //       Header: "Action",
  //       Cell: (cellProps) => {
  //         return (
  //           <UncontrolledDropdown>
  //             <DropdownToggle
  //               href="#"
  //               className="btn btn-soft-secondary btn-sm"
  //               tag="button"
  //             >
  //               <i className="ri-more-fill" />
  //             </DropdownToggle>
  //             <DropdownMenu className="dropdown-menu-end">
  //               <DropdownItem href="apps-ecommerce-product-details">
  //                 <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
  //                 View
  //               </DropdownItem>

  //               <DropdownItem href="apps-ecommerce-add-product">
  //                 <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
  //                 Edit
  //               </DropdownItem>

  //               <DropdownItem divider />

  //               <DropdownItem
  //                 href="#"
  //                 data-bs-toggle="modal"
  //                 data-bs-target="#removeItemModal"
  //               >
  //                 <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
  //                 Delete
  //               </DropdownItem>
  //             </DropdownMenu>
  //           </UncontrolledDropdown>
  //         );
  //       },
  //     },
  //   ],
  //   []
  // );

  const [data, setData] = useState(null);
  let navigate = useNavigate(); 

  const handleClick = () => {
    console.log("Button clinck");
    // Use the history object to navigate to the other page
    let path = `/apps-crm-deals`; 
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

 
        


              <Col xl={12}>
                


              <Col xl={12}>
                <Card >
                    <CardHeader className="align-items-center d-flex bg-secondary "> 
                  
                        <h4 className="card-title mb-0 flex-grow-1 text-white">All Sales</h4>
                        <div className="flex-shrink-0">
                            <button type="button" onClick={handleClick} className="btn btn-soft-secondary btn-sm">

                            Add New Sale
                             {/* adding new comment */}
                                {/* <i className="ri-file-list-3-line align-middle"></i> Add New */}
                            </button>
                        </div>
                    </CardHeader>

                </Card>
            </Col>   

            <Row>


            {(data || []).map((item, key) => (
            <Col xl={4} key={3}>

            <Link to='/apps-ecommerce-order-details' state={{ from: {
                                        // dealname : item.properties.dealname ,  
                                        // amount:  item.properties.amount,
                                        // closedate : item.properties.closedate,
                                        // createdate: item.properties.createdate,
                                        // dealstage : item.properties.dealstage,
                                        // pipeline: item.properties.pipeline
                                        
                                        
                                        
                                        } }} className="fw-medium text-reset"> 
                <Card >
                   


             

                        <CardBody>
                                <div className="d-flex align-items-center">
                                    <div className="avatar-sm flex-shrink-0">
                                        {/* <span className={`avatar-title bg-briefcase -subtle text-primary rounded-2 fs-2`}>
                                             <FeatherIcon icon={"ri-arrow-down-s-line"} className={`text-secoundry`} />
                                          
                                        </span> */}
                                        <img src={avatar10} alt="" className="avatar-xs object-fit-cover rounded-circle" />
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



          
            </Col>   
        </React.Fragment>
  );
};

export default EcommerceSellerDetail;
