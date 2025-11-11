import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

const Login = () => <div>Login Page</div>;

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
