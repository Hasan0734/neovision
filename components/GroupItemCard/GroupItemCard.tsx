import Classes from './GroupItemCard.module.css'
import  Image  from 'next/image';
import img from '/public/image-1.png'
const GroupItemCard = (props:any) => {
    const {title, id} = props.detail;
    return (
        <div className={Classes.group__card}>
            <h5 className={Classes.card__title}>{title}</h5>
            <Image className={`${Classes.card__img} w-100 rounded-3`} src={img} />
            <h5 className={Classes.img__name}>Image Name</h5>
            <p className='text-primary'>Connected</p>
        </div>
    );
};

export default GroupItemCard;