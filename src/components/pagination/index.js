import React from "react";
import style from "./pagination.module.css";

const Pagination = ({
  dataLength,
  handleClick,
  handleNextBtn,
  handlePrevBtn,
  itemsPerPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
  data,
}) => {
  const pages = [];

  console.log("dataLength", dataLength);
  for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
    pages.push(i);
  }

  let prevIncrementBtn = null;
  // if (pages.length > maxPageNumberLimit) {
  if (pages.length - 1 > maxPageNumberLimit) {
    prevIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
  }

  let prevDecrementBtn = null;
  // if (pages.length > maxPageNumberLimit) {
  if (currentPage >= 11) {
    prevDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
  }

  const renderPageNumber = pages.map((number, index) => {
    if (index < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          // key={number}
          // id={number}
          onClick={() => handleClick(index)}
          className={currentPage === index ? style.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <>
    {data.length===0?"":(<><div>
        <ul className={style.pageNumbers}>
          {currentPage !== 0 ? (
            <li>
              <button
                onClick={() => handlePrevBtn()}
                disabled={currentPage == 0 ? true : false}
              >
                {"<"}
              </button>
            </li>
          ) : null}
          {prevDecrementBtn}
          {renderPageNumber}
          {prevIncrementBtn}
          {currentPage + 1 !== pages[pages.length - 1] ? (
            <li>
              <button
                onClick={() => handleNextBtn()}
                disabled={
                  currentPage + 1 == pages[pages.length - 1] ? true : false
                }
              >
                {">"}
              </button>
            </li>
          ) : null}
        </ul>
      </div></>)}
      
    </>
  );
};

export default Pagination;
