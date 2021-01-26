import { NavLink } from "react-router-dom";


function Navbar ({onLogOut, currentUser, setCurrentUser}) {

    return (
        <nav className="navbar">
            <NavLink exact to="/" className="nav-button">
                Home {' '}
            </NavLink>
            {currentUser? <NavLink exact to="/user/:id" className="nav-button">
                My Page {' '}
            </NavLink> : null}
            <NavLink exact to="/events" className="nav-button">
                All Events {' '}
            </NavLink>
            { !currentUser ? <NavLink exact to="/login" className="nav-button">
                Log In {' '}
            </NavLink> : null}
            { !currentUser ? (<NavLink exact to="/signup" className="nav-button">
                Sign Up {' '}
            </NavLink> ) :
           (<NavLink exact to="/" className="nav-button" onClick={onLogOut}>
                Log Out {' '}
            </NavLink>)}
            
            {/* <button onClick={onLogOut}>Log out</button> */}
        </nav>
         
    )
    }
    
    export default Navbar