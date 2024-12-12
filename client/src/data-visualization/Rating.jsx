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
      width:50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size:1.5em;
      height:100%;
      overflow: hidden;
      white-space: nowrap;
  `
  const RatingLeft = styled.div`
      width:30%;
      height:100%;
      display: flex;
      flex-direction: row;
  `
  const RatingReasons = styled.div`
      width:60%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      white-space: nowrap;
      font-size: 1.5em;
  `
  const StokeMeter = styled.div`
      display: flex;
      flex-direction: column;
      height: 90%;
      width:90%;
      border: 1px solid black;
      justify-content: flex-end;
 `
  const Meter = styled.div`
      height:20%;
      width:100%;
      background-color: var(--light-cyan);
      border: black 1px solid;
  `
  const RatingLabel = styled.div`
      width:50%;
      height:100%;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
`
  const RatingNumber = styled.div`
      background-color: var(--blue);
      border-radius:100%;
      font-size: 8em;
      height: 150px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

  `
  useEffect(() => {

  }, [])

  return (
    <Main>
      <RatingLeft>
        <RatingChart>
          <StokeMeter>
            <Meter/>
            <Meter/>
            <Meter/>
          </StokeMeter>
        </RatingChart>

        <RatingLabel>
          <RatingNumber>5</RatingNumber>
        </RatingLabel>
      </RatingLeft>
    
      <RatingReasons>
        <p>+ 8in of fresh</p> 
        <p>+ Low Traffic</p>
        <p>+ Low Avy Danger at Low Elevations</p>
        <p>- High Winds</p>
        <p>- High SWE</p>
      </RatingReasons>
    </Main>
)
}
export default Rating
