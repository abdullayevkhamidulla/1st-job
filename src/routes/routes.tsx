import React from 'react';
import { Navigate, Route, Routes as Switch, useLocation } from 'react-router-dom';

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
import Tarix from 'pages/about/tarix';
import Tarkib from 'pages/about/tarkib';
import Ish from 'pages/about/ish';
import Hisobot from 'pages/about/hisobot';
import Pays from 'pages/payout/pays';
import Regis from 'modules/auth/register';
import Login from 'modules/auth/login';

import Admin1 from 'pages/admin/admin';
import UserDashboard from 'components/Header';
import { Navbar } from 'pages';
import { Footer } from 'antd/es/layout/layout';
import Userlar from 'pages/admin/userlar';
import Sorovlar from 'pages/admin/sorovlar';


const Routes: React.FC = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  const hideNavbarAndFooter = ['/admin', '/auth/login', '/auth/register'].some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Switch>
        <Route index path="/" element={<Navigate to="/Auth/Login" replace />} />
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
        <Route path="/savollar" element={<Sovol />} />
        <Route path="/Davlat-ramzlari" element={<Ramzlar />} />
        <Route path="/Yangiliklar" element={<News />} />
        <Route path="/Elonlar-va-Tadbirlar" element={<Elon />} />
        <Route path="/Ommaviy-Tadbirlar" element={<Tadbir />} />
        <Route path="/Fotogalareya" element={<Fotogalareya />} />
        <Route path="/Yangiliklar/Duc" element={<Ducc />} />
        <Route path="/Yangiliklar/Grant" element={<Grant />} />
        <Route path="/Yangiliklar/Texnalogiya" element={<Tech />} />
        <Route path="/Metro-tarixi" element={<Tarix />} />
        <Route path="/Tarkibiy-bolinmalar" element={<Tarkib />} />
        <Route path="/Ish-o'rinlari" element={<Ish />} />
        <Route path="/Oylik-hisobot" element={<Hisobot />} />
        <Route path="/Pays" element={<Pays />} />
       
        <Route path="/Admin" element={<Admin1 />} >
            <Route path='Admin/sorovlar' element={<Sorovlar />}/>
            <Route path='Admin/userlar'  element={<Userlar />}/>
        </Route>
        <Route path="Auth">
          <Route path="/Auth/Register" element={<Regis />} />
          <Route path="/Auth/Login" element={<Login />} />
        </Route>
        <Route path="/home" element={<Home />} />
        
      </Switch>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default Routes;
