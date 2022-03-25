import Class from './FileTable.module.css'

const tableData = [
    {
        id: 1,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'Ab>Bo>De',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    },
    {
        id: 2,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'Ab>Bo>De',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    },
    {
        id: 3,
        thumb: 'img',
        fileName: 'Name Field',
        route: 'Ab>Bo>De',
        fileSize: '10kb',
        fileType: 'jpg',
        date: '2022-01-27 09:00'
    }
]

const tableHead = ['No.', 'Thumbnail', 'File Name', 'Category', 'File Size', 'File Type', 'Modify']

const FileTable = () => {
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
          

        </div>
    );
};

export default FileTable;