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

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [events, setEvents] = useState([])
  const [errors, setErrors] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/events`)
      .then(r => r.json())
      .then(events => setEvents(events))
  },[])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
    fetch(`${process.env.REACT_APP_API_BASE_URL}/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(r => r.json())
    .then(user => {
      setCurrentUser(user)
    })
  }
  }, [])

  function handleLogout() {
    localStorage.removeItem('token')
    setCurrentUser(null);
    <Redirect to="/"/>
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  return (
    <div className="app">
      <div id="left" className="column"> 
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} onLogOut={handleLogout}/>
      </div>
      <div id="right" className="column"> 
        <Header />
          <Switch>
            <Route exact path="/user/:id">
              <UserPage email={email} setEmail={setEmail} name={name} setName={setName} setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogout={handleLogout}/>
            </Route>
            <Route exact path="/events/:id">
              <EventPage  currentUser={currentUser}/>
            </Route>
            <Route exact path="/events">
              <EventsList shuffle={shuffle} events={events} />
            </Route>
            <Route exact path="/login">
              <LoginPage errors={errors} setErrors={setErrors} currentUser={currentUser} setCurrentUser={setCurrentUser} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            </Route>
            <Route exact path="/signup">
              <SignupPage currentUser={currentUser} errors={errors} setErrors={setErrors} setCurrentUser={setCurrentUser} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            </Route>
            <Route exact path="/">
              <Home shuffle={shuffle} events={events}/>
            </Route>
          </Switch>
      </div>
    </div> 
  );
}

export default App;
