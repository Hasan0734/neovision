import React from "react";
import Layout from "../Layout/Layout";
import ListOfSelectedFile from "../ListOfSelectedFile/ListOfSelectedFile";
import EventsList from "./EventsList/EventsList";

// import AnotherInfo from './Information/AnotherInfo';
// import Information from './Information/Information';
// import MediaDetail from './MediaDetail/MediaDetail';
// import MediaItem from './MediaItem/MediaItem';

const Events = () => {
  return (
    <Layout>
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <EventsList />
            {/* <AnotherDetail/> */}
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            {/* <EventDetail/> */}
            {/* <EventDetailAdd/> */}
            {/* <MediaDetail> */}
            {/* <Information /> */}
            {/* <AnotherMediaDetail/> */}

            {/* </MediaDetail> */}
            <ListOfSelectedFile />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
