import React from "react";
import "./Hero.css";
import Hero2 from "./Hero2/Hero2";
import Title from "../../common/Title/Title";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container flexSB-yt">
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
              <button id="primary-btn">
                GET CONNECTED<i class="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
              <button>
                VIEW COURSES<i class="fa-sharp fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="yt-vdo">
            <h2 class="heading mt10">About College</h2>
            <iframe
              // width="400"
              // height="300"
              src="https://www.youtube.com/embed/lfIwHPWSGYg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <Hero2 />
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Hero;
