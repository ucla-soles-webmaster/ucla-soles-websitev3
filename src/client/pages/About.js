import React, { useState, useEffect } from "react";
import { Popover } from "bootstrap";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import './About.css';
import 'react-vertical-timeline-component/style.min.css';
import kellyAwardPic from "../photos/kelly-award-pic.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import SOLES from '../icons/soles.png';
import SHPE from '../icons/shpe.png';
import CEED from '../icons/ceed.png';

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
    <div className="">
      <h2 className="mission fw-bold">Mission Statement</h2>
      <p>SOLES changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development. Learn more about SHPE's mission.</p>
      <h2 className="vision fw-bold">Vision</h2>
      <p>SOLE's vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians and engineers.</p>
      <div className="history mb-5">
      <h2 className="text-center fw-bold mb-5">HISTORY</h2>
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

      {/* Full-width yellow background section */}
      <div className="position-relative w-100 mb-5">
        {/* Yellow background */}
        <div className="bg-yellow w-100 py-4">
          <div className="container">
            <div className="row">
              {/* Right side: Awards Text */}
              <div className="offset-lg-5 col-lg-7 col-12 pe-lg-5 px-3 text-start">
                <h5 className="fw-bold text-uppercase">Awards</h5>

                <p className="mb-1 fw-bold">Blue Chip Chapter Award</p>
                <p className="mb-2">2022 • 2021 • 2020 • 2017 • 2016 • 2015</p>
                <p className="mb-3">
                  Awarded during the annual SHPE Regional Leadership Development Conference to chapters
                  shown to provide outstanding metrics throughout the year, exhibiting growth and success.
                </p>

                <p className="mb-1 fw-bold">2020 Runner Up for Bruin Development Award</p>
                <p className="mb-3">
                  Recognized by UCLA's Engineering Society for our commitment to developing our members.
                </p>

                <p className="mb-1 fw-bold">Best Medium Engineering Student Organization at UCLA 2017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image overlapping the yellow box */}
        <div className="position-absolute start-0 top-50 translate-middle-y d-none d-lg-block" style={{ marginLeft: '18%' }}>
          <img
            src={kellyAwardPic}
            alt="Kelly Award"
            className="shadow"
            style={{
              height: '340px',
              objectFit: 'cover',
              zIndex: 2
            }}
          />
        </div>
      </div>
    </div>
  );
}
