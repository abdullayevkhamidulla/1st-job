import React from "react";
import Calendar from '../components/calendar';
import { AiOutlineCloud } from "react-icons/ai";
import { Input, Space } from 'antd';
import maps from '../assets/imgs/metromap.jpg';

const { Search } = Input;


const Map: React.FC = () => {
  

  return (
    <div className=" box-border h-auto w-[100%] flex justify-center dark:bg-[#002D40]  ">
      <div className="flex w-[80%]  p-10  justify-around  mt-[100px]">
        <div className="w-[300px] h-auto gap-14  flex flex-col ">
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
          <img src={maps} alt="" />
      </div>

    </div>
  );
};

export default Map;

  


