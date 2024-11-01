import { Link } from "react-router-dom"
import './Nav.css'
export default function Nav(){
    return(
        <>
        <ul className="nav-ul">
          <Link className="link" to="/home">Home</Link>
        
          <Link className="link" to="/mainpage">main page</Link>
          <Link className="link" to="/footer">Footer</Link>

        </ul>
        </>
    )
}