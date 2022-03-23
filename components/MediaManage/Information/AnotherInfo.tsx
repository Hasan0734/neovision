import React from 'react';
import Image from 'next/image';
import fileIcon from '/public/icon/jpeg-64.png'
const AnotherInfo = () => {

    return (

        <div className="card__p">
            <div className=''>
                <div className=' my-3 rounded-3 p-3' style={{ background: '#f3f3f3' }}>
                    <h3 className='text-secondary'>Uploaded a file</h3>
                    <button className='btn bg-light border text-black rounded-pill d-flex align-items-center gap-2'>
                        <Image width={25} height={25} src={fileIcon} />
                        filename.jepg</button>
                </div>
                <div className=' my-3 rounded-3 p-3' style={{ background: '#f3f3f3' }}>
                    <h4 className='text-secondary'>Uploaded a file</h4>
                    <button className='btn bg-light border text-black rounded-pill d-flex align-items-center gap-2'>
                        <Image width={25} height={25} src={fileIcon} />
                        filename.jepg</button>
                </div>

            </div>
        </div>
    );
};

export default AnotherInfo;