/* eslint-disable */
import { NavLink, Link } from 'react-router-dom';


const Home= () =>{
    
    return (
      <div className="h-auto">
          <img src="Mask.png" alt="" />
          <div className="text-center flex gap-9 flex-col pt-10 mt-[100px]">
            <div className='flex text-center justify-center'>
              <div className="w-[1170px]  p-10 flex justify-center flex-col">
                  <p className="text-[20px]">So'ngi</p>
                  <h1 className="text-[26px] text-[#5a5aff] font-medium">YANGILIKLAR</h1>
                  <hr />
                </div>
            </div>
            <div className="flex justify-between w-[1200px] ms-auto   min-h-[400px] py-10 min-w-[374px]">
              <div id="hello" className="flex p-5 flex-col items-center justify-evenly w-[374px] h-[300px] transition duration-700 ease-in-out text-white group hover:-translate-y-5 rounded-3xl bg-cover">
                  <h1 className="text-[20px] group hidden group-hover:inline group-hover:transition duration-700">“Toshkent metropoliteni” DUK da “Diniy ekstremizm va fundamentalizmga qarshi kurash” mavzusida davra suhbati tashkillashtirildi</h1>
                  <Link to={'/Yangiliklar/Duc'}>
                  <button className="mb-[-130px] w-[200px] p-3 rounded-3xl h-auto bg-[#2a2aff] group hidden group-hover:inline group-hover:transition duration-700 hover:scale-110">O'qishni davom ettirish</button>
                  </Link>
              </div>
              <div id="hello1" className="flex p-5 flex-col items-center justify-evenly w-[374px] h-[300px] transition duration-700 ease-in-out text-white group hover:-translate-y-5 rounded-3xl bg-cover">
                  <h1 className="text-[20px] group hidden group-hover:inline group-hover:transition duration-700">“Toshkent metropoliteni” DUK uchun 2 100 000 AQSh dollari ekvivalentida grant mablag‘lari ajratildi</h1>
                  <Link to={'/Yangiliklar/Grant'}>
                  <button className="mb-[-130px] w-[200px] p-3 rounded-3xl h-auto bg-[#2a2aff] group hidden group-hover:inline group-hover:transition duration-700 hover:scale-110">O'qishni davom ettirish</button>
                  </Link>
              </div>
              <div id="hello2" className="flex p-5 flex-col items-center justify-evenly w-[374px] h-[300px] transition duration-700 ease-in-out text-white group hover:-translate-y-5 rounded-3xl bg-cover">
                  <h1 className="text-[20px] group hidden group-hover:inline group-hover:transition duration-700">Энг яхши таклифларни танлаш бўйичаЭЪЛОН</h1>
                  <Link to={'/Yangiliklar/Texnalogiya'}>
                    <button className="mb-[-130px] w-[200px] p-3 rounded-3xl h-auto bg-[#2a2aff] group hidden group-hover:inline group-hover:transition duration-700 hover:scale-110">O'qishni davom ettirish</button>

                  </Link>
              </div>
              
          </div>
            
          </div>

          <div className="flex flex-col gap-[20px] h-[900px] text-center items-center mt-[100px] perspective-800">
              <div className="w-[1170px] text-center p-10 flex justify-center flex-col">
                <p className="text-[20px]">Tez-tez beriladigan</p>
                <h1 className="text-[26px] text-[#5a5aff] font-medium">MALUMOTLAR</h1>
                <hr />
              </div>
            <div className="flex justify-center h-[257px] perspective-800">
            <div  className="w-[1170px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box" className="w-[1170px] h-[257px] object bg-cover flex items-center justify-center" >
                    <button className="text-[white] text-[25px] p-3 rounded-2xl">Metro-Sxemasi</button>
                    </div>    
                </div>
                <div  className="w-[1170px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <a href='https://tashmetro.uz/wp-content/uploads/2023/12/Metro-xaritasi-scaled.jpg' className="text-[white] bg-[blue] p-3 rounded-2xl"> Metro-Sxemasi</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between w-[1170px] [perspective:1000px]">
              <div  className="w-[560px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box1" className="w-[560px] h-[257px] object bg-cover flex items-center justify-center " >
                    <button className="text-[white] text-[25px] p-3 rounded-2xl">Qanday To'lanadi</button>
                    </div>    
                </div>
                <div  className="w-[560px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Link to={"/TOLOV-TURLARI"}>
                <button className="text-[white] bg-[blue] p-3 rounded-2xl">Qanday To'lanadi</button>
                </Link>
                 
                </div>
              </div>
              <div  className="w-[290px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box2" className="w-[290px] h-[257px] object bg-cover  flex items-center justify-center" >
                      <button className="text-[white] text-[25px] p-3 rounded-2xl">Metropoliten tarixi</button>
                    </div>    
                </div>
                <div  className="w-[290px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <button className="text-[white] bg-[blue] p-3 rounded-2xl"> Metropoliten tarixi</button>
                </div>
              </div>
              <div  className="w-[290px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box3" className="w-[290px] h-[257px] object bg-cover flex items-center justify-center" >
                    <button className="text-[white] text-[25px] p-3 rounded-2xl">3D Tour</button>
                    </div>    
                </div>
                <div  className="w-[290px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <a href='https://lemala-group.uz/vr/metro/' className="text-[white] bg-[blue] p-3 rounded-2xl">3D Tour</a>
                </div>
              </div>
              

            
            </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between w-[1170px] [perspective:1000px]">
              <div  className="w-[290px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box4" className="w-[290px] h-[257px] object bg-cover flex items-center justify-center" >
                    <button className="text-[white] text-[25px] p-3 rounded-2xl">Unitilgan-buyumlar</button>
                    </div>    
                </div>
                <div  className="w-[290px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Link to={"/home"}>
                  <button className="text-[white] bg-[blue] p-3 rounded-2xl"> Unitilgan-buyumlar</button>
                  </Link>
                </div>
              </div>
              <div  className="w-[290px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box5" className="w-[290px] h-[257px] object bg-cover flex items-center justify-center" >
                    
                      <button type='submit'  className="text-[white] text-[25px] p-3 rounded-2xl">Qoidalar</button>
                   
                    </div>    
                </div>
                <div  className="w-[290px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Link to={"/Foydalanish-qoydalari"}>
                  <button className="text-[white] bg-[blue] p-3 rounded-2xl">Qoidalar</button>
                </Link>
                </div>
              </div>
              <div  className="w-[560px]  h-[257px] transition-all duration-1000 bg-cover [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <div className="absolute ">
                    <div id="box6" className="w-[560px] h-[257px] object bg-cover flex items-center justify-center" >
                    <button className="text-[white] text-[25px] p-3 rounded-2xl">Rivojlanish va rejalar</button>
                    </div>    
                </div>
                <div  className="w-[560px] bg-[#262525] flex items-center justify-center absolute h-[257px] bg-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <button className="text-[white] bg-[blue] p-3 rounded-2xl">Rivojlanish va rejalar</button>
                </div>
              </div>

            
            </div>
            </div>
   
          </div>

          <div className="flex items-center flex-col gap-[20px] h-[700px] box-border  mt-[200px]">
            <div className="flex flex-col h-auto w-[1170px] gap-3 items-end">
              <div className="w-[930px] p-10">
                <p className="text-[20px]">Tez-tez beriladigan</p>
                <h1 className="text-[26px] text-[#5a5aff] font-medium">SAVOLLAR</h1>
                <hr />
              </div>
              <div className="w-[930px] px-16 py-7 leading-7  h-[260px] bg-[#efefef]">
                <h1 className="text-[25px]">ATTO kartasini qaerdan sotib olish mumkin va karta balansini qanday to‘ldirish mumkin?</h1>
                <p className="mt-6 leading-8 text-[gray]">"ATTO" transport kartasining balansini ATTO, MyUzcard , Payme, Upay, Apelsin va boshqa elektron to‘lov tizimlarining mobil ilovalari orqali to‘ldirish mumkin.
                O‘z-o‘ziga xizmat ko‘rsatish terminallarida-infokiosklar.
                "Toshyulovchitrans" DUK va "Toshkent metropoliteni" DUK kompaniyasining barcha savdo nuqtalarida.</p>
              </div>
              <div className="w-[930px] px-16 py-7 leading-7 h-[260px] bg-[#efefef]">
                <h1 className="text-[25px]">Karta ishi bo'yicha qayerga murojaat qilishim mumkin?</h1>
                <p className="mt-6 text-[gray]">+998 78 140 08 08 raqamiga qo'ng'roq qilish yoki elektron pochta orqali info@atto.uz</p>
              </div>
              
              
            </div>
            <hr className='mt-[50px]' />
          </div>
          
        
      </div>
    ); 
  };
  
  export default Home;
  



  

    
   
    

