import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"


function UserPage({name, setName, email, setEmail, currentUser, setCurrentUser, baseUrl, handleLogout}) {
    const [clicked, setClicked] = useState(false)
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`${process.env.REACT_APP_API_BASE_URL}/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
        })
        .then(r => r.json())
        .then(userObj => {
        setCurrentUser(userObj)
        setTickets(userObj.tickets)
        })
    }, [baseUrl, setCurrentUser])

    function sellTicket (e) {
        let deletedTicketId = e.target.id

        fetch(`${process.env.REACT_APP_API_BASE_URL}/tickets/${deletedTicketId}`, {
            method: "DELETE"
        })
            .then(r=> r.json())
            .then(data => console.log(data))
            .then(() => {
                const remainingTickets = tickets.filter(ticket => {
                    return ticket.id !== parseInt(deletedTicketId)
                })
                setTickets(remainingTickets)
            })
    }

    const handleEdit = (e) => {
        setClicked(!clicked)
        setEmail(currentUser.email)
        setName(currentUser.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let formBody = {
            name: name,
            email: email,
        }

        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${currentUser.id}`, 
            {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formBody)
            })
                .then(r=> r.json())
                .then(updatedUser => setCurrentUser(updatedUser))
                .then(setClicked(!clicked))
    }
       
    function handleDelete(evt) {
        alert("Delete Account - Are you sure?")
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${currentUser.id}`, {
            method: "DELETE"
        })
        .then(r=> r.json())
        .then(deletedUserObj => {
            handleLogout()
            alert("Account Deleted!")
            history.push('/')
        })
    }

    const allTickets = tickets.map(ticket => {
        return (
            <tr>
                <td>{ticket.event.name}</td>
                <td>{ticket.event.artist.name}</td>
                <td>{ticket.event.location}</td>
                <td> <button class='formButton' id={ticket.id} onClick={sellTicket}>Sell Ticket</button></td>
            </tr>
        )
    })
    
    if(currentUser){

    return(
        <div className="user-show">
            <h1>{currentUser.name}</h1>
            {/* <h3>Tickets</h3> */}
            <table className="ticket-table">
                <caption>Tickets</caption>
                <tbody>
                <tr> 
                    <th>Event</th>
                    <th>Artist</th>
                    <th>Location</th>
                    <th>Sell Ticket</th>
                </tr>
                {allTickets}
                </tbody>
            </table>
            {clicked ? null : <button class='formButton' onClick={handleEdit}>Edit Account</button> }
            {clicked ? <form onSubmit={handleSubmit}>  
                    <input className="searchTerm" type="text" placeholder="Name.." value={name} onChange={evt => setName(evt.target.value)}></input>
                    <input className="searchTerm" type="text" placeholder="Email Address.." value={email} onChange={evt => setEmail(evt.target.value)}></input>
                    <input className="formButton" type="submit" value="Confirm Change"></input>
            </form> : null}
            <button class='formButton' onClick={handleDelete}>Delete Account</button>
        </div>
    )
    } else {
        return <h1>Loading...</h1>
    }
}

export default UserPage