import Image from "next/image";
import mov from "/public/icon//mov-file-64.png";
import jepg from "/public/icon/jpeg-64.png";
import pdf from "/public/icon/pdf-file-64.png";
import ppt from "/public/icon/ppt-file-64.png";
const FileCategory = () => {
  return (
    <div className="d-flex gap-3 border-top pt-3">
      <button className="btn border px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
        <Image width={25} height={25} src={pdf} alt="image" />
        PDF
      </button>
      <button className="btn border px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
        <Image width={25} height={25} src={ppt} alt="image" />
        Presentation
      </button>
      <button className="btn border px-3  rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
        <Image width={25} height={25} src={jepg} alt="image" />
        Photos
      </button>
      <button className="btn border active__file px-3 rounded-pill d-flex gap-1 text-secondary d-flex align-items-center">
        <Image width={25} height={25} src={mov} alt="image" />
        Videos
      </button>
    </div>
  );
};

export default FileCategory;
