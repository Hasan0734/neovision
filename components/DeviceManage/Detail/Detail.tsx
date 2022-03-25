import Classes from '../DeviceManage.module.css'

const Detail = () => {
    return (
        <div className="card__p">
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Item-1</h5>
                {/* <p className='border m-0 w-75 rounded-pill p-2'></p> */}
                <input className='border m-0 w-75 rounded-3 p-2' readOnly type="text" value="All &gt; Detail-1" />

            </div>
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Item-2</h5>
                <input className='border m-0 w-75 rounded-3 p-2' readOnly type="text" value="Detail-1" />
            </div>
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Item-3</h5>
                <input className='border m-0 w-75 rounded-3 p-2' readOnly type="text" value="Detail-1" />
            </div>
           

        </div>
    );
};

export default Detail;