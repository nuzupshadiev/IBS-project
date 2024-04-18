import { Avatar, Slider } from 'antd';
import React from 'react';

interface QuestionProps {
  question: string;
  updateAnswer: (answer: number) => void;
  questionIndex: number;
}
const NumberStyle = (value: number) => {
  return {
    style: {
      padding: '10px',
    },
    label: <strong>{value}</strong>,
  }
}
const marks = {
  1: NumberStyle(1),
  2: NumberStyle(2),
  3: NumberStyle(3),
  4: NumberStyle(4),
  5: NumberStyle(5),
  6: NumberStyle(6),
  7: NumberStyle(7),
  8: NumberStyle(8),
  9: NumberStyle(9),
}
const Question: React.FC<QuestionProps> = ({ question, questionIndex, updateAnswer }) => {
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #f0f0f0',
      borderRadius: '20px',
      marginBottom: '20px',
      backgroundColor: 'white',
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Avatar
          style={{ 
            backgroundColor: '#EEF0FF',
            color: '#5465FF',
          }}
        >
          {questionIndex < 9 ? `0${questionIndex + 1}` : questionIndex + 1}
        </Avatar>
        <p>{question}</p>
      </div>
      <div
        style={{
          padding: '0 10px',
        }}
      >
        <Slider
          min={1}
          max={9}
          marks={marks}
          onChange={(value) => {
            updateAnswer(value)
          }}
        />
      </div>
    </div>
  );
};

export default Question;