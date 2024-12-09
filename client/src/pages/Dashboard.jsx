import SWE from '../data-visualization/SWE'
import SnowDepth from '../data-visualization/SnowDepth'
import Rating from '../data-visualization/Rating'
import AvyDanger from '../data-visualization/AvyDanger'
import Traffic from '../data-visualization/Traffic'
import styled from 'styled-components'

function Dashboard() {

    const Second = styled.div`
        width:98%;
        height:30%;
        border: 1px solid black;
        overflow: hidden;
        white-space: nowrap;
  `
    const Third = styled.div`
        width:98%;
        height:30%;
        border: 1px solid black;
        overflow: hidden;
        white-space: nowrap;
    `

    return(
        <>

            <Rating/>

            <Second>
                <AvyDanger/>
                <Traffic/>
            </Second>

            <Third>
              <SWE/>
              <SnowDepth/>
            </Third>

        </>
    )
}
export default Dashboard
