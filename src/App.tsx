import { useEffect, useState } from 'react';
import axios from 'axios';


import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Image from './ImageNasa/Image';

function App() {
  return (
    <div>
      <Header />
      <Image />
      <Content />
    </div>
  )
}
export default App;

