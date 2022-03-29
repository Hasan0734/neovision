import Card from "../../Card/Card";
import EventTable from "../EventTable/EventTable";
import Class from "./EventsList.module.css";
const EventsList = (props: any) => {
  const { route, search } = props.isShow;
  return (
    <Card>
      <div className="d-flex justify-content-end gap-3 align-items-center mb-4"></div>
      {route && (
        <div className="d-flex justify-content-between mb-4">
          <p>
            All <i className="fa-solid fa-angle-right"></i> <span>Group-1</span>
            <i className="fa-solid fa-angle-right"></i>{" "}
            <strong>
              <span>Group-1 </span>
            </strong>
          </p>
          <div className="d-flex gap-3">
            <button className="rounded-pill btn btn-outline-primary px-4">
              Folder Registration
            </button>
            <button className="rounded-pill btn btn-primary px-4">
              File Registration
            </button>
          </div>
        </div>
      )}

      {search && (
        <div className="d-flex justify-content-end gap-3 align-items-center mb-4">
          <h6>Event Name</h6>
          <form className="position-relative d-flex gap-2 align-items-center">
            <input
              className={Class.search__box}
              type="text"
              placeholder="Enter the event name"
            />
            <button className={Class.search__btn}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className={Class.reset__btn} type="reset">
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          </form>
        </div>
      )}

      <EventTable />

      <div className="d-flex justify-content-center">
        <ul className={`${Class.pagination} list-unstyled d-flex gap-3`}>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angles-left"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              1
            </a>
          </li>
          <li>
            <a className="" href="">
              2
            </a>
          </li>
          <li>
            <a className="" href="">
              3
            </a>
          </li>
          <li>
            <a className="" href="">
              4
            </a>
          </li>
          <li>
            <a className="" href="">
              5
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default EventsList;
