import type { NextPage } from "next";
import { useState } from "react";
import DeviceDetail from "../components/DeviceManage/DeviceDetail";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import FullDetails from "../components/FullDetails/FullDetails";
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
              <DeviceDetail>
                <FullDetails />
              </DeviceDetail>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
