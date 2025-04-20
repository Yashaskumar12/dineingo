import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import RestaurantDetails from './pages/RestaurantDetails';
import ReservationPreview from './pages/ReservationPreview';
import { UserData, CityLocation } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    uid: '',
    email: '',
    displayName: '',
    name: '',
    photoURL: '',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India'
    },
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    phone: '',
    address: ''
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    // Clear user data
    setUserData({
      uid: '',
      email: '',
      displayName: '',
      name: '',
      photoURL: '',
      location: {
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
      },
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      phone: '',
      address: ''
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route 
          path="/dashboard" 
          element={
            <DashboardPage 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              userData={userData}
              setUserData={setUserData}
              handleLogout={handleLogout}
            />
          } 
        />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/restaurant/:id/preview" element={<ReservationPreview />} />
      </Routes>
    </Router>
  );
};

export default App; 
