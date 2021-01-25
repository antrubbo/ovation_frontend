
function Home ( {events} ) {

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      shuffle(events)
      console.log(events)

    const fiveEvents = events.slice(0, 5).map((event) => {
        return (
            <div class='home-event-card'>
                    <div className="event-image-div">
                        <img src={event.artist.picture} alt={event.name}></img>
                    </div>
                    <div className="event-text-content">
                        <h3>{event.name}</h3>
                        <p>{event.date}</p>
                    </div>
                </div>
        )
    })

    return (
        <section>
            <div className="main-home">
                <h1>I'm Home</h1> 
                {fiveEvents}
                
            </div>        
            
        </section>
    )
}

export default Home