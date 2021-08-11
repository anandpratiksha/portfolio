import React from 'react'
import Title from '../Components/Title'
import ParticleComponent from '../Particles/ParticleComponent';

function Skills() {
    return (
        <div>
            <div>
                <ParticleComponent />
                <Title title={'My Skills'} span={'My Skills'} />
                <h1>FrontEnd Development</h1>
                <p>Innovative Front End Developer with 6 months experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, jQuery, React , Redux,JavaScript ,Bootstrap ,Git,Firebase,Netlify plus modern libraries and frameworks.</p>
                <div className="skills">
                    <a className="skill" href="https://babeljs.io/" target="_blank"><img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40" /> </a> <br />
                    <a className="skill" href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a><br />
                    <a className="skill" href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a><br />
                </div>
            </div>
        </div>
    )
}

export default Skills
