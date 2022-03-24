import React from 'react';
import FileCategory from '../../FileCategory/FileCategory';
import GroupItemCard from '../../GroupItemCard/GroupItemCard';
import OpenCard from '../../GroupItemCard/OpenCard';
import { useRouter } from 'next/router';
import Card from '../../Card/Card';
import CardItem from './CardItem';
import SelectedFlies from '../../SelectedFiles/SelectedFlies';

const MediaItem = (props:any) => {
   
    console.log(props)
    return (
        <Card>
            <div className='d-flex justify-content-between mb-4'>
                <p>All <i className="fa-solid fa-angle-right"></i> <strong><span>Group-1</span></strong></p>
                <div className='d-flex gap-3'>
                    <button className='rounded-pill btn btn-outline-primary px-4'>Group Registration</button>
                    <button className='rounded-pill btn btn-primary px-4'>Device Registration</button>
                </div>
            </div>
          <FileCategory/>
            
            {/* <CardItem/> */}
            <SelectedFlies/>
        </Card>
    );
};

export default MediaItem;