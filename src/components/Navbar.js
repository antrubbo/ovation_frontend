import { NavLink } from "react-router-dom";


function Navbar ({onLogOut}) {

    return (
        <nav className="navbar">
            <NavLink exact to="/" className="nav-button">
                Home {' '}
            </NavLink>
            <NavLink exact to="/user/:id" className="nav-button">
                My Page {' '}
            </NavLink>
            <NavLink exact to="/events" className="nav-button">
                All Events {' '}
            </NavLink>
            <NavLink exact to="/login" className="nav-button">
                Log In {' '}
            </NavLink>
            <NavLink exact to="/" className="nav-button" onClick={onLogOut}>
                Log Out {' '}
            </NavLink>
            <NavLink exact to="/signup" className="nav-button">
                Sign Up {' '}
            </NavLink>
            {/* <button onClick={onLogOut}>Log out</button> */}
        </nav>
         
    )
    }
    
    export default Navbar