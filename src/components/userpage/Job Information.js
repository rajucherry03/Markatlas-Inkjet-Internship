import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Adjust the path to your Firebase configuration
import { FaEdit } from 'react-icons/fa';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const JobInfo = () => {
  const [jobInfo, setJobInfo] = useState({
    employmentType: '',
    salary: '',
    location: '',
    workEmail: '',
    workPhone: '',
  });
  const [editJobInfo, setEditJobInfo] = useState(false);

  useEffect(() => {
    const fetchJobInfo = async () => {
      try {
        const jobRef = doc(db, 'employees', auth.currentUser.uid);
        const docSnap = await getDoc(jobRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setJobInfo({
            employmentType: data.employmentType || '',
            salary: data.salary || '',
            location: data.location || '',
            workEmail: data.workEmail || '',
            workPhone: data.workPhone || '',
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching job info:', error);
      }
    };

    fetchJobInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobInfo((prevJobInfo) => ({
      ...prevJobInfo,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const jobRef = doc(db, 'employees', auth.currentUser.uid);
      await setDoc(jobRef, jobInfo, { merge: true });
      setEditJobInfo(false);
    } catch (error) {
      console.error('Error saving job info:', error);
    }
  };

  return (
    <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-bold">Job Information</h2>
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setEditJobInfo(!editJobInfo)}
        >
          <FaEdit className="mr-1" />
          {editJobInfo ? 'Cancel' : 'Edit'}
        </button>
      </div>
      {editJobInfo ? (
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                <input
                  type="text"
                  name="employmentType"
                  value={jobInfo.employmentType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={jobInfo.salary}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={jobInfo.location}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  name="workEmail"
                  value={jobInfo.workEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Work Phone</label>
                <input
                  type="phonenumber"
                  name="workPhone"
                  value={jobInfo.workPhone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setEditJobInfo(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Employment Type: {jobInfo.employmentType}</p>
          <p>Salary: {jobInfo.salary}</p>
          <p>Location: {jobInfo.location}</p>
          <p>Work Email: {jobInfo.workEmail}</p>
          <p>Work Phone: {jobInfo.workPhone}</p>
        </div>
      )}
    </div>
  );
};

export default JobInfo;
