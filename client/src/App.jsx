import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import styled from 'styled-components'

const Main = styled.div`
   height:100%;
   width:100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const Render = styled.div`
    height:92%;
    width:100%;
    padding: 20px;
`

function App() {

  return (
    <Main>
      <Header/>
      <Render>
        <Dashboard/>
      </Render>
      <Footer/>
    </Main>


  )
}

export default App
