import React from 'react';
import '../styling/About.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import { BiCodeCurly } from 'react-icons/bi';

export const About = () => {
    return (
        <div className="About" id="About">
            <h1 className="skill-heading">My <span>Skills</span></h1>
            <div className="skills-container">
                <div className="technical-skills">
                    <h2>Technical Skills</h2>
                    <div className="skill">
                        <FaHtml5 size={25} className="skill-icon" />
                        <span className="skill-name">HTML</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '90%' }}></div>
                        </div>
                        <span className="percentage">90%</span>
                    </div>
                    <div className="skill">
                        <FaCss3Alt size={25} className="skill-icon" />
                        <span className="skill-name">CSS</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '80%' }}></div>
                        </div>
                        <span className="percentage">80%</span>
                    </div>
                    <div className="skill">
                        <FaJsSquare size={25} className="skill-icon" />
                        <span className="skill-name">JavaScript</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '65%' }}></div>
                        </div>
                        <span className="percentage">70%</span>
                    </div>
                    <div className="skill">
                        <FaReact size={25} className="skill-icon" />
                        <span className="skill-name">ReactJS</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '85%' }}></div>
                        </div>
                        <span className="percentage">85%</span>
                    </div>
                    <div className="skill">
                        <SiNextdotjs size={25} className="skill-icon" />
                        <span className="skill-name">NextJS</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '60%' }}></div>
                        </div>
                        <span className="percentage">60%</span>
                    </div>
                    <div className="skill">
                        <SiTypescript size={25} className="skill-icon" />
                        <span className="skill-name">TypeScript</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '50%' }}></div>
                        </div>
                        <span className="percentage">50%</span>
                    </div>
                    <div className="skill">
                        <SiMongodb size={25} className="skill-icon" />
                        <span className="skill-name">MongoDB</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '80%' }}></div>
                        </div>
                        <span className="percentage">80%</span>
                    </div>
                    <div className="skill">
                        <FaNodeJs size={25} className="skill-icon" />
                        <span className="skill-name">NodeJS</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '80%' }}></div>
                        </div>
                        <span className="percentage">80%</span>
                    </div>
                    <div className="skill">
                        <SiExpress size={25} className="skill-icon" />
                        <span className="skill-name">Express</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '80%' }}></div>
                        </div>
                        <span className="percentage">80%</span>
                    </div>
                    <div className="skill">
                        <SiMysql size={25} className="skill-icon" />
                        <span className="skill-name">SQL</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '60%' }}></div>
                        </div>
                        <span className="percentage">60%</span>
                    </div>
                    <div className="skill">
                        <BiCodeCurly size={25} className="skill-icon" />
                        <span className="skill-name">C/C++</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '75%' }}></div>
                        </div>
                        <span className="percentage">75%</span>
                    </div>
                    <div className="skill">
                        <FaPython size={25} className="skill-icon" />
                        <span className="skill-name">Python</span>
                        <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                        </div>
                        <span className="percentage">80%</span>
                    </div>
                    <div className="skill">
                        <FaGitAlt size={25} className="skill-icon" />
                        <span className="skill-name">Git</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '70%' }}></div>
                        </div>
                        <span className="percentage">70%</span>
                    </div>
                </div>
                <div className="professional-skills">
                    <h2>Professional Skills</h2>
                    <div className="professional-skill-row">
                        <div className="circular-skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">80%</div>
                                </div>
                            </div>
                            <span className="skill-name">Time Management</span>
                        </div>
                        <div className="circular-skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">75%</div>
                                </div>
                            </div>
                            <span className="skill-name">Communication</span>
                        </div>
                    </div>
                    <div className="professional-skill-row">
                        <div className="circular-skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">75%</div>
                                </div>
                            </div>
                            <span className="skill-name">Problem Solving</span>
                        </div>
                        <div className="circular-skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">80%</div>
                                </div>
                            </div>
                            <span className="skill-name">Teamwork</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

