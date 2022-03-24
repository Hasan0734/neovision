import React from 'react';
import Class from './FullDetails.module.css';
import parse from 'html-react-parser';

const FullDetails = () => {

    return (
        <div className="card__p">
            <div className='border border-bottom-0 rounded-3'>
                <table className='table'>
                    <tbody className=''>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Info</td>
                            <td className='p-2'>All&gt;group-name</td>
                        </tr>

                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Device Name <span className='text-danger'>*</span></td>
                            <td className='p-2'>1<sup>st</sup> floor reception room</td>
                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>IP Address <span className='text-danger'>*</span></td>
                            <td className='p-2'>192.168.0.100</td>
                        </tr>

                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>MAC Address</td>
                            <td className='p-2'>F4-AB-66-5D-27-C7</td>
                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Inherited</td>
                            <td className='p-2'>Use</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='border border-bottom-0 rounded-3'>
                <table className='table'>
                    <tbody className=''>
                        <tr className=''>
                            <td className={`${Class.td__title} border-end p-2`}>Image Settings</td>
                            <td className='border-end'>
                                <span className='d-flex justify-content-between'>
                                    <span>Play time</span> <span>10</span>
                                </span>

                            </td>
                            <td className='p-2 d-flex justify-content-between'>
                                <span>Transition  </span>
                                <span>Unused</span>
                            </td>

                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} border-end p-2`}>Subtitle Settings</td>
                            <td className='border-end '>
                                <span className='d-flex justify-content-between'>
                                    <span>Speed</span>
                                    <span>Normal</span>
                                </span>
                            </td>
                            <td className='p-2 d-flex justify-content-between'>
                                <span>
                                    Location
                                </span>
                                <span>Bottom</span>
                            </td>

                        </tr>

                        <tr className=''>
                            <td rowSpan={2} className={`${Class.td__title} border-end p-2`}></td>
                            <td className='p-2 border-end '>
                                <span className='d-flex justify-content-between'>
                                    <span>Font color</span>
                                    <span className={Class.select__color}> Yellow</span>
                                    
                                </span>
                            </td>
                            <td className='p-2 d-flex justify-content-between'>
                                <span>Background Color</span>
                                <span>Black</span>
                            </td>
                        </tr>

                        <tr className=''>
                            <td className="p-2 border">
                                <span className='d-flex justify-content-between'>
                                    <span>Font Size</span>
                                    <span>Normal</span>
                                </span>
                            </td>
                            <td className='p-2 d-flex justify-content-between'>
                                <span>Background color</span>
                                <span>Unused</span>
                            </td>
                        </tr>


                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Volume Setting</td>
                            <td colSpan={2} className='p-2'>0</td>
                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Registrant</td>
                            <td colSpan={2} className='p-2'>Kim Registration</td>
                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Registration Date</td>
                            <td colSpan={2} className='p-2'>2022-01-27 09:00</td>
                        </tr>
                        <tr className=''>
                            <td className={`${Class.td__title} p-2`}>Date of Modification</td>
                            <td colSpan={2} className='p-2'>2022-01-27 09:00</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FullDetails;