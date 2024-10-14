import React from "react";
import './Footer.css';
 
const Footer = () => (
    <footer className="footer">
    <div className = "footerDiv">  
      
    
        
        <div className = "issues"> 
            Report website technical issues to:
            <a href = "uclasoles.webmaster@gmail.com" > uclasoles.webmaster@gmail.com </a>
         </div>

         <div className = "SOLES" >
            SOLES | SHPE at UCLA
        </div>

        <div className = "newsletter"> 
        <p> join our Newsletter </p>
        </div>

        <div className = "contactUs"> 

        <div> Contact Us: </div>
        <a href = "uclasoles.president@gmail.com"> uclasoles.president@gmail.com</a>
        <p> byLaws placeholder </p>
        
        </div>

    
     </div>
    </footer>
);
 
export default Footer;