// Navbar, artist info, 3 videos 
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player"


function EventPage ( {currentUser }) {

    const [event, setEvent] = useState(null)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/events/${params.id}`)
            .then(r => r.json())
            .then(newEvent => setEvent(newEvent))
    }, [params.id])

    // console.log(event)

    function buyTicket(e) {
        console.log(e.target)
        console.log(currentUser)

        const formBody = {
            user_id: currentUser.id,
            event_id: event.id
        }

        fetch("http://localhost:3000/tickets", 
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formBody)
        })
            .then(r => r.json())
            .then(ticket => console.log(ticket))

    }

    if (event) {
        const {name, date, artist, time, event_url, location } = event
        
        const pastPerformances = artist.past_performances.map((performance) => {
            return ( 
                <div>
                    <ReactPlayer
                        url={performance}
                    />
                </div>
            )
        })

        return (
            <section> 
                <div> 
                    <div className='event-page-info'> 
                        <div className="event-page-image"> 
                            <img src={artist.picture} alt={artist.name}></img>
                        </div>
                        <div className='event-page-content'>
                            <h3>{name}</h3>
                            <p> {location} </p> 
                            {currentUser ? <button onClick={buyTicket}> Buy a ticket </button> : null }
                            <a href={event_url}> See this event on SongKick </a>
                        </div> 
                    </div>
                    <div className='event-page-info'>
                        <div>
                            <h3>About the artist</h3>
                            <p>{artist.name}</p> 
                        </div>
                    </div>
                    <div className='performances'>
                        <h3>Past Performances</h3>
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