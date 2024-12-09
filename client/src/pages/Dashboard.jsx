import SWE from '../data-visualization/SWE'
import SnowDepth from '../data-visualization/SnowDepth'
import Rating from '../data-visualization/Rating'
import AvyDanger from '../data-visualization/AvyDanger'
import Traffic from '../data-visualization/Traffic'

function Dashboard() {

    return(
        <>

            <Rating/>

            <div>
                <AvyDanger/>
                <Traffic/>
            </div>

            <div>
              <SWE/>
              <SnowDepth/>
            </div>

        </>
    )
}
export default Dashboard
