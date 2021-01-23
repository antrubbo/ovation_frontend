function EventItem ( {event}) {
    
    return (
        <div className="event-card">
            <div className="event-image-div"> 
            </div>
            <div className="event-text-content">
                <h1>{event.name}</h1> 
                <p>{event.description}</p>
                <h4>Details</h4>
                <p>{event.date}: {event.time} </p>
            </div>
        </div>
        
    )
}

export default EventItem