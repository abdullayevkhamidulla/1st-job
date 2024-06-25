/* eslint-disable */


import React, { useState } from 'react';

import { Button, Spin } from 'antd';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


import svg1 from '../assets/imgs/svgg.png';
import ThemeToggle from 'components/ThemeToggle';

  

const Navbar:React.FC = () => {
  const [spinning, setSpinning] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className='w-[100%] h-[auto]  bg-[#ffffff]  box-border flex flex-col items-center '>
    <div className='w-[100%] h-[40px] flex pt-1 pb-1 text-[14px] justify-around bg-[#ffffff] dark:bg-[#002D40] dark:text-[white] text-[#000000] border-[1px] border-black'>
        <div className='flex gap-4 items-center '>
          <div className='flex gap-3 items-center'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM6.168 14.1336C5.37873 12.4595 4.9215 10.6482 4.8216 8.8H1.6496C1.80527 10.0311 2.31514 11.1905 3.11725 12.1374C3.91937 13.0842 4.97921 13.7777 6.168 14.1336ZM6.424 8.8C6.5448 10.7512 7.1024 12.584 8 14.2016C8.92186 12.5412 9.46035 10.6956 9.576 8.8H6.424ZM14.3504 8.8H11.1784C11.0785 10.6482 10.6213 12.4595 9.832 14.1336C11.0208 13.7777 12.0806 13.0842 12.8827 12.1374C13.6849 11.1905 14.1947 10.0311 14.3504 8.8ZM1.6496 7.2H4.8216C4.9215 5.35183 5.37873 3.54055 6.168 1.8664C4.97921 2.2223 3.91937 2.9158 3.11725 3.86264C2.31514 4.80947 1.80527 5.96888 1.6496 7.2ZM6.4248 7.2H9.5752C9.4598 5.30448 8.92158 3.45883 8 1.7984C7.07814 3.45876 6.53965 5.30442 6.424 7.2H6.4248ZM9.832 1.8664C10.6213 3.54055 11.0785 5.35183 11.1784 7.2H14.3504C14.1947 5.96888 13.6849 4.80947 12.8827 3.86264C12.0806 2.9158 11.0208 2.2223 9.832 1.8664Z" fill="#6161ff"/>
          </svg>
  
          <p>ENG</p>
          </div>
          
        
          <div className='flex items-center gap-3'>            
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM9.75 9H12.75V10.5H8.25V5.25H9.75V9Z" fill="#6161ff" />
          </svg>
          <p>Пон-Пят, 8:00 - 17:00</p>
         
          </div>
        </div>
        <div className='flex items-center  gap-3'>
            <p>Yordam</p>
            <Link to={'/Auth/Login'}>
            <p>Kirish</p>
            </Link>
            
            <ThemeToggle/>
        </div>
        
       
    </div>
    <div className='flex px-2  bg-[#16a39c] dark:bg-[#002D40] absolute top-16 text-[16px] border-[white] border-[1px] text-[white] rounded-[28px] w-full lg:w-[70%] h-[50px] items-center justify-between'>
      <Link to={'/home'}>
        <img onClick={showLoader} src={svg1} alt='logo' className='w-[30px] h-[30px] ms-5' />
        <Spin spinning={spinning} fullscreen />
      </Link>
      <div className='lg:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`ms-9 z-10 ${isOpen ? 'block' : 'hidden'} lg:flex `}>
        <ul className={`nav-list flex flex-col lg:flex-row ${isOpen ? 'bg-blue-500' : ''} text-[#fff] font-inter items-center gap-4 z-0`}>
          <Link to={'/Metro-Xaritasi'}>
            <button>Metro Xaritasi</button>
          </Link>
          <div className="group inline-block text-[15px] relative z-0">
            <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-600">To'lovlar</button>
            <div className="hidden group-hover:block absolute bg-[#2a9b9f] shadow-md  rounded-lg ">
              <Link to={'/TOLOV-TURLARI'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">To'lov-turlari</button>
              </Link>
              <Link to={'/ATTO-KARTALARI'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Atto-kartalari</button>
              </Link>
              <Link to={'/ATTO-MOBILE'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Atto-mobile</button>
              </Link>
            </div>
          </div>
          <div className="group inline-block text-[15px] relative z-2">
            <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-600">Yo'lovchilar</button>
            <div className="hidden group-hover:block absolute bg-[#2a9b9f] shadow-md rounded-lg  z-2">
              <Link to={'/Murojatlar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full ">Murojatlar</button>
              </Link>
              <Link to={'/Foydalanish-qoydalari'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600">Foydalanish qoydalari</button>
              </Link>
              <Link to={'/savollar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full"> Savollar</button>
              </Link>
              <Link to={'/Davlat-ramzlari'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600">Davlat ramzlari</button>
              </Link>
            </div>
          </div>
          <div className="group inline-block text-[15px] relative">
            <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-600">Pressa</button>
            <div className="hidden group-hover:block absolute bg-[#2a9b9f] shadow-md rounded-lg ">
              <Link to={'/Yangiliklar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Yangiliklar</button>
              </Link>
              <Link to={'/Elonlar-va-Tadbirlar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Elonlar</button>
              </Link>
              <Link to={'/Ommaviy-Tadbirlar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Tadbirlar</button>
              </Link>
              <Link to={'/Fotogalareya'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Fotogalareya</button>
              </Link>
            </div>
          </div>
          <Link to={'/Pays'}>
                <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-600">Pays</button>
            </Link>
          <div className="group inline-block text-[15px] relative">
            <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-600">Metro Haqida</button>
            <div className="hidden group-hover:block absolute bg-[#2a9b9f] shadow-md py-2 rounded-lg mt-2">
              <Link to={'/Metro-tarixi'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Metropoliten Tarixi</button>
              </Link>
              <Link to={'/Tarkibiy-bolinmalar'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600">Tarkibiy Bo'linmalar</button>
              </Link>
              <Link to={"Ish-o'rinlari"}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600 w-full">Bo'sh ish o'rni</button>
              </Link>
              <Link to={'/Oylik-hisobot'}>
                <button className="block px-4 text-[16px] py-2 bg-[#2a9b9f] hover:bg-blue-600">Oylik-hisobotlar</button>
              </Link>
            </div>
          </div>
          <Link to={'/pickup'}>
            <button className='text-[15px]'>Bog'lanish</button>
          </Link>
          <input className='w-[223px] text-[black] ps-4 border-none flex justify-center items-center rounded-[18px] bg-[#fff] h-[38px]' type="text" placeholder='Search' />
        </ul>
      </div>
    </div>
  </div>
  )

}

export default Navbar;
