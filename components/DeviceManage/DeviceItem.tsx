import React from 'react';
import GroupItemCard from '../GroupItemCard/GroupItemCard';
import Card from './../Card/Card';

const DeviceItem = () => {
    return (
        <Card>
            <div className='d-flex justify-content-between'>
                <p>All <i className="fa-solid fa-angle-right"></i> <strong><span>Group-1</span></strong></p>
                <div className='d-flex gap-3'>
                    <button className='rounded-pill btn btn-outline-primary'>Group Registration</button>
                    <button className='rounded-pill btn btn-primary'>Device Registration</button>
                </div>
            </div>
            <div className='py-4'>
                <div className="row">
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
          
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
          
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
          
                    <div className='col-4 p-2'>
                        <GroupItemCard/>
                    </div>
          
                </div>
            </div>

        </Card>
    );
};

export default DeviceItem;