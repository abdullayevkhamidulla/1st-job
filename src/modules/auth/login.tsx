import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { message } from 'antd';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      if (res.code === 200) {
        console.log(res.code);
        localStorage.setItem('token', res.data);
        message.success(`Successfully Logged in. Hi ${formData.username} 🎉`);

        if (formData.username === 'admin') {
          localStorage.setItem('admin', formData.username);
          navigate('/admin');
        } else {
          navigate(`/home`);
        }
      } else {
        message.error(res.message + ' Please try again');
      }
      console.log(formData);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50 font-sans dark:bg-[#002D40]">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-[#002D40] p-8 text-white shadow dark:bg-white">
            <h2 className="text-center text-2xl font-bold dark:text-gray-800">Sign in</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm dark:text-gray-800">Foydalanuvchi ismi</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-blue-600"
                    placeholder="Enter user name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm dark:text-gray-800">Parol</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-blue-600"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    required
                    className="h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm dark:text-gray-800">
                    meni eslabqol
                  </label>
                </div>
                
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm tracking-wide text-white hover:bg-blue-700 focus:outline-none"
                >
                  Kirish
                </button>
              </div>

              <p className="mt-8 text-center text-sm dark:text-gray-800">
                DAccountingiz yo'qmi?{' '}
                <Link
                  to="/Auth/Register"
                  className="ml-1 whitespace-nowrap font-semibold text-blue-600 hover:underline"
                >
                  ro'yxatdan o'tish
                </Link>
              </p>
            </form>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
