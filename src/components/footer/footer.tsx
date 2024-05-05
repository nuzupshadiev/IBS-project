import React from 'react';
import './footer.css';
import { Button } from 'antd';
import logo from './ibs-logo.png';
function Footer() {
  return (
    <footer>
      <img src={logo}></img>
      <Button type="text" className='footer-btn'>Introduction of the research</Button>
      <Button type="text" className='footer-btn'>Transition to cultural context</Button>
      <Button type="text" className='footer-btn'>Background information</Button>
      <Button type="text" className='footer-btn'>Contact with us</Button>
      <Button type="primary" className='footer-btn-primary'>Start the survey</Button>
    </footer>
  );
}
export default Footer;