import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopRegistration from './ShopRegistration';
import DashboardHome from './DashboardHome'; // Import your dashboard component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header Navigation */}
        <nav className="bg-gray-100 p-4 shadow">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Main Routes */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<ShopRegistration />} />
            <Route path="/dashboard" element={<DashboardHome />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
