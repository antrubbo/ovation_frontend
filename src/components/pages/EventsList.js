import Search from "../Search"
import EventItem from "../EventItem"
// import events from "src/data"
import {useState} from "react"



function EventList ( {events, shuffle} ) {
    const [searched, setSearched] = useState("")

    shuffle(events)

    const allEvents = events.filter(event => {
        return event.artist.name.toLowerCase().includes(searched.toLowerCase())
    })
    .map(event => {
       return <EventItem key={event.id} event={event}/>
    })


    return (

        <section> 
            <div>
                <Search searched={searched} setSearched={setSearched} />
                <h1>Upcoming Events</h1>
                {allEvents} 
            </div>
        </section>
        
    )
   
}
    
    export default EventList