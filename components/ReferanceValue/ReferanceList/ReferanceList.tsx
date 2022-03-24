import Card from "../../Card/Card";
import ReferanceTable from "../ReferanceTable/ReferanceTable";

import Class from './ReferanceList.module.css'

const ReferanceList = (props:any) => {
   
    
    return (
        <Card>
            <div className='d-flex justify-content-between gap-3 align-items-center mb-4'>
               
               <form className="position-relative d-flex gap-2 align-items-center">
                   <label>Server</label>
                   <select className="form-control">
                       <option value="all">all</option>
                       <option value="month">month</option>
                       <option value="fury">fury</option>
                       <option value="number">number</option>
                       <option value="neck">neck</option>
                       <option value="gold">gold</option>
                       <option value="Saturday">Saturday</option>
                       <option value="Saturday">Wor</option>

                   </select>
                   <label>Whether</label>
                   <select className="form-control">
                       <option value="all">all</option>
                       <option value="month">month</option>
                       <option value="fury">fury</option>
                       <option value="number">number</option>
                       <option value="neck">neck</option>
                       <option value="gold">gold</option>
                       <option value="Saturday">Saturday</option>
                       <option value="Saturday">Wor</option>

                   </select>
                   <label>Referance</label>
                   <input className={Class.search__box} type="text"  placeholder="Enter the event name"/>
                    <button className={Class.search__btn}><i className="fa-solid fa-magnifying-glass"></i></button>
                    <button className={Class.reset__btn} type="reset" ><i className="fa-solid fa-rotate-right"></i></button>
               </form>
            </div>
            
            {/* <CardItem/> */}
            {/* <SelectedFlies/> */}
            <ReferanceTable/>
            <p className="text-end">Searched: 2</p>
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
        </Card>
    );
};

export default ReferanceList;