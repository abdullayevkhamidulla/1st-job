import React, { ChangeEvent, useState } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    fio: '',
    specialization: '',
    studyYear: '',
    idPassport: '',
    educationType: '',
    birthPlace: '',
    workplace: '',
    pinfl: '',
    group: '',
  });

 

  

 

  

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="pt-10 px-40">
      
        <div className="w-full h-auto flex flex-col justify-center items-center gap-4 py-[100px]">
          
          <svg
            width="1150"
            height="3"
            viewBox="0 0 1136 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1150" height="3" fill="#0E7ED0" />
          </svg>

          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="fio" className="text-gray-700">
                Ism 
              </label>
              <Input
                id="fio"
                className="w-[300px] h-[40px]"
                value={formData.fio}
                onChange={handleInputChange}
                placeholder="F.I.O kiriting"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="studyYear" className="text-gray-700">
                Yosh
              </label>
              <Input
                id="Yosh"
                className="w-[300px] h-[40px]"
                value={formData.studyYear}
                onChange={handleInputChange}
                placeholder="Yoshingizni kiriting"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="specialization" className="text-gray-700">
                Mutaxasislik
              </label>
              <Input
                id="specialization"
                className="w-[300px] h-[40px]"
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="Mutaxasislik kiriting"
              />
            </div>
            
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="idPassport" className="text-gray-700">
                Ish Tajribasi
              </label>
              <Input
                id="idPassport"
                className="w-[300px] h-[40px]"
                value={formData.idPassport}
                onChange={handleInputChange}
                placeholder="Ish tajribangizni kiriting"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="educationType" className="text-gray-700">
                Manzil
              </label>
              <Input
                id="Yashash Joyi"
                className="w-[300px] h-[40px]"
                value={formData.educationType}
                onChange={handleInputChange}
                placeholder="Yashash joyi kiriting"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="workplace" className="text-gray-700">
                Qancha Maosh xohlaysiz
              </label>
              <Input
                id="workplace"
                className="w-[300px] h-[40px]"
                value={formData.workplace}
                onChange={handleInputChange}
                placeholder="Maosh kiriting"
              />
            </div>
            
          </div>
          
        </div>
      
      
    </div>
  );
};

export default MyComponent;
