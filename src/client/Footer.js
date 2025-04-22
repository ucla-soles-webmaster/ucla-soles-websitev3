import React from "react";
import Insta from "./photos/instareal.png";
import Link from "./photos/link.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => (
  <footer style={{backgroundColor: "#001d3a"}} className="text-white py-4">
    <div className="container px-6 px-lg-6">
      <div className="row gx-5 text-center text-md-start align-items-center">
        {/* Left Section */}
        <div className="col-md-4 order-1 order-md-1 mb-4">
          <p className="fw-bold fs-6">Report Technical Issues to:</p>
          <p className="fs-6">uclasoles.webmaster@gmail.com</p>
          <p className="fw-bold fs-6">Contact:</p>
          <p className="fs-6">uclasoles.president@gmail.com</p>
        </div>

        {/* Middle Section */}
        <div className="col-md-4 order-3 order-md-2 mb-4 d-flex flex-column align-items-center justify-content-center">
          <div className="mb-2 d-flex gap-3">
            <a className="btn" href="https://www.instagram.com/uclasoles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" role="button"><img src={Insta} alt="Instagram" width="32" height="32" /></a>
            <a className="btn" href="https://www.linkedin.com/groups/13937942/" role="button"><img src={Link} alt="LinkedIn" width="32" height="32" /></a>
          </div>
          <p className="text-center mb-0 fs-6">Society of Latinx Engineers and Scientists &copy; 2025</p>
        </div>

        {/* Right Section */}
        <div className="col-md-4 order-2 order-md-3 mb-4 d-flex flex-column align-items-center">
          <button type="button" className="btn btn-primary mb-3">Join Newsletter</button>
          <button type="button" className="btn btn-primary">Bylaws of SOLES</button>
        </div>
        <div className="gradient-line-hor order-4 order-md-4"></div>
      </div>
    </div>
  </footer>
);

export default Footer;


// import React from "react";
// import './Footer.css';
// import Facebook from "./photos/insta.png";
// import Insta from "./photos/instareal.png";
// import Link from "./photos/link.png";
 
// const Footer = () => (
//     <footer className="footer">
//         <div className = "footerDiv">  
//             <div className="leftDiv">
//                 <div><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Report Technical Issues to:<br/></span><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>uclasoles.webmaster@gmail.com</span></div>
//                 <div><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Contact: <br/></span><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>uclasoles.president@gmail.com</span></div>
//             </div>
//             <div className="middleDiv">
//                 <div className="icon-container">
//                     <img src={Facebook} />
//                     <img src={Insta} />
//                     <img src={Link} />
//                 </div>
//                 <div>
//                     <div> <p>Society of Latino Engineers<br/> and Scientists 2024 </p></div>
//                 </div>
//             </div>
//             <div className="rightDiv">
//                 <button type="button" class="btn btn-primary btn-lg">Join Newsletter</button>
//                 <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginTop: '25px'}}>SOLES|SHPE at UCLA</div>
//             </div>
//     </div>
//     </footer>
// );
 
// export default Footer;