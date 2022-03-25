import React from "react";
import AddDevice from "../components/AddDevice/AddDevice";
import DeviceDetail from "../components/DeviceManage/DeviceDetail";
import Layout from "../components/Layout/Layout";
import MediaItem from "../components/MediaManage/MediaItem/MediaItem";

const MediaManage = () => {
  return (
    <Layout>
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <MediaItem />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <DeviceDetail>
              <AddDevice />
            </DeviceDetail>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MediaManage;
