import React from "react";
import Contactm from "../../Contact/Contactm";
import Qbtn from "./Qbtn/Qbtn";
import "./Qlink.css";
function Qlink() {
  return (
    <>
      <div className="footer">
        <div class="subdiv3-2">
          <div class="subdiv3-2a">
            <h2 class="heading">News & Notice</h2>
            <p class="mar-p">
              “Skill is only developed by hours and hours of work.”
              <b>~Usain Bolt</b> <br />
              <br />
            </p>
          </div>

          <div class="subdiv3-2a">
            <h2 class="heading">Link & Download</h2>
            <marquee behavior="text1" direction="up" scrolldelay="0">
              <h2 class="mar-h2">Contributory Appointment</h2>
              <p class="mar-p">
                Applications are invited for appointments of the candidates for
                teaching in the college on contributory basis
              </p>
              <a
                href="https://gsgcollege.edu.in/facultypanel/v2/serverfiles/2023-06-26-05-44-44thWhatsApp%20Image%202023-06-26%20at%2010.52.09.jpeg"
                target="_blank"
              >
                <button class="div-btn1 marbtn">Download</button>
              </a>
            </marquee>
          </div>
        </div>
      </div>
      <Qbtn />
      <Contactm />
    </>
  );
}
export default Qlink;
