import styled from 'styled-components'

function Rating() {

  const Main = styled.div`
      width:98%;
      height:40%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
  `
  const RatingChart = styled.div`
      width:30%;
      height:100%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
  `
  const RatingReasons = styled.div`
      width:70%;
      height:100%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
  `




  return (
    <Main>

      <RatingChart>

      </RatingChart>

      <RatingReasons>

      </RatingReasons>
    </Main>
  )
}
export default Rating
