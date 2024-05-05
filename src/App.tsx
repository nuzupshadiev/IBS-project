import React from 'react'
import { ConfigProvider } from "antd";
import './App.css'
import Survey from './pages/survey'
import Navbar from './components/navbar/navbar';
import TitleText from './components/title-text/title-text';
import TitleImage from './components/title-image/title-image';
import Card from './components/card/card';
import Footer from './components/footer/footer';

function App() {
  const data = [
    {
      title: "Self evaluation of Individualism and Collectivism Horizontal Individualism",
      content: "Express the degree of agreement with the following statements by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        },
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        },
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        },
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        }
      ]
    },
    {
      title: "Self evaluation of Individualism and Collectivism Horizontal Individualism",
      content: "Express the degree of agreement with the following statements by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        }
      ]
    },
    {
      title: "Self evaluation of Individualism and Collectivism Horizontal Individualism",
      content: "Express the degree of agreement with the following statements by using scales from 1 to 9, where 1 means never or definitely no and 9 means always:",
      questions: [
        {
          question: "I prefer to work alone rather than in a group.",
          answer: 0
        }
      ]
    }
  ]
  return (
    <div className='main'>
      <ConfigProvider
        theme={{
          components: {
            Steps:{
              colorPrimary: '#5465FF',
            },
            Button: {
              colorPrimary: '#5465FF',
              colorPrimaryHover: '#3a4efc',
              colorPrimaryActive: '#3a4efc',
              borderRadius: 15,
            },
            Slider: {
              colorPrimary: '#5465FF',
              colorPrimaryHover: '#5465FF',
              colorPrimaryActive: '#5465FF',
              trackBg: '#5465FF',
              trackHoverBg: '#5465FF',
              dotActiveBorderColor: '#5465FF',
              handleColor: '#5465FF',
              handleActiveColor: '#5465FF',
              dotSize: 20,
              handleSize: 20,
            }
          }
        }}
      >
        <Navbar/>
        <TitleText title='Welcome to Our Survey: ' subtitle='Understanding Cultural Biases in Large Language Models'/>
        <TitleImage/>
        <div className='survey-instructions'>
          <Card title='About the Research:' index={'01'}>
            <p>This survey is part of a research study titled "Psychosocial Traits in Large Language Models." We aim to explore and understand the biases in Large Language Models like ChatGPT, Bard, and LLAMA, especially in cultural contexts.</p>
          </Card>
          <div className='two-cards'>
            <Card title='Why Your Participation Matters:' index={'02'}>
              <p>Your perspectives are invaluable to our study, contributing to a deeper understanding of how language models may reflect cultural biases. This can aid in developing more unbiased AI systems.</p>
            </Card>
            <Card title='What Will You Do:' index={'03'}>
              <p>You will be asked to share your views on Individualism and Collectivism. This survey compares cultural values and stereotypes as reflected in language models with those of real humans from various countries.</p>
            </Card>
          </div>
        </div>
        <Survey 
          data={data}
        />
        <Footer/>
      </ConfigProvider>
    </div>
  )
}

export default App
