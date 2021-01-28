import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"

function EventItem ( {event}) {
    const history = useHistory()
    
    const { id, name, artist, description, time, date } = event 

    function changeOpacity(evt) {
        console.log(evt.target)
    }
    
    return (
        <div className="event-card">
            <div className="all-event-image-div"> 
                <img src={event.artist.picture} alt={event.artist.name} onMouseOver={changeOpacity} onClick={() => history.push(`/events/${event.id}`)}></img>
            </div>
            <div className="event-text-content">
                <h1>{name}</h1> 
                <p>Who -- {artist.name}</p>
                <p>Date -- {date} </p>
                <p>Time -- {event.time ? event.time.slice(11, 16) : "TBA"}</p>
            </div>
        </div>
    )
}

export default EventItem