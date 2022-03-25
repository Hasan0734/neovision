import Detail from "../components/DeviceManage/Detail/Detail";
import DeviceDetail from "../components/DeviceManage/DeviceDetail";
import DeviceItem from "../components/DeviceManage/DeviceItem";
import Layout from "../components/Layout/Layout";

const DeviceManage = () => {
  return (
    <Layout>
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <DeviceItem />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <DeviceDetail>
              <Detail />
            </DeviceDetail>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeviceManage;
