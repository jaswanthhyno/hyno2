import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Page1 from './components/Page1';
import { Route, Routes } from 'react-router-dom';

import Nodemail from './components/Nodemail';

import Burger from "./images/Group 11709/Group 11709.png"
import Hyno from "./images/hyno/Group 11654.png"
import calnder from "./images/Mask Group 10/Mask Group 10.png"
import { useEffect, useState } from 'react';
import person from "./images/Untitled.png"
import mobile from "./images/Untitled1.png"
import Footer from "./components/Footer"
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Second from './components/Second';
import Test from './components/Test';
import Contact from './components/Contact';
import { Test1 } from './components/Test1';



function App() {


  return (
   <div>
       <Routes>
       <Route path="page1" element={<Page1 />} />
   
         
        

          <Route path="page4" element={<ChakraProvider><Page4 /></ChakraProvider>} />
          <Route path="/" element={<ChakraProvider><Second/></ChakraProvider>} />
          <Route path="contact" element={<Contact />} />
          <Route path="test" element={<Test />} /> 
          <Route path="test1" element={<Test1 />} /> 
      </Routes>

 
   </div>
  );
}

export default App;
