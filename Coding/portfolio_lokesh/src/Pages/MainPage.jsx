import React from "react";
import {
  FaHome,
  FaUser,
  FaIdCard,
  FaFolder,
  FaLinkedinIn,
  FaGithubAlt,
  FaList,
  FaBook,
} from "react-icons/fa";
import Typical from "react-typical";
import Image from "../Image/lokesh.jpg";
import { Link } from "@chakra-ui/react";

function MainPage() {
  return (
    <div className="body">
      <div className="main-container">
        <div className="aside">
          <div className="logo">
            <a href="#">
              <span>P</span>ortfolio
            </a>
          </div>
          <ul className="nav">
            <li>
              <a href="#">
                <FaHome />
                &nbsp; Home
              </a>
            </li>
            <li>
              <a href="#">
                <FaUser />
                &nbsp; About Me
              </a>
            </li>
            <li>
              <a href="#">
                <FaList />
                &nbsp; Skills
              </a>
            </li>
            <li>
              <a href="#">
                <FaFolder />
                &nbsp; Projects
              </a>
            </li>
            <li>
              <a href="#">
                <FaIdCard />
                &nbsp; Contact
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing"
                target="_blank"
                alt="Resume"
              >
                <FaBook />
                &nbsp; Resume
              </a>
            </li>
          </ul>
        </div>

        {/* right box
         */}
        <div className="main-content">
          {/* Home section  */}
          <section className="home section hidden">
            <div className="container">
              <div className="profile-container">
                <div className="profile-parent">
                  

                  
                </div>
              </div>
              <div></div>
            </div>
          </section>

          {/* About me  */}

          <section className="about section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>About Me</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>
                        I'm Lokesh Patidar <span>Full Stack Web Developer</span>
                      </h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fuga quas incidunt voluptatem nisi fugiat nemo
                        consequatur eius explicabo velit tempore aut ipsam fugit
                        harum, pariatur sequi dolorem, error repellendus dolor?
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Similique veniam nisi excepturi in vitae
                        laudantium quia necessitatibus inventore dicta!
                        Explicabo vero ab nihil fugit mollitia. Aut perspiciatis
                        eos, distinctio .
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item">
                          <p>
                            Birthday : <span>14 August 1998</span>
                          </p>
                        </div>
                        <div className="info-item">
                          <p>
                            Age : <span>24 years old</span>
                          </p>
                        </div>
                        <div className="info-item">
                          <p>
                            Phone : <span>9993977820</span>
                          </p>
                        </div>
                        <div className="info-item">
                          <p>
                            Email : <span>bansiyalokesh29988@gmail.com</span>
                          </p>
                        </div>
                        <div className="info-item">
                          <p>
                            Village : <span>Badagaon (M.P.)</span>
                          </p>
                        </div>
                        <div className="info-item">
                          <p>
                            Education : <span>12th (Secondary Education)</span>
                            <br />
                            <span>Full Stack-Web Developer</span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a
                            href="https://drive.google.com/file/d/1LQC4qMoLclFHtr-zcAokIuGxgoP59AU-/view?usp=sharing"
                            download
                          >
                            <button className="btn highlighted-btn">
                              Get Resume
                            </button>
                          </a>
                          <a href="#">
                            <button button className="btn primary-btn">
                              Hire Me
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="skill section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Skills</h2>
                  <div className="skills">
                    <div className="insideskills">

                      <img
                        src="https://img.shields.io/badge/chakra ui-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
                        align="center"
                        alt="chakra-ui"
                      />
                      <img
                        src="https://img.shields.io/badge/rest api-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white"
                        align="center"
                        alt="restapi"
                      />
                      
                      <img
                        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                        align="center"
                        alt="express"
                      />
                      <img
                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                        align="center"
                        alt="node.js"
                      />
                      <img
                        src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                        align="center"
                        alt="type script"
                      />
                      
                      <img
                        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                        align="center"
                        alt="mongodb"
                      />
                      <img
                        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                        align="center"
                        alt="reactjs"
                      />
                      <img
                        src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                        align="center"
                        alt="redux"
                      />
                      <img
                        src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
                        align="center"
                        alt="material-ui"
                      />
                      <img
                        src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                        align="center"
                        alt="react-router"
                      />
                    </div>
                  </div>
                  <div className="tools">
                    <h4>Tools</h4>
                    <div className="insideTools">
                      <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" align="center" alt="git" />
                      <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" align="center" alt="git" />
                      <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=whit" align="center" alt="git" />
                      <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" align="center" alt="npm" />
                      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" align="center" alt="github" />
                      <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" align="center" alt="postman" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
