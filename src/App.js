import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
