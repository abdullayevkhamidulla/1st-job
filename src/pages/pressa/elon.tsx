import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';
import { Pagination } from 'antd';
import React, { useState } from 'react';
import type { PaginationProps } from 'antd';

const itemsPerPage = 9; // Number of items to display per page

const items = [
{ id: 1, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUK da “Korrupsiyaga qarshi kurashish – davr talabi” mavzusida davra suhbati bo’lib o’tdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img6.jpg' },
{ id: 2, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img2.png' },
{ id: 3, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img8.png' },
{ id: 4, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img6.jpg' },
{ id: 5, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img4.png' },
{ id: 6, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img8.png' },
{ id: 7, title: 'Pressa / Yangiliklar', description: '““Toshkent metropoliteni” DUK da “Diniy ekstremizm va fundamentalizmga qarshi kurash” mavzusida davra suhbati tashkillashtirildi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img7.jpg' },

{ id: 8, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'hom7.jpg' },
{ id: 9, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUK uchun 2 100 000 AQSh dollari ekvivalentida grant mablag‘lari ajratildi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img9.jpg' },
{ id: 10, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'hom4.jpg' },
{ id: 11, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUKning ayollardan tashkil topgan jamoasi Xalqaro oila kuniga bag’ishlangan Respublika Gimnastrada sport festivalida ishtirok etdi',title2: 'May 8, 2024  By Metro22', imageUrl: 'img2.png' },
{ id: 12, title: 'Pressa / Yangiliklar', description: '“Toshkent metropoliteni” DUK da “Yangilangan Konstitutsiya inson huquq va erkinliklari kafolatlari” mavzusida davra suhbati bo’lib o’tdi.',title2: 'May 8, 2024  By Metro22', imageUrl: 'img3.png' },
];

const Elon: React.FC = () =>  {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrentPage(page);
    };

    // Calculate the indexes of the items to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    // Slice the items array to get only the items for the current page
    const currentPageItems = items.slice(startIndex, endIndex);

    return (
        <div className='w-[100%] h-auto mt-[200px] flex justify-center'>
            <div className='w-[80%] h-auto gap-4 flex justify-evenly'>
                <div className="w-[300px] h-auto gap-14 bg-white flex flex-col ">
                    <div className="w-[300px] h-[100px] text-center bg-gray-50">
                        <h1 className="text-[30px] text-[#315fc3] font-medium">Toshkent</h1>
                        <div className="flex items-center  justify-center gap-1 bg-gray-50 border-white">
                            <img src="cloud.png" alt="img" className='bg-cover' />
                            <h1 className="text-[45px] text-[#315fc3] font-bold">24°C</h1>
                        </div>
                    </div>
                    <Search placeholder="input search text" className="w-[300px]" />
                    <Calendar/>
                </div>
                <div className='w-[950px] h-auto  pb-[100px] flex flex-wrap gap-4'>
                    {/* Render items for the current page only */}
                    {currentPageItems.map(item => (
                        <div key={item.id} className="mb-4 gap-2  w-[270px] border rounded-lg">
                            <img src={item.imageUrl} alt={item.title} className="mb-2 rounded-lg" />
                            <div className='p-2 flex flex-col gap-4'>
                                <h1 className="text-[14px] text-[gray]">{item.title}</h1>
                                <p className="text-gray-600 text-[17px] hover:text-[#000000]">{item.description}</p>
                                <p className=" text-[14px] text-[gray]">{item.title2}</p>
                            </div>
                        </div>
                    ))}
                    <Pagination current={currentPage} onChange={onPageChange} total={items.length} pageSize={itemsPerPage} />
                </div>
            </div>
        </div>
    );
}

export default Elon;

