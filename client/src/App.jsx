import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import styled from 'styled-components'

const Main = styled.div`
   font-size:2em;
   background-color: var(--light-green);
   height:100%;
   width:100%;
`

function App() {

  return (
    <Main>
      <Header/>
    </Main>


  )
}

export default App
