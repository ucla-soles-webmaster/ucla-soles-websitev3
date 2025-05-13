/* global google */

import React from "react";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from 'axios'; 
import "./Login.css"
import sun from "../photos/sunblue 1.png";

export default function Login() {
    const navigate = useNavigate();
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
            setIsSignedIn(true); // User is signed in
            let userData = {
                name: userObject.name,
                email: userObject.email,
                picture: userObject.picture,
                major: data.user?.major || "",
                gradDate: data.user?.gradDate || ""
            };
            setUser(userData);

            if (data.user && data.user.major && data.user.gradDate) {
                // Existing user with all required fields
                setFormVisible(false);
            } else {
                // New user needs to provide major & graduation date
                setFormVisible(true);
            }
            localStorage.setItem("user", JSON.stringify(userData));
        })
        .catch((error) => console.error("Error checking user:", error));
    }

    function handleSignOut(){
        setUser({});
        setAdditionalInfo({ major: "", graduationDate: "" });
        setFormVisible(false);
        setIsSignedIn(false);
        // document.getElementById("signInDiv").hidden = false;
        localStorage.removeItem("user");
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
        const updatedUser = {
            ...user,
            major: additionalInfo.major,
            gradDate: additionalInfo.graduationDate,
        };
        console.log("Submitting userData:", updatedUser); // Debugging
        fetch("http://localhost:5555/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("User saved:", data);
            setUser(updatedUser);
            setFormVisible(false);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        })
        .catch((error) => {
            console.error("Error saving user:", error);
        });
    }

    useEffect(() => {
        const cachedUser = localStorage.getItem("user");
        if (cachedUser) {
            const userData = JSON.parse(cachedUser);
            setUser(userData);
            setIsSignedIn(true);
    
            // If major & gradDate exist, don't show the form
            if (userData.major && userData.gradDate) {
                setFormVisible(false);
            } else {
                setFormVisible(true);
            }
            return;
        }

        google.accounts.id.initialize({
            client_id: "744790478987-ndu4hi5qtf1nk9lfkhjoj3ii9105aui6.apps.googleusercontent.com",
            callback: handleCallbackResponse,
            auto_select: true
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    
        google.accounts.id.prompt();
        },[]);

        return (
            <div className="App">
                {!isSignedIn && <div id="signInDiv"></div>}
                {/* {isSignedIn && <button onClick={handleSignOut}>Sign Out</button>} */}
                
                {isFormVisible ? (
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
                ) : (
                    <>
                        <div className="banner p-3 position-relative">
                            {isSignedIn && (
                                <button
                                onClick={handleSignOut}
                                className="btn btn-outline-dark position-absolute top-0 end-0 m-3"
                                style={{ zIndex: 10 }}
                                >
                                Sign Out
                                </button>
                            )}
                            <div className="container">
                            <div className="row align-items-center">
                            {/* Left side (logo + profile image) */}
                            <div className="col-md-4 col-12 position-relative text-center mb-3 mb-md-0">
                                <img
                                src={sun}
                                alt="logo"
                                className="img-fluid"
                                style={{ width: "160px", maxWidth: "100%" }}
                                />
                                {/* Profile picture */}
                                <img
                                src={user.picture}
                                alt="profile"
                                className="rounded-circle border border-white position-absolute"
                                style={{
                                    width: "75px",
                                    height: "75px",
                                    objectFit: "cover",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1,
                                }}
                                />
                            </div>

                            {/* Right side (name + major) */}
                            <div className="col-md-8 col-12 text-md-start text-center">
                                <h4 className="mb-4">{user.name}</h4>
                                <h5 className="text-muted">Major: {user.major ? user.major : "Not Provided"}</h5>
                                <h5 className="text-muted">
                                Expected Graduation: {user.gradDate
                                    ? new Date(`${user.gradDate}-01T00:00:00Z`).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        timeZone: "UTC"  // <--- Force UTC to avoid month shifting
                                    }) : "Not Provided"} </h5>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="resources">
                            <div className="resourceTitle"><h2>SOLECITO RESOURCES</h2></div>
                            <div className="resourceButtons">
                                <button className="resourceButton" type="button" onClick={() => navigate("/alumnet")}>Alumni Network</button>
                                <button className="resourceButton" type="button" onClick={() => window.open("https://photos.google.com/share/AF1QipNgBJUn6SYd-xPVUKh6jJUIMQ1YhkTALIawn4lVaBQgnMR0CaO0eG_M_uSrHblKLg?key=ejNRTnBscUswRHhoY2ZHWnd6cElrMUYybVhfc3B3")}>Photo Album</button>
                                <button className="resourceButton" type="button" onClick={() => window.open("", "_blank")}>Textbook Bank</button>
                                <button className="resourceButton" type="button" onClick={() => window.open("", "_blank")}>Test Bank Google Drive</button>
                                <button className="resourceButton" type="button" onClick={() => window.open("", "_blank")}>MentorSHPE Slack Channel</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            )
}
