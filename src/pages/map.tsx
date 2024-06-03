import React from "react";
import Calendar from '../components/calendar';
import { AiOutlineCloud } from "react-icons/ai";
import { Input, Space } from 'antd';

const { Search } = Input;


const Map: React.FC = () => {
  

  return (
    <div className=" box-border h-auto w-[100%] flex justify-center bg-[#002D40]  ">
      <div className="flex w-[80%]  p-10  justify-around  mt-[100px]">
        <div className="w-[300px] h-auto gap-14 bg-white flex flex-col ">
          <div className="w-[300px] h-[100px] text-center bg-gray-50">
              <h1 className="text-[30px] text-[#315fc3] font-medium">Toshkent</h1>
              <div className="flex items-center  justify-center gap-2 bg-gray-50 border-white">
                <img src="cloud.png" alt="" />
                <h1 className="text-[45px] text-[#315fc3] font-bold">24°C</h1>
              </div>
          </div>
          <Search placeholder="input search text" className="w-[300px]" />
          <Calendar/>
        </div>
          <img src="https://tashmetro.uz/wp-content/uploads/2023/10/toshkent-subway-mine-UZB2-with-QR-%D0%B1%D0%B5%D0%B7-%D1%80%D0%B5%D0%BA%D0%B8-%E2%80%94-RU-1.svg" alt="" />
      </div>

    </div>
  );
};

export default Map;

  


