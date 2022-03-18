
import type { NextPage } from 'next'
import Image from 'next/image';
import logo from '/public/logo.png';
import SearchArea from './SearchArea';
import NavItems from './NavItems';
const Navbar: NextPage = () => {
    return (
        <nav className='container-fluid position-fixed bg-white shadow-sm'>
            <div className='row'>
                <div className='col-2 pt-3 pe-4 border-end'>
                    <Image width={250} height={60} src={logo} />
                </div>
                <div className='col-8'>
                    <SearchArea />
                </div>
                <div className='col-2'>
                    <NavItems />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;