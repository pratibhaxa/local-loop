import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!termsAccepted) {
            alert("You must accept the terms and privacy policy.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: fullName,
                }
            }
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
                    <h2 className="text-3xl font-bold">Join SignUpSync</h2>
                    <p className="mt-2">Create your account in seconds</p>
                </div>
                <form onSubmit={handleSignUp} className="p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mr-2"
                        />
                        <span>I agree to the <Link to="/terms" className="text-blue-600">Terms</Link> and <Link to="/privacy" className="text-blue-600">Privacy Policy</Link></span>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
                </form>
                <div className="text-center p-4">
                    <span>Already have an account? <Link to="/login" className="text-blue-600">Log in</Link></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
