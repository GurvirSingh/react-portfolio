import React from 'react';

import './main.css';

const Home = () => {
    return (
        <div className="container">
            <div className="container-fluid main">
            <div className="container main-text">
                <p id="bigger" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100" data-aos-once="true">
                    <span style={{fontSize: "28px", fontFamily: "'Roboto', sans-serif", letterSpacing: "-1px"}}>Hey there, I
                        am</span>
                    <br /> <span style={{color:"#006FFF"}}>G</span><span style={{color:"#0D6AF7"}}>u</span><span
                        style={{color:"#1A66F0"}}>r</span><span style={{color:"#2862E9"}}>v</span><span
                        style={{color:"#355EE2"}}>i</span><span style={{color:"#4359DB"}}>r</span> <span
                        style={{color:"#5D51CD"}}>S</span><span style={{color:"#6B4DC6"}}>i</span><span
                        style={{color:"#7849BF"}}>n</span><span style={{color:"#8644B7"}}>g</span><span
                        style={{color:"#9340B0"}}>h</span> <span style={{color:"#AE38A2"}}>B</span><span
                        style={{color:"#BB349B"}}>h</span><span style={{color:"#C92F94"}}>o</span><span
                        style={{color:"#D62B8D"}}>g</span><span style={{color:"#E42786"}}>a</span><span
                        style={{color:"#F1237F"}}>l</span>
                </p>
                <div id="desc" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true"> I am a passionate and
                    detail-oriented Computer Science Engineer with high perseverance and motivation to solve real-world
                    problems. I love building web applications and learning about new technologies which can optimize our
                    daily life. Currently, I am a Computer Science graduate student and working as a Web developer at <span
                        style={{color:"blue"}}>The University of Texas at Arlington</span>.
                    <br />
                    <a href="https://www.linkedin.com/in/gurvirbhogal/" target="__blank">
                        <button id="contact" style={{fontSize: "19px"}}> <span
                                style={{opacity:"1", letterSpacing: "0px" }}>Resume</span> </button>
                    </a>
                </div>
            </div>
            <div id="particles-js"></div>
            </div>

            <article data-aos="fade-up" data-aos-duration="500" data-aos-once="true"> <span id="about"
            style={{visibility: "hidden"}}></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-left">
                            <h2>About Me<span style={{color: '#ffa801'}}>.</span></h2>
                            <p id="about-me"> Hello! I am Gurvir Singh Bhogal, a Computer Science Engineer. I build web
                                applications and enjoy learning about how the Internet and the web works.
                                <br />
                                <br />During my undergrad, I built the first departmental portal for the computer engineering
                                department which boosted my interest in web development. In the past few years, I have
                                contributed to open-source projects on Github, developed websites for business using WordPress,
                                built android applications using Java, advanced my knowledge on using efficient web development
                                libraries including React and Node.js, developed websites for The University of Texas at
                                Arlington and I am working on combining virtual reality with online shopping using Three.js to
                                provide a fascinating shopping experience.
                            </p>
                            <div className="container">
                                <p style={{fontWeight: "800"}}>Technologies that I work with<span style={{color: "#2ddda2"}}>:</span>
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="100"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-html5"></i> HTML
                                            </li>
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="200"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-css3-alt"></i>  CSS</li>
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="300"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-js-square"></i> JavaScript (ES6+)</li>
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="400"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-php"></i> PHP
                                            </li>
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="500"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-java"></i> Java
                                            </li>
                                            <li className="list-group-item" data-aos="fade-up-right" data-aos-delay="600"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-python"></i> Python</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="100"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-node"></i> Node.js</li>
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="200"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-react"></i> React
                                            </li>
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="300"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-react"></i> Redux
                                            </li>
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="400"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fab fa-github"></i> Git,
                                                GitHub</li>
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="500"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fas fa-database"></i> MongoDB</li>
                                            <li className="list-group-item" data-aos="fade-up-left" data-aos-delay="600"
                                                data-aos-duration="1000" data-aos-once="true"><i className="fas fa-database"></i> SQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div id="round"> <img src="img/gurvir.jpg" className="image" />
                                <div className="middle"> <a href="https://www.instagram.com/bhogalgurveer/" target="_blank"
                                        className="fab fa-instagram text"> Instagram</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
}

export default Home;