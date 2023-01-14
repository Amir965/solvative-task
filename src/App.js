/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/table";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataIndex, setDataIndex] = useState(3);
  const [error, setError] = useState({});
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(search);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(dataIndex);
  const [pageNumberLimit, setPageNumberLimit] = useState(dataIndex);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(dataIndex);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (index) => {
    setCurrentPage(Number(index));
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search);
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [search, 2000]);

  const fetchData = async () => {
    setLoading(true);
    return await axios
      .get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=${currentPage}&countryIds=IN&namePrefix=${
          debouncedValue === "" ? "del" : debouncedValue
        }&limit=${dataIndex}`,
        {
          headers: {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key":
              "4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe",
          },
        }
      )
      .then((response) => {
        console.log("response from fetchData", response.data);
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error from fetchData", error.response);
        setLoading(false);
        setError(error.response);
      });
  };

  useEffect(() => {
    fetchData();
  }, [dataIndex, debouncedValue, currentPage]);
  console.log(
    "response from stateManage",
    { data },
    { dataIndex },
    { search },
    { debouncedValue },
    { currentPage }
  );

  return (
    <div className="App">
      <Table
        data={data}
        loading={loading}
        setDataIndex={setDataIndex}
        dataIndex={dataIndex}
        setSearch={setSearch}
        search={search}
        dataLength={data?.metadata?.totalCount}
        handleClick={handleClick}
        itemsPerPage={itemsPerPage}
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
