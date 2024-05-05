
import { Typography } from 'antd';
import React from 'react';
import './title-text.css';
interface TitleTextProps {
  title: string;
  subtitle: string;
}
function TitleText(props: TitleTextProps) {
  return (
    <div className='title-text'>
      <Typography.Title level={1} style={{ margin: 0, fontSize: '50px'}}>
        {props.title}
      </Typography.Title>
      <Typography.Title level={3} style={{ margin: 0, fontSize: '24px' }}>
        {props.subtitle}
      </Typography.Title>
    </div>
  );
}

export default TitleText;