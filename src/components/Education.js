import React, {Component} from 'react';

function Education () {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Wesleyan University</h3>
              <div className="subheading mb-3">Property and Liability: An Introduction to Law and Economics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - Present</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Stanford University</h3>
              <div className="subheading mb-3">Game Theory: Advanced Applications</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/KHU7VM8HZZ25' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Stanford University</h3>
              <div className="subheading mb-3">Cryptography</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/SBBXLRAFCV59' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Duke University </h3>
              <div className="subheading mb-3">Behavioral Finance</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/DJXYG3VQNLKL' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Virginia</h3>
              <div className="subheading mb-3">Design Thinking for Innovation</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/TWSGZ7Q5AJAN' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Pune</h3>
              <div className="subheading mb-3">Bachelor of Mechanical Engineering</div>
              <div> Specialization - Robotics </div>
              <p>Degree with Distinction</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jul 1997 - Jun 2001</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  )
}

export default Education;
