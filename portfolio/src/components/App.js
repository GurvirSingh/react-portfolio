import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../tabs/Home';
import AboutMe from '../tabs/AboutMe';
import Work from '../tabs/Work';
import Projects from '../tabs/Projects';
import SocialLinks from '../components/SocialLinks';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container" id="navbarNav">
                    <Link to="/" className="navbar-brand">GSB</Link>

                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutme" className="nav-link" >About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/work" className="nav-link">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutme" exact component={AboutMe} />
                    <Route path="/work" exact component={Work} />
                    <Route path="/projects" exact component={Projects} />
                </div>
            </BrowserRouter>

            <SocialLinks />
        </div>
    );
}

export default App;