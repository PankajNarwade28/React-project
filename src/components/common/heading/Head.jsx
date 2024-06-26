import React from "react";
import "./Head.css";
function Head() {
  return (
    <div>
      <section className="head ">
        <div className="container flexSB">
          <div className="logo flexSB">
            <div className="img">
              <img
                src="https://gsgcollege.edu.in/facultypanel/v2/serverfiles/2022-12-21-09-56-53thgsglogo.png"
                alt=""
              />
            </div>
            <div className="title">
              <h1>Yavatmal Jillha Akhil Kunbi Samaj's</h1>
              <h3>Gopikabai Sitaram Gawande Mahavidyalaya Umarkhed</h3>
            </div>
          </div>

          <div className="social">
            <a href="https://www.facebook.com/gsgcollege1966/">
              <i class="fa-brands fa-facebook icon"></i>
            </a>
            <a href="https://www.instagram.com/gsgcollege1966/">
              <i class="fa-brands fa-instagram icon"></i>
            </a>
            <a href="https://www.youtube.com/@gsgcollege">
              <i class="fa-brands fa-youtube icon"></i>
            </a>
            <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <i class="fa-brands fa-linkedin icon"></i>
            </a>
            {/* <a href="/">
              <i class="fa-brands fa-twitter icon"></i>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Head;
