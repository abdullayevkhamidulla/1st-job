import { message } from 'antd';
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { registerUser } from 'services/authService';
type RegisterType = {
  firstName: string;
  secondName: string;
  lastName: string;
  login: string;
  password: string;
  telNumber: string;
};

const register: React.FC = () => {
  const [form, setForm] = useState<RegisterType>({
    firstName: '',
    secondName: '',
    lastName: '',
    login: '',
    password: '',
    telNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    try {
      if (!form.firstName || !form.secondName || !form.lastName || !form.login || !form.password || !form.telNumber) {
        throw new Error('Missing required fields');
      }

      const res = await registerUser(form);
      if (res.code === 200) {
        console.log(res.code);
        localStorage.setItem('token', res.data);
        navigate('/Auth/login');
        message.success(`Successfully Logged in. Hi ${form.login} 🎉`);
        localStorage.setItem('admin', form.login);
      } else {
        message.error(res.message + ' Please try again');
      }
      console.log(form);
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
    }
  };

  return (
    <div className=" dark:bg-[#002D40]">
  <div className="mx-auto flex max-w-4xl items-center bg-white font-[sans-serif] text-gray-800 dark:bg-[#002D40] md:h-screen">
    <div className="grid items-center overflow-hidden rounded-xl bg-[#002D40] text-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:bg-white dark:text-black md:grid-cols-3">
      <div className="flex min-h-full flex-col justify-center space-y-8 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-4 max-md:order-1 max-md:mt-8 lg:px-8">
        <div>
          <h4 className="text-md font-semibold text-white">Hisobingizni yarating</h4>
          <p className="mt-2 text-[12px] text-white">
            Ro'yxatdan o'tish sahifamizga xush kelibsiz! Hisob qaydnomangizni yaratish bilan boshlang.
          </p>
        </div>
        <div>
          <h4 className="text-md font-semibold text-white">Oddiy va xavfsiz ro'yxatdan o'tish</h4>
          <p className="mt-2 text-[12px] text-white">
            Bizning ro'yxatdan o'tish jarayoni oddiy va xavfsiz bo'lishi uchun yaratilgan. Biz sizning
            maxfiyligingiz va maʼlumotlar xavfsizligingizni birinchi oʻringa qoʻyamiz.
          </p>
        </div>
      </div>
      <form className="w-full px-6 py-6 sm:px-12 md:col-span-2" onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-xl font-bold">Hisob ochish</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm">Ism</label>
            <div className="relative flex items-center">
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Ismni kiriting"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm">Familiya</label>
            <div className="relative flex items-center">
              <input
                name="secondName"
                value={form.secondName}
                onChange={handleChange}
                type="text"
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Familiya kiriting"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm">Ochistva</label>
            <div className="relative flex items-center">
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Ochistva kiriting"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm">Login</label>
            <div className="relative flex items-center">
              <input
                name="login"
                type="text"
                value={form.login}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Login kiriting"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm">Parol</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Parol"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm">Telefon</label>
            <div className="relative flex items-center">
              <input
                name="telNumber"
                type="tel"
                value={form.telNumber}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-black outline-blue-500"
                placeholder="Telefon raqam kiriting"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              required
              type="checkbox"
              className="h-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              Men{' '}
              <a href="javascript:void(0);" className="ml-1 font-semibold text-blue-600 hover:underline">
                Shartlarni qabul qilaman
              </a>
            </label>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full rounded bg-gray-700 px-4 py-2 text-md font-semibold text-white hover:bg-gray-800 focus:outline-none"
          >
            Account Yaratish
          </button>
        </div>
        <p className="mt-4 text-center text-sm">
          Hisobingiz bormi?{' '}
          <a href="javascript:void(0);" className="ml-1 font-semibold text-blue-600 hover:underline">
            <Link to={'/Auth/Login'}>Bu yerga kiring</Link>
          </a>
        </p>
      </form>
    </div>
  </div>
</div>

  );
};

export default register;
