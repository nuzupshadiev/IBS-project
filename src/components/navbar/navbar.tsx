
import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import './navbar.css';
import logo from './ibs-logo.png';
function Navbar() {


  return (
    <nav className='navbar'>
      {/* <Avatar size={64} src={<img src={'./ibs-logo.png'} alt="avatar" />} /> */}
      <img src={logo}></img>
      <Button type="text">Background information</Button>
      <Button type="text">Introduction of the research</Button>
      <Button type="text">Transition to cultural context</Button>
      <Button type="text">Contact with us</Button>
      <Button type="primary">Start the survey</Button>
    </nav>
  );
}

export default Navbar;