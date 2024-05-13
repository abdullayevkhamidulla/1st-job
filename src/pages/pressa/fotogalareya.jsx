import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataDigitalBestSeller } from './data';
import imgGirl from '../../assets/imgs/svgg.png';

function fotogalareya() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className='w-[100%] h-auto mt-[300px] flex flex-col items-center '>
      <div className='w-[100%] h-auto]'>
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className=" w-full h-auto bg-gradient-to-b text-center from-[#2b5920] to-[#f0f400]   p-[50px]">
          <h1 className='w-[250px] text-white text-[18px] px-3 absolute top-[1px] left-[600px] py-2 bg-[#2a2a2a] '>Yunusabod yo'nalishi</h1>
            <div className="card-top flex items-center mt-5 relative">
              <img className='w-[1100px] h-[700px]'
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <div className='w-[520px] h-[350px] p-11 bg-white text-center  absolute right-[-30px]'>
              <h1 className='text-[#9e2323] w-[300px] ms-12 text-[18px] text-center'>{item.title}</h1>
              
              <h3 className='text-[40px] font-bold'>{item.price}</h3>
              <h3 className='text-[40px] font-bold'>{item.category}</h3>
                
             
              
            </div>
            </div>
           
          </div>
        ))}
      </Slider>
      
      </div>
      <div className='w-[90%] mt-[100px] h-auto gap-3 flex flex-wrap justify-center'>
        <img className='w-[360px] h-[360px] hover:scale-110' src='https://tashmetro.uz/wp-content/uploads/2022/08/Bod%D0%BEmz%D0%BEr-1024x677.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='	https://tashmetro.uz/wp-content/uploads/2022/08/Bodomzor-1024x759.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='https://tashmetro.uz/wp-content/uploads/2022/08/Bodomz%D0%BEr-1024x676.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='	https://tashmetro.uz/wp-content/uploads/2022/08/Minor-1024x661.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='https://tashmetro.uz/wp-content/uploads/2022/08/Shaxriston-1024x938.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='https://tashmetro.uz/wp-content/uploads/2022/08/Turkiston-1024x759.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='https://tashmetro.uz/wp-content/uploads/2022/08/Yunus-Rajabiy-1024x993.jpg'/>
        <img className='w-[360px] h-[360px] hover:scale-110' src='	https://tashmetro.uz/wp-content/uploads/2022/08/Yunus-Raj%D0%B0biy-1024x677.jpg'/>

      </div>
    </div>
  );
  
}

export default fotogalareya;
