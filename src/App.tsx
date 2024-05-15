import { ConfigProvider } from "antd";
import './App.css'

import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Survey from "./pages/survey";


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey  data={data}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
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
        <Home/>
      </ConfigProvider>
    </div>
  )
}

export default App
