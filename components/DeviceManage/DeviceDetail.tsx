import Classes from './DeviceManage.module.css'
import CardTwo from './../CardTwo/CardTwo';
const DeviceDetail = () => {
    return (
        <CardTwo>
            <div className={Classes.card__p}>
                <div className="d-flex justify-content-between">
                    <h3>Device Details</h3>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-primary rounded-pill">View-1</button>
                        <button className="btn btn-primary rounded-pill">View-2</button>
                    </div>
                </div>
            </div>
            <div className={Classes.view__tab}>
                <ul className="d-flex border-bottom gap-2 mt-3 list-unstyled">
                    <li className={Classes.active__tab} style={{ marginLeft: '2rem' }}>Tab-1</li>
                    <li className={Classes.device__tab}>Tab-2</li>
                    <li className={Classes.device__tab}>Tab-3</li>
                </ul>

                <div className={Classes.card__p}>
                    <div className='d-flex mb-3'>
                        <h5 className='w-25'>Item-1</h5>
                        <p className='border m-0 w-75 rounded-pill p-2'>All > Detail-1</p>
                    </div>
                    <div className='d-flex mb-3'>
                        <h5 className='w-25'>Item-2</h5>
                        <p className='border m-0 w-75 rounded-pill p-2'>Detail-1</p>
                    </div>
                    <div className='d-flex mb-3'>
                        <h5 className='w-25'>Item-3</h5>
                        <p className='border m-0 w-75 rounded-pill p-2'>Detail-1</p>
                    </div>
                </div>
            </div>


        </CardTwo>
    );
};

export default DeviceDetail;