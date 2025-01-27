/* global google */

import {useState, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";
import axios from 'axios'; 

function Login() {
    const [user, setUser] = useState({});
    const [additionalInfo, setAdditionalInfo] = useState({
        major: "",
        graduationDate: "",
    });
    const majorsList= ["Aerospace Engineering","BioEngineering",
    "Chemical Engineering","Civil & Environmental Engineering",
    "Computer Engineering","Computer Science",
    "Computer Science & Engineering","Electrical Engineering",
    "Materials Engineering","Mathematics",
    "Mechanical Engineering","Other"]
    const [isOtherMajor, setIsOtherMajor] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    function handleCallbackResponse(response) {
        // console.log("Google Sign-In Response:", response);
        // console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        setUser(userObject);
            // Check if the user exists or needs additional info
        fetch("http://localhost:5555/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: userObject.email,
                name: userObject.name,
                picture: userObject.picture,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.user && data.user.major && data.user.gradDate) {
                // User exists and has all required fields
                setFormVisible(false);
            } else {
                // User needs to provide additional information
                setFormVisible(true);
            }
            setIsSignedIn(true);
        })
        .catch((error) => console.error("Error checking user:", error));
    }

    function handleSignOut(){
        setUser({});
        setAdditionalInfo({ major: "", graduationDate: "" });
        setFormVisible(false);
        setIsSignedIn(false);
        document.getElementById("signInDiv").hidden = false;
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        if (name === "major") {
            setIsOtherMajor(value === "Other");
            setAdditionalInfo((prevInfo) => ({
                ...prevInfo,
                major: value === "Other" ? "" : value,
            }));
        } else if (name === "otherMajor") {
            setAdditionalInfo((prevInfo) => ({
                ...prevInfo,
                major: value, // Assign the text input value to the major
            }));
        } else {
            setAdditionalInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value,
            }));
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // Save user data to MongoDB
        const userData = {
            name: user.name,
            email: user.email,
            picture: user.picture,
            major: additionalInfo.major,
            gradDate: additionalInfo.graduationDate,
            admin: false
        };
        console.log("Submitting userData:", userData); // Debugging
        fetch("http://localhost:5555/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log("User saved:", data);
            setFormVisible(false); // Hide form after submission
            })
            .catch((error) => {
            console.error("Error saving user:", error);
            });
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "744790478987-ndu4hi5qtf1nk9lfkhjoj3ii9105aui6.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        if (!window.promptCalled) {
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                {theme: "outline", size: "large"}
            );
            
            google.accounts.id.prompt();
            window.promptCalled = true; // Prevent multiple calls
        }
        },[]);

        return (
            <div className="App">
                <div id="signInDiv"></div>
                {isSignedIn && <button onClick={handleSignOut}>Sign Out</button>}
                
                {isFormVisible && (
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Major:
                            <select
                                name="major"
                                value={isOtherMajor ? "Other" : additionalInfo.major}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Major</option>
                                {majorsList.map((major) => (
                                <option key={major} value={major}>
                                    {major}
                                </option>
                                ))}
                            </select>
                        </label>
                        {isOtherMajor && (
                            <label>
                                <input
                                    type="text"
                                    name="otherMajor"
                                    placeholder="Enter your major here"
                                    value={additionalInfo.major}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        )}
                        <label>
                            Graduation Date:
                            <input
                                type="month"
                                name="graduationDate"
                                value={additionalInfo.graduationDate}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                )}
                {isSignedIn && (
                    <>
                        <div className="banner">
                            <div className="leftSide">
                                <img alt="" />
                            </div>
                            <div className="rightSide">
                                <h3>{user.name}</h3>
                                <h3>{user.email}</h3>
                            </div>
                        </div>
                        <h2>SOLECITO RESOURCES</h2>
                        <button className="favorite styled" type="button">Textbook Bank</button>
                        <button className="favorite styled" type="button">Test Bank Google Drive</button>
                        <button className="favorite styled" type="button">MentorSHPE Slack Channel</button>
                    </>
                )}
            </div>
            )
}

export default Login;
