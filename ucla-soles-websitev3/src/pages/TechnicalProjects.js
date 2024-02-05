import React from 'react';
/*import './TechnicalProjects.css'; */


function TechnicalProjects() {
    return (
        <div>

            <div>
                <h1 className="title-with-border">TechnicalProjects</h1>
            </div>

            {/*SOLES.AI*/}
            <h2>SOLES.AI</h2>
            <div className="soles_ai_subsection">
                <div className="image-block"></div>
                <div className="content">
                    <h3>SOLES.AI</h3>
                    <p>SOLES.AI is cool</p>
                </div>
            </div>

            {/*SOLES Web Developer*/}
            <h2>SOLES Web Developer</h2>
            <div className="soles_web_web_developer_subsection">
                <div className="image-block"></div>
                <div className="content">
                    <h3>SOLES Web Developer</h3>
                    <p>SOLES Web Dev is Cool</p>
                </div>
            </div>

            {/*SOLES Racing*/}
            <h2>SOLES Racing</h2>
            <div className="subsection">
                <div className="image-block"></div>
                <div className="content">
                    <h3>SOLES Racing</h3>
                    <p>SOLES Racing is Cool</p>
                </div>
            </div>
        </div>
    );
}

export default TechnicalProjects;