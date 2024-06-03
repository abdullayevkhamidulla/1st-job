import React from 'react'
import Calendar from '../../components/calendar';
import Search from 'antd/es/input/Search';
import { Flex, Progress } from 'antd';
import type { ProgressProps } from 'antd';

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const conicColors: ProgressProps['strokeColor'] = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};

const Murojat=()=>{
  return (
    <div className='w-[100%] h-[800px] mt-[200px] flex justify-center'>
    <div className='w-[80%] h-auto flex justify-around'>
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
    <div className='w-[800px] h-auto  '>
        <div>
          <h1 className='text-[#ffffff] text-[25px] mt-5 text-center font-medium'>"Toshkent metropoliteni" DUK va uning tarkibiy tuzilmalariga 2023-yilning 9 oyi davomida kelib tushgan</h1>
          <p className='text-[55px] font-bold mt-5 text-[white]'>MUROJAATLAR NATIJALARI</p>
        </div>
    <Flex vertical className='mt-[30px]' gap="middle cl">
      <p className='mb-[-5px] text-[white]'>Virtual qabulxona orqali kelgan murojaatlar</p>
      <Progress percent={25} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
      <p className='mb-[-5px] mt-5 text-[white]'>Bevosita boshqarmaga kelib tushgan murojaatlar</p>
      <Progress percent={75} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
      <div className='flex justify-between mt-[30px] items-center w-[750px]'>
        <div>
          <Flex gap="small"  className='mt-[30px] text-white'>
            <Progress type="circle" percent={25} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={100} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={75} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
          </Flex>
      
          <Flex gap="small" className='mt-[30px]'>
            <Progress type="dashboard" percent={90} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
            <Progress type="dashboard" percent={100} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
            <Progress type="dashboard" percent={93} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'white' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div>
          <Flex className='flex flex-col items-center' gap="small">
            <p className='text-[20px] text-[#fffefe] mb-3'>Umumiy murojaatlar soni</p>
            <Progress  type="circle" percent={100} format={(percent) => ` 614ta`} />
            
          </Flex>
        </div>
        
      </div>
      <hr className='border-[1px] mt-4' />
      
  </Flex>
    </div>
      
    </div>
  </div>
  )
}

export default Murojat;







