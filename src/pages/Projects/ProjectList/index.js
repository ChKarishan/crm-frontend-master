import React from 'react';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Container } from 'reactstrap';

import List from './List';

const ProjectList = () => {

    // const handleLocationSelect = (location) => {
    //     // Handle the selected location data (e.g., save it to state or perform other actions)
    //     console.log('Selected location:', location);

    //   };

      const latitude = 37.7749; // Replace with your desired latitude
  const longitude = -122.4194;
    document.title = "Project List | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Map Listing " pageTitle="Projects" />
                    {/* <List /> */}

                    <div>
      <h1>Location Map App</h1>
      <List latitude={latitude} longitude={longitude} />
    </div>
     




                </Container>
            </div>
        </React.Fragment>
    );
};

export default ProjectList;