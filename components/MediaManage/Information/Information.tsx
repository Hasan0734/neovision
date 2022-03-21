import React from 'react';

const Information = () => {
    return (
        <div className="card__p">
            <div className='border border-bottom-0 rounded-3'>
                <table className='table'>
                    <tbody className=''>
                        <tr className=''>
                            <td >1</td>
                            <td >Information</td>
                        </tr>
                        <tr className=''>
                            <td >Hello</td>
                            <td colSpan={3}>Info here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;