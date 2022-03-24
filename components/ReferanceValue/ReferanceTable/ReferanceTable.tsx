import Class from './ReferanceTable.module.css'

const tableData = [
    {
        id:1,
        schedule: 'Chrismts Special',
        period: '2022-12-25 - 2002-12-25',
        week: 'unused',
        hour: '00:00 - 23:59',
        holiday: 'unused'
    },
    {
        id:2,
        schedule: 'Chrismts Special',
        period: '2022-12-25 - 2002-12-25',
        week: 'unused',
        hour: '00:00 - 23:59',
        holiday: 'unused'
    },
]

const ReferanceTable = () => {
    return (
        <div className={`${Class.table__area} table-responsive`}>
            <table className="table rounded-3">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th className='text-center'>Schedule Name</th>
                        <th className='text-center'>Period</th>
                        <th className='text-center'>Day of the week</th>
                        <th className='text-center'>Hour</th>
                        <th className='text-center'>Holiday Application</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, i) => <tr key={i}>
                        <td>{item.id}</td>
                        <td className='text-center'>{item.schedule}</td>
                        <td className='text-center'>{item.period}</td>
                        <td className='text-center'>{item.week}</td>
                        <td className='text-center'>{item.hour}</td>
                        <td className='text-center'>{item.holiday}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ReferanceTable;