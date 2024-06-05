import React, { useState } from 'react';
import { FaAt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Button, Form, Input, message } from 'antd';

{/* <FaAt/>
<FaFacebookF/>
<FaGithub/>
<FaInstagramSquare/>
<FaTelegram/> */}
const Pickup: React.FC = () => {
    return(
        <div id='contact'  className='h-auto  pt-[100px]  w-[100%] flex-col flex items-center bg-fixed	bg-cover bg-no-repeat bg-center dark:bg-[#002D40]'>
            <div className='w-[80%] h-auto text-center mt-[100px] mb-[100px]'>
                <h1 className='text-[50px] text-[white] font-medium mb-[50px]'>Get in Touch</h1>
                <hr />
                <div className=' h-auto mt-[100px] mb-[100px] flex justify-between'>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                    <a href="tel:+998 99 348 51 79"><FaPhoneAlt className='w-[40px] h-[40px] hover:text-[#6161ff]'/> </a>
                        
                        <div>
                            <h1 className='text-[25px]'>Telefon</h1>
                            <p className='text-[16px] mt-2'>Murojaatlar uchun <a href="tel:+998 99 348 51 79">+998 (71)-245-56-03</a> </p>
                        </div>
                   </div>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                        <a href="mailto:abdullayevhamidullo76@gmail.com"><FaAt className='w-[40px] h-[40px] hover:text-[#6161ff]'/> </a>
                        <div>
                            <h1 className='text-[25px]'>Elektron pochta manzili</h1>
                            <p className='text-[16px] mt-2'> <a href="tel:+998 99 348 51 79">abdullayevhamidullo76@gmail.com</a> </p>
                        </div>
                   </div>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                        <a href='https://github.com/abdullayevkhamidulla'><FaGithub className='w-[40px] h-[40px] hover:text-[#6161ff]'/> </a>
                        <div>
                            <h1 className='text-[25px]'>Github</h1>
                            <p className='text-[16px] mt-2'>Murojaatlar uchun <a href="tel:+998 99 348 51 79">+998 (71)-245-56-03</a> </p>
                        </div>
                   </div>
                </div>
                <hr />
                <div className=' h-auto mt-[100px] flex justify-around'>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                        <a href='https://www.facebook.com/hamidullo.abdullayev.334/?locale=ru_RU'><FaFacebookF className='w-[50px] h-[50px] hover:text-[#6161ff]'/> </a>
                        <div>                       
                            <p className='text-[25px] mt-2'> <a href="tel:+998 99 348 51 79">Facebook</a> </p>
                        </div>
                   </div>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                        <FaInstagramSquare className='w-[50px] h-[50px] hover:text-[#6161ff]'/> 
                        <div>
                            
                            <p className='text-[25px] mt-2'> <a href="tel:+998 99 348 51 79">Instagram</a> </p>
                        </div>
                   </div>
                   <div className='w-[350px] h-auto text-[white] flex items-center gap-5 text-start'>
                        <a href='https://t.me/https://t.me/Coderr_77'><FaTelegram className='w-[50px] h-[50px] hover:text-[#6161ff]'/> </a>
                        <div>
                            
                            <p className='text-[25px] mt-2'><a href="tel:+998 99 348 51 79">Telegram</a> </p>
                        </div>
                   </div>
                </div>
            </div>
            <div className='w-[100%] h-[800px] mt-[100px] bg-white flex justify-center '>
                <div className='w-[50%] h-auto mt-[100px] ms-[100px]'>
                    <h1 className=' text-[25px] text-[blue]'>Biz bilan bog'laning</h1>
                    <Form  className="Create mt-[28px]  flex flex-col items-start ">
                    <div className=" flex w-[600px] flex-col gap-6">
                        <Form.Item className="m-0" name="first_name" rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent  py-3 text-xl" placeholder="Name" />
                        </Form.Item>

                        <Form.Item className="m-0" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                        <Input required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent py-3 text-xl" placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                        className="m-0"
                        name="your massage"
                        rules={[{ whitespace: true, min: 6, required: true, message: 'Please input your password' }]}
                        >
                        <Input required className=" rounded-none border-x-0 border-t-0 border-gray-500 bg-transparent  py-3 text-xl" placeholder="Your-massage" />
                        </Form.Item>
                        <label className="pointer-events-none absolute left-5 top-3 flex text-base text-gray-500"></label>
                        <div className="block w-full">
                        <span className="absolute bottom-0 left-0 block h-0.5 bg-blue-500 transition-all duration-200 ease-in"></span>
                        </div>
                    </div>
                    <br />

                    <Button className="ml-[140px] text-[black] h-[50px] w-[300px] bg-red-500 text-[18px] text-white " htmlType="submit">
                        Send
                    </Button>
                    
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Pickup;  
