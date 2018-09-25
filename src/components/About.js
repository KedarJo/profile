import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

function About () {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
        <div className="my-auto">
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
          <h2 className="mb-5">Business Outcomes with Product Focus</h2>
          </CSSTransitionGroup>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto text-justify">

              <div className="subheading mb-3"></div>
              <p className="lead mb-5">I look at business through customer and product lens. I seek to understand how customers experience the product through its lifecycle and the business operations and technology infrastructure that make it possible. Such analysis presents opportunities to continuously innovate and improve the experience and offer better value proposition. </p>
              <div className="subheading mb-0">Service delivery philosophy</div>
              <img className="img-fluid img-responsive mx-auto mb-2" src='./img/StrategicPillers.png' alt='StrategicPillers' />
              <p className="lead mb-5">Within a large organization a team of any size will benefit from this philosophy and principles of designing moments of truth. </p>
              <div className="subheading mb-0">Leading through influence</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fas fa-lightbulb"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-ellipsis-h"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-chalkboard-teacher"></i>
                </li>
                <li className="list-inline-item">
                  <i className="far fa-comment-dots"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-ellipsis-h"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-share"></i>
                </li>
              </ul>
              <p className="lead mb-5">In large matrix enterprises and ecosystem of product and service delivery partners, usually responsibility comes without authority. To lead without clear authority, I use storytelling using data and experiences as an effective mechanism to influence decisions and arrive at consensus quickly.</p>

              <div className="subheading mb-0">Information Brokering and Delivery </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fas fa-chalkboard"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-phone"></i>
                </li>
                <li className="list-inline-item">
                  <i className="far fa-comments"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-laptop"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-chart-line"></i>
                </li>
              </ul>
              <p className="lead mb-5">I work hard to understand and fulfill the information needs of the cross functional teams to avoid undue risks arising due to information leakage and delays.</p>
              <div className="subheading mb-0">Data Driven Culture does not escape human complexities</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fas fa-brain"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-chess-board"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-chess"></i>
                </li>
              </ul>
              <p className="lead mb-5">Using hard data absolutely should drive rational decision making, however human decision making is often informed by cognitive and behavioral biases. Being sensitive to such complexities is important in engaging with people and building lasting relationships.</p>

              <div className="subheading mb-2">MBTI</div>
              <p className="lead mb-5">My Myers–Briggs Personality Indicator is assessed as an <a href='https://www.16personalities.com/intj-personality' target="_blank" rel="noopener noreferrer">INTJ-Architect</a>.</p>

              <div className="subheading mb-2">Other Interests</div>
              <p className="lead mb-5">I live in Charlotte with my wife and 5 year old son. I thoroughly enjoy spending my spare time with my boy. I have a renewed passion for hiking and enjoy taking my family on local hikes. </p>
              <img className="img-fluid img-responsive mx-auto mb-5" src='./img/KedarCasual.jpg' alt='KedarCasual' />
              <p className="lead mb-4">I would love to meet you! Reach me <a href="mailto:kedarnj@gmail.com">@email</a> </p>
            </div>

          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  )
}

export default About;
