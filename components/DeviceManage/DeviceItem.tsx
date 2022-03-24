import React from 'react';
import FileCategory from '../FileCategory/FileCategory';
import GroupItemCard from '../GroupItemCard/GroupItemCard';
import OpenCard from '../GroupItemCard/OpenCard';
import Card from './../Card/Card';
import primaryImg from '/public/image-1.png'
import { useRouter } from 'next/router';
const cardItem: { id: number, title: string, img:any }[] = [
    {
        id: 1,
        title: 'Card title here',
        img: {primaryImg}
    },
    {
        id: 2,
        title: 'Card title here',
        img: {primaryImg}
    },
    {
        id: 3,
        title: 'Card title here',
        img: {primaryImg}
    },
    {
        id: 4,
        title: 'Card title here',
        img: {primaryImg}
    },
    {
        id: 5,
        title: 'Card title here',
        img: {primaryImg}
    },

]

const DeviceItem = () => {
    const {pathname} = useRouter()
    return (
        <Card>
            <div className='d-flex justify-content-between mb-4'>
                <p>All <i className="fa-solid fa-angle-right"></i> <strong><span>Group-1</span></strong></p>
                <div className='d-flex gap-3'>
                    <button className='rounded-pill btn btn-outline-primary px-4'>Group Registration</button>
                    <button className='rounded-pill btn btn-primary px-4'>Device Registration</button>
                </div>
            </div>
            <div className='py-4'>
                <div className="row">
                   <div  className='col-4 p-2'>
                        <OpenCard  />
                    </div>
                   {cardItem.map((item, i) =>  <div key={i}  className='col-lg-4 col-md-6  p-2'>
                        <GroupItemCard  detail={item}/>
                    </div>)}
                </div>
            </div>

        </Card>
    );
};

export default DeviceItem;