import React from 'react';
import AddDevice from '../AddDevice/AddDevice';
import DeviceDetail from '../DeviceManage/DeviceDetail';
import DeviceItem from '../DeviceManage/DeviceItem';
import Layout from '../Layout/Layout';
import Information from '../MediaManage/Information/Information';
import MediaDetail from '../MediaManage/MediaDetail/MediaDetail';
import AnotherDetail from './AnotherDetail/AnotherDetail';
import AnotherMediaDetail from './AnotherDetail/AnotherMediaDetail/AnotherMediaDetail';
import EventDetail from './EventDetail/EventDetail';
import EventDetailAdd from './EventDetailAdd/EventDetailAdd';
import EventsList from './EventsList/EventsList';
// import AnotherInfo from './Information/AnotherInfo';
// import Information from './Information/Information';
// import MediaDetail from './MediaDetail/MediaDetail';
// import MediaItem from './MediaItem/MediaItem';

const Events = () => {
    return (
        <Layout>
            <div className="all__pages">
                <div className='row'>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                      {/* <EventsList/> */}
                      <AnotherDetail/>
                    </div>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                       {/* <EventDetail/> */}
                       {/* <EventDetailAdd/> */}
                       <MediaDetail>
                            {/* <Information /> */}
                            <AnotherMediaDetail/>
                        </MediaDetail>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Events;