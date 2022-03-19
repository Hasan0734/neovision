import React from 'react';
import Inheritance from './Inheritance';
import Subtitle from './Subtitle';

const AddDevice = () => {
    return (
        <div className="card__p">
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Device Name<span className='text-danger'>*</span></h5>
                <input className='border m-0 w-75 rounded-3 p-2' type="text" placeholder='Please enter your text' />
            </div>
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Ip address<span className='text-danger'>*</span></h5>
                <input className='border m-0 w-75 rounded-3 p-2' type="text" placeholder='Please enter your text' />
            </div>
            <div className='d-flex mb-3'>
                <h5 className='w-25'>MAC address<span className='text-danger'>*</span></h5>
                <input className='border m-0 w-75 rounded-3 p-2' type="text" placeholder='Please enter your text' />
            </div>
            <div className='d-flex mb-4'>
                <h5 className='w-25'>Inheritance<span className='text-danger'>*</span></h5>
                <select className='border m-0 w-75 rounded-3 p-2' name="" id="">
                    <option value="Use">Use</option>
                    <option value="Use">Use-1</option>
                    <option value="Use">Use-2</option>
                </select>
            </div>
            <div className='border-top'>
                <div className='mt-4 row'>
                    <Inheritance />
                </div>
                <div className='mt-4 row'>
                    <Subtitle />
                </div>
                <div className='d-flex mb-3'>
                    <h5 className='w-25'>Volume Setting</h5>
                    <input className='border m-0 w-75 rounded-3 p-2' type="text" placeholder='Please enter your text' />
                </div>
                <div className='d-flex mt4'>
                    <h5 className='w-25'>&nbsp;</h5>
                    <div className='d-flex gap-3'>
                        <button className='btn btn-outline-primary px-3 rounded-pill'>Cencel</button>
                        <button className='btn btn-primary px-3 rounded-pill'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDevice;