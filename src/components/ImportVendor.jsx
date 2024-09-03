import React from 'react';

function ImportVendor() {
  return (
    <div className="p-8">
      <h1 className="text-left text-2xl font-bold mb-4">Select User</h1>
      
      {/* Search Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search Users"
          className="border rounded p-2 w-64"
        />
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/32" // Replace with actual user image source
            alt="User"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="font-medium">Sabu John Bosco</span>
        </div>
      </div>
      
      {/* User Table */}
      <table className="min-w-full bg-white border rounded-md">
        <thead>
          <tr className="text-left">
            <th className="p-3 border-b">User Name</th>
            <th className="p-3 border-b">Role</th>
            <th className="p-3 border-b">Email</th>
            <th className="p-3 border-b">Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="flex items-center p-3 border-b">
              <input
                type="radio"
                name="user"
                className="mr-2"
                defaultChecked
              />
              <img
                src="https://via.placeholder.com/32" // Replace with actual user image source
                alt="User"
                className="w-8 h-8 rounded-full mr-2"
              />
              Sabu John Bosco
            </td>
            <td className="p-3 border-b">CEO</td>
            <td className="p-3 border-b">sabujohn@wotsabot.ai</td>
            <td className="p-3 border-b">Administrator</td>
          </tr>
        </tbody>
      </table>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Done
        </button>
      </div>
    </div>
  );
}

export default ImportVendor;
