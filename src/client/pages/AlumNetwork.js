import './AlumNetwork.css';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios'; 


export default function AlumNetwork() {
    const navigate = useNavigate();
    const url = "mongodb+srv://<ucla-soles>:<ucla-soles>@uclawebmaster.icdi46x.mongodb.net/"; 
    const FirstRequest = () => {
        const fetchData = async () => {
            try{
                const response = await axios(url); 
                console.log(response); 
            } catch(error){
                console.log(error.response); 
            }
        }
        useEffect(() => {
        fetchData();
    }, []); 
    }; 

    return (
    <div className="container mt-5 pt-4 position-relative">
        <button
            onClick={() => navigate("/login")}
            className="btn btn-primary shadow-sm d-flex align-items-center gap-2 position-absolute"
            style={{ top: 0, left: 20 }}
        >
            <FaArrowLeft size={18} />
            <span className="d-none d-sm-inline">Return to Account Page</span>
        </button>
        <h1 className="h1">Alumni Network</h1>
        
        <p className="intro">
        The SOLES Alumni Network is a great tool for students and alumni alike. 
        If you are a student, feel free to reach out to any of the below listed
        alumni for career advice, job opportunities, or essentially anything! All
        the alumni would love to hear from current students.
        </p>

        <div className="alumniBoxes">
            <p className="h2">
                Aerospace Engineering Alumni
            </p>
           
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Chemical Engineering + Chemistry Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Civil Engineering Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Computer Science Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Electrical Engineering Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Materials Engineering Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Mechanical Engineering Alumni
            </p>
        </div>

        <div className="alumniBoxes">
            <p className="h2">
                Other Alumni
            </p>
        </div>


    </div>


    );
    
}