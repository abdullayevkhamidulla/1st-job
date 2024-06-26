import React from 'react';
import Layout from '../../components/Layout';
import Sidebar from 'components/Sidebar';
import { Outlet,useNavigate,Link } from 'react-router-dom';


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Auth/login');
  };


  return (
    <div className="w-[100%] h-screen ">
    
    <div className="w-[100%] h-screen flex">
      <div className="col-auto">
        <Sidebar />
      </div>
      <div className='w-[100%] '>
        
        <button onClick={handleLogout} className='absolute right-2 top-3 w-[100px] rounded-lg bg-blue-600 px-2 py-2 text-sm tracking-wide text-white hover:bg-blue-700 focus:outline-none'>
              Logout
        </button>
        <Link to={'/home'}>
        <button  className='absolute right-[150px] top-3 w-[100px] rounded-lg bg-blue-600 px-2 py-2 text-sm tracking-wide text-white hover:bg-blue-700 focus:outline-none'>
              Home
        </button>
        </Link>
      

       
        <div className='p-4'>
        <Outlet />
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
