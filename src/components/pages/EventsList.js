import Search from "../Search"
import EventItem from "../EventItem"
// import events from "src/data"


function EventList ( {events} ) {

    const allEvents = events.map(event => {
       return <EventItem key={event.id} event={event}/>
    })
    return (

        <section> 
            <Search />
            <h1>Event List</h1>
            {allEvents}
        </section>
        
    )
   
}
    
    export default EventList