import "./styles.css";
import Data from "./Data/tableTestData.json";
import Table from "./components/Table";
const App = () => {
  return (
    <div>
      <Table data={Data} column={column} />
      <Table data={Data} column={column2} />
      <Table data={Data} column={column3} />
      <Table data={Data} column={column4} />
    </div>
  );
};

const column = [
  { heading: "Name", accessor: "name", sort: true },
  { heading: "City", accessor: "city", sort: true },
  { heading: "Email Address", accessor: "email", sort: true },
  { heading: "Joining Date", accessor: "joiningDate", sort: true },
  { heading: "Role", accesssor: "role", sort: true }
];

const column2 = [
  { heading: "Name", accessor: "name", sort: true },
  { heading: "Email Address", accessor: "email", sort: false },
  { heading: "Role", accessor: "role", sort: false }
];

const column3 = [
  { heading: "Email Address", accessor: "email", sort: false },
  { heading: "Joining Date", accessor: "joiningDate", sort: true },
  { heading: "Role", accessor: "role", sort: true }
];

const column4 = [
  { heading: "Name", accessor: "name", sort: false },
  { heading: "City", accessor: "city", sort: true },
  { heading: "Joining Date", accessor: "joiningDate", sort: false },
  { heading: "Role", accessor: "role", sort: true }
];

export default App;
