import { useRouter } from 'next/router';
import Classes from './Navbar.module.css'
const NavItems = () => {
    const {pathname} = useRouter()
    return (
        <div className="d-flex align-items-center">
            <ul className="d-flex justify-content-between list-unstyled m-0">
                <li className={`${Classes.tab__btn} ${pathname === '/' ? 'active__tab text-primary' : ""} `}>
                    <i className="fa-solid fa-list"></i> List Type
                </li>
                <li className={`${Classes.tab__btn} ${pathname === '/media-management' ? 'active__tab text-primary' : ""}`}>
                    <i className="fa-solid fa-layer-group"></i> Card Type

                </li>
                <li className={Classes.tab__btn}>
                    <i className="fa-solid fa-plus"></i> View Detail

                </li>
            </ul>
        </div>
    );
};

export default NavItems;