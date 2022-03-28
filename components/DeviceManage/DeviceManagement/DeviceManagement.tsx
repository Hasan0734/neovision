import Image from "next/image";
import CardTwo from "../../CardTwo/CardTwo";
import Class from "./DeviceManagement.module.css";
import image2 from "/public/image/1.png";
import image3 from "/public/image/2.png";
import image1 from "/public/image/7.png";
const DeviceManagement = (props: any) => {
  return (
    <CardTwo>
      <div className="card__p">
        <div className="d-flex justify-content-between">
          <h3>Event Details</h3>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary rounded-pill py-1 px-4">
              Delete
            </button>
            <button className="btn btn-primary rounded-pill py-1 px-4">
              Correction
            </button>
            <button className="btn btn-primary rounded-pill py-1 px-4">
              Add
            </button>
          </div>
        </div>
        <ul className="d-flex border-bottom gap-2 mt-3 list-unstyled">
          <li className={Class.device__tab} style={{ marginLeft: "2rem" }}>
            Basic Info
          </li>
          <li className={"active__tab"}>Schedule Info</li>
          <li className={Class.device__tab}>Event Info</li>
        </ul>
        <div className="mt-5">
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Schedule Name</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <p className="border m-0 w-75 rounded-3 p-3">
              Schedule of folder name 1
            </p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Whether holidys apply</h5>
            <p className="border m-0 w-75 rounded-3 p-3">use</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Day of week</h5>
            <p className="border m-0 w-75 rounded-3 p-3">use</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Period</h5>
            <p className="border m-0 w-75 rounded-3 p-3">unused</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Hour</h5>
            <div className=" m-0 w-75 rounded-3">
              <div className="d-flex gap-2 mt-3">
                <p className={`${Class.hour__btn} d-flex gap-3`}>08:00~11:50</p>
                <p className={`${Class.hour__btn} d-flex gap-3`}>08:00~11:50</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Operating Options</h5>
            <p className="border m-0 w-75 rounded-3 p-3">Screen off</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Package</h5>
            <p className="border m-0 w-75 rounded-3 p-3">
              Basic split type (AIB)
            </p>
          </div>
          <div className="d-flex  mb-3">
            <h5 className="w-25 fs-6">A</h5>
            <div className="border m-0 d-flex gap-2 w-75 rounded-3 p-3 w-100">
              <Image src={image1} alt="img" />
              <Image src={image2} alt="img" />
              <Image src={image3} alt="img" />
              <Image src={image1} alt="img" />
            </div>
          </div>
          <div className="d-flex  mb-3">
            <h5 className="w-25 fs-6">B</h5>
            <div className="border m-0 d-flex gap-2 w-75 rounded-3 p-3  w-100">
              <Image src={image1} alt="img" />
              <Image src={image2} alt="img" />
              <Image src={image3} alt="img" />
              <Image src={image1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </CardTwo>
  );
};

export default DeviceManagement;
