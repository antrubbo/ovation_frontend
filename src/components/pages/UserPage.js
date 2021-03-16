import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"


function UserPage({name, setName, email, setEmail, currentUser, setCurrentUser}) {
    const [clicked, setClicked] = useState(false)
    const history = useHistory()
    
    
    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}`)
            .then(r => r.json())
            .then(newUser => setCurrentUser(newUser))
    }, [setCurrentUser, currentUser.id])

    function sellTicket (e) {
        let ticketId = e.target.id

        fetch(`http://localhost:3000/tickets/${ticketId}`, {
            method: "DELETE"
        })
        .then(r=> r.json())
        .then(data => console.log(data))
        .then(() => {
            const parentDiv = e.target.parentElement
            parentDiv.parentElement.remove()
        })
    }


    const allTickets = currentUser.tickets.map(ticket => {
        return ( 
            <li key={ticket.id}>
                <div>
                    <h3>{ticket.event.name}</h3>
                    <p>Who: {ticket.event.artist.name}</p>
                    <p>Where: {ticket.event.location}</p>
                    <button class='formButton' id={ticket.id} onClick={sellTicket}>Sell Ticket</button>
                </div>
            </li> 
        )
    })

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

        fetch(`http://localhost:3000/users/${currentUser.id}`, 
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
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            method: "DELETE"
        })
        .then(r=> r.json())
        .then(deletedUserObj => {
            setCurrentUser("")
        })
        alert("Account Deleted!")
        history.push("/")
    }
    

    return(
        <div className="user-show">
            <h1>{currentUser.name}</h1>
            <div className="tickets-div">
                <h3>Tickets:</h3>
                <ul>
                    {allTickets}
                </ul>
            </div>
            {clicked ? null : <button class='formButton' onClick={handleEdit}>Edit Account</button> }
            {clicked ? <form onSubmit={handleSubmit}>  
                    <input type="text" placeholder="Name.." value={name} onChange={evt => setName(evt.target.value)}></input>
                    <input type="text" placeholder="Email Address.." value={email} onChange={evt => setEmail(evt.target.value)}></input>
                    <input type="submit" value="Finalize Changes"></input>
            </form> : null}
            <button class='formButton' onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default UserPage