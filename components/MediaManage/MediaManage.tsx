import React from 'react';
import DeviceItem from '../DeviceManage/DeviceItem';
import Layout from '../Layout/Layout';

const MediaManage = () => {
    return (
        <Layout>
            <div className="all__pages">
                <div className='row'>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                        <DeviceItem />
                    </div>
                    <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                        {/* <DeviceDetail /> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MediaManage;