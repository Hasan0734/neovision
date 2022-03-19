import Classes from './DeviceManage.module.css'
import CardTwo from './../CardTwo/CardTwo';
import Detail from './Detail/Detail';
import DetailSave from './Detail/DetailSave';
import AddDevice from '../AddDevice/AddDevice';
const DeviceDetail = () => {
    return (
        <CardTwo>
            <div className={Classes.card__p}>
                <div className="d-flex justify-content-between">
                    <h3>Device Details</h3>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-primary rounded-pill px-4">View-1</button>
                        <button className="btn btn-primary rounded-pill py-1 px-4">View-2</button>
                    </div>
                </div>
            </div>
            <div className={Classes.view__tab}>
                <ul className="d-flex border-bottom gap-2 mt-3 list-unstyled">
                    <li className='active__tab' style={{ marginLeft: '2rem' }}>Tab-1</li>
                    <li className={Classes.device__tab}>Tab-2</li>
                    <li className={Classes.device__tab}>Tab-3</li>
                </ul>
                {/* <Detail/> */}
                {/* <DetailSave/> */}
                <AddDevice/>
            </div>


        </CardTwo>
    );
};

export default DeviceDetail;