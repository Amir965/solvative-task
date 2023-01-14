import React from 'react'
import "./Table.css"
import { tableData } from '../data';
import Search from '../search';
const Table = () => {
    const getData = tableData
    console.log(getData);
  return (
    <div className="container">
      <div className="search-box">
        <Search />
      </div>
      <div className='table-container'>
        <table>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
            {/* <th>Handle</th> */}
          </tr>
          {getData.map((ele) => {
            return (
              <tr>
                <td>{ele.id}</td>
                <td>Amir</td>
                <td>Alam</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Table