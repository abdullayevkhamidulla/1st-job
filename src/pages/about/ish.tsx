import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { applyForVacancy } from '../../services/applyService';

const Ish: React.FC = () =>  {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const vacancyId = parseInt(e.currentTarget.id);

    try {
      const response = await applyForVacancy(vacancyId);

      if (response.code === 200) {
        message.success('Application successful');
      } else {
        message.error('Application failed');
      }
    } catch (error) {
      console.error('Error applying:', error);
      message.error('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className='w-[100%] h-auto pt-[100px] pb-10 flex flex-col  items-end dark:bg-[#002D40]'>
    <div id='box77' className='w-[100%] h-[700px] bg-black  bg-cover'>
      <h1 className='leading-[120px] dark:text-[black] font-bold absolute bottom-[10px] left-[100px] text-[#e5e5e5] text-[80px]'>BO'SH ISH <br />
        O'RINLARI</h1>  
    </div>
    <div className='w-[70%] h-auto'>
      <div className='mb-[50px]'>
        <div className='mt-[50px] mb-[50px]'>
          <h1 className='text-[25px] text-[#526cff] font-semibold'>ELEKTROPOYEZD MASHINISTI</h1>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Malakaviy talablar:</h1>
          <p className='mt-5 text-[gray]'>elektrovozni yoki teplovozni boshqarish huquqini beruvchi guvohnoma;</p>
          <p className='mt-2 text-[gray]'>lokomotivlar, vagonlar tuzilishi, ishlashi va ularni boshqarish bo‘yicha kasbiy ko‘nikma;</p>
          
        </div>
        <div  className=''>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Qo‘shimcha ma’lumotlar:</h1>
          <p className='mt-5 text-[gray]'>ishga qabul qilingach, metropoliten elektropoezdi mashinisti kasbiga qayta tayyorlash maxsus o‘quv kursiga yuboriladi;<br />
          o‘qish davrida stipendiya to‘lab beriladi;<br />
          ijarada yashovchi mashinistlarga 1,5 mln. so‘mgacha ijara puli to‘lab beriladi;<br />
          ovqatlanish uchun pullik kompensatsiya to‘lanadi;<br />
          mashinistlarga ish kunida tekin nonushta va tushlik beriladi;<br />
          doimiy ravishda tibbiy ko‘rikdan o‘tib borishi ta’minlanadi;<br />
          oylik maoshi shtat jadvaliga asosan belgilanadi;</p>
          
        <button
        id="1"
        className="bg-[#546bff] text-white py-[6px] px-6 rounded-md mt-2"
        onClick={handleClick}
      >
        Apply
      </button>
         
        </div>
      </div>
      <hr />
      <div className='mb-[50px]'>
        <div className='mt-[50px] mb-[50px]'>
          <h1 className='text-[25px] text-[#526cff] font-semibold'>OPERATOR</h1>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Malakaviy talablar:</h1>
          <p className='mt-5 text-[gray]'>moliya, buxgalteriya yoki iqtisod yo‘nalishi bo‘yicha o‘rta-maxsus ma’lumot;</p>
          <p className='mt-2 text-[gray]'>kassa ishini yuritish bo‘yicha kasbiy ko‘nikma;</p>
          <p className='mt-2 text-[gray]'>kao‘zbek va rus tillarida so‘zlasha olish;</p>
          
        </div>
        <div  className=''>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Qo‘shimcha ma’lumotlar:</h1>
          <p className='mt-5 text-[gray] leading-8'>ovqatlanish uchun oylik pullik kompensatsiya to‘lanadi;<br />
          doimiy ravishda tibbiy ko‘rikdan o‘tib borishi ta’minlanadi;<br />
          noqulay ish sharoitlari uchun qo‘shimcha mehnat ta’tili;<br />,<br />
          oylik maoshi shtat jadvaliga asosan belgilanadi;<br />
          </p>
          
          <button id='2' className='bg-[#546bff] text-white py-[6px] px-6 rounded-md mt-2'  onClick={handleClick}>Apply</button>
          
          
        </div>
      </div>
      <hr />
      <div className='mb-[50px]'>
        <div className='mt-[50px] mb-[50px]'>
          <h1 className='text-[25px] text-[#526cff] font-semibold'>ELEKTR TA’MINOTI BO’YICHA ELEKTROMEXANIK, ELEKTROMONTYOR</h1>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Malakaviy talablar:</h1>
          <p className='mt-5 text-[gray]'>elektr qurilmalariga xizmat ko‘rsatish yo‘nalishida o‘rta-maxsus ma’lumot;</p>
          <p className='mt-2 text-[gray]'>elektr texnikasi, elektr ta’minoti bo‘yicha kasbiy ko‘nikma;</p>
          
          
        </div>
        <div  className=''>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Qo‘shimcha ma’lumotlar:</h1>
          <p className='mt-5 text-[gray] leading-8'>ovqatlanish uchun oylik pullik kompensatsiya to‘lanadi;<br />
          doimiy ravishda tibbiy ko‘rikdan o‘tib borishi ta’minlanadi;<br />
          noqulay ish sharoitlari uchun qo‘shimcha mehnat ta’tili;<br />,<br />
          oylik maoshi shtat jadvaliga asosan belgilanadi;<br />
          </p>
          
          <button id='3' className='bg-[#546bff] text-white py-[6px] px-6 rounded-md mt-2'  onClick={handleClick}>Apply</button>
         
          
        </div>
      </div>
      <hr />
      <div className='mb-[50px]'>
        <div className='mt-[50px] mb-[50px]'>
          <h1 className='text-[25px] text-[#526cff] font-semibold'>SIGNALLASHTIRISH, BLOKLASH VA MARKAZLASHTIRISH <br /> ELEKTROMEXANIGI, ELEKTROMONTYORI</h1>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Malakaviy talablar:</h1>
          <p className='mt-5 text-[gray]'>elektr qurilmalarni boshqarishni avtomatlashtirish yo‘nalishida o‘rta-maxsus ma’lumot;</p>
          <p className='mt-2 text-[gray]'>elektrtexnika bo‘yicha kasbiy ko‘nikma;</p>
          
          
        </div>
        <div className=''>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Qo‘shimcha ma’lumotlar:</h1>
          <p className='mt-5 text-[gray] leading-8'>ovqatlanish uchun oylik pullik kompensatsiya to‘lanadi;<br />
          doimiy ravishda tibbiy ko‘rikdan o‘tib borishi ta’minlanadi;<br />
          noqulay ish sharoitlari uchun qo‘shimcha mehnat ta’tili;<br />,<br />
          oylik maoshi shtat jadvaliga asosan belgilanadi;<br />
          </p>
         
          <button id='4' className='bg-[#546bff] text-white py-[6px] px-6 rounded-md mt-2'  onClick={handleClick}>Apply</button>
          
          
        </div>
      </div>
      <hr />
      <div className='mb-[50px]'>
        <div className='mt-[50px] mb-[50px]'>
          <h1 className='text-[25px] text-[#526cff] font-semibold'>METRO BEKATIDA POYEZDLARNI KUTISH VA KUZATISH NAVBATCHISI</h1>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Malakaviy talablar:</h1>
          <p className='mt-5 text-[gray]'>bekat navbatchisi kasbi o‘rta-maxsus ma’lumot;</p>
          <p className='mt-2 text-[gray]'>bekat xo‘jaligi bo‘yicha kasbiy ko‘nikma;</p>
          <p className='mt-2 text-[gray]'>o‘zbek va rus tillarini bilish;</p>

          
          
        </div>
        <div className=''>
          <h1  className='text-[16px] text-[#595959] font-medium mt-7 dark:text-white'>Qo‘shimcha ma’lumotlar:</h1>
          <p className='mt-5 text-[gray] leading-8'>ovqatlanish uchun oylik pullik kompensatsiya to‘lanadi;<br />
          doimiy ravishda tibbiy ko‘rikdan o‘tib borishi ta’minlanadi;<br />
          noqulay ish sharoitlari uchun qo‘shimcha mehnat ta’tili;<br />,<br />
          oylik maoshi shtat jadvaliga asosan belgilanadi;<br />
          </p>
          
          <button id='5' className='bg-[#546bff] text-white py-[6px] px-6 rounded-md mt-2'  onClick={handleClick}>Apply</button>
          
          
        </div>
      </div>
      <hr />
        
    </div>
    <div className='w-[100%] h-auto mt-[100px] flex justify-center'>
    <div className="w-[1130px] px-16 py-7 leading-7  h-[260px] bg-[#ffffff]">
      <h1 className="text-[25px]">Nomzodlarni ishga olish suhbat asosida, malaka darajasi va tibbiy ko‘rik natijalariga ko‘ra amalga oshiriladi</h1>
      <p className="mt-6 leading-8 text-[#292929]"><strong className='text-black'>Manzil: </strong> Toshkent shahar, Shayxontohur tumani, I.Karimov ko‘chasi, 16a-uy. <br />
      <strong className='text-black'>Bog‘lanish uchun telefonlar: </strong> (+998-71) 239-89-27 <br />
      Haftaning <strong  className='text-black'>dushanba-juma</strong>  kunlari soat <strong  className='text-black'> 8-00 dan 17-00 gacha</strong> bog‘lanish mumkin..</p>
    </div>
    </div>
  </div>
  )
}

export default Ish;
