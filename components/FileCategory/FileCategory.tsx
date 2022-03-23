
import Image from 'next/image';
import pdf from '/public/icon/pdf-file-64.png'
import ppt from '/public/icon/ppt-file-64.png'
import mov from '/public/icon//mov-file-64.png'
import jepg from '/public/icon/jpeg-64.png'
const FileCategory = () => {
    return (
        <div className="d-flex justify-content-between">
            <button className="btn border px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
                <Image width={25} height={25}  src={pdf} />
                PDF</button>
            <button className="btn border px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">

                <Image width={25} height={25}   src={ppt} />

                Presentation</button>
            <button className="btn border px-3  rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
                <Image width={25} height={25}  src={jepg} />
                Photos</button>
            <button className="btn border active__file px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
                <Image width={25} height={25} src={mov} />
                Videos</button>
        </div>
    );
};

export default FileCategory;