import Card from "../../Card/Card";
import FileCategory from "../../FileCategory/FileCategory";
import SelectedFlies from "../../SelectedFiles/SelectedFlies";
import EventTable from "../EventTable/EventTable";
import Class from './EventsModal.module.css'
const EventModal = (props: any) => {
    return (
        <Card>
            <div className="d-flex align-items-center justify-content-between">
                <h6>Add event Information</h6>
                <div className='d-flex justify-content-end gap-3 align-items-center mb-4'>
                    <h6>Event Name</h6>
                    <form className="position-relative d-flex gap-2 align-items-center">
                        <input className={Class.search__box} type="text" placeholder="Enter the event name" />
                        <button className={Class.search__btn}><i className="fa-solid fa-magnifying-glass"></i></button>
                        <button className={Class.reset__btn} type="reset" ><i className="fa-solid fa-rotate-right"></i></button>
                    </form>
                </div>
            </div>

            {/* <CardItem/> */}
            {/* <SelectedFlies/> */}
            <EventTable />

            <div className="d-flex justify-content-center">
                <ul className={`${Class.pagination} list-unstyled d-flex gap-3`}>
                    <li><a className="" href=""><i className="fa-solid fa-angles-left"></i></a></li>
                    <li><a className="" href=""><i className="fa-solid fa-angle-left"></i></a></li>
                    <li><a className="" href="">1</a></li>
                    <li><a className="" href="">2</a></li>
                    <li><a className="" href="">3</a></li>
                    <li><a className="" href="">4</a></li>
                    <li><a className="" href="">5</a></li>
                    <li><a className="" href=""><i className="fa-solid fa-angle-right"></i></a></li>
                    <li><a className="" href=""><i className="fa-solid fa-angles-right"></i></a></li>
                </ul>
            </div>
            <div className="d-flex gap-3 justify-content-center mt-4">
                <button className="btn btn-outline-primary px-4 rounded-pill">Cancel</button>
                <button className="btn btn-primary px-4 rounded-pill">Save</button>
            </div>
        </Card>
    );
};

export default EventModal;