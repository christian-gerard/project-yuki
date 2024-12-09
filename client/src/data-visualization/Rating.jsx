import styled from 'styled-components'

function Rating() {

  const Main = styled.div`
      width:98%;
      height:40%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
  `


  return (
    <Main>
      <p>Rating Board Area</p>
    </Main>
  )
}
export default Rating
