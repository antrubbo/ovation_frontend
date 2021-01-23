import { NavLink } from "react-router-dom";


function Navbar () {

    return (
        <nav className="navbar">
            <NavLink exact to="/events/:id" className="nav-button">
                My Page
            </NavLink>
            <NavLink exact to="/events" className="nav-button">
                All Events
            </NavLink>
                
        </nav>
         
    )
    }
    
    export default Navbar