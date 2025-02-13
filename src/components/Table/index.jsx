import React from "react";
import { useTable } from "react-table";
import { isEmpty } from "lodash";
import Pagination from "../Pagination";
import "./styles.scss";

function TableView({ columns, data = [], className, currentLenghtOfRecord }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={className} data-testid="table-test">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="m-tr">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ font: "bold" }}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {currentLenghtOfRecord >= 0 && (
        <tbody {...getTableBodyProps()} className="m-body">
          {rows?.length > 0 &&
            rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      )}
    </table>
  );
}

function Table({
  width,
  headers,
  data,
  page = 1,
  count = 0,
  limit = 10,
  currentPage = 0,
  pageCount = 1,
  onPageChange,
  forRewardAccess = false,
  currentLenghtOfRecord = 0,
  enablePagination = false,
}) {
  const columns = [...headers];
  return (
    <div className="table-div">
      <div className="centered-div" data-testid="Table-View-test">
        <TableView
          columns={columns}
          data={!isEmpty(data) ? data : []}
          className="centered-div-table"
          currentLenghtOfRecord={currentLenghtOfRecord}
        />
        {/* {currentLenghtOfRecord <= 0 && <EmptyListing />} */}
        {currentLenghtOfRecord > 0 && !forRewardAccess && (
          <div className="flex space-between mt-24 mr-32 pagination-rw">
            {/* <div
              className="low ml-24"
              style={{ lineHeight: "23px", color: "#7A7A9D" }}
            >
              Showing {getRecordsNumber(limit, page, currentLenghtOfRecord)}{" "}
              items out of {count} results found
            </div> */}

            {enablePagination && !isEmpty(data) && (
              <div className="pagination-div" id="pagination">
                <Pagination
                  onPageChange={onPageChange}
                  pageCount={pageCount}
                  currentPage={currentPage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Table;
