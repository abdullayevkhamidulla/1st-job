import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Auth/login');
  };
  
  return (
    <div className="bg-gray-50 py-10 font-sans dark:bg-[#002D40]">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-[#002D40] p-8 text-white shadow dark:bg-white">
            <h2 className="text-center text-2xl font-bold dark:text-gray-800">Welcome, {username}</h2>
            <button
              onClick={handleLogout}
              className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm tracking-wide text-white hover:bg-blue-700 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
