import Search from "../Search"
import EventItem from "../EventItem"
// import events from "src/data"


function EventList ( {events} ) {

    const allEvents = events.map(event => {
       return <EventItem key={event.id} event={event}/>
    })
    return (

        <section> 
            <div>
                <Search />
                <h1>Event List</h1>
                {allEvents} 
            </div>
        </section>
        
    )
   
}
    
    export default EventList