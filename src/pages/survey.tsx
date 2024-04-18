import React, { useState } from 'react';
import { Button, Card, Steps, Typography } from 'antd';
import Question from '../components/question';
import Confetti from 'react-confetti'

interface Question {
  question: string;
  answer: number;
}

interface SurveySection {
  title: string;
  content: string;
  questions: Question[];
}

type SurveyData = SurveySection[];

interface SurveyProps {
  data: SurveyData;
}
const Survey: React.FC<SurveyProps> = ({data}) => {
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = data.map((item, index) => ({ key: item.title, title: `Part ${index+1}` }));
  if (done) {
    return(
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
        }}
      >
        <Confetti
          width={window.screen.width}
          height={window.screen.height*0.9}
        />
        <Card style={{ 
          width: "100%", 
          height: "60vh",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography.Title>
              Thank you for your participation!
            </Typography.Title>
            <Button 
              onClick={() => setDone(false)}
              type="primary"
            >
              back to the survey
            </Button>
          </div>
        </Card>
      </div>
    )
  }
  return (
    <>
      <Typography.Title>
        {`Part ${current+1}: ${data[current].title}`}
      </Typography.Title>
      <Typography.Title
        level={5}
        type='secondary'
      >
        {data[current].content}
      </Typography.Title>
      <Steps current={current} items={items} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 24,
        }}
      >
        {data[current].questions.map((question, index) => (
          <Question
            key={index}
            questionIndex={index}
            question={question.question}
            updateAnswer={(answer) => {
              question.answer = answer;
            }}
          />
        ))}
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24, 
      }}>
        
        {current > 0 && (
          <Button onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < data.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === data.length - 1 && (
          <Button type="primary" onClick={() => setDone(true)}>
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default Survey;