import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'

const Header = styled.div`
  background-color: var(--blue);
  color: white;
  padding: 10px;
`;

const Title = styled.div`
   font-size:2em;
`

function App() {

  return (
      <Header>
        <Title>
          <p>Project Yuki</p>
        </Title>

      </Header>
  )
}

export default App
