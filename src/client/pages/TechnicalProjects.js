import React from "react";
import solesAI1 from "../photos/soles_ai1.jpg";
import solesRacing1 from "../photos/soles_racing1.JPG";
import solesWebDev1 from "../photos/soles_webdev1.jpg";
//import solesWebDev2 from "../photos/soles_webdev2.jpg";
//import solesWebDev3 from "../photos/soles_webdev3.jpg";
//import solesWebDev4 from "../photos/soles_webdev4.jpg";
import './TechnicalProjects.css';

//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "red", borderRadius: "50%" }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "green", borderRadius: "50%" }}
          onClick={onClick}
      />
  );
}

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default function TechnicalProjects() {
    return (
    <div>
    <div className="overview_container">
    <div className="techprojects_container">
        <h1 className="techprojects_heading">Technical Projects</h1>
        </div>
  
  <div className="column_container">
    <div className="image_container">
      <img src={solesAI1} alt="SOLES AI 1" className="solesAI1" />
    </div>
    <div className="text_container">
      <h3>SOLES.AI</h3>
      <p>SOLES.AI is an organization providing seminars on artificial intelligence and machine learning to students. They also offer opportunities to work on computer vision projects, allowing participants to gain hands-on experience in developing algorithms and models for image analysis and interpretation. Through these initiatives, SOLES.AI empowers students to explore and excel in the dynamic fields of AI and machine learning, preparing them for future careers in technology.</p>
    </div>
  </div>

  <div className="column_container">
    <div className="image_container">
      <img src={solesRacing1} alt="SOLES Racing 1" className="solesRacing1" />
    </div>
    <div className="text_container">
      <h3>SOLES Racing</h3>
      <p>SOLES Racing tackles a technical project teaching students how to design, build, and test a hydrogen powered RC car. Students will learn how to design and manufacture parts using CAD softwares, 3D printers, CNC machines, and carbon fiber. Students will learn how to handle hydrogen fuel cells and learn how hydrogen can be a renewable fuel for sustainable transportation. Students will have to take the car through several iterative design and test phases to verify safety and performance metrics. Our team has successfully built two cars and assembled a 30 Watt fuel cell. Our sub-teams are focused on integrating the fuel cell on to the car without sacrificing performance, stability, or efficiency. Students are directly working with modifying suspension components, soldering, and energy management.</p>
    </div>
  </div>

  <div className="column_container">
    <div className="image_container">
      <img src={solesWebDev1} alt="SOLES Web Dev" className="solesWebDev" />
    </div>
    <div className="text_container">
      <h3>SOLES Web Developer</h3>
      <p>The SOLES Web Dev team consists of students working collaboratively to develop a website seen by members and company sponsors. We use ReactJS for frontend, Node.js with Express.js for backend, and Firebase/MongoDB for our database. Students go through the entire process, from UI/UX designing, coding collaboratively, and pushing changes to GitHub. Our website https://uclasoles.org/ has information about SOLES, our events, technical projects, as well as a merch shop and general meeting info. We also have a testbank and an alumni network for current SOLES members to access. We are actively making improvements and adding new features; all in all a great opportunity for students to learn web development!</p>
    </div>
  </div>
</div>
</div>
);
}