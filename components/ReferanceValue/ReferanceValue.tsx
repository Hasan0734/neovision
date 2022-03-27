import React from "react";
import Layout from "../Layout/Layout";
import ReferanceDetails from "./ReferanceDetails/ReferanceDetails";
import ReferanceList from "./ReferanceList/ReferanceList";

const ReferanceValue = () => {
  return (
    <Layout navTitle={"Standard Value Management"}>
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <ReferanceList />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            {/* <EventDetail/> */}
            <ReferanceDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReferanceValue;
