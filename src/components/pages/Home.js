
function Home () {

    return (
        <section>
            <div className="main-home">
                <h1>I'm Home</h1> 
                {/* We'll want to fetch 5 events and render the below div card for each */}
                <div class='home-event-card'>
                    <div className="event-image-div">
                    </div>
                    <div className="event-text-content">
                    </div>
                </div>
            </div>        
            
        </section>
    )
}

export default Home