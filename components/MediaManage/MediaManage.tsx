import React from 'react';
import AddDevice from '../AddDevice/AddDevice';
import DeviceDetail from '../DeviceManage/DeviceDetail';
import DeviceItem from '../DeviceManage/DeviceItem';
import Layout from '../Layout/Layout';
import Information from './Information/Information';
import MediaDetail from './MediaDetail/MediaDetail';

const MediaManage = () => {
    return (
        <Layout>
            <div className="all__pages">
                <div className='row'>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                        <DeviceItem />
                    </div>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                        {/* <DeviceDetail >
                            <AddDevice/>
                        </DeviceDetail> */}
                        <MediaDetail>
                            <Information/>
                        </MediaDetail>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MediaManage;