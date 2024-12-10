import styled from 'styled-components'

function Date() {

const Main = styled.div`
  width: 100%; 
  height: 3%;
  font-size:1.5em;
  background-color:black; 
  color: white;
  padding-left:10px;
`

  return (
    <Main>
      <p> Tuesday December 8th</p>
    </Main>
  )
}

export default Date
