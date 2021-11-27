import React from 'react';


function Footer() {
    return (
        <footer className="footer">
            
            <h1 className="foottitle">Heonja Play</h1>
            <div className="footcontent">
            <div className="sectioncontent">
                <h2 className="titlesfooter">About Us</h2>
                <div className="contain">
                <h3 className="sub">Who we are</h3>
                <h3 className="sub">Objectives</h3>
                <h3></h3>
                </div>
            </div>
            <div className="sectioncontent">
                <h2 className="titlesfooter">Services</h2>
                <div className="contain">
                <h3 className="sub">Internships</h3>
                <h3 className="sub">Volunteering</h3>
                <h3 className="sub">Job Offers</h3>
                </div>
            </div>
            <div className="sectioncontent">
                <h2 className="titlesfooter">Contact Us</h2>
                <div className="contain">
                <h3 className="sub">Issues</h3>
                <h3 className="sub">Help us improve our work</h3>
                </div>
            </div>
            <div className="sectioncontent">
                <h2 className="titlesfooter">Find us on:</h2>
                <div className="contain">
                <h3 className="sub">Facebook</h3>
                <h3 className="sub">Instagram</h3>
                <h3 className="sub">Discord</h3>
                <h3 className="sub">Youtube</h3>
                <h3 className="sub">Twitter</h3>
                </div>

            </div>
            </div>
        </footer>
    );
}

export default Footer;