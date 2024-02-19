import React from "react";
import Qlink from "../../../common/Qlink/Qlink";
import Contact from "../../../Contact/Contact";
import "./Hero2.css";
function Hero2() {
  return (
    <>
      <div className="  flexSB-hero">
        <div className="wid80">
          <h2 class="heading martxop">Vision</h2>
          <p>
            1) Provide the highest quality education.
            <br />
            2) Emphasis on VOCATIONAL and TECHNICAL education. <br />
            3) Promote college as life long learning centre for student and
            community. <br />
            4) Prepare student for 21st century. <br />
            5) Plan international exposure and work on INTERNATIONAL STUDENT
            EXCHANGE.
          </p>
          <hr />
        </div>

        <div className="wid80">
          <h2 class="heading mission">Mission</h2>
          <p class="pad40">Promote college as a LIFE LONG LEARNING CENTER</p>
          <hr />
        </div>
      </div>
      <Qlink />
    </>
  );
}
export default Hero2;
