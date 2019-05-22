import React from 'react';
import './App.css';
import { Button } from 'antd'
import imgURL from './assets/img/wx3.png';
function App() {
  return (
    <div className="App">
      <img src={ imgURL } alt='dsd'/>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
