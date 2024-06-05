/* eslint-disable */

import React from "react";
import Calendar from './../../components/calendar';
import { AiOutlineCloud } from "react-icons/ai";
import { Input, Space } from 'antd';
import { FaAngleRight } from "react-icons/fa";

import img1 from './imgs/appstore.png'
import img2 from './imgs/phone.png'
import img3 from './imgs/play.png'

const { Search } = Input;

const Mobile: React.FC = () =>(
    
    <div className='w-[100%] h-auto  pb-[50px] pt-[200px] flex justify-center dark:bg-[#002D40]'>
      <div className='w-[80%] h-auto flex justify-evenly'>
        <img src={img2} className="w-[336px] h-[679px]" alt="" />
        <div className="w-[600px] h-[600px] flex flex-col justify-end">
          <h1 className="text-[30px] font-medium dark:text-[#ffffff]">Telefoningiz platformasini tanlang</h1>
          <div className="flex gap-3 mt-8 mb-10">
            <img src={img1} alt="img" className="w-[362px] h-[95px]" />
            <img src={img3} alt="img" className="w-[362px] h-[95px]"/>
          </div>
          <h1 className="text-[30px] font-medium mb-5 dark:text-white">ATTO mobil ilovasini yuklab oling</h1>
          <div className="flex gap-3 items-center mb-3">
            <FaAngleRight className="w-[50px] h-[50px] text-[#4534ff] hover:text-[#f9e9e9]"/>
            <p className="text-[20px] dark:text-[#ffffff]">Xarajatlaringizni nazorat qiling</p>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <FaAngleRight className="w-[50px] h-[50px] text-[#4534ff] hover:text-[#f9e9e9]"/>
            <p className="text-[20px] dark:text-[#ffffff]">Kartani onlayn tarzda to'ldiring</p>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <FaAngleRight className="w-[50px] h-[50px] text-[#4534ff] hover:text-[#f9e9e9]"/>
            <p className="text-[20px] dark:text-[#ffffff]">Yo'qolgan taqdirda kartani bloklang</p>
          </div>
          <div className="flex gap-3 items-center mb-3">
            <FaAngleRight className="w-[50px] h-[50px] text-[#4534ff] hover:text-[#f9e9e9]"/>
            <p className="text-[20px] dark:text-[#fffefe]">Bepul virtual ATTO kartasini buyurtma qiling</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Mobile;
  