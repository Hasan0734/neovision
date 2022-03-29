import React, { useState } from "react";
import EventsList from "../components/Events/EventsList/EventsList";
import Layout from "../components/Layout/Layout";
import ListOfSelectedFile from "../components/ListOfSelectedFile/ListOfSelectedFile";

const events = () => {
  const [tabActive, setTabActive] = useState({
    list: true,
    cardType: false,
    view: false,
  });

  return (
    <>
      <Layout
        tabActive={tabActive}
        navData={{ filter: false, title: "Event Management" }}
      >
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <EventsList />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <ListOfSelectedFile />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default events;
