import CardTwo from "./../CardTwo/CardTwo";
import Classes from "./DeviceManage.module.css";
const DeviceDetail = (props: any) => {
  const children: any = props.children;
  return (
    <CardTwo>
      <div className="card__p">
        <div className="d-flex justify-content-between">
          <h3>Device Details</h3>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary rounded-pill px-4">
              Delete
            </button>
            <button className="btn btn-primary rounded-pill py-1 px-4">
              Correction
            </button>
          </div>
        </div>
      </div>
      <div className={Classes.view__tab}>
        <ul className="d-flex border-bottom gap-2 mt-3 list-unstyled">
          <li className="active__tab" style={{ marginLeft: "2rem" }}>
            Basic Info
          </li>
          <li className={Classes.device__tab}>Schedule Info</li>
          <li className={Classes.device__tab}>Event Info</li>
        </ul>

        {children}
      </div>
    </CardTwo>
  );
};

export default DeviceDetail;
