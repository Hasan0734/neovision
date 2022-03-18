import Classes from './GroupItemCard.module.css'
import  Image  from 'next/image';
const GroupItemCard = () => {
    return (
        <div className={Classes.group__card}>
            <h5>Item title</h5>
            <img className='w-100 rounded-3' src="https://www.gizmochina.com/wp-content/uploads/2022/03/FN0HGrBagAcBDSg-218x150.jpg" />
            <h5>Image Name</h5>
            <p>Connected</p>
        </div>
    );
};

export default GroupItemCard;