// import './components/App.css';
import Home from "./pages/Home"
import SignupLogin from "./pages/SignupLogin"
import EventsList from "./pages/EventsList"
import EventPage from "./pages/EventPage"
import UserPage from "./pages/UserPage"
import Navbar from "./Navbar"
import Header from "./Header"
import { Redirect, Route, Switch } from "react-router-dom";
// import events from "../data/events"
import artists from "../data/artists"
import tickets from "../data/tickets"
import users from "../data/users"
import react, {useEffect, useState} from "react"



function App() {
  const baseUrl = "http://localhost:3000"

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/events`)
      .then(r => r.json())
      .then(events => setEvents(events))
  },[])

  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/user/:id">
          <UserPage />
        </Route>
        <Route exact path="/events/:id">
          <EventPage />
        </Route>
        <Route exact path="/events">
          <EventsList events={events}  />
        </Route>
        <Route exact path="/login">
          <SignupLogin />
        </Route>
        <Route exact path="/">
          <Home events={events}/>
        </Route>
    </Switch>
    </div>
  );
}

export default App;
