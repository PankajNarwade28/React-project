import React from "react";
import Foot from "./Foot/Foot";
import Feed from "./Feed";
import "./Contact.css";
function Contactm() {
  return (
    <>
      <div className="division4">
        <div class="div4-1">
          <div className="head2">
            {" "}
            <h3>Contact us</h3>
          </div>
          <div className="head2">
            <h3>GOPIKABAI SITARAM GAWANDE MAHAVIDYALAYA UMARKHED</h3>
          </div>

          <div class="exinfo">
            <h5>UMARKHED Dist. Yavatmal 445206 (INDIA)</h5>
            <h5>
              <i class="fa-solid fa-phone"></i>
              07231-XXXXXX
            </h5>
            <h5>
              <i class="fa-solid fa-envelope"></i>
              principal@gsgcollege.edu.in
            </h5>

            <h5>
              <i class="fa-brands fa-internet-explorer"></i>
              https://gsgcollege.edu.in
            </h5>

            <h5>10:00 AM to 05:00 PM</h5>
            <h5>VISITOR COUNT 19205</h5>
            <div class="social">
              <a
                href="https://www.facebook.com/gsgcollege1966/"
                target="_blank"
              >
                <i class="fa-brands fa-facebook icfb"></i>
              </a>
              <a
                href="https://www.instagram.com/gsgcollege1966/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram icin"></i>
              </a>
              <a
                href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin icln"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-twitter ictw"></i>
              </a>
              <a href="https://www.youtube.com/@gsgcollege" target="_blank">
                <i class="fa-brands fa-youtube icyt"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="div4-1">
          <div class="head2">
            <h3>Locate us</h3>
            <div class="mapouter position">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=550&amp;height=350&amp;hl=en&amp;q=gsg umarkhed&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://thepasswordgame.com/">The Password Game</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />{" "}
    </>
  );
}
export default Contactm;
