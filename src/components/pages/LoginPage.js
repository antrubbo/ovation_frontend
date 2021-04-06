import { useHistory } from "react-router-dom"
// import { useEffect } from "react"

function LoginPage ({currentUser, setCurrentUser, email, setEmail, errors, setErrors, password, setPassword, baseUrl}) {
    const history = useHistory()

    function onLoginSubmit(evt){
        evt.preventDefault()
        const formData = {
            email: email, 
            password: password
        }
        fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then(user => {
                console.log(user)
                if (user.error) {
                    setErrors(user.error)
                } else {
                    setCurrentUser(user.user)
                    setErrors("")
                    localStorage.setItem("token", user.token)
                    history.push(`/events`)
                }
            });
    }

    return (
        <div className="login">
            {currentUser ? null : <h1>Log In</h1>}
            <div>
                {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
                {errors ? <p key={errors} style={{ color: 'red' }}>*{errors}</p> : null}
                <form onSubmit={onLoginSubmit}>
                    <input class="searchTerm" type="text" placeholder="Email Address..." value={email} onChange={evt => setEmail(evt.target.value)}></input>
                    <input class="searchTerm" type="password" placeholder="Password..." value={password} onChange={evt => setPassword(evt.target.value)}></input>
                    <input className='formButton' type="submit" value="Log In"></input>
                </form>
            </div>
        </div>
    )
}

export default LoginPage