import type { NextPage } from "next";
import { useState } from "react";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import Layout from "../components/Layout/Layout";
import ListOfSelectedFile from "../components/ListOfSelectedFile/ListOfSelectedFile";
const Home: NextPage = () => {
  const [cardDetail, setCardDetail] = useState({ status: false, title: false });
  const [tabActive, setTabActive] = useState({
    list: false,
    cardType: true,
    view: false,
  });
  return (
    <>
      <Layout tabActive={tabActive} navTitle={"Device Management"}>
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <DeviceItem isShow={false} cardDetail={cardDetail} />
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

export default Home;
