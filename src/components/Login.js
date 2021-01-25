function Login ({currentUser, onLogIn}) {
    return (
        <>
            <h1>This is the Log In Page</h1>
            <div>
                <button onClick={onLogIn}>Log In</button>
                {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
            </div>
        </>
    )
}

export default Login