function UserPage({currentUser}) {
    
    console.log(currentUser)

    // const userTickets = currentUser.tickets.map(ticket => {
    //    return <li> </li>
    // })

    return(
        <div className="user-show">
            <h1>{currentUser ? `Welcome Back, ${currentUser.name}.` : "Gotta Log In, Dummy."}</h1>
            <div className="tickets-div">
                <ul>
                    <h3>Tickets:</h3>
                    
                </ul>
            </div>
        </div>
    )
}

export default UserPage