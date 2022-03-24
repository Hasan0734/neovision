import React from 'react';
import GroupItemCard from '../../GroupItemCard/GroupItemCard';
import OpenCard from '../../GroupItemCard/OpenCard';
import MediaItem from './MediaItem';
import primaryImg from '/public/image-1.png'

const cardItemData: { id: number, title: string, img: any }[] = [
    {
        id: 1,
        title: 'Card title here',
        img: { primaryImg }
    },
    {
        id: 2,
        title: 'Card title here',
        img: { primaryImg }
    },
    {
        id: 3,
        title: 'Card title here',
        img: { primaryImg }
    },
    {
        id: 4,
        title: 'Card title here',
        img: { primaryImg }
    },
    {
        id: 5,
        title: 'Card title here',
        img: { primaryImg }
    },

]


const CardItem = () => {
    return (
        
            <div>
                <div className='py-4'>
                    <div className="row">
                        <div className='col-4 p-2'>
                            <OpenCard />
                        </div>
                        {cardItemData.map((item, i) => <div key={i} className='col-lg-4 col-md-6  p-2'>
                            <GroupItemCard detail={item} />
                        </div>)}
                    </div>
                </div>
               
            </div>
     
    );
};

export default CardItem;