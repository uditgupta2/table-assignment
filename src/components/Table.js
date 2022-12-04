import "./table.css";
import { useState } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Table = ({ data, column, sort }) => {
  const [tableData, setTableData] = useState(data);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => {
            return <TableHeadItem item={item} handleSorting={handleSorting} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((dataItem, index) => {
          return <TableDataItem dataItem={dataItem} column={column} />;
        })}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item, handleSorting }) => {
  const [sortFeild, setSortFeild] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    console.log(accessor);
    const sortOrder =
      accessor === sortFeild && order === "asc" ? "desc" : "asc";
    setSortFeild(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <th key={item.accessor}>
      <div className="heading">
        {item.heading}
        {item.sort && (
          <SwapVertIcon
            className="sortIcon"
            onClick={() => {
              handleSortingChange(item.accessor);
            }}
          />
        )}
      </div>
    </th>
  );
};

const TableDataItem = ({ dataItem, column }) => {
  return (
    <tr>
      {column.map((item) => {
        return (
          (item.heading === "Name" ? <td>{dataItem.name}</td> : null) ||
          (item.heading === "City" ? <td>{dataItem.city}</td> : null) ||
          (item.heading === "Email Address" ? (
            <td>
              <a href="/">{dataItem.email}</a>
            </td>
          ) : null) ||
          (item.heading === "Joining Date" ? (
            <td>{dataItem.joiningDate}</td>
          ) : null) ||
          (item.heading === "Role" ? <td>{dataItem.role}</td> : null)
        );
      })}
    </tr>
  );
};

export default Table;
