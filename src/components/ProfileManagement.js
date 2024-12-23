import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db,storage } from '../firebase';
import { Form, Button } from 'react-bootstrap';
import { ref, uploadBytes, getDownloadURL, } from 'firebase/storage'; // Import the necessary storage functions


const ProfileManagement = ({ uid, onProfileSaved }) => {
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState('');
  const [preferredFirstName, setPreferredFirstName] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [nationality, setNationality] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [photoFile, setPhotoFile] = useState(null); // Updated state for the file
  const [position, setPosition] = useState('');
  const [positionEntryDate, setPositionEntryDate] = useState('');
  const [timeInPosition, setTimeInPosition] = useState('');
  const [company, setCompany] = useState('');
  const [division, setDivision] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [jobActive, setJobActive] = useState(false);
  const [jobCountry, setJobCountry] = useState('');
  const [roleOfJob, setRoleOfJob] = useState('');
  const [weeklyHours, setWeeklyHours] = useState('');
  const [contractualBaseHours, setContractualBaseHours] = useState('');

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    try {
      let photoURL = ''; // Initialize photoURL
      if (photoFile) {
        // Upload photo if a file is selected
        const storageRef = ref(storage, `profile_images/${uid}`);
        const photoSnapshot = await uploadBytes(storageRef, photoFile);
        photoURL = await getDownloadURL(photoSnapshot.ref);
      }

      await setDoc(doc(db, 'employees', uid), {
        personalInformation: {
          salutation,
          firstName,
          lastName,
          middleName,
          dob,
          preferredFirstName,
          relationshipStatus,
          nationality,
          citizenship,
          gender,
          address,
          contactInfo,
          photoURL,
        },
        employmentInformation: {
          positionInformation: {
            position,
            positionEntryDate,
            timeInPosition,
          },
          organizationInformation: {
            company,
            division,
            department,
            location,
          },
          jobInformation: {
            jobActive,
            jobCountry,
            roleOfJob,
            weeklyHours,
            contractualBaseHours,
          },
        },
      });
      alert('Profile saved successfully!');
      onProfileSaved();
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Profile Management</h2>
      <Form onSubmit={handleSaveProfile}>
        <h3>Personal Information</h3>
        <Form.Group className="mb-3">
          <Form.Label>Salutation</Form.Label>
          <Form.Control type="text" value={salutation} onChange={(e) => setSalutation(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" accept="image/jpeg" onChange={(e) => setPhotoFile(e.target.files[0])} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preferred First Name</Form.Label>
          <Form.Control type="text" value={preferredFirstName} onChange={(e) => setPreferredFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Relationship Status</Form.Label>
          <Form.Control type="text" value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Citizenship</Form.Label>
          <Form.Control type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </Form.Group>
        <h3>Employment Information</h3>
        <h4>Position Information</h4>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position Entry Date</Form.Label>
          <Form.Control type="date" value={positionEntryDate} onChange={(e) => setPositionEntryDate(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time in Position</Form.Label>
          <Form.Control type="text" value={timeInPosition} onChange={(e) => setTimeInPosition(e.target.value)} />
        </Form.Group>

        <h4>Organization Information</h4>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Division</Form.Label>
          <Form.Control type="text" value={division} onChange={(e) => setDivision(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <h4>Job Information</h4>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Active" checked={jobActive} onChange={(e) => setJobActive(e.target.checked)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" value={jobCountry} onChange={(e) => setJobCountry(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Role of Job</Form.Label>
          <Form.Control type="text" value={roleOfJob} onChange={(e) => setRoleOfJob(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Weekly Hours</Form.Label>
          <Form.Control type="text" value={weeklyHours} onChange={(e) => setWeeklyHours(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contractual Base Hours</Form.Label>
          <Form.Control type="text" value={contractualBaseHours} onChange={(e) => setContractualBaseHours(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">Save Profile</Button>
      </Form>
    </div>
  );
};

export default ProfileManagement;