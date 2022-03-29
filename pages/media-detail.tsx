import type { NextPage } from "next";
import { useState } from "react";
import AnotherDetail from "../components/Events/AnotherDetail/AnotherDetail";
import AnotherMediaDetail from "../components/Events/AnotherDetail/AnotherMediaDetail/AnotherMediaDetail";
import Layout from "../components/Layout/Layout";
import MediaDetail from "../components/MediaManage/MediaDetail/MediaDetail";
const Home: NextPage = () => {
  const [tabActive, setTabActive] = useState({
    list: true,
    cardType: false,
    view: false,
  });
  return (
    <>
      <Layout tabActive={tabActive} navTitle={"Event Management"}>
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <AnotherDetail />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <MediaDetail>
                {/* <Information /> */}
                <AnotherMediaDetail />
              </MediaDetail>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
