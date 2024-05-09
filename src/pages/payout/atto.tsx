import React from 'react';
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';

const Atto: React.FC = () => (

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
    <div className='w-[800px] h-auto '>
          <h1 className='text-[#648ce1] text-[30px] font-medium'>Kontaktsiz texnologiyali (NFC)</h1>
          <p>transport kartasi</p>
          <hr />
          <div className='mt-10'>
            <h1 className='text-[22px] font-medium'>ATTO transport kartasi nima?</h1>
            <p className='text-[#4a4a4a] mt-4'>“ATTO” transport kartasi Toshkent shahridagi jamoat transportida yo‘l haqini tez va qulay tarzda to‘lash imkonini beradi. Ayni paytda ular “Toshshahartrans” aksiyadorlik jamiyatining barcha avtobuslarida hamda “Toshkent metropoliteni”ning yer osti va yer usti bekatlar vestibyullarining barcha turniketlarida qabul qilinmoqda.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>ATTO transport kartalari nima?</h1>
            <p className='text-[#4a4a4a] mt-4'>Hozirgi vaqtda ATTO transport kartalarining to‘rt turi joriy qilingan. Aholiga, ya’ni barcha turdagi yo‘lovchilarga mo‘ljallangan umumiy transport kartasi (ko‘k) va jamoat transportida imtiyozli sayohat qilish huquqiga ega bo‘lgan yo‘lovchilar uchun uchta turdagi transport kartalari – talabalar (yashil), talabalar (sariq), ijtimoiy nafaqaxo‘rlar va nogironlar uchun (qizil).</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>ATTO transport kartasini qayerdan sotib olsam bo‘ladi?</h1>
            <p className='text-[#4a4a4a] mt-4'>“ATTO” transport kartalari “Toshshahartransxizmat” AJning barcha chiptalarni sotish nuqtalarida, shuningdek, “Toshkent metropoliteni” DUKning barcha kassalarida sotiladi.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>“ATTO” transport kartasi balansini qanday to‘ldirish mumkin?</h1>
            <p className='text-[#4a4a4a] mt-4'>“ATTO” transport kartasi balansini ATTO, MyUzcard, Payme, Upay, Apelsin toʻlov xizmatlari va boshqa elektron toʻlov tizimlarining mobil ilovalari orqali toʻldirish mumkin.
            O‘z-o‘ziga xizmat ko‘rsatadigan bank terminallarida – infokiosklarda. To‘ldirish bo‘limida ATTO tizimiga ulangan bank o‘ziga xizmat ko‘rsatish terminallari-infokiosklarining joylashuvi to‘g’risidagi ma’lumotlar ko‘rsatilgan.
            “Toshshahartransxizmat” AJning barcha yo‘l chiptalarini sotish shoxobchalarida hamda “Toshkent metropoliteni” DUK yer osti va yer usti stansiyalarining barcha kassalarida.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>ATTO transport kartasi orqali yo‘l haqini qanday to‘lash kerak?</h1>
            <p className='text-[#4a4a4a] mt-4'>Avtobus yo‘l haqini to‘lash uchun siz ATTO transport kartasini tutqichga o‘rnatilgan statsionar validatorga yoki konduktordagi mobil validatorga biriktirishingiz kerak. ATTO operatori yo‘l haqini to‘lash uchun transport kartasini konduktorga bermaslikni tavsiya qiladi, chunki ular bir yo‘lovchining transport kartasini boshqa yo‘lovchining kartasi bilan chalkashtirib yuborishi mumkin.
            Metroda sayohat haqini to‘lash uchun siz turniketda o’rnatilgan validatorga transport kartasini biriktirishingiz va validatordagi yashil belgi yonishini kutishingiz kerak. Agar yashil belgi bo‘lsa, yo‘l haqi muvaffaqiyatli to‘langan. Agar qizil xoch yonsa, to‘lov amalga oshmadi. Sariq chiroq yoqilgan bo‘lsa, bu oxirgi to‘lovdan keyin 6 daqiqadan kamroq vaqt o‘tganligini anglatadi.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>Transport kartasidagi qoldiqni qanday aniqlash mumkin?</h1>
            <p className='text-[#4a4a4a] mt-4'>“ATTO” transport kartasi balansini ATTO, MyUzcard, Payme, Upay, Apelsin toʻlov xizmatlari va boshqa elektron toʻlov tizimlarining mobil ilovalari yordamida tekshirish mumkin.
            O‘z-o‘ziga xizmat ko‘rsatadigan bank terminallarida – infokiosklarda. To‘ldirish bo‘limida ATTO tizimiga ulangan bank o‘ziga xizmat ko‘rsatish terminallari-infokiosklarining joylashuvi to‘g‘risidagi ma‘lumotlar ko‘rsatilgan.
            “Toshshahartransxizmat” AJning barcha yo‘l chiptalarini sotish shaxobchalarida hamda “Toshkent metropoliteni” DUK yer osti va yer usti stansiyalarining barcha kassalarida.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>Transport kartasidagi balans 1700 so‘mdan kam bo’lsa nima bo‘ladi?</h1>
            <p className='text-[#4a4a4a] mt-4'>Agar ATTO transport kartasi qoldig‘i 1700 so‘mdan kam bo‘lsa, to‘lovsiz sayohat xavfini oldini olish maqsadida transport kartasi avtomatik ravishda vaqtincha bloklangan kartalar ro‘yxatiga qo‘shiladi.
            Agar ATTO transport kartasi vaqtincha bloklangan kartalar ro‘yxatiga kiritilgan bo‘lsa, uning balansini to‘ldirish kerak. Vaqtinchalik bloklangan ATTO transport kartasi balansini avtomatik rejimda 10 daqiqa ichida to‘ldirgandan so‘ng, u blokdan chiqariladi va foydalanishga yaroqli bo‘ladi.
            ATTO xizmatidan qulay foydalanish, shuningdek, ATTO transport kartasini bloklab qo‘ymaslik uchun balansda 1700 so‘mdan ortiq summani saqlash tavsiya etiladi.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[22px] font-medium'>ATTO transport kartasini uchinchi shaxslarga berish mumkinmi?</h1>
            <p className='text-[#4a4a4a] mt-4'>Toshkent shahrida yoʻlovchilar oqimining toʻgʻri statistikasini shakllantirish va jamoat transportini optimallashtirish maqsadida ATTO transport katrasidan foydalanish faqat bitta yoʻlovchiga hisoblab chiqilgan.
            Shu munosabat bilan, ATTO Operatorining transport kartalaridan foydalanishning tasdiqlangan qoidalariga ko‘ra, ATTO transport kartasini uchinchi shaxslarga o‘tkazish yoki uchinchi shaxslar tomonidan qayta foydalanish mumkin emasligi nazarda tutilgan.
            Kontaktsiz yo‘l haqini to‘lash uchun ATTO transport kartasidan pul mablag‘larini qayta-qayta yechib qo‘ymaslik uchun 6 daqiqalik limit belgilandi.
            </p>
          </div>
          
    </div>
      
    </div>
  </div>
);

export default Atto;