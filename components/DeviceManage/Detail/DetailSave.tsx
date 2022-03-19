const DetailSave = () => {
    return (
        <div className="card__p">
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Upper Group</h5>
                {/* <p className='border m-0 w-75 rounded-pill p-2'></p> */}
                <input className='border m-0 w-75 rounded-3 p-2' type="text" value="All &gt; Detail-1" />

            </div>
            <div className='d-flex mb-3'>
                <h5 className='w-25'>Group Name</h5>
                <input className='border m-0 w-75 rounded-3 p-2' type="text" value="" placeholder='Please enter your text'/>
            </div>
            <div className='d-flex justify-content-center gap-3 mt-4'>
                <button className='btn btn-outline-primary px-3 rounded-pill'>Cancel</button>
                <button className='btn btn-primary px-3 rounded-pill'>Save</button>
            </div>
        </div>
    );
};

export default DetailSave;