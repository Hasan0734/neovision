import type { NextPage } from "next";
import { useState } from "react";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import DeviceManagement from "../components/DeviceManage/DeviceManagement/DeviceManagement";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
  const [cardDetail, setCardDetail] = useState({ status: true, title: true });
  return (
    <>
      <Layout navTitle={"Device Management"}>
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <DeviceItem isShow={false} cardDetail={cardDetail} />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <DeviceManagement />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
