import React from "react";
import "./Table.css";
import Search from "../search";
import Loading from "../Loading";

const Table = ({ data, loading, dataIndex, setDataIndex }) => {
  return (
    <div className="container">
      <div className="search-box">
        <Search />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Place Name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td align="center" colSpan={8}>
                  <div className="tableLoading">
                    <Loading size="10" />
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {data?.data?.map((ele) => {
                  return (
                    <tr>
                      <td>{ele?.id}</td>
                      <td>{ele?.city}</td>
                      <td>{ele?.country}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="dropdown">
        <span>Show {""} </span>
        <select onChange={(e) => setDataIndex(Number(e.target.value))}>
          {[3, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>/{data?.metadata?.totalCount} result(s) </span>

        {/* <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select> */}
        {""}
        {/* <span>/{rows.length} result(s) </span> */}
      </div>
    </div>
  );
};

export default Table;
