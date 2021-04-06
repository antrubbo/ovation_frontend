import {useState} from "react"
import { useHistory } from "react-router-dom"

function SignupPage({errors, setErrors, currentUser, setCurrentUser, baseUrl, name, email, setName, setEmail, password, setPassword}) {
    const [picture, setPicture] = useState("")
    const history = useHistory()

    function setUserStateToQuotes() {
        setName("")
        setEmail("")
        setPicture("")
        setPassword("")
    }

    function onFormSubmit(evt) {
      evt.preventDefault()
      const formData = {
        name,
        email,
        picture: picture ? picture : "https://www.thebalancecareers.com/thmb/p8dJbwwp5yyEzYA5SvuarUkZzRU=/1500x844/smart/filters:no_upscale()/GettyImages-639920934-5a0ce0d40d327a003650bbf4-5c09914f46e0fb00017183bb.jpg",
        password
      }
      
      fetch(`${process.env.REACT_APP_API_BASE_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(user => {
          console.log(user)
          if(user.error) {
            setErrors(user.error)
            setUserStateToQuotes()
          } else {
            setCurrentUser(user.user)
            setErrors("")
            localStorage.setItem("token", user.token)
            history.push(`/events`)
          }
        })
        setUserStateToQuotes()
      }
      
      return (
        <div className="signup">
            {currentUser ? <h1>You've been successfully signed up, {currentUser.name}!</h1> : <h1>Sign Up</h1>}
            {errors !== "" ? errors.map(error => <p key={error} style={{ color: 'red' }}>*{error}</p>) : null}
            <form onSubmit={onFormSubmit} >
                <input className="searchTerm" type="text" placeholder="Name..." value={name} onChange={evt => setName(evt.target.value)}></input>
                <input className="searchTerm" type="text" placeholder="Email Address..." value={email} onChange={evt => setEmail(evt.target.value)}></input>
                <input className="searchTerm" type="text" placeholder="Picture Url..." value={picture} onChange={evt => setPicture(evt.target.value)}></input>
                <input className="searchTerm" type="password" placeholder="Password..." value={password} onChange={evt => setPassword(evt.target.value)}></input>
                <input className="formButton" type="submit"></input>
            </form>
        </div>
    )
}

export default SignupPage