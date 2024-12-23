import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Adjust the path to your Firebase configuration
import { FaEdit } from 'react-icons/fa';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const PersonalInformation = () => {
  const [emp, setEmp] = useState(null); // State for employee details
  const [employeeInfo, setEmployeeInfo] = useState({
    employeeID: '',
    // Add more fields as needed
  });
  const [jobInfo, setJobInfo] = useState({
    workEmail: '',
    location: '',
    // Add more fields as needed
  });
  const [contactInfo, setContactInfo] = useState({
    primaryContact: '',
    secondaryContact: '',
    email: '',
    temporaryAddress: '',
    permanentAddress: '',
    // Add more fields as needed
  });
  const [personalInfo, setPersonalInfo] = useState({
    dob: '',
    // Add more fields as needed
  });
  const [educationInfo, setEducationInfo] = useState([
    { type: 'X Class', schoolName: '', yearCompleted: '', certificate: null },
    { type: 'XII Class / Diploma', schoolName: '', yearCompleted: '', certificate: null },
    { type: 'Graduation', schoolName: '', yearCompleted: '', certificate: null },
  ]);

  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [editContactInfo, setEditContactInfo] = useState(false);
  const [editEducationInfo, setEditEducationInfo] = useState(false);

  // Function to fetch employee data from Firebase
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const employeeRef = doc(db, 'employees', auth.currentUser.uid);
        const docSnap = await getDoc(employeeRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setEmp(data);
          setEmployeeInfo({
            ...employeeInfo,
            employeeID: data.employeeID,
            // Set other fields accordingly
          });
          setJobInfo({
            ...jobInfo,
            workEmail: data.workEmail,
            location: data.location,
            // Set other fields accordingly
          });
          setContactInfo({
            ...contactInfo,
            primaryContact: data.primaryContact,
            secondaryContact: data.secondaryContact,
            email: data.email,
            temporaryAddress: data.temporaryAddress,
            permanentAddress: data.permanentAddress,
            // Set other fields as needed
          });
          setPersonalInfo({
            ...personalInfo,
            dob: data.dob,
            // Set other fields as needed
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to handle changes in form fields
  const handleChange = (e, category, index = null) => {
    const { name, value } = e.target;
    switch (category) {
      case 'employee':
        setEmployeeInfo({
          ...employeeInfo,
          [name]: value,
        });
        break;
      case 'job':
        setJobInfo({
          ...jobInfo,
          [name]: value,
        });
        break;
      case 'contact':
        setContactInfo({
          ...contactInfo,
          [name]: value,
        });
        break;
      case 'personal':
        setPersonalInfo({
          ...personalInfo,
          [name]: value,
        });
        break;
      case 'education':
        const updatedEducationInfo = [...educationInfo];
        updatedEducationInfo[index][name] = value;
        setEducationInfo(updatedEducationInfo);
        break;
      default:
        break;
    }
  };

  // Function to handle file upload for profile image
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload to Firebase Storage or update state accordingly
  };

  // Function to handle file upload for certificates
  const handleCertificateUpload = (e, index) => {
    const file = e.target.files[0];
    // Upload file to Firebase Storage or handle locally
    // Update educationInfo state with certificate URL or file object
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo[index].certificate = file;
    setEducationInfo(updatedEducationInfo);
  };

  return (
    <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      <div className="space-y-6">
        {/* Personal Information */}
        <div id="personal" className="bg-white p-4 rounded-lg hover:shadow-xl">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Personal Information</h2>
            <button
              className="flex items-center text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => setEditPersonalInfo(!editPersonalInfo)}
            >
              <FaEdit className="mr-1" />
              {editPersonalInfo ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editPersonalInfo ? (
            <form>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                    <div className="flex items-center mt-1">
                      <img src={emp?.Image} alt="Profile" className="h-16 w-16 rounded-full" />
                      <input type="file" className="ml-4" onChange={handleFileUpload} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1">{emp?.['Preferred First Name']}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                    <p className="mt-1">{emp?.empID}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Primary Contact No.</label>
                    <input
                      type="text"
                      name="primaryContact"
                      value={contactInfo.primaryContact}
                      onChange={(e) => handleChange(e, 'contact')}
                      readOnly={!editContactInfo}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Add more fields as needed */}
                </div>
                {/* Right Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1">{emp?.Email}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth (DOB)</label>
                    <input
                      type="text"
                      name="dob"
                      value={personalInfo.dob}
                      onChange={(e) => handleChange(e, 'personal')}
                      readOnly={!editPersonalInfo}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <p className="mt-1">{emp?.Location}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Secondary Contact No.</label>
                    <input
                      type="text"
                      name="secondaryContact"
                      value={contactInfo.secondaryContact}
                      onChange={(e) => handleChange(e, 'contact')}
                      readOnly={!editContactInfo}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {/* Add more fields as needed */}
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setEditPersonalInfo(false);
                    // Save changes to Firebase or local state
                  }}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setEditPersonalInfo(false);
                    // Save changes to Firebase or local state
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                    <img src={emp?.Image} alt="Profile" className="h-16 w-16 rounded-full" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1">{emp?.['Preferred First Name']}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                    <p className="mt-1">{emp?.empID}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Primary Contact No.</label>
                    <p className="mt-1">{contactInfo.primaryContact}</p>
                  </div>
                  {/* Add more fields as needed */}
                </div>
                {/* Right Column */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1">{emp?.Email}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth (DOB)</label>
                    <p className="mt-1">{personalInfo.dob}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <p className="mt-1">{emp?.Location}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Secondary Contact No.</label>
                    <p className="mt-1">{contactInfo.secondaryContact}</p>
                  </div>
                  {/* Add more fields as needed */}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Add more sections for Job Information, Contact Information, Education Information, etc. */}
      </div>
    </div>
  );
};

export default PersonalInformation;
