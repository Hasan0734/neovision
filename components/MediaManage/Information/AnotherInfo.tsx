import Image from "next/image";
import React from "react";
import fileIcon from "/public/icon/jpeg-64.png";
const AnotherInfo = () => {
  return (
    <div className="card__p">
      <div className="">
        <div className=" my-3 rounded-3 p-3" style={{ background: "#f3f3f3" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="text-secondary">Uploaded a file</h5>
            <p>2021-01-27 09:24</p>
          </div>
          <button className="btn bg-light border text-black rounded-pill d-flex align-items-center gap-2">
            <Image width={25} height={25} src={fileIcon} alt="img" />
            filename.jepg
          </button>
        </div>
        <div className=" my-3 rounded-3 p-3" style={{ background: "#f3f3f3" }}>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="text-secondary">Uploaded a file</h5>
            <p>2021-01-27 09:24</p>
          </div>
          <button className="btn bg-light border text-black rounded-pill d-flex align-items-center gap-2">
            <Image width={25} height={25} src={fileIcon} alt="img" />
            filename.jepg
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnotherInfo;
