import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaChevronDown, FaCheckCircle } from 'react-icons/fa';

function CreateVendor() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  const handleCancel = () => {
    navigate(-1); // This navigates to the previous page
  };

  const handleSave = () => {
    setShowDialog(true); // Show the dialog box
    setTimeout(() => setShowDialog(false), 1000); // Hide the dialog box after 3 seconds
  };

  const handleSaveAndNew = () => {
    setShowDialog(true); // Show the dialog box
    setTimeout(() => {
      setShowDialog(false);
      window.location.reload(); // Reload the page after hiding the dialog
    }, 1000); // Hide the dialog box after 3 seconds
  };

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between shadow-md p-4 items-center mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Create Vendor</h1>
          <a href="#" className="text-blue-500 font-medium underline text-sm">
            Edit Page Layout
          </a>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleCancel}
            className="bg-gray-100 text-black border border-gray-300 shadow-md py-2 px-4 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <div className="relative">
            <button
              onClick={handleSaveAndNew}
              className="bg-gray-100 border border-gray-300 text-black shadow-md py-2 px-4 rounded-md hover:bg-gray-200"
            >
              Save and New
            </button>
            {showDialog && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white border border-gray-300 shadow-md rounded-md p-4 flex items-center">
                  <FaCheckCircle className="text-green-500 h-6 w-6 mr-3" />
                  <span>Saved successfully!</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
            >
              Save
            </button>
            {showDialog && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white border border-gray-300 shadow-md rounded-md p-4 flex items-center">
                  <FaCheckCircle className="text-green-500 h-6 w-6 mr-3" />
                  <span>Saved successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Vendor Image Section */}
        <h2 className="text-lg font-medium">Vendor Image</h2>
        <div className="flex flex-col space-y-4">
          <div className="w-24 h-24 border rounded-full flex items-center justify-center bg-gray-100">
            {/* Placeholder for Vendor Image */}
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-8">
          <div className="mb-16">
            <h2 className="text-lg font-medium mb-8">Vendor Information</h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-24">
              <div>
                <div className="grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Vendor Owner
                    </label>
                  </div>
                  <div className="relative">
                    <select className="mt-1 rounded w-full border border-gray-300 shadow-sm pl-3 pr-10 appearance-none">
                      <option>Sabu John Bosco</option>
                      <option>Sabu John Bosco</option>
                      <option>Sabu John Bosco</option>
                      {/* Add more options as needed */}
                    </select>
                    <div className="absolute inset-y-0 right-8 flex items-center pr-3 pointer-events-none">
                      <FaUser className="text-gray-600" />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaChevronDown className="text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Phone
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Website
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Category
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-opt-out" className="ml-2 block text-sm font-medium text-right text-gray-600">
                      Email Opt Out
                    </label>
                  </div>
                  <div>
                    <input
                      id="email-opt-out"
                      type="checkbox"
                      className="h-4 w-4 mt-1 rounded border border-gray-300 shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mr-8">
                <div className="grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Vendor Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-right text-gray-600">
                      GL Account
                    </label>
                  </div>
                  <div>
                    <select className="mt-1 rounded w-full border border-gray-300 shadow-sm">
                      <option>Sales-Software</option>
                      <option>Sales-Hardware</option>
                      <option>Rental Income</option>
                      <option>Interest Income</option>
                      <option>Sales Software Support</option>
                      <option>Sales Other</option>
                      <option>Interest Sales</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div>
            <div className="mb-16">
              <h2 className="text-lg font-medium mb-8">Address Information</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-24">
                <div>
                  <div className="grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
                    <div>
                      <label className="block text-sm font-medium text-right text-gray-600">
                        Street
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-right text-gray-600">
                        State
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-right text-gray-600">
                        Country
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="mr-8">
                  <div className="grid grid-cols-[20%,80%] gap-x-8 gap-y-4">
                    <div>
                      <label className="block text-sm font-medium text-right text-gray-600">
                        City
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-right text-gray-600">
                        Zip Code
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="mt-1 rounded w-full border border-gray-300 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Information Section */}
          <div>
            <h2 className="text-lg font-medium mb-4">Description Information</h2>
            <div className="grid grid-cols-[10%,60%] gap-x-6 gap-y-4">
              <div>
                <label className="block text-sm font-medium text-right text-gray-600">
                  Description
                </label>
              </div>
              <div>
                <textarea
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateVendor;
