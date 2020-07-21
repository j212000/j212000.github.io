import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio';

import French from './French'
import {Route,Link} from 'react-router-dom';



import './App.css';





function App() {

  const portfolioLinks = [

    {
      title: 'One Day Trial: Free',
      caption: 'This opition will give you a tour of our club and provide a one time trial of all courses that are offered.',

    },
    {
      title: 'Practice: $12.99',
      caption: 'This opition allows particpants to come in and pay 1 day fee and use the tennis court.'
    },
    {
      title: 'Skill Practice: $10.00',
      caption: 'This opition allows indiviudlas to practice on a specific tennis skill.'
    },
    {
      title: 'Beginners Tournament: $45.00',
      caption: 'This opition allow beginner to particpate in a 1v1 knockout tournament. The winner willl recive a month of private session for free with our best tennis coach.'
    },
    {
      title: 'Intermidate Tournament: $60.00 ',
      caption: 'This opition is for tennis player who are expert at tennis. The winner will get a troph and a mystry gift.'
    },
    {
      title: '1V1 Private Sessions: $75.00',
      caption: 'This option will be a private one on one session with a student and a master coach. '
    },
    {
      title: 'Full Membership: $500.00',
      caption: 'This opition will give acess to every courses that are offered and will have special acess to our gyms and spas (12 Months).'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Double Shots</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#coursesOffered">Courses Offered</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#membership">Membership</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
          <ul className="nav-item">
            <Link to="/French">French</Link>
          </ul>

        </ul>





      </div>
    </div>
  </nav>


  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Double Shot</div>
        <div className="intro-heading text-uppercase">Experience Greatness</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>

      </div>
    </div>

  </header>

      <Route exact path="/French" component={French}/>


  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Prestations de service</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className=" fa-10px">
              <img className="rounded-circle img-fluid" src="https://www.tennisgems.com/wp-content/uploads/2019/02/Untitled-design-1.jpg" alt= ""/>

          </span>
          <h4 className="service-heading">1V1 Private Session</h4>
          <p className="text-muted">This session allows beginners to work with our highly quailified tennis instructor who will help bring your skills to another level</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack-0.01x fa-10x">
              <img className="mx-auto rounded-circle img-fluid" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/7966/images/7XYkaxEsSsmRXLjrPqnS_63.-2-tennis-exercises-for-a-bone-crushing-serve.jpg" alt=""/>
          </span>
          <h4 className="service-heading">Serving Practice</h4>
          <p className="text-muted">This session will teach our memebers how to perform different services and master the art of serving.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack-4x fa-10x">
            <img className="mx-auto rounded-circle img-fluid" src="https://www.tennistours.com/img/tournament-images/french-open.jpg" alt=""/>
          </span>

          <h4 className="service-heading">Beginners Tournament</h4>
          <p className="text-muted">This session will bring new tennis players together to compete in a knockout competion. The individual that wins will get 1 month of 1V1 session with our best instructor.</p>
        </div>
      </div>
    </div>
  </section>

  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  <section className="page-section" id="membership">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Membership</h2>
          <h3 className="section-subheading text-muted">Come join the family!</h3>
          <h3 className="section-subheading text-muted">Adhésion</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Credit Card *" required="required" validation-required-message="Please enter your creadit card information."/>
                


                  <p className="help-block text-danger"></p>
                </div>


                  <div className="col-lg-12 text-center">
                  <h1 className="section-heading text-muted"> Select a Role </h1>
                  </div>

              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div>
              <form>
                <div className="radio">
                  <label>
                    <input type="radio" name="option" value="volunteer"/>
                      Volunteer
                  </label>

                  <label>
                    <input type="radio" name="option" value="member"/>
                      Member
                  </label>

                  <label>
                    <input type="radio" name="option" value="instructor"/>
                      Instructor
                  </label>
                </div>

              </form>

            </div>

              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Submit Information</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>





  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">À propos</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="mx-autro rounded-circle img-fluid" style={{width:250, height:160}}src="https://lawrenceparktennisclub.ca/wp-content/uploads/2017/09/20170911lptctourney_00_0498small.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">We were a small orgainzation who only had 10 emplyoees working back then. Only 1 professional intructor who founded the club and with his expereince and effort, he grew the orgainzation into what it is now.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" style={{width:250, height:160}} src="https://sevendegrees.co/wp-content/uploads/2011/02/iStock_000011403759XSmall2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">A Spark</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">We held our first professional tournament where our name sparked out in the world. With over 250 particpants from around the world competed in a highly qualified competion. </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="mx-auto rounded-circle " style={{width:160, height:160}} src="https://clubandresortbusiness.com/wp-content/uploads/2019/09/USTA_TeachingShot_Pro-1024x683.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted"> Having great results from the tournament our name was known worldwide. Many atheletes wanted to train at Double Shot. With the hopes of training young potential tennis player we opened our services to communities.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" style={{width:170, height:157}} src="http://www.bandl.com/wp-content/uploads/2015/02/data-growth.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Phase two was to start up clubs worldwide by holding more tournaments and having first class equipment at our club. Today we have over 40+ clubs around the world with over 20,000 memebers in each club!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>



  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Notre Incroyable Équipe</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://tennistonic.com/wp-content/uploads/2018/09/Fotolia_37911646_XS.jpg" alt=""/>
            <h4>Tyler Grey</h4>
            <p className="text-muted">Head Coach</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://image.freepik.com/free-photo/beautiful-young-coach-practicing-tennis-moves-exercises-with-little-tennis-player-during-training-outdoor-court-sunset_141188-1898.jpg" alt=""/>
            <h4>Sarah Parker</h4>
            <p className="text-muted">Lead Private Instructor</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://clubmanager365.com/img/tennis_susan.jpg" alt=""/>
            <h4>Diana Alen</h4>
            <p className="text-muted">Lead Skills Master</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">All three of these coaches are highly trained any have competed in the highest stages in the world.</p>
        </div>
      </div>
    </div>
  </section>





  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Nous Contacter</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright"></span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
