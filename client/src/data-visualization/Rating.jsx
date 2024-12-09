import styled from 'styled-components'

function Rating() {

  const Main = styled.div`
      width:98%;
      height:40%;
      border: 1px solid black;
      overflow: hidden;
      white-space: nowrap;
      display:flex;
      flex-direction: row;
  `
  const RatingChart = styled.div`
      width:30%;
      font-size:2em;
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
        <p> Rating </p>
        <p> 4 </p>
      </RatingChart>

      <RatingReasons>
        <p>Rating Reasons</p>
        <ul>
          <li> Increased Snow </li>
          <li> Low SWE </li>
          <li> Good Avy Danger </li>

        </ul>
      </RatingReasons>
    </Main>
  )
}
export default Rating
