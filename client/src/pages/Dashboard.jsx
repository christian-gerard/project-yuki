import { useState } from 'react'
import SWE from '../data-visualization/SWE'
import SnowDepth from '../data-visualization/SnowDepth'
import Rating from '../data-visualization/Rating'
import AvyDanger from '../data-visualization/AvyDanger'
import Traffic from '../data-visualization/Traffic'
import Wind from '../data-visualization/Wind'
import Temp from '../data-visualization/Temp'
import styled from 'styled-components'

function Dashboard() {
  
    const Second = styled.div`
        width:98%;
        height:20%;
        border: 1px solid black;
        overflow: hidden;
        white-space: nowrap;
        display:flex;
        flex-direction:row;
  `
    const Third = styled.div`
        width:98%;
        height:40%;
        border: 1px solid black;
        overflow: hidden;
        white-space: nowrap;
        display:flex;
        flex-direction:row;
    `

    return(
        <>

            <Rating/>

            <Second>
                <AvyDanger/>
                <Traffic/>
            </Second>

            <Third>
              <SnowDepth/>
              <SWE/>
              <Wind/>
              <Temp/>
            </Third>

        </>
    )
}
export default Dashboard
