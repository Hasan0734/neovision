import Card from '../Card/Card';
import FullDetails from '../FullDetails/FullDetails';
import Layout from '../Layout/Layout';
import SelectedFlies from '../SelectedFiles/SelectedFlies';
import Detail from './Detail/Detail';
import DeviceDetail from './DeviceDetail';
import DeviceItem from './DeviceItem';
import Classes from './DeviceManage.module.css'
const DeviceManage = () => {
    return (
        <Layout>
            <div className="all__pages">
                    <div className='row'>
                        <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                           <DeviceItem/>
                        </div>
                        <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                            <DeviceDetail>
                                {/* <Detail/> */}
                                <SelectedFlies/>
                                {/* <FullDetails/> */}
                            </DeviceDetail>
                        </div>
                    </div>
            </div>
        </Layout>
    );
};

export default DeviceManage;