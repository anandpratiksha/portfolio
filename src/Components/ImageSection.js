import React from 'react'
import about from '../img/about.jpeg'
function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="img" />
            </div>
            <div className="about-info">
                <h4>Hello !!<br /> I am, <span>Pratiksha Ramesh Anand.</span> <br />Product Engineer in Web Development</h4>
                <p className="about-text">
                    “I’m not a great programmer,I’m just a good programmer with great habits.”
                </p>
                <h1>Basic Information</h1>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Address</p>
                        <br />
                        <p>Email</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>:  Pratiksha Ramesh Anand </p>
                        <p>:  21</p>
                        <p>:  Tarakpur, Ahmednagar<br /> Maharashtra 414001</p>
                        <p>:  apratiksha1137@gmail.com </p>
                        <p>:  English , Hindi, Marathi</p>
                    </div>
                </div>
            </div>
            <div className="github">
                <h2>GITHUB:</h2>
            </div>
            <div className="github">
                <img className="gh" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=anandpratiksha&theme=highcontrast" alt="anandpratiksha" />
            </div>
            <div className="github">
                <p><img className="gh" align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=anandpratiksha&show_icons=true&locale=en&layout=compact&&theme=highcontrast" alt="anandpratiksha" /></p>
            </div>
        </div>
    )
};

export default ImageSection
