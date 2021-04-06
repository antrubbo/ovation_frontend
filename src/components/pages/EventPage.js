// Navbar, artist info, 3 videos 
import { Link, useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player"


function EventPage ( {currentUser}) {

    const [event, setEvent] = useState(null)
    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${params.id}`)
            .then(r => r.json())
            .then(newEvent => setEvent(newEvent))
    }, [params.id])

    

    function buyTicket(e) {

        
        if (currentUser) { 
            const formBody = {
                user_id: currentUser.id,
                event_id: event.id
            }

            fetch(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formBody)
            })
                .then(r => r.json())
                .then(newTicket => alert(`Congrats! You just got a ticket to ${newTicket.event.name}`))
        } else {
            alert("You must sign up or login to buy a ticket")
        }
    }

    if (event) {
        const {name, date, artist, time, event_url, location } = event
        
        const pastPerformances = artist.past_performances.map((performance) => {
            return ( 
                <div key={performance} class='one-performance'>
                    <ReactPlayer
                        url={performance}
                    />
                </div>
            )
        })

        return (
            <section> 
                <div className='main-event'> 
                    <div className='event-page-info'> 
                        <div className="event-page-image"> 
                            <img src={artist.picture} alt={artist.name}></img>
                        </div>
                        <div className='event-page-content'>
                            <h1>{name}</h1>
                            <p> {location} </p> 
                            <button class='formButton' onClick={buyTicket}> Buy a ticket </button>
                            <a href={event_url}> See this event on SongKick </a>
                            {/* <button href={event_url}>See This Event on SongKick</button> */}
                        </div> 
                    </div>
                    <div className='event-page-artist-info'>
                        <h3>About The Artist</h3>
                        <p>{artist.description}</p> 
                    </div>                         
                    <h3 class='past-h3'>Past Performances</h3>
                    <div className='performances'>
                        {pastPerformances}
                    </div>
                </div>
            </section>
        )
    } else {
        return <h1>Loading...</h1>
    }
}


export default EventPage