import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';
import { Collapse, Divider } from 'antd';



const Savol=()=> {
  return (
    <div className='w-[100%] h-auto pb-10 pt-[220px] flex justify-center dark:bg-[#002D40]'>
    <div className='w-[80%] h-auto flex justify-evenly'>
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
    <div className='w-[800px] h-auto mt-[60px] flex flex-col gap-4'>
    
    <Collapse
      size="large"
      className='dark:bg-white'
      items={[{ key: '1', label: 'Metropaliten hodimlari yoki fuqorolar Metropoliten Rahbari huzuriga qay tartibda kirishlari mumkin ?', children: <p className='leading-8 text-gray-500 text-[15px]'>Toshkent metropoliteni rahbari boshlig’ining yoki rahbariyat qabuliga kirish uchun quyidagi telefon raqamiga qo‘ng’riroq qilib aniq ma’lumotlarni olishingiz mumkin: +998 71 245 56 03</p> }]}
    />
    <Collapse
      size="large"
      className='dark:bg-white'
      items={[{ key: '1', label: 'Metropolitenda bo‘sh ish o‘rinlari va ishga kirish tartibi qanday?', children: <p className='leading-8 text-gray-500 text-[15px]'>Toshkent metropoliteniga ishga kirish uchun to‘liq ma’lumotni xodimlar bo‘limidan olishingiz mumkin. Quyidagi raqamlarga murojaat qilsangiz bo‘ladi:

      //     +998712398927 <br/>
          
      //     +998712457969<br/>
          
      //     +998712274403<br/>
          
      //     Ma’lumot o‘rnida xodimlar bo‘limiga siz dushanbadan jumaga qadar ertalabki soat 08:00 dan kechki soat 17:00 qadar telefon qilishingiz mumkin. Tushlik vaqti 12:00dan 13:00 ga qadar davom etadi.</p> }]}
    />
    <Collapse
      size="large"
      className='dark:bg-white'
      items={[{ key: '1', label: 'Fuqorolar o‘zlairining  metropoliten to‘g‘risida murojoat va takliflarini qay usulda metropoliten rahbariyatiga yetkazishi mumkun?', children: <p className='leading-8 text-gray-500 text-[15px]' >Telegram ijtimoiy tarmog’ida taklif va murojaatlaringizni yo‘llashingiz uchun maxsus bot mavjud bo‘lib, quyidagi havola orqali ushbu botga ulanishingiz mumkin bo’ladi:

      //     @TaklifhamdamurojaatlaruchunBot</p> }]}
    />
    </div>
      
    </div>
  </div>
  )
}

export default Savol
