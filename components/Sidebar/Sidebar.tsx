import logo from '/public/logo.png'
import Image from 'next/image';
import Classes from './Sidebar.module.css'
import Link from 'next/link';
import parse from 'html-react-parser';

const menuItem: any = [
    {
        id: 1,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-1',
        link: '/'
    },
    {
        id: 2,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-2',
        link: '/'
    },
    {
        id: 3,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-3',
        link: '/'
    },
    {
        id: 4,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-4',
        link: '/'
    },
    {
        id: 5,
        icon: '<i className="fa-regular fa-folder"></i>',
        title: 'Media',
        link: '/media-management'
    },
    {
        id: 6,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-5',
        link: '/'
    },
    {
        id: 7,
        icon: '<i className="fa-solid fa-mobile-screen-button"></i>',
        title: 'Menu-6',
        link: '/'
    },
]
const Sidebar = () => {
    return (
        <div className={Classes.sidebar}>
            <div className={` ${Classes.sidebar__menu} p-2`}>
                <p className='text-uppercase text-white-50 ms-3 mt-3'>Menu</p>
                <div>
                    <ul className='list-unstyled'>
                        {menuItem.map((item: any, i: number) => <li key={i} >
                            <Link href={`${item.link}`}>
                                <a className='text-white-50 text-decoration-none'>
                                    <div className={Classes.menu__link}>
                                        <div>
                                            <span>
                                                {parse(item.icon)}
                                            </span>
                                            <span className={Classes.title}>{item.title}</span>
                                        </div>
                                        <span><i className="fa-solid fa-caret-right"></i></span>

                                    </div>

                                </a>
                            </Link>
                        </li>)}
                    </ul>

                    <button className={Classes.logout__btn}>
                        <span><i className="fa-solid fa-arrow-left"></i></span>
                        Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;