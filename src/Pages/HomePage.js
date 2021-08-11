import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particles from '../Particles/Particles'

function HomePage() {
    return (
        <div>
            <div>
                <Particles />
            </div>
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am <span>Pratiksha Anand</span>
                    </h1>
                    <p className="h-sub-test">
                        I care deeply about creating world-class, useful & beautiful products that help people and make a difference !!!!
                </p>
                    <div className="icons">
                        <a href="https://github.com/anandpratiksha" target="_blank" className="icon-holder">
                            <Tooltip title="Follow me on GitHub" arrow TransitionComponent={Zoom} >
                                <GitHubIcon className="icon gh" />
                            </Tooltip>
                        </a>
                        <a href="https://www.instagram.com/pratiksharameshanand/" target="_blank" className="icon-holder">
                            <Tooltip title="Follow me on Instagram" arrow TransitionComponent={Zoom}>
                                <InstagramIcon className="icon ig" />
                            </Tooltip>
                        </a>
                        <a href="https://www.linkedin.com/in/pratiksha-anand-496520216/" target="_blank" className="icon-holder">
                            <Tooltip title="Connect with me on LinkedIn" arrow TransitionComponent={Zoom}>
                                <LinkedInIcon className="icon li" />
                            </Tooltip>
                        </a>
                    </div>
                </header>
            </div>
        </div>

    )
}

export default HomePage
