import { useTable } from "react-table";
import Styled from "./reports.styles";
import { ReactComponent as MoreSvg } from "../../Assets/images/more-vertical.svg";

const { Table } = Styled;

const columns = [
  { Header: "", accessor: "user.profileImg" },
  { Header: "Name", accessor: "user.fullname" },
  { Header: "No. of Reports", accessor: "reports.amount" },
  { Header: "Report Type", accessor: "reports.type" },
  { Header: "Date", accessor: "date" },
  { Header: " ", accessor: "" }
];

const TableSection = ({ data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <Table.Container {...getTableProps()}>
      <Table.Head>
        {headerGroups.map((headerGroup) => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Table.Heading {...column.getHeaderProps()}>{column.render("Header")}</Table.Heading>
            ))}
          </Table.Row>
        ))}
      </Table.Head>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return (
                  <Table.Cell {...cell.getCellProps()}>
                    {i === 0 ? (
                      <div>
                        <img src={cell.value} alt={row["user.username"]} />
                      </div>
                    ) : cell.render("Cell") }
                    {!cell.value && (
                      <button type="button" title="more">
                        <MoreSvg />
                      </button>
                    )}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Container>
  );
};

export default TableSection;
