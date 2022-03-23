import React from 'react';
import Class from './Information.module.css';
import parse from 'html-react-parser';
const tableData = [
    {
        id: 1,
        title: 'Fill Name',
        desc: 'ALL&gt;group name'
    },
    {
        id: 2,
        title: 'Fill Size',
        desc: '1<sup>st</sup> floor reception room'
    },
    {
        id: 3,
        title: 'Fill Type',
        desc: '192.168.0.100'
    },
    {
        id: 4,
        title: 'Registrant',
        desc: 'Kim'
    },
    {
        id: 5,
        title: 'Registration Date',
        desc: '2022-01-27 09:00'
    },
    {
        id: 6,
        title: 'Modifier',
        desc: 'Kim Soo-jung'
    },
    {
        id: 7,
        title: 'Date of Modification',
        desc: '2022-01-27 09:00'
    }
]
const Information = () => {

    return (
        <div className="card__p">
            <div className='border border-bottom-0 rounded-3'>
                <table className='table'>
                    <tbody className=''>

                        {tableData.map((item, i) => (

                            <tr key={i} className=''>
                                <td className={`${Class.td__title} p-2`}>{item.title}</td>
                                <td className='p-2'>{parse(item.desc)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;