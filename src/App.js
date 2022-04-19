import React from 'react'

import './App.css';

import img from './img/react-img.png'

const App = () => {
  
  return (
    <>
      <img src={img}/>
      <div class="test">Test</div>

      <button onClick={() => {
        console.log('成功按下按鈕');
      }}>測試按鈕</button>
    </>
  );
};

export default App;