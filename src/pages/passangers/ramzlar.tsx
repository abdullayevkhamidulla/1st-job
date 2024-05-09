import React from 'react';
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';
import flag from './uzb.gif';
import flag1 from './flag.png';
import gerb from './gerb.png';
import madhi from './madhi.png'

const Ramzlar = () => {
  return (
    <div className='w-[100%] h-auto mt-[200px] flex justify-center'>
    <div className='w-[70%] h-auto flex flex-col pb-[100px]'>
      <div className='flex flex-col gap-10 mb-10'>
        <div>
          <p className='text-[gray] mb-1'>O'ZBEKISTON RESPUBLIKASI DAVLAT</p>
          <div className='w-[100px] h-[3px] bg-gray-600'></div>
          <h1 className='text-[35px] text-[#315fc3] font-bold'>GERBI</h1>
        </div>
        <div className='flex justify-center'>
        
        <img src={gerb} className='w-[300px] h-[300px]' alt="" />
        </div>
        <div className='flex flex-col gap-5 text-[14px] mt-8'>
          <p>
            “O‘zbekiston Respublikasi Davlat gerbi to‘g‘risida”gi Qonun 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Kengashining
            X sessiyasida qabul qilingan.
          </p>
          <p>
          O‘zbekiston Respublikasining Davlat gerbi gullagan vodiy uzra charaqlab turgan quyosh tasviridan hamda so‘l tomonida bug‘doy boshoqlari, o‘ng tomonida ochilgan paxta chanoqlari
           suvrati tushirilgan chambardan iborat.
          </p>
          <p>
            Gerbning yuqori qismida Respublika jipsligining ramzi sifatida sakkiz qirrali yulduz tasvirlangan: sakkiz qirra ichida joylashgan yarim oy va yulduz musulmonlarning qutlug‘ ramzidir.
            Gerbning markazida himmat, oliyjanoblik va fidoyilik timsoli bo‘lgan afsonaviy Humo qushi qanotlarini yozib turibdi. Ushbu ramz va timsollar xalqimizning tinchlik, yaxshilik, baxt-saodat, farovonlik yo‘lidagi orzu-umidlarini ifodalaydi.
          </p>
          <p>
            Gerbning pastki qismida Respublika Davlat bayrog‘ini ifoda etuvchi chambar lentasining bandiga «O‘zbekiston» deb yozib qo‘yilgan.
          </p>
        </div>
        
      </div>
      <hr  className='border-[1px] border-[#685f5f]'/>
      <div className='flex flex-col gap-10 mt-10  mb-10'>
        <div>
          <p className='text-[gray] mb-1'>O'ZBEKISTON RESPUBLIKASI DAVLAT</p>
          <div className='w-[100px] h-[3px] bg-gray-600'></div>
          <h1 className='text-[35px] text-[#315fc3] font-bold'>BАYROG’I</h1>
        </div>
        <div className='flex justify-center'>
        <img  src={flag1} alt="" />
        </div>
        <div className='flex flex-col gap-5 text-[14px]'>
          <p>
            “O‘zbekiston Respublikasi Davlat bayrog‘i to‘g‘risida”gi qonun 1991-yil 18-noyabrda O‘zbekiston Respublikasi Oliy Kengashining navbatdan tashqari o‘tkazilgan VII sessiyasida qabul qilingan.
          </p>
          <p>
            Davlat bayrog‘i va uning ramzi bugungi O‘zbekiston sarhadida qadimda mavjud bo‘lgan davlatlar bilan tarixan bog‘liqligini anglatadi hamda respublikaning milliy-madaniy an’analarini o‘zida mujassamlashtiradi.
          </p>
          <p>
            Bayroqdagi moviy rang tiriklik mazmuni aks etgan mangu osmon va obihayot ramzi. Timsollar tilida bu — yaxshilikni, donishmandlikni, halollikni, shon-shuhrat va sadoqatni bildiradi. Binobarin, Amir Temur davlati bayrog‘ining rangi ham moviy rangda edi.
          </p>
          <p>
          Bayroqdagi oq rang — muqaddas tinchlik ramzi bo‘lib, u kun charog‘onligi va koinot yoritqichlari bilan uyg‘unlashib ketadi. Oq rang — poklik, beg‘uborlik, soflikni, orzu va hayollar tozaligi, ichki go‘zallikka intilishning timsoli.
          </p>
          <p>
          Yashil rang — tabiatning yangilanish ramzi. U ko‘pgina xalqlarda navqironlik, umid va shodumonlik timsoli hisoblanadi.
          </p>
          <p>
          Qizil chiziqlar — vujudimizda jo‘shib oqayotgan hayotiy qudrat irmoqlarini anglatadi.
          </p>
          <p>
          Navqiron yarim oy tasviri bizning tarixiy an’analarimiz bilan bog‘liq. Ayni paytda u qo‘lga kiritilgan mustaqilligimiz ramzi ham.
          </p>
          <p>
          O‘zbekiston Respublikasi Davlat bayrog‘idagi 12 yulduz tasviri tarixiy an’analarimiz, qadimgi yilnomamizga bevosita aloqador. Bizning o‘n ikki yulduzga bo‘lgan e’tiborimiz O‘zbekiston sarhadidagi qadimgi davlatlar ilmiy tafakkurida nujum ilmi taraqqiy etganligi bilan ham izohlanadi.
          </p>
          <p>
          Davlat bayrog‘imizdagi 12 yulduz tasvirini o‘zbek xalqi madaniyatining qadimiyligi, uning komillikka, o‘z tuprog‘ida saodatga intilishi ramzi sifatida tushunish lozim.
          </p>
        </div>
        
      </div>
      <hr  className='border-[1px] border-[#685f5f]'/>
      <div className='flex flex-col gap-10 mt-10'>
       
        <div>
          <p className='text-[gray] mb-1'>O'ZBEKISTON RESPUBLIKASI DAVLAT</p>
          <div className='w-[100px] h-[3px] bg-gray-600'></div>
          <h1 className='text-[35px] text-[#315fc3] font-bold'>GERBI</h1>
        </div>
        <div className='flex flex-col gap-5 text-[14px] mt-8'>
          <p>
          O`zbekiston Respublikasi Davlat madhiyasining matni va musiqasi O`zbekiston Respublikasining 1992 yil 10 dekabrdagi 768-XII-sonli «O`zbekiston Respublikasining Davlat madhiyasi to`g`risida»gi Qonuni bilan tasdiqlangan.
          </p>
          <p>
          O`zbekiston Respublikаsining Dаvlаt mаdhiyasi O`zbekiston Respublikаsi Dаvlаt suverenitetining rаmzidir.
          </p>
          <p>
          O`zbekiston Respublikаsining Dаvlаt mаdhiyasigа zo`r ehtirom bilаn qаrаsh O`zbekiston Respublikаsi hаr bir fuqаrosining vаtаnpаrvаrlik burchidir.
          </p>
          <p className='text-[gray] text-[15px]'>
          Mutal Burhonov musiqasi <br />
          Abdulla Oripov so’zi
          </p>
        </div>
        <div className='flex justify-center'>
        <img  src={madhi} alt="" />
        </div>
        <div className='flex  gap-5  justify-center text-[15px] mt-8'>
          <div className=' w-[270px] text-center flex flex-col gap-4 text-[gray]'>
          <p>
            Serquyosh hur o’lkam, elga baxt, najot,
            Sen o’zing do’stlarga yo’ldosh, mehribon!
            Yashnagay to abad ilmu fan, ijod,
            Shuhrating porlasin toki bor jahon!
          </p>
          <p>Naqorat:</p>
          <p>
            ltin bu vodiylar – jon O’zbekiston,
            Ajdodlar mardona ruhi senga yor!
            Ulug’ xalq qudrati jo’sh urgan zamon,
            Olamni mahliyo aylagan diyor!
          </p>
          <p>
            Bag’ri keng o’zbekning o’chmas iymoni,
            Erkin, yosh avlodlar senga zo’r qanot!
            Istiqlol mash’ali tinchlik posboni,
            Xaqsevar, ona yurt, mangu bo’l obod!
          </p>
          <p>Naqorat:</p>
          <p>
            Oltin bu vodiylar – jon O’zbekiston,
            Ajdodlar mardona ruhi senga yor!
            Ulug’ xalq qudrati jo’sh urgan zamon,
            Olamni mahliyo aylagan diyor!
          </p>
          </div>
          
        </div>
        
      </div>
      <hr  className='border-[1px] border-[#685f5f]  mt-10'/>

          
    </div>
  </div>
  )
}

export default Ramzlar
