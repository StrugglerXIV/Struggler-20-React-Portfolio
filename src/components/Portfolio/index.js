import React from "react";
import portfolioChallenge from "../../assets/small/portfolioChallenge.png";
import noteTaker from "../../assets/small/noteTaker.png";
import SVGLogoProject from "../../assets/small/SVGLogoProject.png";
import StrugglersMVCChallenge from "../../assets/small/StrugglersMVCChallenge.png";
import SQLChallenge from "../../assets/small/SQLChallenge.png";

function Portfolio() {
    return (
        <div>
            <section id="work" className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">Work</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/StrugglerXIV/struggler-s-portfolio-challenge">
                                <img
                                    src={portfolioChallenge}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="portfolio-challenge"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Portfolio challenge.</h4>
                            <p>
                                One of the first few challenges that we had to create. This is a very basic website using mostly CSS and HTML. There is barely any functionality in it.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/StrugglerXIV/Note-Taker-StrugglerXIV">
                                <img
                                    src={noteTaker}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="note-Taker"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Note Taker</h4>
                            <p>
                                In this application, the user is able to keep track of their notes. They can add, delete and update said notes using GET, POST and Delete routes. This is a very rudamentary implemention of a backend setup.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/StrugglerXIV/SVG-Logo-Project">
                                <img
                                    src={SVGLogoProject}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="SVG-Logo-Project"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>SVG Logo Project</h4>
                            <p>
                                A simple javascript setup that quries the user for a couple of promts and generates an SVG logo based on the answers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/StrugglerXIV/Strugglers-MVC-Challenge">
                                <img
                                    src={StrugglersMVCChallenge}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="Strugglers-MVC-Challenge"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>MVC Challenge</h4>
                            <p>
                            In this module, we are supposed to build a CMS-Blog style where people can post their articles and comment their opinions on each article.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/StrugglerXIV/module-12-SQL-Challenge">
                                <img
                                    src={SQLChallenge}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt="12-SQL-Challenge"
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>My SQL Challenge</h4>
                            <p>
                                In this module, we were supposed to create a databse that keeps track of multiple different types of information regarding a company, it's branches, employee, managers and salaries. Using MYSQL12 and Inquirer, I was able to create an MVP application that fullfills most of this functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;