import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Date from './components/Date'
import About from './components/About'

import styled from 'styled-components'

const Main = styled.div`
   height:100%;
   width:100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const Render = styled.div`
    height:88%;
    width:100%;
   padding: 20px;
`

function App() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const handleAboutModal = () => { 
    setAboutOpen(!aboutOpen)
  }
  return (
    <Main>
      <Header handleAboutModal={handleAboutModal}/>
      <Date/>
      <Render>
        <Dashboard/>
      </Render>
      <Footer/>
      { aboutOpen &&
          <About handleAboutModal={handleAboutModal}/>
      }
    </Main>
  )
}

export default App
