import React from 'react';
// import logo from './logo.svg';

import Portfolio from './components/PortfolioF';



import './App.css';





function French() {

  const portfolioLinks = [

    {
      title: "Essai d'un jour: Gratui",
      caption: 'Cette option vous donnera une visite de notre club et fournira un contre-la-montre de tous les cours proposés.',

    },
    {
      title: 'Pratique: $12.99',
      caption: "Cette option permet aux participants de venir payer 1 jour et d'utiliser le court de tennis."
    },
    {
      title: 'Pratique des compétences: $10.00',
      caption: "Cette option permet aux individus de s'entraîner sur une compétence de tennis spécifique."
    },
    {
      title: 'Tournoi débutants: $45.00',
      caption: 'Cette option permet aux débutants de participer à un tournoi à élimination directe 1v1. Le gagnant recevra gratuitement un mois de session privée avec notre meilleur entraîneur de tennis.'
    },
    {
      title: 'Tournoi intermédiaire: $60.00 ',
      caption: 'Cette option est destinée aux joueurs de tennis experts en tennis. Le gagnant recevra un trophée et un cadeau mystère.'
    },
    {
      title: 'Séances privées 1V1: $75.00',
      caption: 'Cette option sera une session privée individuelle avec un étudiant et un maître coach.'
    },
    {
      title: 'Adhésion complète: $500.00',
      caption: 'Cette option donnera accès à tous les cours proposés et aura un accès spécial à nos gymnases et spas (12 mois).'
    }
  ]

  return (
    <div className="French">



  <header className="masterhead">


  </header>

  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Prestations de Service</h2>
          <h3 className="section-subheading text-muted">Services</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className=" fa-10px">
              <img className="rounded-circle img-fluid" src="https://www.tennisgems.com/wp-content/uploads/2019/02/Untitled-design-1.jpg" alt= ""/>

          </span>
          <h4 className="service-heading">Séances privées 1V1</h4>
          <p className="text-muted">Cette session permet aux débutants de travailler avec notre instructeur de tennis hautement qualifié qui vous aidera à amener vos compétences à un autre niveau</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack-0.01x fa-10x">
              <img className="mx-auto rounded-circle img-fluid" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/7966/images/7XYkaxEsSsmRXLjrPqnS_63.-2-tennis-exercises-for-a-bone-crushing-serve.jpg" alt=""/>
          </span>
          <h4 className="service-heading">Pratique au service</h4>
          <p className="text-muted">Cette session apprendra à nos membres comment effectuer différents services et maîtriser l'art de servir.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack-4x fa-10x">
            <img className="mx-auto rounded-circle img-fluid" src="https://www.tennistours.com/img/tournament-images/french-open.jpg" alt=""/>
          </span>

          <h4 className="service-heading">Tournoi pour débutants</h4>
          <p className="text-muted">Cette session réunira de nouveaux joueurs de tennis pour participer à une compétition à élimination directe. L'individu gagnant bénéficiera d'un mois de session 1V1 avec notre meilleur instructeur.</p>
        </div>
      </div>
    </div>
  </section>

  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  <section className="page-section" id="membership">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Adhésion</h2>
          <h3 className="section-subheading text-muted">Venez rejoindre la famille!</h3>
          <h3 className="section-subheading text-muted">Membership</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Votre Nom *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Votre Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Ton Téléphone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Votre carte de crédit *" required="required" data-validation-required-message="Please enter your creadit card information."/>
                  <p className="help-block text-danger"></p>
                </div>

                  <div className="col-lg-12 text-center">
                  <h1 className="section-heading text-muted"> Sélectionnez un rôle </h1>
                  </div>

              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div>
              <form>
                <div className="radio">
                  <label>
                    <input type="radio" name="option" value="volunteer"/>
                      Bénévole
                  </label>

                  <label>
                    <input type="radio" name="option" value="member"/>
                      Membre
                  </label>

                  <label>
                    <input type="radio" name="option" value="instructor"/>
                      Instructeur
                  </label>
                </div>

              </form>

            </div>

              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Soumettre des informations</button>
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
          <h2 className="section-heading text-uppercase">À propos</h2>
          <h3 className="section-subheading text-muted">About</h3>
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
                  <h4 className="subheading">Nos humbles débuts</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Nous étions une petite organisation qui ne comptait que 10 employés à l'époque. Seul un intructeur professionnel qui a fondé le club et avec son expérience et ses efforts, il a fait de l'organisation ce qu'elle est maintenant.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" style={{width:250, height:160}} src="https://sevendegrees.co/wp-content/uploads/2011/02/iStock_000011403759XSmall2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Mars 2011</h4>
                  <h4 className="subheading">Une étincelle</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Nous avons organisé notre premier tournoi professionnel où notre nom a éclaté dans le monde. Avec plus de 250 participants du monde entier ont participé à un concours hautement qualifié.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="mx-auto rounded-circle " style={{width:160, height:160}} src="https://clubandresortbusiness.com/wp-content/uploads/2019/09/USTA_TeachingShot_Pro-1024x683.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Décembre 2012</h4>
                  <h4 className="subheading">Transition vers un service complet</h4>
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
                  <h4>Juillet 2014</h4>
                  <h4 className="subheading">Expansion de la phase deux</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">La deuxième phase consistait à créer des clubs dans le monde entier en organisant plus de tournois et en ayant un équipement de première classe dans notre club. Aujourd'hui, nous avons plus de 40 clubs à travers le monde avec plus de 20 000 membres dans chaque club!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Faire partie
                  <br/>de nôtre
                  <br/>Récit!</h4>
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
          <h2 className="section-heading text-uppercase">Notre Incroyable Équipe </h2>
          <h3 className="section-subheading text-muted">Our Amazing Team</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://tennistonic.com/wp-content/uploads/2018/09/Fotolia_37911646_XS.jpg" alt=""/>
            <h4>Tyler Grey</h4>
            <p className="text-muted">L'entraîneur-chef</p>
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
            <p className="text-muted">Instructeur privé principal</p>
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
            <p className="text-muted">Maître des compétences en plomb</p>
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
          <p className="large text-muted">Ces trois entraîneurs sont hautement qualifiés et ont participé aux plus hautes étapes du monde.</p>
        </div>
      </div>
    </div>
  </section>





  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Nous Contacter</h2>
          <h3 className="section-subheading text-muted">Contact Us</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Votre Nom *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Votre Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Ton Téléphone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Envoyer le message</button>
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
              <a href="#something">Politique de confidentialité</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Conditions d'utilisation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default French;
