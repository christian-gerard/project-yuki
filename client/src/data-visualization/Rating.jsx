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
      font-size:1.5em;
      height:100%;
      overflow: hidden;
      white-space: nowrap;
  `
  const RatingReasons = styled.div`
      width:70%;
      overflow: hidden;
      white-space: nowrap;
      font-size: 1.5em;
  `
  return (
    <Main>

      <RatingChart>
        <p>Charts</p>
        <p>Rating</p>
      </RatingChart>

      <RatingReasons>
        <p>Rating Reasons</p>
        <ul>
          <li> Increased Snow </li>
          <li> Low SWE </li>
          <li> Good Avy Danger </li>
        </ul>
         <ul>
          <li> Large Crowds  </li>
          <li> Low Snowpack  </li>
          <li> Traction Law In Place </li>
        </ul>
      </RatingReasons>
    </Main>
  )
}
export default Rating
