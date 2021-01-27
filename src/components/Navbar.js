import { NavLink } from "react-router-dom";


function Navbar ({onLogOut, currentUser, setCurrentUser}) {

    return (
        <nav className="navbar">
            <NavLink exact to="/" className="nav-button">
            <i class="fa fa-fw fa-home">Home {' '}</i>
            </NavLink>
            {currentUser? <NavLink exact to="/user/:id" className="nav-button">
            <i class="fa fa-user">My Page {' '}</i>
            </NavLink> : null}
            <NavLink exact to="/events" className="nav-button">
            <i class="fa fa-globe">All Events</i>
            </NavLink>
            { !currentUser ? <NavLink exact to="/login" className="nav-button">
            <i class="fa fa-sign-in">Log In {' '}</i>
            </NavLink> : null}
            { !currentUser ? (<NavLink exact to="/signup" className="nav-button">
            <i class="fa fa-user-plus">Sign Up {' '}</i>
                
            </NavLink> ) :
            (<NavLink exact to="/" className="nav-button" onClick={onLogOut}>
            <i class="fa fa-sign-out">Log Out {' '}</i> 
            </NavLink>)}
        </nav>
    )
    }
    
    export default Navbar