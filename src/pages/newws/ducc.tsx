import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';


const Ducc = () => {
  return (
    <div className='w-[100%] h-auto mt-[200px] flex justify-center'>
    <div className='w-[80%] h-auto flex justify-evenly'>
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
    <div className='w-[840px] h-[1500px] flex flex-col gap-10'>
        <div id='hello' className='w-[800px] h-[650px] bg-cover '>
        
        </div>
        <p className='text-[gray]'>Ommaviy tadbirlar / Pressa / Yangiliklar</p>
        <h1 className='text-[black] text-[21px]'>“Toshkent metropoliteni” DUK da “Diniy ekstremizm va fundamentalizmga qarshi kurash” mavzusida davra suhbati tashkillashtirildi</h1>
        <p className='text-[gray]'>Aprel 19, 2024By Metro22</p>
        <p className='text-[gray]'>Davra suhbatida metropolitenning “Harakat” xizmati xodimlari hamda huquq targ’ibot idoralaridan taklif etilgan spikerlar ishtirok etib, metro xodimlariga mavzu yuzasidan tushintirish ishlari olib borildi. Tadbir davomida, diniy ekstremizmga qarshi kurashishdagi zarur talablarga  to’xtalib, yig’ilganlarga ogohlikni oshirishga alohida e’tibor qaratish lozimligi ta’kidlandi.

        </p>
        <p className='text-[gray]'>Bu kabi profilaktik tadbirlar kelgusida metropolitenning boshqa xizmat xodimlari ishtirokida ham o’tkazilishi rejalashtirilgan.

        </p>
        <div  className='w-[840px] h-auto flex justify-between mt-5'>
            <div className="mb-4 gap-2  w-[270px] hover:shadow-xl ">
                <div id='box3' className='w-[270px] h-[200px] bg-cover'>
                </div>
                <h1  className="text-[18px] text-[#070707] p-3 font-normal">
                “Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi
                </h1>
            </div>
            <div className="mb-4 gap-2  w-[270px] hover:shadow-xl ">
                <div id='box4' className='w-[270px] h-[200px] bg-cover'/>
                
                <h1  className="text-[18px] text-[#070707] p-3 font-normal">
                ЭНГ ЯХШИ ТАКЛИФЛАРНИ ТАНЛАШ БЎЙИЧАЭЪЛОН
                </h1>
            </div>
            <div className="mb-4 gap-2  w-[270px] hover:shadow-xl ">
                <div id='box2' className='w-[270px] h-[200px] bg-cover'>
                </div>
                <h1  className="text-[18px] text-[#070707] p-3 font-normal">
                «Toshkent metropoliteni» DUK tomonidan “Innovatsion g’oyalar-2024” ko’rik-tanlovi o‘tkazilmoqda!
                </h1>
            </div>
         </div>
    </div>
   
   
      
    </div>
  </div>
  )
}

export default Ducc
