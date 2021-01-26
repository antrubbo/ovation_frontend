import {useEffect, useState} from "react"
import Home from "./pages/Home"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import EventsList from "./pages/EventsList"
import EventPage from "./pages/EventPage"
import UserPage from "./pages/UserPage"
import Navbar from "./Navbar"
import Header from "./Header"
import { Redirect, Route, Switch } from "react-router-dom";
// import events from "../data/events"
// import artists from "../data/artists"
// import tickets from "../data/tickets"
// import users from "../data/users"

function App() {
  const baseUrl = "http://localhost:3000"
  
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState([])
  const [errors, setErrors] = useState("")
  const [tickets, setTickets] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  

  useEffect(() => {
    fetch(`${baseUrl}/events`)
      .then(r => r.json())
      .then(events => setEvents(events))
  },[])

  function handleLogin(formData) {

    // console.log(formData)

    fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(data => {
          if (data.name) {
            setCurrentUser(data)
          } else {
            alert("Email not found!")
          }
        });
  }

  function handleLogout() {
    setCurrentUser(null);
    <Redirect to="/"/>
  }

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

  // if (currentUser) {
  //   setTickets(currentUser.tickets)
  // }

  return (
    <div>
      <Header />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} onLogOut={handleLogout}/>
      <Switch>
        <Route exact path="/user/:id">
          <UserPage currentUser={currentUser}/>
        </Route>
        <Route exact path="/events/:id">
          <EventPage tickets={tickets} setTickets={setTickets} currentUser={currentUser}/>
        </Route>
        <Route exact path="/events">
          <EventsList shuffle={shuffle} events={events} />
        </Route>
        <Route exact path="/login">
          <LoginPage onLogIn={handleLogin} currentUser={currentUser} name={name} setName={setName} email={email} setEmail={setEmail}/>
        </Route>
        <Route exact path="/signup">
          <SignupPage currentUser={currentUser} errors={errors} setErrors={setErrors} setCurrentUser={setCurrentUser} baseUrl={baseUrl} name={name} setName={setName} email={email} setEmail={setEmail}/>
        </Route>
        <Route exact path="/">
          <Home shuffle={shuffle} events={events}/>
        </Route>
    </Switch>
    </div>
  );
}

export default App;
