import React from "react";
import solesAI1 from "../photos/soles_ai1.jpg";
import solesRacing1 from "../photos/soles_racing1.JPG";
import solesWebDev1 from "../photos/soles_webdev1.jpg";

import './TechnicalProjects.css';

export default function TechnicalProjects() {
    return (
      <div>
        {/* Placeholder */}
        {/* <div className="coverImage d-flex align-items-center justify-content-center">
                <div className="overlay text-center text-white">
                    <h1 className="coverText display-3">SOLES|SHPE at UCLA</h1>
                </div>
            </div> */}

      <div class="container text-center" mt-5>
        <div class="row align-items-start">
          
          {/* Soles AI Section */}
      <div class="col-12 col-md-4" style={{paddingTop:125 }}>
      <h3>SOLES AI</h3>  
      <div className="image_container">
      <img src={solesAI1} alt="SOLES AI 1" className="solesAI1" />
      </div>
     <p>SOLES.AI is an organization providing seminars on artificial intelligence and machine learning to students. They also offer opportunities to work on computer vision projects, allowing participants to gain hands-on experience in developing algorithms and models for image analysis and interpretation. Through these initiatives, SOLES.AI empowers students to explore and excel in the dynamic fields of AI and machine learning, preparing them for future careers in technology.</p>
     
     <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
</div>
    </div>

    {/* Soles Racing Section */}
    <div class="col-12 col-md-4" style={{paddingTop:125 }}>
    <h3>SOLES Racing</h3>
    <div className="image_container">
        <img src={solesRacing1} alt="SOLES Racing 1" className="solesRacing1" />
      </div>  
      <p>SOLES Racing tackles a technical project teaching students how to design, build, and test a hydrogen powered RC car. Students will learn how to design and manufacture parts using CAD softwares, 3D printers, CNC machines, and carbon fiber. Students will learn how to handle hydrogen fuel cells and learn how hydrogen can be a renewable fuel for sustainable transportation. Students will have to take the car through several iterative design and test phases to verify safety and performance metrics. Our team has successfully built two cars and assembled a 30 Watt fuel cell. Our sub-teams are focused on integrating the fuel cell on to the car without sacrificing performance, stability, or efficiency. Students are directly working with modifying suspension components, soldering, and energy management.</p>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
    </div>



        {/* Soles Web Dev Section */}
    <div class="col-12 col-md-4" style={{paddingTop:125 }}>
    <h3>SOLES Web Dev</h3> 
    <div className="image_container" style={{paddingRight:10}}>
      <img src={solesWebDev1} alt="SOLES Web Dev" className="solesWebDev" />
    </div>
      <p>The SOLES Web Dev team consists of students working collaboratively to develop a website seen by members and company sponsors. We use ReactJS for frontend, Node.js with Express.js for backend, and Firebase/MongoDB for our database. Students go through the entire process, from UI/UX designing, coding collaboratively, and pushing changes to GitHub. Our website https://uclasoles.org/ has information about SOLES, our events, technical projects, as well as a merch shop and general meeting info. We also have a testbank and an alumni network for current SOLES members to access. We are actively making improvements and adding new features; all in all a great opportunity for students to learn web development!</p>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </button>
    </div>
          
  </div>
     </div>  
      </div>
  

//     <div>
//     <div className="overview_container">
//     <div className="techprojects_container">
//         <h1 className="techprojects_heading">Technical Projects</h1>
//         </div>
  
//   <div className="column_container">
//     <div className="image_container"> 
//       {/* <img src={solesAI1} alt="SOLES AI 1" className="solesAI1" /> */}
//     </div>
//     <div className="text_container">
//       <h3>SOLES.AI</h3>
//       <p>SOLES.AI is an organization providing seminars on artificial intelligence and machine learning to students. They also offer opportunities to work on computer vision projects, allowing participants to gain hands-on experience in developing algorithms and models for image analysis and interpretation. Through these initiatives, SOLES.AI empowers students to explore and excel in the dynamic fields of AI and machine learning, preparing them for future careers in technology.</p>
//     </div>
//   </div>

//   <div className="column_container">
//     <div className="image_container">
//       {/* <img src={solesRacing1} alt="SOLES Racing 1" className="solesRacing1" /> */}
//     </div>
//     <div className="text_container">
//       <h3>SOLES Racing</h3>
//       <p>SOLES Racing tackles a technical project teaching students how to design, build, and test a hydrogen powered RC car. Students will learn how to design and manufacture parts using CAD softwares, 3D printers, CNC machines, and carbon fiber. Students will learn how to handle hydrogen fuel cells and learn how hydrogen can be a renewable fuel for sustainable transportation. Students will have to take the car through several iterative design and test phases to verify safety and performance metrics. Our team has successfully built two cars and assembled a 30 Watt fuel cell. Our sub-teams are focused on integrating the fuel cell on to the car without sacrificing performance, stability, or efficiency. Students are directly working with modifying suspension components, soldering, and energy management.</p>
//     </div>
//   </div>

//   <div className="column_container">
//     <div className="image_container">
//       {/* <img src={solesWebDev1} alt="SOLES Web Dev" className="solesWebDev" /> */}
//     </div>
//     <div className="text_container">
//       <h3>SOLES Web Developer</h3>
//       <p>The SOLES Web Dev team consists of students working collaboratively to develop a website seen by members and company sponsors. We use ReactJS for frontend, Node.js with Express.js for backend, and Firebase/MongoDB for our database. Students go through the entire process, from UI/UX designing, coding collaboratively, and pushing changes to GitHub. Our website https://uclasoles.org/ has information about SOLES, our events, technical projects, as well as a merch shop and general meeting info. We also have a testbank and an alumni network for current SOLES members to access. We are actively making improvements and adding new features; all in all a great opportunity for students to learn web development!</p>
    
//     </div>
//   </div>
// </div>
// </div>

);
}