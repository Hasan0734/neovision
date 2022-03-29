import Classes from "./Navbar.module.css";
const SearchArea = (props: any) => {
  return (
    <div className="py-3 d-flex justify-content-between w-100 align-items-center">
      <h3 className={`${Classes.nav__title}  d-none d-md-block w-25`}>
        {props.navData.title}
      </h3>

      <form className="w-100 m-0  d-flex justify-content-end gap-3">
        <div className="position-relative w-50">
          <input
            required
            className={`${Classes.search__box} `}
            type="text"
            placeholder="Search"
          />
          <button className={Classes.search__btn} type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {props.navData.filter && (
          <div className="d-flex gap-3 align-items-center">
            <button type="reset" className={Classes.reset__btn}>
              <i className="fa-solid fa-sliders"></i>
            </button>
            <button type="reset" className={Classes.reset__btn}>
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchArea;
