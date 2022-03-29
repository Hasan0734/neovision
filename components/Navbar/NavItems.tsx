import { useRouter } from "next/router";
import Classes from "./Navbar.module.css";
const NavItems = (props: any) => {
  const { pathname } = useRouter();
  const { list, cardType, view } = props.tabActive;
  return (
    <div className="d-flex align-items-center">
      <ul className="d-flex justify-content-between list-unstyled m-0">
        <li
          className={`${Classes.tab__btn} ${
            list ? "active__tab text-primary" : ""
          } `}
        >
          <i className="fa-solid fa-list"></i> List Type
        </li>
        <li
          className={`${Classes.tab__btn} ${
            cardType ? "active__tab text-primary" : ""
          }`}
        >
          <i className="fa-solid fa-layer-group"></i> Card Type
        </li>
        <li
          className={`${Classes.tab__btn} ${
            view ? "active__tab text-primary" : ""
          }`}
        >
          <i className="fa-solid fa-plus"></i> View Detail
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
