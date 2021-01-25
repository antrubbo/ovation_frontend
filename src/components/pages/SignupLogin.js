import Signup from '../Signup'
import Login from '../Login'

function SignupLogin ({onLogIn, currentUser}) {

    return (
        <>
            <h1>SignUpLogin</h1>
            <div>
                <button onClick={onLogIn}>Log in</button>
                {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
            </div>
        </>
    )
}
    
    export default SignupLogin