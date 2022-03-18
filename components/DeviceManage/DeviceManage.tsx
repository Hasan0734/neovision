import Card from '../Card/Card';
import Layout from '../Layout/Layout';
import DeviceDetail from './DeviceDetail';
import DeviceItem from './DeviceItem';
import Classes from './DeviceManage.module.css'
const DeviceManage = () => {
    return (
        <Layout>
            <div className="all__pages">
              
                    <div className='row'>
                        <div className="col-6">
                           <DeviceItem/>
                        </div>
                        <div className="col-6">
                            <DeviceDetail/>
                        </div>
                    </div>
               
            </div>
        </Layout>
    );
};

export default DeviceManage;