import { Button } from 'antd';
import Image from './image-title.jpeg';
import './title-image.css';
function TitleImage() {
  return (
    <div className="title-image">
      <img src={Image} alt="title" width={500} />
      <div className="button-wrap">
        <Button type="primary" className='image-button'>Start</Button>
      </div>
    </div>
  );
}

export default TitleImage;