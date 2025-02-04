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
                <img style={{width: '100%', }} src={Facebook} />
                <img style={{width: '100%', }} src={Insta} />
                <img style={{width: '100%', }} src={Link} />
            </div>
            <div style={{width: '100%', position: 'relative'}}>
    <div style={{width: 50, height: 0, left: 0.03, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid'}}></div>
    <div style={{width: 50, height: 0, left: 319.03, top: 10, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid'}}></div>
    <div style={{width: 37.05, height: 0, left: 283, top: 62, position: 'absolute', border: '1px white solid'}}></div>
    <div style={{width: 37.05, height: 0, left: 0, top: 0, position: 'absolute', border: '1px white solid'}}></div>
    <div style={{left: 29.03, top: 9, position: 'relative', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Society of Latino Engineers<br/> and Scientists 2024</div>
</div>

        </div>
        <div className="rightDiv">
        <div style={{width: '85%', paddingTop: 12, paddingBottom: 12, paddingLeft: 15, paddingRight: 15, background: '#FEFE54', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 12, overflow: 'hidden', border: '1.50px black solid', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 233, height: 33, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 2.40, wordWrap: 'break-word'}}>JOIN NEWSLETTER</div>
</div>
        <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginTop: '25px'}}>SOLES|SHPE at UCLA</div>
        </div>
    </div>
    </footer>
);
 
export default Footer;