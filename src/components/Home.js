import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileDeleted, setFileDeleted] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getFile();
  }, []);

  const handleFileName = (e) => {
    const selectedFile = e.target.files[0];
    const selectedFileName = e.target.files[0].name;
    if (selectedFile) {
      if (selectedFileName.includes(".csv")) {
        setFile(selectedFile);
        setFileName(selectedFileName);
      } else {
        alert("Please select a CSV file.");
        return;
      }
    } else {
      setFile(null);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    let result = await fetch("https://csv-upload-viewer.onrender.com/upload", {
      method: "post",
      body: formData,
    });

    if (result.ok) {
      setFile(null);
      setFileName("");
      getFile();
      setFileUploaded(true);
      setTimeout(() => {
        setFileUploaded(false);
      }, 2000);
    } else {
      setFile(null);
      setFileName("");
      console.error("Failed to upload file. Server returned:", result.status);
    }
  };

  const getFile = async () => {
    let result = await fetch("https://csv-upload-viewer.onrender.com/get-file");
    result = await result.json();
    setUploadedFile(result);
  };

  const deleteFile = async (id) => {
    let result = await fetch(`https://csv-upload-viewer.onrender.com/delete-file/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setFileDeleted(true);

      setTimeout(() => {
        setFileDeleted(false);
      }, 2000);

      getFile();
    }
  };

  return (
    <div>
      <div className="Home w-full h-1/2 p-14 flex flex-col items-center">
        <div className="text-center text-5xl font-extrabold font-serif mb-5">
          Upload Your File Here
        </div>
        <div className="text-center text-2xl font-sans text-gray-500 mb-12">
          Reads CSV files and displays its content in tabular form
        </div>
        <div className="w-1/2 h-56 border-2 border-dashed border-black mx-auto my-auto flex flex-wrap justify-center items-center ">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileName}
            accept=".csv"
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="mx-2 w-32 text-center font-semibold p-1 bg-slate-100  rounded-lg shadow-lg  border-2 border-black cursor-pointer"
          >
            Choose File
          </label>
          <div className="mx-2 truncate w-28">{filename ? filename : "No file selected"}</div>
          <button
            className="mx-10 w-28 h-12 p-2 text-center text-white text-xl  bg-blue-800 hover:bg-blue-500 rounded-lg shadow-lg  border-2  cursor-pointer "
            onClick={handleFileUpload}
          >
            Upload
          </button>
        </div>
      </div>
      {fileUploaded && (
        <div className="fixed top-10 right-0 bg-green-500 text-white p-3 m-3 rounded shadow">
          File Uploaded
        </div>
      )}
      {fileDeleted && (
        <div className="fixed top-10 right-0 bg-red-500 text-white p-3 m-3 rounded shadow">
          File Deleted
        </div>
      )}
      <div className=" p-1 w-full h-16 bg-green-500 text-5xl text-white text-center">
        Uploaded Files
      </div>
      <div className="m-0 p-0">
        <ul className="flex justify-between bg-gray-700">
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">S.No</li>
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">Name</li>
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">Date</li>
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">Time</li>
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">View</li>
          <li className=" w-96 text-2xl p-3 m-0  text-center text-white">Delete</li>
        </ul>

        {uploadedFile.length > 0 ? (
          uploadedFile.map((item, index) => (
            <ul className="flex justify-between items-center mt-2 bg-slate-300" key={item._id}>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden ">
                {index + 1}
              </li>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden ">
                {item.name}
              </li>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden ">
                {item.createdAt}
              </li>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden ">
                {item.createdTime}
              </li>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden flex justify-center ">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/pulsar-color/48/external-link-squared.png"
                  alt="external-link-squared"
                  onClick={() => navigate(`/view/${item._id}`)}
                  className="cursor-pointer"
                />
              </li>
              <li className=" w-96 text-2xl p-3 m-0  text-center text-ellipsis truncate overflow-hidden flex justify-center ">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/arcade/64/delete-forever.png"
                  alt="delete-forever"
                  onClick={() => deleteFile(item._id)}
                  className="cursor-pointer"
                />
              </li>
            </ul>
          ))
        ) : (
          <h1 className=" h-16 p-2 text-center mt-2 bg-slate-300 text-4xl">No File Uploaded</h1>
        )}
      </div>
    </div>
  );
};
export default Home;
