import React from 'react';

const OrganizationalInfo = () => {
  const orgInfo = {
    organizationName: 'MarkAtlasInkjet',
    typeOfOrganization: 'IT Dept.',
    establishedIn: '2021',
    website: 'https://markatlasinkjettechnologies.com/',
    location: 'Hyderabad',
    contactNo: '+91 xxxxxxxxxx',
  };

  return (
    <div id="organization" className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      <h2 className="text-lg font-bold mb-4">Organization Information</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Organization Name</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              {orgInfo.organizationName}
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Type of Organization</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              {orgInfo.typeOfOrganization}
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Established In</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              {orgInfo.establishedIn}
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              <a href={orgInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {orgInfo.website}
              </a>
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              {orgInfo.location}
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Organization Contact No.</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
              {orgInfo.contactNo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalInfo;