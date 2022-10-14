import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <ContactUs/>
  </>
);
 
