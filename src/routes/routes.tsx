import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import Map from 'pages/map';
import Catalog from 'pages/catalog';
import Delivery from 'pages/delivery';
import Home from 'pages/home';
import Pickup from 'pages/Pickup';
import Pay1 from 'pages/payout/pay1';
import Atto from 'pages/payout/atto';
import Mobile from 'pages/payout/mobile';
import Murojat from 'pages/passangers/murojat';
import Qoidalar from 'pages/passangers/qoidalar';
import Ramzlar from 'pages/passangers/ramzlar';
import Sovol from 'pages/passangers/savol';
import Elon from 'pages/pressa/elon';
import Fotogalareya from 'pages/pressa/fotogalareya';
import News from 'pages/pressa/news';
import Tadbir from 'pages/pressa/tadbir';
import Ducc from 'pages/newws/ducc';
import Grant from 'pages/newws/grant';
import Tech from 'pages/newws/tech';



const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Metro-Xaritasi" element={<Map />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/delivery" element={<Delivery />} />
    <Route path="/pickup" element={<Pickup />} />
    <Route path="/TOLOV-TURLARI" element={<Pay1 />} />
    <Route path="/ATTO-KARTALARI" element={<Atto />} />
    <Route path="/ATTO-MOBILE" element={<Mobile />} />
      <Route path="/Murojatlar" element={<Murojat />} />
      <Route path="/Foydalanish-qoydalari" element={<Qoidalar />} />
      <Route path="/savollar" element={<Sovol/>} />
      <Route path="/Davlat-ramzlari" element={<Ramzlar />} />
      <Route path="/Yangiliklar" element={<News />} />
      <Route path="/Elonlar va Tadbirlar" element={<Elon />} />
      <Route path="/Ommaviy-Tadbirlar" element={<Tadbir/>} />
      <Route path="/Fotogalareya" element={<Fotogalareya />} />
      <Route path="/Yangiliklar/Duc" element={<Ducc />} />
      <Route path="/Yangiliklar/Grant" element={<Grant />} />
      <Route path="/Yangiliklar/Texnalogiya" element={<Tech />} />
    
  </Switch>
  
);

export default Routes;
