import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert(error.message);
        } else {
            navigate('/welcome');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                    <h2 className="text-3xl font-bold">Log In to SignUpSync</h2>
                    <p className="mt-2">Welcome back!</p>
                </div>
                <form onSubmit={handleLogin} className="p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Log In</button>
                </form>
                <div className="text-center p-4">
                    <span>Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
