import React from "react";
import solesAI1 from "../photos/soles_ai1.jpg";
import solesRacing1 from "../photos/soles_racing1.JPG";
//import solesRacing2 from "../photos/soles_racing2.JPG";
import solesWebDev1 from "../photos/soles_webdev1.jpg";
import './TechnicalProjects.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <p>SOLES Racing studies the development of 3D-printed RC cars and explores hydrogen fuel cells for sustainable power, partnering with Bruin Racing-Super Mileage Vehicle for research and innovation. With a focus on cutting-edge technology and sustainability, SOLES Racing drives progress in the automotive industry while inspiring future engineers.</p>
    </div>
  </div>

  <div className="column_container">
    <div className="image_container">
      <img src={solesWebDev1} alt="SOLES Web Dev" className="solesWebDev" />
    </div>
    <div className="text_container">
      <h3>SOLES Web Developer</h3>
      <p>SOLES Web Developer is an organization focused on teaching students JavaScript and CSS for website creation and management. Students have the opportunity to work on the official SOLES website, gaining practical experience and learning essential web development skills. By participating, students develop problem-solving abilities, collaboration skills, and a strong foundation in web development.</p>
    </div>
  </div>
</div>

);
}