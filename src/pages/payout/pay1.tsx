/* eslint-disable */

import React from "react";
import Calendar from './../../components/calendar';
import { AiOutlineCloud } from "react-icons/ai";
import { Input, Space } from 'antd';
import img1 from './imgs/IJTIMOIY.png'
import img2 from './imgs/OQUVCHI.png'
import img3 from './imgs/TALABA.png'
import img4 from './imgs/YAGONA.png'
import img5 from './imgs/ticcet.png'
import img6 from './imgs/card.png'

const { Search } = Input;

const Pay = () =>{
    
  return <div className=" box-border h-auto w-[100%] flex justify-center mt-[150px] bg-[#ffffff]  ">
    <div className=" w-[90%] flex flex-col gap-[150px] h-auto">
        <div className="text-center  pb-10">
          <h1 className="text-[40px] font-bold m-0 p-0 text-[#648ce1]">ATTO</h1>
          <p className="text-[#353333] mb-6 p-0">transport kartasi</p>
          <hr />
          <br />
          <div className="w-full h-auto flex justify-between flex-wrap gap-[25px] gap-y-[50px]">
              <div className="w-[670px] h-[300px] text-left  flex justify-between hover:shadow-2xl border-[2px] rounded-xl p-5">
                <img src={img4} alt="img"  className="w-[205px] mt-3 h-[129px]" />
                <div className="w-[500px] flex flex-col gap-4 pt-2 ps-5">
                  <h1 className="text-[20px] font-bold">Yagona/Umumiy</h1>
                  <p> <strong className="text-gray-700">Yo‘lovchilar toifasi:</strong> har qanday</p>
                  <p> <strong className="text-gray-700">Sotib olish va to‘lash uchun hujjatlar:</strong> talab qilinmaydi</p>
                  <p> <strong className="text-gray-700">Narxi:</strong>15 000 so’m</p>
                  <p> <strong className="text-gray-700">10 000 so’m</strong> – karta narxi</p>
                  <p> <strong className="text-gray-700">5 000 so’m</strong>- hisobdagi qoldiq</p>
                </div>
              </div>
              <div className="w-[670px] h-[300px] text-left  flex justify-between hover:shadow-2xl border-[2px]  rounded-xl p-5 ">
                <img src={img2} alt="img" className="w-[205px] mt-3 h-[129px]" />
                <div className="w-[500px] flex flex-col gap-4 pt-2 ps-5">
                  <h1 className="text-[20px] font-bold">O‘quvchilar uchun</h1>
                  <p> <strong className="text-gray-700">Yo‘lovchilar toifasi: </strong> o‘rta maktab va litsey o‘quvchilari</p>
                  <p> <strong className="text-gray-700">Sotib olish va to‘lash uchun kerak bo‘ladigan hujjatlar:</strong>  ota-onalardan birining pasportining nusxasi, ta’lim muassasasidan (maktab, litsey) sertifikat, talabaning tug’ilganlik haqidagi guvohnomasi.</p>
                  <p> <strong className="text-gray-700">Narxi:</strong>0 so’m</p>
                  
                </div>
              </div>
              <div className="w-[670px] h-[320px] text-left  flex justify-between hover:shadow-2xl border-[2px] rounded-xl p-5">
                <img src={img3} alt="img" className="w-[205px] mt-3 h-[129px]" />
                <div className="w-[500px] flex flex-col gap-4 pt-2 ps-5">
                  <h1 className="text-[20px] font-bold">Talabalar uchun</h1>
                  <p> <strong className="text-gray-700">Yo‘lovchilar toifasi:</strong> universitet va kollej talabalari</p>
                  <p> <strong className="text-gray-700">Sotib olish va to‘lash uchun hujjatlar:</strong>  pasport va talaba ID nusxasi</p>
                  <p> <strong className="text-gray-700">Narxi:</strong>15 000 so’m</p>
                  <p>Sotib olayotganda 30 kunlik haq to‘lanadigan tariflardan biri majburiy tarzda yuklab olinadi: <strong className="text-gray-700"> avtobus-80 000 so‘m </strong>yoki <strong className="text-gray-700">avtobus va metro-110 500 so‘m</strong> </p>
                </div>
              </div>
              <div className="w-[670px] h-[320px] text-left  flex justify-between pt-2 ps-5 hover:shadow-2xl border-[2px] rounded-xl p-5">
                <img src={img1} alt="img" className="w-[205px] mt-3 h-[129px]" />
                <div className="w-[500px] flex flex-col gap-4 pt-2 ps-5">
                  <h1 className="text-[20px] font-bold">Ijtimoiy</h1>
                  <p> <strong className="text-gray-700">Yo‘lovchilar toifasi:</strong> nafaqaxo‘rlar va nogironlar</p>
                  <p> <strong className="text-gray-700">Sotib olish va to‘lash uchun hujjatlar:</strong> pasport va pensiya guvohnomasi yoki nogironlik guvohnomasining nusxasi</p>
                  <p> <strong className="text-gray-700">Narxi:</strong>15 000 so’m</p>
                  <p>Sotib olayotganda 30 kunlik haq to‘lanadigan tariflardan biri majburiy tarzda yuklab olinadi: <strong className="text-gray-700"> avtobus-80 000 so‘m </strong>yoki <strong className="text-gray-700">avtobus va metro-110 500 so‘m</strong> </p>

                </div>
              </div>
          </div>
        </div>
        <div className="text-center  flex flex-col justify-center">
          <div className="mb-[30px]">
             <p className="text-[#353333]  p-0">Bir martalik</p>
            <h1 className="text-[40px] font-bold m-0 p-0 text-[#648ce1]">QR-bilet</h1>
            <hr />
          </div>
          <div className="flex justify-center">
            <img src={img5} alt="img" />
            
          </div>
        </div>
        <div className="text-center ">
          <div className="mb-[70px] ">
            <h1 className="text-[30px] font-bold m-0 p-0 text-[#648ce1]">Humo bank kartasi, UZCARD yoki mobil</h1>
            <p className="text-[#353333]  p-0">to‘lov tizimlari</p>
            
          </div>
          <div className="flex justify-center">
            <img src={img6} className="w-[910px] h-[390px]" alt="img" />
          </div>
        </div>
    </div>

  </div>;
  };
  
  export default Pay;
  