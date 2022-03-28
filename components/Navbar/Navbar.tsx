import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import SearchArea from "./SearchArea";
import logo from "/public/logo.png";
const Navbar: NextPage = (props) => {
  return (
    <nav className="container-fluid position-fixed bg-white shadow-sm">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-6 pt-3 pe-4 border-end">
          <Link href="/">
            <a>
              <Image width={250} height={60} src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="col-lg-7 col-md-6 col-6">
          <SearchArea navData={props.navTitle} />
        </div>
        <div className="col-lg-3 col-md-4 d-none d-md-block">
          <NavItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
