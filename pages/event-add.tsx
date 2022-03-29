import type { NextPage } from "next";
import { useState } from "react";
import EventDetailAdd from "../components/Events/EventDetailAdd/EventDetailAdd";
import EventsList from "../components/Events/EventsList/EventsList";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
  const [tabActive, setTabActive] = useState({
    list: true,
    cardType: false,
    view: false,
  });
  return (
    <>
      <Layout
        tabActive={tabActive}
        navData={{ filter: true, title: "Event Management" }}
      >
        <div className="all__pages">
          <div className="row">
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <EventsList isShow={{ search: true, route: false }} />
            </div>
            <div className="col-lg-6 col-12 mb-3 mb-lg-0">
              <EventDetailAdd />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
