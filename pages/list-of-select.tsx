import type { NextPage } from "next";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import Layout from "../components/Layout/Layout";
import ListOfSelectedFile from "../components/ListOfSelectedFile/ListOfSelectedFile";
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
              <ListOfSelectedFile />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
