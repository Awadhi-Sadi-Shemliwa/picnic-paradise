import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingPage from './components/BookingPage';
// import AdminPanel from './components/AdminPanel';
// import FilteredInfoSection from './components/FilteredInfoSection';
import Navbar from './components/Navbar'; // Add a navigation bar for easy movement

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bookings" element={<BookingPage />} />
          {/* <Route path="/admin" element={<AdminPanel />} />
          <Route path="/filtered-info" element={<FilteredInfoSection />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
