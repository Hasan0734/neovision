import Class from './SelectedFiles.module.css'

const tableData = [
    {
        id: 1,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'All>folder1>folder2',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    },
    {
        id: 2,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'All>folder1>folder2',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    },
    {
        id: 3,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'All>folder1>folder2',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    }
]

const tableHead = ['No.', 'Thumbnail', 'File Name', 'Route', 'File Size', 'File Type', 'Date']

const SelectedFlies = () => {
    return (
        <div className="card__p">
            <div className={`${Class.table__area} table-responsive`}>
                <table className='table' style={{ fontSize: '12px' }}>
                    <thead className=''>
                        <tr className={Class.head__tr}>
                            {tableHead.map((item, i) => <th key={i}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody className={Class.table__body}>
                        {tableData.map((item, i) => <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.thumb}</td>
                            <td>{item.fileName}</td>
                            <td>{item.route}</td>
                            <td>{item.fileSize}</td>
                            <td>{item.fileType}</td>
                            <td>{item.date}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center gap-3 mt-4'>
                <button className='btn btn-outline-primary px-3 rounded-pill'>Cancel</button>
                <button className='btn btn-primary px-3 rounded-pill'>Save</button>
            </div>

        </div>
    );
};

export default SelectedFlies;