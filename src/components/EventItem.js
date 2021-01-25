import { Link } from "react-router-dom";

function EventItem ( {event}) {
    
    const { id, name, artist, description, time, date } = event 
    
    return (
        <div className="event-card">
            <div className="event-image-div"> 
                <img src={event.artist.picture} alt={event.artist.name}></img>
            </div>
            <div className="event-text-content">
                <h1>{name}</h1> 
                <p> Who: {artist.name}</p>
                <p> When: {date} </p>
                <p> 
                    <Link to={`/events/${id}`}>See Details</Link>
                </p>
            </div>
        </div>
    )
}

export default EventItem