/* eslint-disable */

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Routes from 'routes/routes';

import 'assets/styles/tailwind.css';
import { Navbar } from 'pages';
import Footer from 'pages/footer';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
  
    <Navbar/>
    
    <Routes/>
    <Footer/>
   

  </BrowserRouter>
);