import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from 'react-responsive-carousel';


class ClienTestimonialsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Carousel showThumbs={false} autoPlay={true} interval={2500} showArrows={false} showStatus={false} infiniteLoop={true} showIndicators={false} axis={"horizontal"} dynamicHeight={true} >
           
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                Advice before starting was invaluable. Good friendly team, we all worked well
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Malcolm Lockey</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                All the work was done to a very high standard, was delivered on time and within budget.
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">A G Sillars</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                Excellent all round service, solutions, and support.
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Craig Thompson</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                Total professional service from start to finish
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Peter Dennis</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                Our situation was very complicated, PlanArch helped us get the correct result
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Ann Watson</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                PlanArch Design offered a superior service and were always willing to come to site if any issues arose. I would definitely recommend them to anyone and will use them again myself in the future.
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Paula Scott</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                PlanArch team are always responsive and helpful
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Karl Robinson</p>
            </div>
            <div>
              <p className="testimonial">
                <i className="fas fa-quote-left"></i>
                Throughout the design and construction process PlanArch staff were friendly, efficient, and very patient. Always prepared to explain issues in ‘laymans’ terms. Any concerns were dealt with no matter how trivial.
                <i className="fas fa-quote-right"></i>
              </p>
              <p className="client">Avril Hamilton</p>
            </div>
          
      </Carousel>
    );
  }
}

function aboutPage(){
  initialisePage();
  // set main content
  const testimonialsEL = document.getElementById("js-client-testimonials");
  ReactDOM.render(<ClienTestimonialsCarousel />, testimonialsEL);
}

function initialisePage(){
  return;
}

export default aboutPage