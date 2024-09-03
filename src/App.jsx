import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vendors from './components/Vendors';
import CreateVendor from './components/CreateVendor';
import ImportVendor from './components/ImportVendor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/create-vendor" element={<CreateVendor />} />
        <Route path="/import-vendor" element={<ImportVendor />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-6">Welcome to the Vendor Management System</h1>
      <div className="flex justify-center">
        <a href="/vendors">
          <button className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600">
            Manage Vendors
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
