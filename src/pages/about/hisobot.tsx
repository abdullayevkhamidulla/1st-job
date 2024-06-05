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

const Hisobot=()=>{
  return (
    <div className='w-[100%] h-auto  pt-[200px] flex justify-center dark:bg-[#002D40]'>
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
    <div className='w-[800px] h-auto '>
        <div>
          <h1 className=' text-[18px] text-[#222222] dark:text-[white] mt-5 text-center font-medium'>Toshkent metropolitenidan foydalanuvchi yo‘lovchilarning to‘lov tizimidan foydalanish</h1>
          <p className='text-[30px] text-[#648ce1] font-bold text-center'>HISOBOTI</p>
        </div>
      <Flex vertical className='mt-[30px]' gap="middle cl">
      
      <div className=' mt-[30px] w-[800px] dark:text-[white] '>
        <p className='mb-[50px] text-[#3072ff] font-medium text-[26px]'>Yanvar --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={59} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={23} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={10} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={5} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={3} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <div className=' mt-[50px] w-[800px] dark:text-[white] '>
        <p className='mb-[-5px] text-[#3072ff] font-medium text-[26px]'>Fevral --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={53} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={23} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={12} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={10} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={2} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <div className=' mt-[50px] w-[800px] dark:text-[white] '>
        <p className='mb-[-5px] text-[#3072ff] font-medium text-[26px]'>Mart --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={53} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={23} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={12} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={11} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={2} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <div className=' mt-[50px] w-[800px] dark:text-[white] '>
        <p className='mb-[-5px] text-[#3072ff] font-medium text-[26px]'>Aprel --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={53} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={23} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={12} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={13} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={2} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <div className=' mt-[50px] w-[800px] dark:text-[white] '>
        <p className='mb-[-5px] text-[#3072ff] font-medium text-[26px]'>May --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={53} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={21} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={13} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={10} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={2} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <div className=' mt-[50px] w-[800px] dark:text-[white] '>
        <p className='mb-[-5px] text-[#3072ff] font-medium text-[26px]'>Iyun --------------------------------------------------------------------</p>

        <div className='w-[800px] h-auto'>
          <Flex gap="small" className='mt-[30px] flex justify-between'>
            <Progress type="circle" percent={56} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={20} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={13} strokeColor={conicColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={9} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
            <Progress type="circle" percent={2} strokeColor={twoColors} format={(percent) => (
          <span style={{ color: 'blue' }}>{percent}%</span>
        )} />
          </Flex>
        </div>
        <div className='w-[800px] h-auto flex justify-between mt-[40px] text-center'>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>QR kodli chipta orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Bank kartalari orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Imtiyozli transport kartasi orqali</h1>
          <h1 className='w-[100px] h-[120px]  text-[24px] font-medium'>Nafaqaxo‘rlar Bepul</h1>
        </div>
        
      </div>
      <hr className='mt-[50px]'/>
      <div className='w-[600px] h-auto mb-[50px] mt-[50px] ms-[100px]'>
        <h1 className=' text-[18px] text-[#222222] mt-5  font-medium dark:text-[white] '>Toshkent metropolitenidan foydalanuvchi yo‘lovchilarning 6 oy davomida to‘lov tizimidan foydalanish</h1>
        <p className='text-[30px] text-[#648ce1] font-bold '>HISOBOTI</p>
        <hr />
      </div>
      <img src="https://tashmetro.uz/wp-content/uploads/2022/08/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8.png" alt="" />
      
      </Flex>
    </div>
      
    </div>
  </div>
  )
}

export default Hisobot;







