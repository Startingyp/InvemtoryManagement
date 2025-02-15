import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './authentication/LoginForm';
import SignupForm from './authentication/SignupForm';
import Menu from './components/Menu';
import PickleInventory from './components/Inventory';
import CustomerDetails from './components/Customers';
import SettingsPage from './components/Settings';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/inventory" element={<PickleInventory />} />
      <Route path="/customers" element={<CustomerDetails />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />

    </Routes>
  );
};

export default AppRoutes;