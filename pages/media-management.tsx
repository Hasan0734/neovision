import Layout from "../components/Layout/Layout";
import AnotherInfo from "../components/MediaManage/Information/AnotherInfo";
import Information from "../components/MediaManage/Information/Information";
import MediaDetail from "../components/MediaManage/MediaDetail/MediaDetail";
import MediaItem from "../components/MediaManage/MediaItem/MediaItem";

const index = () => {
  return (
    <Layout navTitle={"Media Management"}>
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <MediaItem />
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

export default index;
