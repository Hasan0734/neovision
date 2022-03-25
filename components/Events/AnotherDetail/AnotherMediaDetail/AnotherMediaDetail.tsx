import React from 'react';
import Class from './Information.module.css';
import parse from 'html-react-parser';

const AnotherMediaDetail = () => {

    return (
        <div className="card__p">
            <div className='d-flex mb-3 align-items-center'>
                <h5 className='w-25'>Group Name <span className='text-danger'>*</span></h5>
                {/* <p className='border m-0 w-75 rounded-pill p-2'></p> */}
                <input className='border m-0 w-75 rounded-3 p-2' type="text" value="Neovision.pdf" />

            </div>
            <div className='d-flex mb-3 align-content-center'>
                <h5 className='w-25'>Modified File</h5>
                <input className='border m-0 w-75 rounded-3 p-2' type="text" value="Neovision_v2.pdf" />
            </div>
            
            <div className='d-flex justify-content-center gap-3 mt-4'>
                <button className='btn btn-outline-primary px-3 rounded-pill'>Cancel</button>
                <button className='btn btn-primary px-3 rounded-pill'>Save</button>
            </div>

        </div>
    );
};

export default AnotherMediaDetail;