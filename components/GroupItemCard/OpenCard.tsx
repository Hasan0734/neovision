import Classes from './GroupItemCard.module.css'
import Image from 'next/image';
import img from '/public/image-1.png'
const OpenCard = () => {
    return (
        <div className={`${Classes.open__card}`}>
            <h5 className={Classes.card__title}>Some title</h5>
            <div className={`${Classes.folder__icon} d-flex justify-content-center align-items-center`}>
                <div className='fs-4'>
                    <i className="fa-regular fa-folder"></i>
                </div>
            </div>
        </div>
    );
};

export default OpenCard;