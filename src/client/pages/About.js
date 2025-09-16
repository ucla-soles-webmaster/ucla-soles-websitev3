import React, { useState, useEffect } from "react";
import { Popover } from "bootstrap";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import './About.css';
import 'react-vertical-timeline-component/style.min.css';
import kellyAwardPic from "../photos/kelly-award-pic.png";
import SOLES from '../icons/soles.png';
import SHPE from '../icons/shpe.png';
import CEED from '../icons/ceed.png';
import CoverSection from "./CoverPhoto.js";
import aboutCoverImg from "../photos/covers/aboutcover.png";
import solesBorder from "../photos/solesborder.png";

export default function AwardsSection() {
  useEffect(() => {
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach(pop => new Popover(pop));
  }, []);

  const timelineData = [
    {
      year: "1974",
      title: "SHPE Founded",
      icon: SHPE,
      description: "The Society of Hispanic Professional Engineers was founded in Los Angeles in 1974. They aim to form a national organization of professional Engineers to serve as role models in the Hispanic community.",
    },
    {
      year: "1978",
      title: "SOLES Founded",
      icon: SOLES,
      description: "The Society of Latinx Engineers was established in 1978 as a chapter of SHPE at UCLA in hopes of increasing Latinx representation in  STEM majors at the university.",
    },
    {
      year: "1983",
      title: "CEED Founded",
      icon: CEED,
      description: "In 1983 The Center for Excellence in Engineering and Diversity was established at UCLA to bolster the representation of underrepresented minorities in engineering at UCLA.",
    },
    {
      year: "1992",
      title: "UCLA Tri-Org Founded",
      icon: SOLES,
      description: "Comprising of the Society of Latinx Engineers, the National Society of Black Engineers, and the American Indian Science and Engineering Society, the UCLA Tri-Org was formed in 1992 to increase the BIPOC in STEM.",
    },
  ];

  return (
    <div className="App">
      <CoverSection title="About Us" imageUrl={aboutCoverImg} />
      
      {/* Mission & Vision */}
      <div className="container my-5">
        <div className="row g-4 mx-3">
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="card-title about-title fw-bold mb-3">Mission Statement</h2>
                <p className="card-text mb-0">
                  SOLES changes lives by empowering the Hispanic community to realize its fullest
                  potential and to impact the world through STEM awareness, access, support, and
                  development. Learn more about SHPE's mission.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="card-title about-title fw-bold mb-3">Vision</h2>
                <p className="card-text mb-0">
                  SOLES’ vision is a world where Hispanics are highly valued and influential as the
                  leading innovators, scientists, mathematicians and engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="history-container">
        <h2 className="history fw-bold">History</h2>
        <div style={{ borderBottom: '1px solid black', zIndex: '-10', paddingTop: '40px' }}></div>
        <div className="d-flex flex-wrap justify-content-between timeline-container mx-auto">
          {timelineData.map((event, index) => (
            <div key={index} className="timeline-card px-2">
              <div
                className="timeline-dot"
                tabIndex="0"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                title={`${event.title} (${event.year})`}
                data-bs-content={event.description}
              >
                <img src={event.icon} alt={event.title} style={{ width: '24px', height: '24px' }} />
              </div>

              <p className="timeline-year">{event.year}</p>

              <div className="d-none d-lg-block mt-2 text-start small text-muted">
                <strong>{event.title}</strong>
                <p className="mb-0">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> 

      {/* Awards */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            
            {/* Image with Border - Left Side */}
            <div className="col-12 col-lg-5">
              <div className="position-relative award-image-container">
                {/* Border Frame */}
                <img
                  src={solesBorder}
                  alt="Decorative Border"
                  className="img-fluid border-frame"
                />
                
                {/* Award Photo Overlay */}
                <div className="award-photo-overlay">
                  <img
                    src={kellyAwardPic}
                    alt="Kelly Award"
                    className="img-fluid award-photo shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Text panel - Right Side */}
            <div className="col-12 col-lg-7">
              <div className="bg-soft-yellow rounded-4 shadow-sm p-4 p-md-5">
                <h2 className="text-uppercase fw-bold mb-4 about-title">Awards</h2>

                <div className="mb-4">
                  <h5 className="fw-bold mb-2 fs-5">Blue Chip Chapter Award</h5>
                  <p className="mb-0 fs-5 fw-bold">2022 • 2021 • 2020 • 2017 • 2016 • 2015</p>
                </div>

                <p className="lh-lg mb-4">
                  Awarded during the annual SHPE Regional Leadership Development Conference to chapters
                  shown to provide outstanding metrics throughout the year, exhibiting growth and success.
                </p>

                <div className="mb-3">
                  <h5 className="fw-bold mb-2 fs-5">2020 Runner Up for Bruin Development Award</h5>
                  <p className="lh-lg mb-0">
                    Recognized by UCLA's Engineering Society for our commitment to developing our members.
                  </p>
                </div>

                <h5 className="fw-bold fs-5 mb-0">
                  Best Medium Engineering Student Organization at UCLA 2017
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}