/* eslint-disable */

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Routes from 'routes/routes';

import 'assets/styles/tailwind.css';
import { Navbar } from 'pages';
import Footer from 'pages/footer';
import { ThemeProvider } from './context/ThemeContext';



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
   <ThemeProvider>
    <Navbar/>
    
    <Routes/>
    <Footer/>
  </ThemeProvider>

  </BrowserRouter>
);