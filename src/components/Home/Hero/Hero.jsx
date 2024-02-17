import React from "react";
import "./Hero.css";
import Title from "../../common/Title/Title";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME FROM GSG COLLEGE"
              title="Reserve Your Admission now"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              reiciendis repudiandae provident qui dolore, repellendus ex
              dolorum blanditiis! Unde eaque a temporibus nobis nulla amet
              distinctio, dolorem provident enim, ad, fugiat numquam recusandae
            </p>
            <div className="button">
              <button className="primary-btn">
                GET CONNECTED<i class="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
              <button>
                VIEW COURSES<i class="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero;
