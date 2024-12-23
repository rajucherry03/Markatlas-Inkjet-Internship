import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Email: '',
    Gender: '',
    DOB: '',
    Nationality: '',
    PermanentAddress: '',
    TemporaryAddress: '',
    Country: '',
    Citizenship: '',
    JobTitle: '',
    Department: '',
    Division: '',
    Company: '',
    Position: '',
    PositionEntryDate: '',
    ContractualBaseHours: '',
    StandardWeeklyHours: '',
    TimeInPosition: '',
    EmployeeStatus: '',
    IsFullTimeEmployee: false,
    PreferredFirstName: '',
    RelationshipStatus: '',
    RoleOfJob: '',
    Salutation: '',
    empID: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'employees');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (user) => {
    setEditUser(user.id);
    setFormData(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setEditUser(null);
    setModalIsOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      if(confirmDelete)
      {
      await deleteDoc(doc(db, 'employees', id));
      setUsers(users.filter(user => user.id !== id));
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, 'employees', editUser);
      await updateDoc(userDoc, formData);
      setUsers(users.map(user => (user.id === editUser ? { id: user.id, ...formData } : user)));
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Employee"
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-8 w-full max-w-md max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">Edit Employee</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FirstName">
                First Name:
              </label>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="MiddleName">
                Middle Name:
              </label>
              <input
                type="text"
                name="Middle Name"
                id="Middle Name"
                value={formData['Middle Name']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="LastName">
                Last Name:
              </label>
              <input
                type="text"
                name="LastName"
                id="LastName"
                value={formData['Last Name']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                Email:
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={formData.Email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Gender">
                Gender:
              </label>
              <input
                type="text"
                name="Gender"
                id="Gender"
                value={formData.Gender}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="DOB">
                Date of Birth (DOB):
              </label>
              <input
                type="text"
                name="Date of Birth (DOB)"
                id="DOB"
                value={formData['Date of Birth (DOB)']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nationality">
                Nationality:
              </label>
              <input
                type="text"
                name="Nationality"
                id="Nationality"
                value={formData.Nationality}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PermanentAddress">
                Permanent Address:
              </label>
              <input
                type="text"
                name="Permanent Address"
                id="PermanentAddress"
                value={formData['Permanent Address']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TemporaryAddress">
                Temporary Address:
              </label>
              <input
                type="text"
                name="Temporary Address"
                id="TemporaryAddress"
                value={formData['Temporary Address']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Country">
                Country:
              </label>
              <input
                type="text"
                name="Country"
                id="Country"
                value={formData.Country}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Citizenship">
                Citizenship:
              </label>
              <input
                type="text"
                name="Citizenship"
                id="Citizenship"
                value={formData.Citizenship}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="JobTitle">
                Job Title:
              </label>
              <input
                type="text"
                name="Job Title"
                id="JobTitle"
                value={formData['Job Title']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Department">
                Department:
              </label>
              <input
                type="text"
                name="Department"
                id="Department"
                value={formData.Department}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Division">
                Division:
              </label>
              <input
                type="text"
                name="Division"
                id="Division"
                value={formData.Division}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Company">
                Company:
              </label>
              <input
                type="text"
                name="Company"
                id="Company"
                value={formData.Company}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Position">
                Position:
              </label>
              <input
                type="text"
                name="Position"
                id="Position"
                value={formData.Position}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PositionEntryDate">
                Position Entry Date:
              </label>
              <input
                type="text"
                name="Position Entry Date"
                id="PositionEntryDate"
                value={formData['Position Entry Date']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ContractualBaseHours">
                Contractual Base Hours:
              </label>
              <input
                type="text"
                name="Contractual Base Hours"
                id="ContractualBaseHours"
                value={formData['Contractual Base Hours']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="StandardWeeklyHours">
                Standard Weekly Hours:
              </label>
              <input
                type="text"
                name="Standard Weekly Hours"
                id="StandardWeeklyHours"
                value={formData['Standard Weekly Hours']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TimeInPosition">
                Time in Position:
              </label>
              <input
                type="text"
                name="Time in Position"
                id="TimeInPosition"
                value={formData['Time in Position']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EmployeeStatus">
                Employee Status:
              </label>
              <input
                type="text"
                name="Employee Status"
                id="EmployeeStatus"
                value={formData['Employee Status']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="IsFullTimeEmployee">
                Is Full Time Employee:
              </label>
              <input
                type="checkbox"
                name="Is Full Time Employee"
                id="IsFullTimeEmployee"
                checked={formData['Is Full Time Employee']}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PreferredFirstName">
                Preferred First Name:
              </label>
              <input
                type="text"
                name="Preferred First Name"
                id="PreferredFirstName"
                value={formData['Preferred First Name']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="RelationshipStatus">
                Relationship Status:
              </label>
              <input
                type="text"
                name="Relationship Status"
                id="RelationshipStatus"
                value={formData['Relationship Status']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="RoleOfJob">
                Role of Job:
              </label>
              <input
                type="text"
                name="Role of Job"
                id="RoleOfJob"
                value={formData['Role of Job']}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Salutation">
                Salutation:
              </label>
              <input
                type="text"
                name="Salutation"
                id="Salutation"
                value={formData.Salutation}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empID">
                Employee ID:
              </label>
              <input
                type="text"
                name="empID"
                id="empID"
                value={formData.empID}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Employees Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.NO</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((row, index) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.empID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row['Preferred First Name']}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.Email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => openModal(row)}
                      className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                    >
                      Edit
                    </button>
                    {' '}
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
