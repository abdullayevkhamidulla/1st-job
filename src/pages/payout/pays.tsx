import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { ClipLoader } from 'react-spinners';

// Import card images
import card1 from './imgs/Card.png';
import card2 from './imgs/04.png';
import card3 from './imgs/03.png';

const Pays = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [qrCodeSize, setQRCodeSize] = useState(250);
  const [loading, setLoading] = useState(false);

  const handleCardClick = (cardNumber: React.SetStateAction<string>) => {
    setSelectedCard(cardNumber);
  };

  const generateQRCode = () => {
    if (selectedCard) {
      setLoading(true);
      setTimeout(() => {
        setQRCodeValue(`Card Number: ${selectedCard}`);
        setLoading(false);
      }, 2000); // 2-second delay
    } else {
      setQRCodeValue('');
    }
  };

  return (
    <div className="flex flex-col py-[200px] lg:flex-row items-center  justify-center gap-10 lg:py-24 h-auto z-0 bg-gray-100 dark:bg-[#002D40]">
      {/* Card Selection */}
      <div className="py-[100px] lg:mb-0 flex flex-col gap-4">
        <img
          src={card1}
          alt="Card 1"
          className={` z-0 cursor-pointer w-[300px] lg:w-[350px] h-auto ${selectedCard === '8763 2736 9873 0329' ? 'filter brightness-100' : 'filter brightness-75'}`}
          onClick={() => handleCardClick('8763 2736 9873 0329')}
        />
        <img
          src={card2}
          alt="Card 2"
          className={ `z-0 cursor-pointer w-[300px] lg:w-[350px] h-auto ${selectedCard === '8763 2736 9873 0328' ? 'filter brightness-100' : 'filter brightness-75'}`}
          onClick={() => handleCardClick('8763 2736 9873 0328')}
        />
        <img
          src={card3}
          alt="Card 3"
          className={`z-0 cursor-pointer w-[300px] lg:w-[350px] h-auto ${selectedCard === '8763 2736 9873 0327' ? 'filter brightness-100' : 'filter brightness-75'}`}
          onClick={() => handleCardClick('8763 2736 9873 0327')}
        />
      </div>

      {/* QR Code Section */}
      <div className='flex flex-col gap-6 lg:gap-10 w-full lg:w-[500px] h-auto justify-center items-center px-4 lg:px-0'>
        <h1 className='text-[18px] lg:text-[22px] text-center dark:text-[#ffffff]'>Qurilmaning QR kodini skanerlang</h1>

        {/* Display QR Code */}
        {loading ? (
          <div className="p-4 bg-white rounded shadow-md flex justify-center items-center">
            <ClipLoader size={60} color={"#36D7B7"} />
          </div>
        ) : (
          qrCodeValue && (
            <div className="p-4 bg-white rounded shadow-md">
              <QRCode value={qrCodeValue} size={qrCodeSize} />
            </div>
          )
        )}
        <p className='text-center dark:text-[#8b8b8b]'>QR kodi siz uni hidoyat chiziqlari orasiga qo'yganingizda <br /> avtomatik ravishda aniqlanadi</p>
        <button
          onClick={generateQRCode}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600"
        >
          Qr kodini yarating
        </button>
      </div>
    </div>
  );
};

export default Pays;
