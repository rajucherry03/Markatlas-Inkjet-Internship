
// import React from 'react';

// const Main = () => {
//   return (
//     <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
     

      

      
//     </div>
//   );
// };

// export default Main;



import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { doc, getDoc, db } from '../../firebase';  // Adjusted import statement

const EmployeeInformation = ({ userId }) => {
  const [employeeInfo, setEmployeeInfo] = useState({
    employeeID: '',
    department: '',
    designation: '',
    manager: '',
    joiningDate: '',
    confirmationDate: ''
  });
  const [editEmployeeInfo, setEditEmployeeInfo] = useState(false);

  // Function to fetch employee information from Firestore
  const fetchEmployeeInfo = async () => {
    try {
      const docRef = doc(db, 'employees', userId);  // Updated to use `db`
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmployeeInfo(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  // Fetch employee data on component mount or when userId changes
  useEffect(() => {
    fetchEmployeeInfo();
  }, [userId]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo((prevEmployeeInfo) => ({
      ...prevEmployeeInfo,
      [name]: value
    }));
  };

  return (
    <div id="employee" className="bg-white p-2 rounded-lg hover:shadow-xl">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-bold">Employee Information</h2>
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setEditEmployeeInfo(!editEmployeeInfo)}
        >
          <FaEdit className="mr-1" />
          Edit
        </button>
      </div>
      {editEmployeeInfo ? (
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <input
                  type="text"
                  name="employeeID"
                  value={employeeInfo.employeeID}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  name="department"
                  value={employeeInfo.department}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={employeeInfo.designation}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Manager</label>
                <input
                  type="text"
                  name="manager"
                  value={employeeInfo.manager}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={employeeInfo.joiningDate}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Confirmation Date</label>
                <input
                  type="date"
                  name="confirmationDate"
                  value={employeeInfo.confirmationDate}
                  onChange={handleChange}
                  readOnly={!editEmployeeInfo}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          {editEmployeeInfo && (
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setEditEmployeeInfo(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => {
                  setEditEmployeeInfo(false);
                  // Update data in Firestore or handle form submission
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Save
              </button>
            </div>
          )}
        </form>
      ) : (
        <div>
          <p>Employee ID: {employeeInfo.employeeID}</p>
          <p>Department: {employeeInfo.department}</p>
          <p>Designation: {employeeInfo.designation}</p>
          <p>Manager: {employeeInfo.manager}</p>
          <p>Joining Date: {employeeInfo.joiningDate}</p>
          <p>Confirmation Date: {employeeInfo.confirmationDate}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeInformation;
