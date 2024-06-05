import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';


const Tech = () => {
  return (
    <div className='w-[100%] h-auto pt-[200px] flex justify-center dark:bg-[#002D40]'>
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
    <div className='w-[840px] h-[1500px] flex flex-col gap-10'>
        <div id='hello2' className='w-[800px] h-[650px] bg-cover '>
        
        </div>
        <p className='text-[gray] dark:text-white'>Ommaviy tadbirlar / Pressa / Yangiliklar</p>
        <h1 className='text-[black] dark:text-white text-[21px]'>Энг яхши таклифларни танлаш бўйича
ЭЪЛОН</h1>
        <p className='text-[gray] dark:text-white'>Aprel 19, 2024By Metro22</p>
        <p className='text-[gray] dark:text-white'>
        “Ўзбекистон Республикаси Президентининг 2022 йил 08 июлдаги “Тошкент шаҳар жамоат транспорти самарадорлигини оширишга доир қўшимча чора-тадбирлар тўғрисида”ги ПҚ-313-сонли қарори, Ўзбекистон Республикаси Президентининг 2022 йил 10 июндаги “Иқтисодиёт тармоқлари, аҳоли ва ижтимоий соҳа объектларида қайта тикланувчи энергия манбаларини кенг жорий этиш чора-тадбирлари тўғрисида”ги 48-сонли видеоселектор йиғилиши баёни ва Ўзбекистон Республикаси Президент Администрациясининг 2023 йил 5 январдаги 05-2-6-сон топшириғида юклатилган топшириқлар ижросини таъминлаш мақсадида “Ер усти метро эстакадаси устига ўрнатиладиган темир йўл изларини ёғингарчилик ва бошқа таъсирлардан ҳимоя қилиш ҳамда қуёш панелларини ўрнатишга мўлжалланган металл конструкцияли соябон қуриш (Сергели линиясининг 5-стансияси ҳудудидаги 54 м участкасининг экспрементал лойиҳаси) ни амалга ошириш режалаштирилган. 
        </p>
        <p className='text-[gray] dark:text-white'>
        Юқорида кўрсатилган объектда лойиҳа-смета ҳужжатларига ва Шахарсозлик меъёрий талабларига асосан қурилиш-монтаж ишларини бажариш учун метро объектларининг қурилишида иштирок этган, қурилиш соҳасидаги иш тажрибаси 15 йилдан кам бўлмаган, қурилиш-монтаж ишларини амалга ошириш учун етарлича ишчи-ходимларига ҳамда машина-механизмларига эга бўлган ташкилотлар томонидан қисқа муддатларда амалга ошириш белгиланган.


        </p>
        <div  className='w-[840px] h-auto flex justify-between mt-5'>
            <div className="mb-4 gap-2  w-[270px] shadow-2xl ">
                <div id='box3' className='w-[270px] h-[200px] bg-cover'>
                </div>
                <h1  className="text-[18px] text-[#070707] p-3 dark:text-white font-normal">
                “Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi
                </h1>
            </div>
            <div className="mb-4 gap-2  w-[270px] shadow-2xl ">
                <div id='box4' className='w-[270px] h-[200px] bg-cover'/>
                
                <h1  className="text-[18px] text-[#070707] dark:text-white p-3 font-normal">
                ЭНГ ЯХШИ ТАКЛИФЛАРНИ ТАНЛАШ БЎЙИЧАЭЪЛОН
                </h1>
            </div>
            <div className="mb-4 gap-2  w-[270px] shadow-2xl ">
                <div id='box2' className='w-[270px] h-[200px] bg-cover'>
                </div>
                <h1  className="text-[18px] text-[#070707]  dark:text-white p-3 font-normal">
                «Toshkent metropoliteni» DUK tomonidan “Innovatsion g’oyalar-2024” ko’rik-tanlovi o‘tkazilmoqda!
                </h1>
            </div>
         </div>
    </div>
   
   
      
    </div>
  </div>
  )
}

export default Tech
