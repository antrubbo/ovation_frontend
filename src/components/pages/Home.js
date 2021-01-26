
function Home ( {events, shuffle} ) {

      shuffle(events)
    //   console.log(events)

    const fiveEvents = events.slice(0, 5).map((event) => {
        return (
            <div key={event.id} className='home-event-card'>
                    <div className="event-image-div">
                        <img src={event.artist.picture} alt={event.artist.name}></img>
                    </div>
                    <div className="event-text-content">
                        <h3>{event.name}</h3>
                        <p>Where -- {event.location} </p>
                        <p>When -- {event.date}</p>
                    </div>
                </div>
        )
    })

    return (
        <section>
            <div className="main-home">
                <h1 id="homeH1">I'm Home</h1> 
                {fiveEvents} 
            </div>        
            
        </section>
    )
}

export default Home