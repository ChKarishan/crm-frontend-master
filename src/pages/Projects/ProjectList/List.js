import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Popup ,  GoogleMap, useLoadScript, Marker} from 'react-leaflet';
// import { } from 'react-google-maps';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// const center = {
//   lat: 7.2905715, // default latitude
//   lng: 80.6337262, // default longitude
// };
// import { Link } from 'react-router-dom';
// import { Card, Container,CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from 'reactstrap';
// import DeleteModal from "../../../Components/Common/DeleteModal";
// import { ToastContainer } from 'react-toastify';

// import API from '../../../common/data/FatchData';
// //redux
// import { useSelector, useDispatch } from 'react-redux';

// //Import Icons
// import FeatherIcon from "feather-icons-react";

// //import action
// import {
//     getProjectList as onGetProjectList,
//     deleteProjectList as onDeleteProjectList,
// } from "../../../slices/thunks";
// import { createSelector } from 'reselect';

const List = ({ latitude, longitude  }) => {


    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: 'YOUR_API_KEY',
    //     libraries,
    //   });
    
    //   if (loadError) {
    //     return <div>Error loading maps</div>;
    //   }
    
    //   if (!isLoaded) {
    //     return <div>Loading maps</div>;
    //   }
    // const [location, setLocation] = useState(null);
    // const [error, setError] = useState(null);
    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           setLocation({
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //           });
    //         },
    //         (err) => {
    //           setError(`Error: ${err.message}`);
    //         }
    //       );
    //     } else {
    //       setError('Geolocation is not supported by your browser.');
    //     }
    //   };
    
    //   const saveLocation = () => {
    //     if (location) {
    //         console.log(location);
    //       // Send the location to your backend API
    //       API.postSaveLocation(location).then((response) => {
    //         console.log(response.data);
    //         setData(response.data);
    //         })
    //         .catch((error) => {
    //         });

       
    //     }
    //   };  


      // second part




      


      // useEffect(() => {
      //   const script = document.createElement('script');
      //   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places";
      //   script.async = true;
      //   script.defer = true;
      //   script.onload = initMap;
      //   document.head.appendChild(script);
    
      //   return () => {
      //     document.head.removeChild(script);
      //   };
      // }, [latitude, longitude]);
    
      // const initMap = () => {
      //   const map = new window.google.maps.Map(document.getElementById('map'), {
      //     center: { lat: latitude, lng: longitude },
      //     zoom: 13,
      //   });
    
      //   new window.google.maps.Marker({
      //     position: { lat: latitude, lng: longitude },
      //     map: map,
      //     title: 'Selected Location',
      //   });
      // };

    return (


        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                {/* <div>
      <div id="map" style={{ height: '300px', width: '100%' }}></div>
    </div> */}

    <div>
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap> */}
    </div>
       
                </Container>
            </div>
        </React.Fragment>

    );
};

export default List;