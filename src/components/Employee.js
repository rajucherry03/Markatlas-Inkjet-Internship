import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const EmployeeSearch = () => {
  const [empID, setEmpID] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setEmployeeData(null);
    try {
      const q = query(collection(db, 'Emp_info'), where('empID', '==', empID));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError('No matching documents.');
      } else {
        querySnapshot.forEach(doc => {
          setEmployeeData(doc.data());
        });
      }
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setError('Error fetching employee data.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto mt-5 md:ml-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Employee Search</h2>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={empID}
          onChange={(e) => setEmpID(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </div>
      {loading && <div className="flex items-center justify-center">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {employeeData && (
        <div className="bg-white max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Employee Details</h2>
          <form>
            {Object.entries(employeeData).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-2 border border-gray-300 rounded mt-2 w-full"
                />
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
};

export default EmployeeSearch;
