import ovationLogo from "../logo.jpeg"

function Header () {
    return (
        <div className="header">
            <div id="logo-div">
                <img src={ovationLogo} alt="Ovation Logo" id="logo"></img>
            </div>
            <div>
                <h3 id="logoH3">Get Out - Go to Shows - Give an Ovation</h3>
            </div>
        </div>
    )
    }
    
    export default Header