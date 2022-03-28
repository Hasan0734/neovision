import React from "react";

const Subtitle = () => {
  return (
    <>
      <div className="col-3">
        <h5 className="">Subtitle</h5>
      </div>
      <div className="col-9">
        <div className="row ">
          <div className="col-6 d-flex justify-content-between mb-3 ">
            <label>Speed</label>
            <select className="border m-0   w-50 rounded-3 p-2" name="" id="">
              <option value="Use">Normal</option>
              <option value="Use">Medium</option>
              <option value="Use">High</option>
            </select>
          </div>
          <div className="col-6 d-flex justify-content-between mb-3">
            <label>Location</label>
            <select className="border m-0  w-50  rounded-3 p-2" name="" id="">
              <option value="Use">Top</option>
              <option value="Use">Bottom</option>
              <option value="Use">Left</option>
              <option value="Use">Right</option>
            </select>
          </div>

          <div className="col-6 d-flex justify-content-between mb-3">
            <label>Font Color</label>
            <select className="border m-0  w-50  rounded-3 p-2" name="" id="">
              <option value="Use">Black</option>
              <option value="Use">Red</option>
              <option value="Use">Blue</option>
              <option value="Use">White</option>
              <option value="Use">Yellow</option>
              <option value="Use">Green</option>
            </select>
          </div>
          <div className="col-6 d-flex justify-content-between mb-3">
            <label>Bckground</label>
            <select className="border m-0  w-50  rounded-3 p-2" name="" id="">
              <option value="Use">Red</option>
              <option value="Use">Blue</option>
              <option value="Use">White</option>
              <option value="Use">Yellow</option>
              <option value="Use">Green</option>
              <option value="Use">Black</option>
            </select>
          </div>
          <div className="col-6 d-flex justify-content-between mb-3">
            <label>Font Size</label>
            <select className="border m-0  w-50  rounded-3 p-2" name="" id="">
              <option value="Use">Normal</option>
              <option value="Use">Medium</option>
              <option value="Use">High</option>
            </select>
          </div>
          <div className="col-6 d-flex justify-content-between mb-3">
            <label>RSS</label>
            <select className="border m-0  w-50  rounded-3 p-2" name="" id="">
              <option value="Use">use</option>
              <option value="Use">unused</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subtitle;
