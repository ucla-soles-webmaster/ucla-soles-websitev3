import {useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";

function Login() {
    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {

        console.log("Encoded JWT ID token: " + response.credetial);
        var userObject = jwtDecode(response.credential);
        console.log(userObject)
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event){
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "744790478987-ndu4hi5qtf1nk9lfkhjoj3ii9105aui6.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
            );
        
        google.accounts.id.prompt();
            
        },[]);

        return (
            <div className="App">
                <div id="signInDiv"></div>
                {
                    Object.keys(user).length !== 0 && (
                    <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
                )}
                { user && 
                    <div>
                        <img src={user.picture}alt=""></img>
                        <h3>{user.name}</h3>
                    </div>
                }
                </div>
                )
}

export default Login;
