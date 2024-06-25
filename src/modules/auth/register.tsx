import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const register = () => {
  return (
    <div className='py-[200px] dark:bg-[#002D40]'>
    <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen dark:bg-[#002D40]  ">
        <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-white bg-[#002D40] dark:bg-white dark:text-black rounded-xl overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-slate-500 dark:bg-gradient-to-r from-gray-900 to-gray-700  lg:px-8 px-4 py-4">
            <div>
            <h4 className="text-white text-lg font-semibold">Hisobingizni yarating</h4>
            <p className="text-[13px] text-white mt-2">Ro'yxatdan o'tish sahifamizga xush kelibsiz! Hisob qaydnomangizni yaratish bilan boshlang.</p>
            </div>
            <div>
            <h4 className="text-white text-lg font-semibold">Oddiy va xavfsiz ro'yxatdan o'tish</h4>
            <p className="text-[13px] text-white mt-2">
            Bizning ro'yxatdan o'tish jarayoni oddiy va xavfsiz bo'lishi uchun yaratilgan. Biz sizning maxfiyligingiz va maʼlumotlar xavfsizligingizni birinchi oʻringa qoʻyamiz.</p>
            </div>
        </div>
        <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
            <div className="mb-6">
            <h3 className="text-2xl font-bold">Hisob ochish</h3>
            </div>
            <div className="space-y-5">
            <div>
                <label className="text-sm mb-2 block">Ism</label>
                <div className="relative flex items-center">
                <input name="ism" type="text" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Ismni kiriting" />
                
                </div>
            </div>
            <div>
                <label className="text-sm mb-2 block">Familiya</label>
                <div className="relative flex items-center">
                <input name="Familiya" type="text" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="familiya kiriting" />
               
                </div>
            </div>
            <div>
                <label className="text-sm mb-2 block">Ochistva</label>
                <div className="relative flex items-center">
                <input name="Ochistva" type="text" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Ochistva kiriting" />
               
                </div>
            </div>
           
            <div>
                <label className="text-sm mb-2 block">Login</label>
                <div className="relative flex items-center">
                <input name="login" type="login" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="login" />
                
                </div>
            </div>
            <div>
                <label className="text-sm mb-2 block">Parol</label>
                <div className="relative flex items-center">
                <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Parol" />
               
                </div>
            </div>
            <div>
                <label className="text-sm mb-2 block">telefon</label>
                <div className="relative flex items-center">
                <input name="tel" type="tel" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="telefon raqam kiriting" />
                
                </div>
            </div>
            <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                Men <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Shartlarni qabul qilaman</a>
                </label>
            </div>
            </div>
            <div className="!mt-10">
            <button type="button" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                Create an account
            </button>
            </div>
            <p className="text-sm mt-6 text-center">Hisobingiz bormi? <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1"><Link to={'/Auth/Login'}>Bu yerga kiring</Link></a></p>
        </form>
        </div>
    </div>
    </div>
    
  )
}//

export default register
