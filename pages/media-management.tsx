import type { NextPage } from "next";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import AnotherInfo from "../components/MediaManage/Information/AnotherInfo";
import Information from "../components/MediaManage/Information/Information";
import MediaDetail from "../components/MediaManage/MediaDetail/MediaDetail";
import MediaItem from "../components/MediaManage/MediaItem/MediaItem";

const Home: NextPage = () => {
  const [cardDetail, setCardDetail] = useState({ status: false, title: false });
  const [tabActive, setTabActive] = useState({
    list: false,
    cardType: true,
    view: false,
  });
  return (
    <Layout
      tabActive={tabActive}
      navData={{ filter: true, title: "Media Management" }}
    >
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <MediaItem isShow={true} cardDetail={cardDetail} />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <MediaDetail>
              <Information />
            </MediaDetail>
            <div className="mt-3">
              <MediaDetail>
                <AnotherInfo />
              </MediaDetail>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
