import React from 'react';

const Inheritance = () => {
    return (
        <>
            <div className='col-3'>
                <h5 className=''>Inheritance</h5>
            </div>
            <div className='col-9'>
                <div className='row '>
                    <div className='col-6 d-flex justify-content-between'>
                        <label>Play Time</label>
                        <select className='border m-0  w-50 rounded-3 p-2' name="" id="">
                            <option value="Use">Use</option>
                            <option value="Use">Use-1</option>
                            <option value="Use">Use-2</option>
                        </select>
                    </div>
                    <div className='col-6 d-flex justify-content-between'>
                        <label>Play Time</label>
                        <select className='border m-0  w-50 rounded-3 p-2' name="" id="">
                            <option value="Use">Use</option>
                            <option value="Use">Use-1</option>
                            <option value="Use">Use-2</option>
                        </select>
                    </div>
                  
                </div>
            </div>
        </>
    );
};

export default Inheritance;