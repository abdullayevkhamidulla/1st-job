import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center pt-[100px]">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      
    </div>
  )
};

export default Header;
