import Image from 'next/image';
import CardTwo from '../../CardTwo/CardTwo';
import Class from './EventDetailAdd.module.css'
import image1 from '/public/image/7.png'
import image2 from '/public/image/1.png'
import image3 from '/public/image/2.png'

{/* <label htmlFor="all">all </label>
<input type="checkbox" id="all" value="all" /> */}
const dayOfWeek = [
    {
        id: 'all',
        value: 'all'
    },
    {
        id: 'month',
        value: 'month'
    },
    {
        id: 'fury',
        value: 'fury'
    },
    {
        id: 'number',
        value: 'number'
    },
    {
        id: 'neck',
        value: 'neck'
    },
    {
        id: 'gold',
        value: 'gold'
    },
    {
        id: 'saturday',
        value: 'Saturday'
    },
    {
        id: 'work',
        value: 'Work'
    },
]

const EventDetailAdd = (props: any) => {

    return (
        <CardTwo>
            <div className="card__p">
                <div className="d-flex justify-content-between">
                    <h3>Event Details</h3>
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-primary rounded-pill py-1 px-4">Preview</button>
                        <button className="btn btn-primary rounded-pill py-1 px-4">Stripe</button>
                        <button className="btn btn-primary rounded-pill py-1 px-4">Add</button>
                    </div>
                </div>
                <form className='mt-5'>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Event Name <span className='text-danger'>*</span></h5>
                        {/* <p className='border m-0 w-75 rounded-pill p-3'></p> */}
                        <input className='border m-0 w-75 rounded-3 p-2' placeholder='Please enter your text.' />

                    </div>
                    <div className='d-flex align-items-center mb-3 gap-1'>
                        <h5 className='w-25 fs-6'>Whether holidys apply <span className='text-danger'>*</span></h5>

                        <select className='border m-0 w-75 rounded-3 p-2'>
                            <option value="use">use</option>
                            <option value="unse">unuse</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Day of the week</h5>
                        <div className=' m-0 w-75 rounded-3  d-flex gap-2'>
                            {
                                dayOfWeek.map((item, i) => <div key={i} className='d-flex gap-1 align-items-center'>
                                    <label htmlFor="all">{item.value}</label>
                                    <input type="checkbox" id={item.id} value={item.value} />
                                </div>)
                            }

                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Period</h5>
                        <div className=' m-0 w-75 rounded-3 p-2 d-flex align-items-center'>
                            <input className='form-control w-100' type="date" /> <span>~</span> <input className='form-control' type="date" />
                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Hour</h5>
                        <div className=' m-0 w-75 rounded-3 p-2 '>
                            <div className='d-flex align-items-center'>
                                <input className='form-control w-100' type="time" /> <span>~</span> <input className='form-control' type="time" />
                            </div>
                            <div className='d-flex gap-5 mt-3'>
                                <p className={`${Class.hour__btn} d-flex gap-3`}><span>08:00~11:50</span><span><i className="fa-solid fa-xmark"></i></span></p>
                                <p className={`${Class.hour__btn} d-flex gap-3`}><span>08:00~11:50</span><span><i className="fa-solid fa-xmark"></i></span></p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Operating Options <span className='text-danger'>*</span></h5>
                        <select className=' border m-0 w-75 rounded-3 p-2'>
                            <option value="screen off">screen off</option>
                            <option value="screen on">screen on</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <h5 className='w-25 fs-6'>Package <span className='text-danger'>*</span></h5>
                        <select className='border m-0 w-75 rounded-3 p-2'>
                            <option value="screen off">Basic split type (AB)</option>
                            <option value="screen on">screen on</option>
                        </select>
                    </div>
                    <div className='d-flex  mb-3'>
                        <h5 className='w-25 fs-6'>A</h5>
                        <div className='border m-0  w-75 rounded-3 p-3' style={{ background: '#e5e5e5' }}>
                            <div className='d-flex gap-4'>
                                <span className='btn btn-secondary px-3 rounded-pill'>Media Selection</span>
                                <span className='btn btn-secondary px-3 rounded-pill'>File Selection</span>
                            </div>
                            <div className='d-flex gap-3 mt-2 justify-content-between'>
                                <p className='border btn-light w-100 p-2 rounded-3 d-flex justify-content-between'>
                                    <span>test.jpg</span>
                                    <span><i className="fa-solid fa-xmark"></i></span>
                                </p>
                                <p className='border btn-light w-100 p-2 rounded-3 d-flex justify-content-between'>
                                   <span> test.aiv</span>
                                   <span><i className="fa-solid fa-xmark"></i></span>
                                </p>
                            </div>


                        </div>
                    </div>
                    <div className='d-flex  mb-3'>
                        <h5 className='w-25 fs-6'>B</h5>
                        <div className='border m-0  w-75 rounded-3 p-3' style={{ background: '#e5e5e5' }}>
                            <div className='d-flex gap-4'>
                                <span className='btn btn-secondary px-3 rounded-pill'>Media Selection</span>
                                <span className='btn btn-secondary px-3 rounded-pill'>File Selection</span>
                            </div>
                            <div className='d-flex gap-3 mt-2 justify-content-between'>
                                <p className='border btn-light w-100 p-2 rounded-3 d-flex justify-content-between'>
                                    <span>test.jpg</span>
                                    <span><i className="fa-solid fa-xmark"></i></span>
                                </p>
                                <p className='border btn-light w-100 p-2 rounded-3 d-flex justify-content-between'>
                                   <span> test.aiv</span>
                                   <span><i className="fa-solid fa-xmark"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center gap-3'>
                        <button className='btn btn-outline-primary px-4'>Cancel</button>
                        <button className='btn btn-primary px-4'>Save</button>
                    </div>
                </form>
            </div>

        </CardTwo>


    );
};

export default EventDetailAdd;