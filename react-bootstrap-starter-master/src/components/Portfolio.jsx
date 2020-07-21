import React from 'react'

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="coursesOffered">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Courses Offered</h2>
              <h3 className="section-subheading text-muted">Cours offerts</h3>
            </div>
          </div>

          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, caption }, index) =>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">

                        </div>

                            <img className="img-fluid-hover-content" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                        </a>


                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )

            }
          </div>
        </div>


      </section>
    )
}
