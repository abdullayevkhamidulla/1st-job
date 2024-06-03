import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';

const qoidalar = () => {
  return (
    <div className='w-[100%] h-auto mt-[200px] flex justify-center'>
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
    <div className='w-[800px] h-auto '>
          
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#ffffff] text-center font-medium'>1. UMUMIY QOIDALAR</h1>
            <p className='text-[#ffffff] leading-[30px] mt-4'>Ushbu qoidalar metrodan va metro ishchilaridan foydalanadigan barcha shaxslar uchun majburiydir.
            Yo’lovchilar va metro xodimlari o’zaro muloyim bo’lishlari, metroning texnik vositalari, inshootlari va qurilmalarini himoya qilishlari shart.</p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px]  text-[#fffdfd] text-center font-medium'>2. METRO XODIMLARIDAN QUYIDAGILAR TALAB QILINADI</h1>
            <p className='text-[#ffffff] leading-[30px] mt-4'>2.1. poezdlar harakati jadvali va yo’lovchilar xavfsizligini ta’minlash, ularga zarur qulayliklar yaratish va xizmat ko’rsatish madaniyatini ta’minlash, ogohlantirish;
            2.2. xizmat vazifalarini bajarishda belgilangan kiyimlarda bo’lish, mehnatni muhofaza qilish, yong’in xavfsizligi va sanoat sanitariyasi talablarini bajarish;
            2.3. texnik vositalardan samarali foydalanish, ularning aniq ishlashini ta’minlash, mehnat unumdorligini doimiy oshirib borish va transport xarajatlarini kamaytirish;
            2.4. favqulodda vaziyatlar (tabiiy yoki texnogen tabiat va boshqalar) sodir bo’lganda, odamlar hayoti va sog’lig’iga tahdid soladi yo’lovchilarni tashqariga evakuatsiya qilishni yoki qo’shni stansiyaga poyezdni tashkil qilish;
            2.5. elektr poyezdlari stansiyalari va vagonlarida  hushyorlik haqida yo’lovchilarga xabar berish.</p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#ffffff] text-center font-medium'>3. YO‘LOVCHILAR BILISHLARI SHART</h1>
            <p className='text-[#fffefe] leading-[30px] mt-4'>3.1. xavfsizlik xodimlari, politsiya va metro xodimlarining talablarini qat’iy bajarish, jamoat tartibiga, sanitariya talablariga va ushbu qoidalarga rioya qilish;
            3.2. sayohatingiz uchun, shuningdek, bagajni tashish uchun to‘lash yoki bepul sayohat qilish huquqini beruvchi hujjatni kengaytirilgan shaklda nazorat punktida taqdim etish;
            Izoh: to‘lov uzunligi, kengligi va balandligi bo‘yicha o‘lchovlar yig’indisi 120 dan 200 sm gacha bo‘lgan va 150 dan 220 sm gacha bo‘lgan uzunlikdagi yuklarni tashish uchun to‘lanadi;
            3.3. yo‘l davomida narsalar yoki narsalarning qulashi, tutun yoki olov paydo bo‘lishi, shuningdek yo‘lovchilarni tashish yoki poyezdlar harakati xavfsizligiga ta’sir qilishi mumkin bo‘lgan boshqa holatlar to‘g’risida darhol stansiya navbatchisiga, elektr poyezd haydovchisiga yoki boshqa metro xodimlariga xabar bering;
            3.4. agar hayot va sog’liqqa tahdid soladigan favqulodda vaziyatlar yuzaga kelsa, metro xodimlarining ko‘rsatmasiga binoan darhol stansiyadan tashqariga yoki qo‘shni stansiyaga poyezd bilan evakuatsiya qilinadi;
            3.5. eskalatordan foydalanganda, o‘ng tomonda, harakat yo‘nalishi bo‘yicha turing, tutqichni ushlab turing, poyezd qismlariga suyanmang, zinapoyalarga qo‘llaniladigan cheklovchi chiziqlarga qadam bosmang, chap tomondan o‘ting va eskalatordan tushayotganda to‘xtamang, yosh bolalar qo‘lini yoki qo‘llarini ushlab turing;
            3.6. stansiya platformasida bo‘lganingizda – poyezdning to‘liq to‘xtashiga qadar chegara chizig’idan o‘tmasdan, uning butun uzunligi bo‘ylab bir tekis joylashtiring. Poyezd to‘xtaganda, yo‘lovchilarning erkin chiqib ketishi uchun vagonlar eshigiga joy oching;
            3.7. poyezd vagonida bo‘lganda – tutqichlarni ushlab turish, nogironlarga, qariyalarga, bolali yo‘lovchilarga yo‘l berish. Poyezd eshiklariga suyanmaslik, yo‘lovchilarning kirishiga va chiqishiga to‘sqinlik qilmaslik. Belgilangan stansiyaga kirayotganda, poyezddan chiqish uchun oldindan tayyorgarlik ko‘rish;
            3.8. oxirgi stantsiyalarda vagonlarni bo‘shatish.</p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#fff] text-center font-medium'>4. YO‘LOVCHILAR QUYIDAGI HUQUQLARGA EGA</h1>
            <p className='text-[#fff] leading-[30px] mt-4'>4.1. 7 yoshgacha bo‘lgan bolalarni, shuningdek chang’i, bolalar velosipedlari, chanalar, qarmoqlar, musiqa asboblari, kichik bog’ asboblarini qopqoqli idishlarda bepul tashish;
            4.2. foto va video suratga olishga ruxsat beriladi;
            4.3. zarur hollarda, stansiyalarda joylashgan metropolitendagi tez tibbiy yordam punktlarining tibbiy yordamidan foydalanish.</p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#fff] text-center font-medium'>5. METRODA TAQIQLANGAN</h1>
            <p className='text-[#fff] leading-[30px] mt-4'>
            5.1. o‘lchamlari 3.2-bandda belgilangan sayohat yoki bagaj uchun to‘lovsiz stantsiyaga o‘tish, shuningdek yopiq nazorat punktlari va to‘siq to‘siqlaridan o‘tish;
            5.2. vagonlarda, vestibyullarda, yer osti o‘tish joylarida va stansiya platformalarida chekish;
            5.3. stansiyaga kiyim-kechak va poyabzalda, shuningdek, yo‘lovchilar (ve      losiped, moped, scooter va boshqalar) vagonlari, metro inshootlari va qurilmalari, shuningdek mast (spirtli ichimliklar, giyohvand moddalar) va muzqaymoq bilan ifloslangan yuk bilan kirish;
            5.4. Yonuvchan, portlovchi, zaharli moddalar va narsalarni, maishiy gaz ballonlarini, o‘qotar qurollarni va hayvonlarni, shuningdek o’lchamlari 3.2.-bandda ruxsat etilganidan farq qiladigan yuklarni, teshuvchi, kesuvchi va oson sindiradigan narsalarni, chang’i va konkilarni qopqoqsiz tashish;
            5.5. uskunalar va me’moriy va badiiy bezatish, lobbi va ofis xonalarining oynalari, harakatlanuvchi tarkib elementlari va metroning boshqa texnik vositalariga zarar yetkazish;
            5.6. kirish zali, o‘tish joylari va stansiya platformalari, vagon salonlari, eskalatorlar, yo‘llarni yopish va ifloslantirish;
            5.7. eskalatorning qadamlariga o‘tirib, narsalarni tutqichlarga qo‘yish, eskalator va platformada yugurish, bolalarni o‘tirg’izish va yuklarni vagonlarning o‘rindiqlariga qo‘yish;
            5.8. harakat paytida vagonlarning eshiklarini ochish, ularni stansiyalarda ochish yoki yopishni kechiktirish;
            5.9. Hojat bo‘lmaganda “yo‘lovchi-haydovchi” aloqasidan eskalator balyustradasidagi “STOP” yozuvli o‘chirgishdan (kalitdan) foydalanish;
            5.10. Poyezd yo‘liga tushish va poezdlarning harakatlanishiga xalaqit berishi mumkin bo‘lgan predmetlarni poyezd yo‘liga tashlash;
            5.11. metro hududida va unga tutash joylarda (stansiyalar, lobbilar, o‘tish joylari, parapetlar) savdo qilish, buyumlarni saqlash va to’plam.
            </p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#fff] text-center font-medium'>6. METRODA XAVFSIZLIK TALABLARI </h1>
            <p className='text-[#fff] leading-[30px] mt-4'>6.1. metro ishchilari va yo‘lovchilari hushyor va ehtiyotkor bo‘lishlari kerak;
            6.2. o‘tish joyida, vestibyulda, vokzal platformasida va elektropoyezd vagonida shubhali va egasiz buyumlar, o‘ramlar aniqlanganda, bu haqda metropolitenning navbatchi yoki xavfsizlik xizmati xodimlariga xabar berish zarur.
            6.3. Noma’lum aniqlangan ob’ektga har qanday mexanik ta’sir qilish (harakat qilish, ochish va h.k.), ob’ekt atrofidagi yorug’lik, harorat va tovush sharoitlarini o‘zgartirish va ob’ekt yaqinida radiotexnika va aloqa vositalaridan foydalanish qat’iyan man etiladi;
            6.4. tekshiruv uchun qo‘l yuki va yuklarni, shu jumladan qadoqlangan yoki muhrlangan qutilarni va boshqalarni, shuningdek, metro xavfsizligi xodimlari yoki politsiya xodimlarining shaxsiy tekshiruvga to‘sqinlik qilmaslik haqidagi birinchi talabiga binoan qarshiliksiz taqdim etish.</p>
          </div>
          <div className='mt-4'>
            <h1 className='text-[18px] text-[#fff] text-center font-medium'>7. METRODA YO‘LOVCHILAR TASHISHI TAQIQLANGAN SUYUQLIK VA MODDALAR RO‘YXATI:</h1>
            <p className='text-[#fff] leading-[30px] mt-4'>7.1. tez yonuvchan suyuqliklar – benzin, kerosin, atseton, alkogol, barcha brendlarning erituvchilari;
            7.2. yonuvchan suyuqliklar-yog’ va emal bo‘yoqlari, dizel yoqilg’isi, suyuq soqol yog’i va laklar;
            7.3. portlovchi, korroziv va zaharli moddalar, shuningdek siqilgan va suyultirilgan gazli silindrlar.

            Ushbu qoidalarni buzganlikda aybdor shaxslar qonunda belgilangan javobgarlikka tortiladilar.</p>
          </div>
          fff
    </div>
      
    </div>
  </div>
  )
}

export default qoidalar
