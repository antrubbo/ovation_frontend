import {useState} from "react"
import { useHistory } from "react-router-dom"

function LoginPage ({currentUser, setCurrentUser, email, setEmail, errors, setErrors, baseUrl}) {
    const [fakePassword, setFakePassword] = useState("")
    const history = useHistory()

    function onLoginSubmit(evt) {
        evt.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
            })
            .then((r) => r.json())
            .then(user => {
                console.log(user)
                console.log(email)
                if (user.errors) {
                    setErrors(user.errors)
                } else {
                    setCurrentUser(user)
                    setErrors("")
                    history.push(`/user/${user.id}`)
                }
            });
        setEmail("")
        setFakePassword("")
    }

    return (
        <div className="login">
            {currentUser ? null : <h1>Log In</h1>}
            <div>
                {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
                {errors ? <p key={errors} style={{ color: 'red' }}>*{errors}</p> : null}
                <form onSubmit={onLoginSubmit}>
                    <input class="searchTerm" type="text" placeholder="Email Address.." value={email} onChange={evt => setEmail(evt.target.value)}></input>
                    <input class="searchTerm" type="text" placeholder="Password.." value={fakePassword} onChange={evt => setFakePassword(evt.target.value)}></input>
                    <input type="submit" value="Log In"></input>
                </form>
            </div>
        </div>
    )
}

export default LoginPage