import React from 'react';
import logo from './assets/logo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='sns-app'>
      <div className='sns-logo'>staff <img src={logo} alt='StaffNSword' /> sword</div>
    </div>
  );
}

export default App;
