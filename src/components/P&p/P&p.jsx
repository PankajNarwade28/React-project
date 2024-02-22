import React from "react";
import "./P&p.css";
import Qbtn from "../common/Qlink/Qbtn/Qbtn";
import Contactm from "../Contact/Contactm";

function Pandp() {
  return (
    <>
      <div class="pap">
        <div class=" ">
          <h2 class="heading">Patron</h2>
          <div class=" disflex">
            <img
              class="pspt "
              src="https://www.gsgcollege.edu.in/images/ceo-img.jpg"
              alt="cea images"
            />
            <div class=" details">
              <p class=" ">
                Through this college, I long to link my past and create future.
                I want to fulfill my mother's wish and father's dream .my wife
                sushila and myself adopted this college as our own third child.
                we realize this is a tremendous responsibility but we want to
                raise and nurture it as a gift of god .
              </p>
              <h4>Dr. Atmaram Gawande</h4>
            </div>
          </div>
        </div>
        <div class="  ">
          <h2 class="heading">Principle</h2>
          <div class="disflex">
            <img
              class="pspt "
              src="https://gsgcollege.edu.in/facultypanel/v2/serverfiles/2023-05-15-08-22-55thWhatsApp%20Image%202023-05-15%20at%201.47.15%20PM.jpeg"
              alt="cea images"
            />
            <div class="details" id="over">
              <p class=" ">
                The Gopikabai Sitaram Gawande Mahavidyalaya, run by Yavatmal
                Zilla Akhil Kunbi Samaj, was established in a small town named
                Umarkhed in 1966, in Yavatmal District which is one of the
                educationally backward districts of Maharashtra. It is
                permanently affiliated to Sant Gadge Baba Amravati University,
                Amravati. The institution is recognized by UGC under 2(f) and
                12(b) in the year 1987. The college is reaccredited by NAAC with
                B++ grade in Nov-2017. The vision of college is to provide
                quality education, to the poorest and deprived strata of the
                society. The college gives emphases on vocational and technical
                education to students. The college is located in a sprawling
                area of 32 acres, has four UG, eight PG and 14 Ph.D. programs.
                The institute offers Skill based Short term and add on courses.
                There are 30 faculty members catering to approx.1800 students.
                The campus area, running over 32 acres, has a vast potential for
                expansion of academic activities. As such, there is a separate
                library building, Academic block, Science wing and computer
                center, Hostel for boys, Guest house, sports field etc. The
                institute believes in providing quality education and life-long
                learning to the students and works tirelessly for realization of
                its vision
              </p>
              <h4>Dr. N.B.Kadam</h4>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <Qbtn />
      <Contactm />
    </>
  );
}
export default Pandp;
