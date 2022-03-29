import CardTwo from "../../CardTwo/CardTwo";

const ReferanceDetails = (props: any) => {
  return (
    <CardTwo>
      <div className="card__p">
        <div className="d-flex justify-content-between">
          <h3>Referance Value Details</h3>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary rounded-pill py-1 px-4">
              New Registration
            </button>
            <button className="btn btn-primary rounded-pill py-1 px-4">
              Correction
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Referance defaultValue name</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={500}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Referance defaultValue</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={500}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Server Classification</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={"common"}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Whether or not to use</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <select className="border m-0 w-75 rounded-3 p-3">
              <option defaultValue="use">use</option>
              <option value="unuse">unuse</option>
            </select>
          </div>

          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Explanation</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <textarea rows={4} className="border m-0 w-75 rounded-3 p-3">
              Recognized defaultValue of hours after work from the base date of
              work (unit: minutes)
            </textarea>
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Registrant</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={"Kim registration"}
            />
          </div>

          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Registration date</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={"2022-01-27 09:00"}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Modifier</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={"Kim registration"}
            />
          </div>
          <div className="d-flex align-items-center mb-3">
            <h5 className="w-25 fs-6">Date of Modification</h5>
            {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
            <input
              className="border m-0 w-75 rounded-3 p-3"
              defaultValue={"2022-01-27 09:00"}
            />
          </div>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-primary px-3 rounded-pill">
              Cancel
            </button>
            <button className="btn btn-primary px-3 rounded-pill">Save</button>
          </div>
        </div>
      </div>
    </CardTwo>
  );
};

export default ReferanceDetails;
