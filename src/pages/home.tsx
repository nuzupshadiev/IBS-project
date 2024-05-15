import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import TitleText from '../components/title-text/title-text'
import TitleImage from '../components/title-image/title-image'
import Card from '../components/card/card'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
