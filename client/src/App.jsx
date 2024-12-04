import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'

const Header = styled.div`
  background-color: blue;
  color: white;
  padding: 10px;
`;

const AppWindow = styled.div`
  border: black 1 solid;
  width: 100%;
  height: 100%;
  background-color:blue;
`

function App() {

  return (
    <AppWindow>
      <Header>
        <p>Deep</p>
        <p>Testing Names</p>
      </Header>
    </AppWindow>  )
}

export default App
