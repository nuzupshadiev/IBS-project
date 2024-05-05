import React from 'react';
import { Avatar, Typography } from 'antd';
import './card.css';
interface CardProps {
  title: string;
  children: React.ReactNode;  
  index: string;
}
function Card(props: CardProps) {
  return (
    <div
      className="card"
    >
      <div className='card-content'>
        <div className='card-header'>
          <Typography.Title level={3} >
            {props.title}
          </Typography.Title>
          <Avatar className='card-avatar'>
            {props.index}
          </Avatar>
        </div>
        {props.children}
      </div>
    </div>
  )
}
export default Card;