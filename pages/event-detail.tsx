import type { NextPage } from "next";
import EventDetail from "../components/Events/EventDetail/EventDetail";
import EventsList from "../components/Events/EventsList/EventsList";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
  return (
    <>
      <Layout navTitle={"Device Management"}>
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <EventsList />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <EventDetail />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
