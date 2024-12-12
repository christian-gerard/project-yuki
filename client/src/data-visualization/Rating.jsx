import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styled from 'styled-components'

function Rating() {

  const Main = styled.div`
      width:98%;
      height:40%;
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
  const StokeMeter = styled.div`
      display: flex;
      flex-direction: column;
      height: 90%;
      width:80%;
      border: 1px solid black;
      justify-content: flex-end;
 `
  const Meter = styled.div`
      height:20%;
      width:100%;
      background-color: var(--light-cyan);
      border: black 1px solid;
  `


  useEffect(() => {

  }, [])

  return (
    <Main>

      <RatingChart>
        <p>Stoke Meter</p>
        <StokeMeter>
          <Meter/>
          <Meter/>
          <Meter/>
        </StokeMeter>
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
