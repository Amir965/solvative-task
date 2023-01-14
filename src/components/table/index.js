import React from "react";
import "./Table.css";
import Search from "../search";
import Loading from "../Loading";
import Pagination from "../pagination";

const showData = (data) => {
  if (data?.length === 0) {
    return (
      <tr>
        <td align="center" colSpan={8}>
          <div className="tableLoading">
            <h1>No Data Found</h1>
          </div>
        </td>
      </tr>
    );
  } else {
    return (
      <>
        {data?.map((ele) => {
          return (
            <tr>
              <td>{ele?.id}</td>
              <td>{ele?.city}</td>
              <td className="last-td"><img src={require("../../assets/india.jpg")} alt="flag" className="td-img"/> {ele?.country}</td>
              {/* <td>
                <img
                  src={require("../../assets/india.jpg")}
                  alt="flag"
                  className="td-img"
                />{" "}
                
              </td> */}
            </tr>
          );
        })}
      </>
    );
  }
};

const Table = ({
  data,
  loading,
  dataIndex,
  setDataIndex,
  setSearch,
  search,
  dataLength,
  handleClick,
  handleNextBtn,
  handlePrevBtn,
  itemsPerPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
}) => {
  return (
    <div className="container">
      <div className="search-box">
        <Search setSearch={setSearch} search={search} />
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
              showData(data?.data)
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
      </div>
      <div className="bottom-pagination">
        <Pagination
          dataLength={dataLength}
          handleClick={handleClick}
          itemsPerPage={itemsPerPage}
          handleNextBtn={handleNextBtn}
          handlePrevBtn={handlePrevBtn}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          currentPage={currentPage}
          data={data}
        />
      </div>
    </div>
  );
};

export default Table;
