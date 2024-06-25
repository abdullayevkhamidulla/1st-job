import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 pt-[100px]">
      <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
      <ul>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Dashboard</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Users</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
