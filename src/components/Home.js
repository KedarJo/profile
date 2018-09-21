import React, {Component} from 'react';

function Home() {
  return (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">Kedar
              <span className="text-primary"> Joshi</span>
            </h1>
            <div className="subheading mb-5">Charlotte, NC · (980) 226-3028 ·
              <a href="mailto:kedarnj@gmail.com">kedarnj@gmail.com</a>
            </div>
            <div className='text-justify'>
              <p className="lead mb-4">Hello and Welcome! </p>
              <p className="lead mb-4">I am Kedar, an analyst, consultant with an eye for detail, appreciation for aesthetics and take pride and satisfaction only when the work is done to the exacting standards. </p>
              <p className="lead mb-4">My professional interests include product strategy and operations, business analysis, service design, experimenting and implementing digital solutions that enhance product experience.</p>
              <p className="lead mb-4">I have overall <a href={process.env.PUBLIC_URL + '/Experience'}>experience</a> of a decade and half with a leading global IT services firm. In August of 2017, I decided to part ways with my former employer to devote entire time to an independent research blockchain based platform model. </p>
              <p className="lead mb-4">Find my <a href={process.env.PUBLIC_URL + '/Portfolio'}>recent work</a> and new <a href={process.env.PUBLIC_URL + '/Skills'}>skills</a>.</p>
              <p className="lead mb-4">I am now ready to bring my past experience and range of skills to your organization. I will be a great fit for a role that requires business savvy and future technology focus.</p>
              <p className="lead mb-4">I am seeking to be inspired, envision the future, work hard on interesting problems that make the work meaningful and be surrounded by people who bring out the best in me.</p>
              <p className="lead mb-4">A bit more <a href={process.env.PUBLIC_URL + '/About'}>about me</a> </p>
              <p className="lead mb-4">Say Hello <a href="mailto:kedarnj@gmail.com">@email</a> </p>
            </div>
          </div>
        </section>

        <hr className="m-0" />
    </div>
  )
}

export default Home;
