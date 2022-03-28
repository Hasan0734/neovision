import { useRouter } from "next/router";
import Class from "./SelectedFiles.module.css";

const tableData = [
  {
    id: 1,
    thumb: "img",
    fileName: "Name Field",
    route: "All>folder1>folder2",
    fileSize: "10kb",
    fileType: "jpg",
    date: "2022-01-27 09:00",
  },
  {
    id: 2,
    thumb: "img",
    fileName: "Name Field",
    route: "All>folder1>folder2",
    fileSize: "10kb",
    fileType: "jpg",
    date: "2022-01-27 09:00",
  },
  {
    id: 3,
    thumb: "img",
    fileName: "Name Field",
    route: "All>folder1>folder2",
    fileSize: "10kb",
    fileType: "jpg",
    date: "2022-01-27 09:00",
  },
];

const tableHead = [
  "No.",
  "Thumbnail",
  "File Name",
  "Route",
  "File Size",
  "File Type",
  "Date",
];

const SelectedFlies = () => {
  const { pathname } = useRouter();
  return (
    <div className={pathname === "/media-management" ? "pt-4" : "card__p"}>
      <div className={`${Class.table__area} table-responsive`}>
        <table className="table" style={{ fontSize: "12px" }}>
          <thead className="">
            <tr className={Class.head__tr}>
              {tableHead.map((item, i) => (
                <th className="text-center" key={i}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={Class.table__body}>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.thumb}</td>
                <td className="text-center">{item.fileName}</td>
                <td className="text-center">{item.route}</td>
                <td className="text-center">{item.fileSize}</td>
                <td className="text-center">{item.fileType}</td>
                <td className="text-center">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-outline-primary px-3 rounded-pill">
          Cancel
        </button>
        <button className="btn btn-primary px-3 rounded-pill">Save</button>
      </div>
    </div>
  );
};

export default SelectedFlies;
