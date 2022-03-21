import Classes from './GroupItemCard.module.css'
import  Image  from 'next/image';
import img from '/public/image-1.png'
import { useRouter } from 'next/router';
const GroupItemCard = (props:any) => {
    const {title, id} = props.detail;
    const {pathname} = useRouter()
    return (
        <div className={Classes.group__card}>
            {pathname === "/" && <h5 className={Classes.card__title}>{title}</h5>}
            <Image className={`${Classes.card__img} w-100 rounded-3`} src={img} />
            <h5 className={Classes.img__name}>Image Name.jpeg</h5>
           {pathname === '/' &&  <p className='text-primary'>Connected</p>}
        </div>
    );
};

export default GroupItemCard;