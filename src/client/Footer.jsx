import React from "react";
import './Footer.css';
import Facebook from "./photos/insta.png";
import Insta from "./photos/instareal.png";
import Link from "./photos/link.png";
 
const Footer = () => (
    <footer className="footer">
    <div className = "footerDiv">  
        <div className="leftDiv">
            <div style={{width: '100%'}}><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Report Technical Issues to:<br/></span><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>uclasoles.webmaster@gmail.com</span></div>
            <div style={{width: '100%'}}><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Contact: <br/></span><span style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>uclasoles.president@gmail.com</span></div>
        </div>
        <div className="middleDiv">
        
            <div className="icon-container">
                <img style={{width: '100%', height: '100%'}} src={Facebook} />
                <img style={{width: '100%', height: '100%'}} src={Insta} />
                <img style={{width: '100%', height: '100%'}} src={Link} />
            </div>
            <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Society of Latino Engineers<br/> and Scientists 2024</div>
            
        </div>
        <div className="rightDiv">
        <div style={{width: '100%', height: '100%', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 2.40, wordWrap: 'break-word'}}>JOIN NEWSLETTER</div>
        <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SOLES|SHPE at UCLA</div>
        </div>
    </div>
    </footer>
);
 
export default Footer;