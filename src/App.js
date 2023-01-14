import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/table";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataIndex, setDataIndex] = useState(3);
  const [error, setError] = useState({});

  const fetchData = async () => {
    setLoading(true);
    return await axios
      .get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=IN&namePrefix=del&limit=${dataIndex}`,
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
  }, [dataIndex]);
  console.log("response from stateManage", { data }, { dataIndex });

  return (
    <div className="App">
      <Table
        data={data}
        loading={loading}
        setDataIndex={setDataIndex}
        dataIndex={dataIndex}
      />
    </div>
  );
}

export default App;
