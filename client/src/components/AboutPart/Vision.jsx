import React from "react";
import "../../style/Vision.css";
import "../../style/responsive.css";
import img2 from "../../images/our_img2.jpg";
const vision = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div>
          <div className="row">
            <div className="col-md-12 container">
              <div>
                <figure>
                  <img id="ourimg" className="he_img " src={img2} alt="#" />
                </figure>

                <div className="our_text_box position_box centered ">
                  <p
                    id="visionhead"
                    className="awesome withi_color"
                    style={{ color: "black" }}
                  >
                    Our vision is to be the information hub for the communities
                    we serve. Our mission is to be the leading provider of news,
                    information and business solutions. We strive to be accurate,
                    objective, independent, and balanced in our reporting. We
                    look for and encourage others to express their views, tell
                    their stories, relay their concerns, and spread their good
                    news. We believe in journalism's highest ethical standards
                    and believe in accountability, openness, and honesty.{" "}
                  </p>
                  <p
                    id="visionpara"
                    className="hiuouh"
                    style={{ color: "black" }}
                  >
                    {/* There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repea */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vision;