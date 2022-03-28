import Class from "./ReferanceTable.module.css";

const tableData = [
  {
    id: 1,
    server: "Operation Server",
    referance1: "wait_time",
    referance2: "300",
    whether: "use",
    desc: "waiting time",
    holiday: "unused",
    modification: "2022-01-27 09:00",
  },
  {
    id: 1,
    server: "Operation Server",
    referance1: "wait_time",
    referance2: "300",
    whether: "use",
    desc: "waiting time",
    holiday: "unused",
    modification: "2022-01-27 09:00",
  },
];

const ReferanceTable = () => {
  return (
    <div className={`${Class.table__area} table-responsive`}>
      <table className="table rounded-3">
        <thead>
          <tr>
            <th>No.</th>
            <th className="text-center">Server Classification</th>
            <th className="text-center">
              Referance value <i className="fa-solid fa-caret-down"></i>
            </th>
            <th className="text-center">
              Referance value <i className="fa-solid fa-caret-down"></i>
            </th>
            <th className="text-center">
              Whether or not to use <i className="fa-solid fa-caret-down"></i>
            </th>
            <th className="text-center">
              Description <i className="fa-solid fa-caret-down"></i>
            </th>
            <th className="text-center">
              Modify Date <i className="fa-solid fa-caret-down"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td className="text-center">{item.server}</td>
              <td className="text-center">{item.referance1}</td>
              <td className="text-center">{item.referance2}</td>
              <td className="text-center">{item.whether}</td>
              <td className="text-center">{item.desc}</td>
              <td className="text-center">{item.modification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferanceTable;
