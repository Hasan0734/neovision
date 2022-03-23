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
                            <td className={`${Class.td__title} p-2`}>Image Settings</td>
                            <td colSpan={2} className='p-2 d-flex justify-content-between'>
                                <span>Play time</span> <span>10</span>
                            </td>
                            <td className='p-2 d-flex justify-content-between'>
                                <span>Transition</span> <span>Unused</span>
                            </td>
                            <td></td>
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
        </div>
    );
};

export default FullDetails;