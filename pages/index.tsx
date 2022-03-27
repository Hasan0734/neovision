import type { NextPage } from "next";
import DetailSave from "../components/DeviceManage/Detail/DetailSave";
import DeviceDetail from "../components/DeviceManage/DeviceDetail";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
  return (
    <>
      <Layout navTitle={"Device Management"}>
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <DeviceItem />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <DeviceDetail>
                <DetailSave />
              </DeviceDetail>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
