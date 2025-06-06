import solesPrez from "../photos/solespresident.png";
import prezSig from "../photos/solespresidentsig-transparent.png";
import temp from "../photos/tempimg.png";
import React from "react";
import Calendar from "./Calendar.js";
import './Home.css';

export default function Home() {
    return (
        <div>
 
            {/* Full-width cover section */}
            <div className="coverImage d-flex align-items-center justify-content-center">
                <div className="overlay text-center text-white">
                    <h2 className="coverText display-3">SOLES|SHPE at UCLA</h2>
                </div>
            </div>
 
            {/* Who We Are Section */}
            <div className="container my-5">
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
            </div>
            {/*Google Calendar */}
            <div className="calendar p-4 rounded my-5">
                <h2 className="calendarTitle text-center mb-4">SOLES Calendar</h2>
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
