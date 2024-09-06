
import { Link } from "react-router-dom"
const PageFound=()=>{

    return(
        <div >
          <center><img src="./image/not_found.png" style={{ width:"42%" }} alt="1"/></center>
          <center><Link to="/"><button>Home</button></Link></center>
        </div>
    )
}
export default PageFound