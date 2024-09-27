// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

// Simple authentication check (for demonstration purposes)
// In a real-world app, use context or a state management library
const isAuthenticated = () => {
  // For example, check if a token exists in localStorage
  return localStorage.getItem('authToken') ? true : false;
};

// Protected Route component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Dashboard />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Add a catch-all route for undefined paths */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
