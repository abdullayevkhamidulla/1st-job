import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/imgs/arraw.png'

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? 'w-[230px]' : 'w-[30px] '} p-2 h-screen relative flex-row items-center gap-x-4 bg-gray-800 pt-8 duration-300`}>
       <img
        alt="Toggle sidebar"
        src={img}
        className={`border-dark-purple absolute -right-3 top-16 w-7 cursor-pointer rounded-full border-2 ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
        onKeyPress={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setOpen(!open);
          }
        }}
        role="button"
        tabIndex={0}
      />
    <div className={`${open ? 'block' : 'hidden'} flex flex-col gap-4 bg-gray-800 text-white rounded-lg shadow-lg`}>
      <h2 className="text-2xl font-bold  p-2 border-b-2  border-gray-600">Dashboard</h2>
      <ul className="space-y-2">
        <Link to={'Admin/sorovlar'}>
          <li className="py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">So'rovlar</li>
        </Link>
        <Link to={'Admin/userlar'}>
          <li className="py-2 mt-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">Userlar</li>
        </Link>
      </ul>
    </div>

      
    </div>
  );
};

export default Sidebar;
