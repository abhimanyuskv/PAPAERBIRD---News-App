import React from "react";
import "../../style/Team.css";
import plan1 from "../../images/plan1.png";
const Team = () => {
  return (
    <div className="section">
      <div id="" className="Testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2 id="teamhead">Mary Adams</h2>
              </div>
            </div>
          </div>
          <div className="row d_flex">
            <div className="col-md-3">
              <div className="Testimonial_box">
                <i>
                  <img src={plan1} alt="#" />
                </i>
              </div>
            </div>
            <div className="col-md-9">
              <div className="Testimonial_box">
                <p id="teampara">
                  “I can’t say it LOUDLY enough that the PAPERBIRD
                  is a true partner in every sense of the word. They
                  are trusted, reliable and audience-focused. I cannot imagine our
                  lives without them – providing us timely and accurate
                  information. Thanks for all you do for us – with special
                  recognition to Ivan Toney, PAPERBIRD’s Managing Director
                  extraordinaire.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;