import Classes from './Card.module.css'
import { useRouter } from 'next/router';

const Card = (props:any) => {
    const {pathname} = useRouter()
    const children:any = props.children
    return (
        <div className={`${Classes.card} ${pathname == '/' ? 'h-100': ''}`}>
            {children}
        </div>
    );
};

export default Card;