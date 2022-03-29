import Classes from "./Navbar.module.css";
const SearchArea = (props: any) => {
  return (
    <div className="py-3 d-flex justify-content-between w-100 align-items-center">
      <h3 className={`${Classes.nav__title}  d-none d-md-block`}>
        {props.navData}
      </h3>
      <form className="w-50 m-0 position-relative d-flex">
        <input
          required
          className={Classes.search__box}
          type="text"
          placeholder="Search"
        />
        <button className={Classes.search__btn} type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
