import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">About CSV Viewer App</h2>
      <p className="text-gray-700 leading-7">
        Welcome to the CSV Viewer App, a simple yet powerful tool for viewing and managing CSV
        files. This application is designed to provide a user-friendly interface for uploading,
        viewing, and interacting with CSV data.
        <br />
        <br />
        <strong className="block text-xl mb-2">Key Features:</strong>
        <ul className="list-disc pl-6">
          <li>File Upload: Easily upload your CSV files and start exploring the data.</li>
          <li>
            File View: View uploaded files with details such as name, date, and time of upload.
          </li>
          <li>File Deletion: Delete unwanted files directly from the application.</li>
          <li>
            View Component: Dive into the details of a specific CSV file, search, and highlight
            rows.
          </li>
        </ul>
        <br />
        <br />
        <strong className="block text-xl mb-2">Technologies Used:</strong>
        <ul className="list-disc pl-6">
          <li>Frontend: Built with React.js and styled using Tailwind CSS.</li>
          <li>Backend: Powered by Node.js with Express.</li>
          <li>Database: MongoDB with Mongoose.</li>
          <li>File Upload: Utilizes Multer middleware.</li>
          <li>CSV Parsing: Implemented with PapaParse library.</li>
        </ul>
        <br />
        <br />
        <strong className="block text-xl mb-2">How to Use:</strong>
        <ol className="list-decimal pl-6">
          <li>Clone the repository.</li>
          <li>
            Run <code className="bg-gray-200 px-1 py-0.5 rounded">npm install</code> to install
            dependencies.
          </li>
          <li>
            Start the server using{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">npm start</code> or{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">node Server.js</code>.
          </li>
          <li>Access the application in your web browser.</li>
        </ol>
        <br />
        <br />
        <strong className="block text-xl mb-2">Future Improvements:</strong>
        <ul className="list-disc pl-6">
          <li>Support for user authentication and file ownership.</li>
          <li>Enhanced file viewing features, such as sorting and pagination.</li>
          <li>Improved error handling and user feedback.</li>
          <li>Additional file format support.</li>
          <li>Deployment to a production environment.</li>
        </ul>
        <br />
        <br />
        Feel free to contribute to the project or customize it for your specific needs!
      </p>
    </div>
  );
};

export default About;
