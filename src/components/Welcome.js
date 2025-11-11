import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
            } else {
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold">Welcome, {user.user_metadata.full_name || user.email}!</h2>
                <p className="mt-4">You have successfully logged in.</p>
                <button onClick={handleLogout} className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Welcome;
