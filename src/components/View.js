import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const [fileData, setFileData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const params = useParams();

  useEffect(() => {
    getDetails();
  });

  const getDetails = async () => {
    let result = await fetch(`http://localhost:5000/view/${params.id}`);
    result = await result.json();
    // console.log(result);
    setFileData(result.file);
    setFilteredData(result.file.slice(1)); // Exclude the header for initial rendering
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredRows = fileData
      .slice(1)
      .filter((row) => row.some((cell) => cell.toLowerCase().includes(term)));

    setFilteredData(filteredRows);
  };

  const generateRows = (data) => {
    const filteredRows = data.filter((row) =>
      searchTerm ? row.some((cell) => cell.toLowerCase().includes(searchTerm)) : true
    );

    return filteredRows.map((row, rowIndex) => (
      <tr
        key={rowIndex}
        className={
          searchTerm && row.some((cell) => cell.toLowerCase().includes(searchTerm))
            ? "bg-yellow-100"
            : ""
        }
      >
        {row.map((cell, columnIndex) => (
          <td key={columnIndex} className="border-collapse border border-slate-400 text-center">
            {cell}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <div className="flex justify-center mt-9 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className=" w-64 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {fileData.length > 0 ? (
        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              {fileData[0].map((header, index) => (
                <th
                  className="border-collapse border border-white bg-cyan-600 text-white"
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{generateRows(filteredData)}</tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default View;
