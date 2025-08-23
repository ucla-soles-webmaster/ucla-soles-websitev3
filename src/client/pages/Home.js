import solesPrez from "../photos/solespresident.png";
import prezSig from "../photos/solespresidentsig-transparent.png";
import temp from "../photos/tempimg.png";
import React, {useEffect} from "react";
import Calendar from "./Calendar.js";
import solesBorder from "../photos/solesborder.png";
import kellyAwardPic from "../photos/kelly-award-pic.png";
import SOLES from '../icons/soles.png';
import SHPE from '../icons/shpe.png';
import CEED from '../icons/ceed.png';
import './Home.css';
import { Popover } from "bootstrap";

export default function Home() {
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
        <div>
 
            {/* Full-width cover section */}
            <div className="coverImage d-flex align-items-center justify-content-center">
                <div className="overlay text-center text-white">
                    <h2 className="coverText display-3">SOLES|SHPE at UCLA</h2>
                </div>
            </div>

            {/* Who We Are */}
            <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 mx-auto" style={{maxWidth: "600px"}}>
                <div className="card border-0 shadow-sm h-100 text-center">
                    <div className="card-body p-4">
                    <h2 className="card-title about-title fw-bold mb-3">Who We Are</h2>
                    <p className="card-text">
                        The Society of Latinx Engineers and Scientists at UCLA (SOLES) is a
                        student organization in the Henry Samueli School of Engineering and
                        Applied Science, and is a student chapter of the Society of Hispanic
                        Professional Engineers (SHPE). We center around empowering Latinx
                        students in engineering and science both at UCLA and at nearby K-12
                        schools. Learn more <a href="/initiatives">here</a>!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>


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
            {/*Google Calendar */}
            <div className="calendar p-4 rounded my-5">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="calendarTitle text-start mb-2 mx-5">SOLES Calendar</h2>
                        <h4 className="fs-5 text-start mx-5">Click to learn more about an upcoming event!</h4>                    
                    </div>
                    <div><button type="button" className="btn btn-primary">Import to Personal Calendar</button></div>
                </div>
                <Calendar />
            </div>
 
            {/* President's Message Section */}
            <div className="container my-5">
                <h2 className="WhoWeAre text-center mb-4">A Message From Our President</h2>
                <div className="mx-auto" style={{ maxWidth: "90%" }}>
                    <div className="clearfix">
                    <img
                        src={solesPrez}
                        alt="Soles President"
                        className="img-fluid shadow me-4 mb-3 float-md-start"
                        style={{ width: "250px", maxWidth: "40%" }}
                    />
                    <p className="PresidentMessage text-start">
                        Bienvenido todos and welcome to the SOLES familia,
                        the current recognized top UCLA Engineering Organization. SOLES|SHPE at UCLA prides itself in being
                        an organization that seeks to elevate its members to excel in all aspects of their lives. We celebrate the unique
                        qualities and experiences Latinx individuals contribute in engineering, empowering our members to have confidence in
                        their abilities, regardless of individual circumstances. We hold four chapter pillars: academic development, professional
                        development, community outreach, and recruitment/retention, which we align with our goals and mission in all of our endeavors.
                        <br /><br />Please use this site as a resource to explore how we reach our goals and how our members benefit from our interdisciplinary
                        academic resources, community building events, community outreach initiatives, and wide-spread industry partnerships! With these
                        tools and the connections they bring, we hope to pave the way for a future in which all Latinx/Hispanic students are empowered, both
                        at UCLA and in the greater Los Angeles community, to pursue a STEM degree and achieve high standards. <br /><br />On starting my presidency, I
                        aim to fortify the relationships within our familia to increase our impact on our communities. Ever since that first summer beach bonfire,
                        I've witnessed the incredible amount of good SOLES produces for its members and its community, despite various obstacles. If I'm being honest,
                        if it weren't for the connections I've made in SOLES, I'm unsure if I would be as successful as I am now. I'm a first-generation Mexican college
                        student as many of you are, both parents never passed 3rd grade, and I had little exposure to engineering before coming to UCLA. Heck! If it weren't
                        for my inspiring high school teacher, who left the engineering workforce to inspire students, I wouldn't be here today. I would love to continue to
                        impact that kind of change as the next president of SOLES, leading my amazing team of like-minded individuals. <br/><br/>Con mucho amor and lots of gratitude for the amazing
                        mentors that have propelled me this far,
                    </p>
                    <div className="signature text-end">
                        <p className="PresidentName fw-bold mt-4">Emanuel Zavalza</p>
                        <img src={prezSig} alt="Soles President Signature" className="img-fluid mb-2" style={{ width: '15%' }} />
                        <p className="PresidentInfo">
                            President 2024–2025<br />
                            Computer Engineering B.S.<br />
                            UCLA Class of 2025
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            {/*History*/}
            <div className="history-container">
                <h2 className="history fw-bold">History</h2>
                <div className="d-block d-lg-none text-center mt-2 mb-4">
                    <small className="text-muted">Click on the logo learn more about each milestone!</small>
                </div>
                <div style={{ borderBottom: '1px solid black', zIndex: '-10', paddingTop: '40px' }}></div>
                <div className="d-flex justify-content-between timeline-container mx-auto">
                {timelineData.map((event, index) => (
                    <div key={index} className="timeline-card px-2">
                    <div
                       className="timeline-dot"
                        tabIndex="0"
                        role="button"
                        data-bs-toggle="popover"
                        data-bs-trigger="focus"
                        data-bs-placement="bottom"
                        data-bs-title={`${event.title} (${event.year})`}
                        data-bs-content={event.description}
                        data-bs-html="true"
                        onClick={(e) => e.preventDefault()}
                    >
                        <img src={event.icon} alt={event.title} style={{ width: '24px', height: '24px' }} />
                    </div>

                    <p className="timeline-year">{event.year}</p>

                    <div className="d-none d-lg-block mt-2 text-start small text-muted timeline-info">
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
                        <h2 className="fw-bold mb-4 about-title">Awards</h2>

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
    
            {/* <div className="container my-5">
                <div className="row align-items-center mx-auto" style={{ maxWidth: "90%" }}>
                    <div className="col-md-3 text-center">
                        <img src={solesPrez} alt="Soles President" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-9">
                        <h2 className="WhoWeAre text-center">A Message From Our President</h2>
                        <p className="PresidentMessage">
                            Bienvenido todos and welcome to the SOLES familia,
                            the current recognized top UCLA Engineering Organization. SOLES|SHPE at UCLA prides itself in being
                            an organization that seeks to elevate its members to excel in all aspects of their lives. We celebrate the unique
                            qualities and experiences Latinx individuals contribute in engineering, empowering our members to have confidence in
                            their abilities, regardless of individual circumstances. We hold four chapter pillars: academic development, professional
                            development, community outreach, and recruitment/retention, which we align with our goals and mission in all of our endeavors.
                            Please use this site as a resource to explore how we reach our goals and how our members benefit from our interdisciplinary
                            academic resources, community building events, community outreach initiatives, and wide-spread industry partnerships! With these
                            tools and the connections they bring, we hope to pave the way for a future in which all Latinx/Hispanic students are empowered, both
                            at UCLA and in the greater Los Angeles community, to pursue a STEM degree and achieve high standards. On starting my presidency, I
                            aim to fortify the relationships within our familia to increase our impact on our communities. Ever since that first summer beach bonfire,
                            I've witnessed the incredible amount of good SOLES produces for its members and its community, despite various obstacles. If I'm being honest,
                            if it weren't for the connections I've made in SOLES, I'm unsure if I would be as successful as I am now. I'm a first-generation Mexican college
                            student as many of you are, both parents never passed 3rd grade, and I had little exposure to engineering before coming to UCLA. Heck! If it weren't
                            for my inspiring high school teacher, who left the engineering workforce to inspire students, I wouldn't be here today. I would love to continue to
                            impact that kind of change as the next president of SOLES, leading my amazing team of like-minded individuals.Con mucho amor and lots of gratitude for the amazing
                            mentors that have propelled me this far,
                        </p>
                        <p className="PresidentName fw-bold">Emanuel Zavalza</p>
                        <img src={prezSig} alt="Soles President Signature" className="img-fluid" style={{ width: '15%' }} />
                        <p className="PresidentInfo">
                            President 2024-2025 <br />
                            Computer Engineering B.S.<br />
                            UCLA Class of 2025
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}


// export default function Home() {
//    return (
      
//        <div>
          
//            <div className= "headerContainer" >
//            <div className="coverImage">
//                 <div className="overlay">
//                     <h1 className="coverText">SOLES|SHPE at UCLA</h1>
//                 </div>
//             </div>
//            <h1 className="WhoWeAre">Who We Are</h1>
//            </div>
        
//            <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
          
//             <div style = {{width: 'calc(100%-100px)', overflow: 'hidden', marginLeft: '100px', marginRight:'100px'}}>


//             <p className="WhoWeAreParagraph">
//                The Society of Latinx Engineers and Scientists at UCLA (SOLES) is a student organization in the Henry Samueli School of Engineering and Applied Science, and is a student chapter of the Society of Hispanic Professional Engineers (SHPE). We center around empowering Latinx students in engineering and science both at UCLA and at nearby K-12 schools. Learn more <a href="#">here</a>.</p>
//             </div>


//             <img src={temp} alt="Place Holder" className="temp" style={{marginLeft:'0px', marginRight: '100px', width: '35%'}} />
//            </div>



//            <div>
//            <img src={solesPrez} alt="Soles President" className="SolesPresidentImage" style = {{float:'left', marginleft:'100px', marginRight: '30px', width: '20%'}}/>
//            <h2 className="PresidentHeader">A MESSAGE FROM OUR PRESIDENT</h2>
//            <p className ="PresidentMessage"> Bienvenido todos and welcome to the SOLES familia,
//                                        the current recognized top UCLA Engineering Organization. <br/>SOLES|SHPE at UCLA prides itself in being
//                                         an organization that seeks to elevate its members to excel in all aspects <br/> of their lives. We celebrate the unique
//                                         qualities and experiences Latinx individuals contribute in engineering, empowering <br/>our members to have confidence in
//                                         their abilities, regardless of individual circumstances. We hold four chapter pillars: <br/>academic development, professional
//                                         development, community outreach, and recruitment/retention, which we align <br/>with our goals and mission in all of our endeavors.
//                                         Please use this site as a resource to explore how we reach our goals <br/> and how our members benefit from our interdisciplinary
//                                         academic resources, community building events, community <br/> outreach initiatives, and wide-spread industry partnerships! With these
//                                         tools and the connections they bring, we <br/>hope to pave the way for a future in which all Latinx/Hispanic students are empowered, both
//                                         at UCLA and in the greater Los Angeles community, to pursue a STEM degree and achieve high standards. On starting my presidency, I
//                                         aim to fortify the relationships within our familia to increase our impact on our communities. Ever since that first summer beach bonfire,
//                                         I've witnessed the incredible amount of good SOLES produces for its members and its community, despite various obstacles. If I'm being honest,
//                                         if it weren't for the connections I've made in SOLES, I'm unsure if I would be as successful as I am now. I'm a first-generation Mexican college
//                                         student as many of you are, both parents never passed 3rd grade, and I had little exposure to engineering before coming to UCLA. Heck! If it weren't
//                                         for my inspiring high school teacher, who left the engineering workforce to inspire students, I wouldn't be here today. I would love to continue to
//                                         impact that kind of change as the next president of SOLES, leading my amazing team of like-minded individuals.Con mucho amor and lots of gratitude for the amazing
//                                         mentors that have propelled me this far,
//           </p>
//           <p className = "PresidentName"> Emanuel Zavala</p>
//           <img src = {prezSig} alt = "Soles President Signature" className ="SolesPresidentSignature" style={{width:'15%'}}></img>
       
//           <p className="PresidentInfo">
//              President 2023-2024 <br />
//              Computer Engineering B.S.<br/>
//              UCLA Class of 2025
//            </p>
          
//            </div>
//        </div>


//    );


// }

            {/* <div className="container my-5">
                <h2 className="WhoWeAre text-center">Who We Are</h2>
                <div className="row align-items-center mx-auto" style={{ maxWidth: "90%" }}>
                    <div className="col-md-7">
                        <p className="WhoWeAreParagraph">
                            The Society of Latinx Engineers and Scientists at UCLA (SOLES) is a student organization in the Henry Samueli School of Engineering and Applied Science, and is a student chapter of the Society of Hispanic Professional Engineers (SHPE). We center around empowering Latinx students in engineering and science both at UCLA and at nearby K-12 schools. Learn more <a href="#">here</a>.
                        </p>
                    </div>
                    <div className="col-md-5 text-center">
                        <img src={temp} alt="Placeholder" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div> */}