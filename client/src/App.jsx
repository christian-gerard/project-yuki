import './App.css'
import Header from './components/Header'
import styled from 'styled-components'
import Footer from './components/Footer'

const Main = styled.div`
   background-color: var(--light-green);
   height:100%;
   width:100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

function App() {

  return (
    <Main>
      <Header/>
      <Footer/>
    </Main>


  )
}

export default App
