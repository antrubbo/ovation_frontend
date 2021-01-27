import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"

function Home ( {events, shuffle} ) {
    const history = useHistory()

    shuffle(events)

    const fiveEvents = events.slice(0, 5).map((event) => {

        return (
            <div key={event.id} className='home-event-card'>
                    <div className="event-image-div">
                        <img src={event.artist.picture} alt={event.artist.name} onClick={() => history.push(`/events/${event.id}`)}></img>
                    </div>
                    <div className="event-text-content">
                        <h3>{event.name}</h3>
                        <p>Where -- {event.location} </p>
                        <p>Date -- {event.date}</p>
                        <p>Time -- {event.time ? event.time.slice(11, 16) : "TBA"}</p>
                    </div>
            </div>
        )
    })

    return (
        <div className="main-home" id="right">
            {fiveEvents} 
        </div>
    )
}

export default Home