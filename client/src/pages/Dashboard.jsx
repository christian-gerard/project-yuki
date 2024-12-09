import SWE from '../data-visualization/SWE'
import SnowDepth from '../data-visualization/SnowDepth'
import Rating from '../data-visualization/Rating'

function Dashboard() {

    return(
        <div>
            <!-- Rating Board -->
            <div>
                <Rating/>
            </div>

            <!-- Avy Danger & Traffic -->
            <div>


            </div>

            <div>
              <SWE/>
              <SnowDepth/>
            </div>
        </div>
    )
}
export default Dashboard
