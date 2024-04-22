import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Chrono } from "react-chrono";
import { Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import './About.css';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
    const historyData = [
        {
          year: 1974,
          title: "SHPE Founded",
          description: "The Society of Hispanic Professional Engineers was founded in the Los Angeles area. Their objective is to form a national organization of professional Engineers to serve as role models in the Hispanic community."
        },
        {
          year: 1978,
          title: "SOLES Founded",
          description: "The Society of Latinx Engineers and Scientists was established as a chapter of SHPE at UCLA with the intent of increasing Hispanic representation amongst STEM majors at the university."
        },
        {
          year: 1983,
          title: "CEED Founded",
          description: "The Center for Excellence in Engineering and Diversity was established at UCLA to bolster the representation of underrepresented minorities in engineering at UCLA."
        },
        {
          year: 1992,
          title: "UCLA Tri-Org Founded",
          description: "Comprising of the Society of Latinx Engineers and Scientists, the National Society of Black Engineers and the American Indian Science and Engineering Society, the UCLA Tri-Org was formed to increase the representation of minority peoples in STEM fields."
        }
    ];
      
    return (
        <div className='about'>
            <div className='page-title'>About</div>
            <div className="mission-and-vision">
                MISSION STATEMENT
                SOLES changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development. Learn more about SHPE's mission.
                View Bylaws of SOLES


                VISION
                SOLE's vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians and engineers.
            </div>
            {/* <div className='timeline'>
                <VerticalTimeline layout='1-column-left' lineColor='#001d3a'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1992"
                    iconStyle={{ background: 'black', color: '#001d3a' }}
                >
                    <h3 className="vertical-timeline-element-title" style={{color: '#001d3a'}}>UCLA Tri-Org Founded</h3>
                    <p style={{color: '#898c8c'}}>
                        Comprising of the Society of Latino Engineers, the National Society of Black 
                        Engineers and the American Indian Science and Engineering Society, the UCLA 
                        Tri-Org was formed in 1992 to increase the representation of minority peoples in STEM fields.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1983"
                    iconStyle={{ background: 'lightblue', color: '#001d3a' }}
                >
                    <h3 className="vertical-timeline-element-title">CEED Founded</h3>
                    <p style={{color: '#898c8c'}}>
                        In 1983 The Center for Excellence in Engineering and Diversity was established at UCLA to bolster
                        the representation of underrepresented minorities in engineering at UCLA.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1978"
                    iconStyle={{ background: 'rgba(254, 254, 84, 1)', color: '#001d3a' }}
                >
                    <h3 className="vertical-timeline-element-title">SOLES Founded</h3>
                    <p style={{color: '#898c8c'}}>
                        The Society of Latino Engineers was established in 1978 as a chapter of SHPE at UCLA with the 
                        intent of increasing Hispanic representation amongst STEM majors at the university.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1974"
                    iconStyle={{ background: '#fd662f', color: '#001d3a' }}
                >
                    <h3 className="vertical-timeline-element-title">SHPE Founded</h3>
                    <p style={{color: '#898c8c'}}>
                        The Society of Hispanic Professional Engineers was founded in the Los Angeles area in 1974. Their 
                        objective is to form a national organization of professional Engineers to serve as role models in 
                        the Hispanic community.
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div> */}
            <div className="timeline-container">
                <div className="timeline">
                    {historyData.sort((a, b) => a.year - b.year).map((event, index) => (
                    <div key={index} className="timeline-event">
                        <div className="event-year">{event.year}</div>
                        <div className="event-content">
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <Timeline horizontal>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>February 2022</Timeline.Time>
                    <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </Timeline.Body>
                    {/* <Button color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button> */}
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>March 2022</Timeline.Time>
                    <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                    <Timeline.Body>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>April 2022</Timeline.Time>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>            
            <div className='awards'>
                AWARDS

                Blue Chip Chapter Award2022 • 2021 • 2020 • 2017 • 2016 • 2015
                Awarded during the annual SHPE Regional Leadership Development Conference to chapters shown to provide outstanding metrics throughout the year, exhibiting growth and success.

                2020 Runner Up for Bruin Development Award
                Recognized by UCLA's Engineering Society for our commitment to developing our members.

                Best Medium Engineering Student Organization at UCLA 2017
            </div>
        </div>
    )
}