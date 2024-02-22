import React from "react";
import Qlink from "../common/Qlink/Qlink";
import "./About.css";
import Qbtn from "../common/Qlink/Qbtn/Qbtn";
import Contactm from "../Contact/Contactm";
function About() {
  return (
    <>
      <h1 className="heading">About GSG College</h1>

      <p class="para-abt">
        The Gopikabai Sitaram Gawande Mahavidyalaya, run by
        <b> Yavatmal Zilla Akhil Kunbi Samaj</b>, was established in a small
        town named Umarkhed in 1966, in Yavatmal District which is one of the
        educationally backward districts of Maharashtra. It is permanently
        affiliated to Sant Gadge Baba Amravati University, Amravati. The
        institution is recognized by UGC under 2(f) and 12(b) in the year 1987.
        The college is reaccredited by NAAC with B++ grade in Nov-2017. The
        vision of college is to provide quality education, to the poorest and
        deprived strata of the society. The college gives emphases on vocational
        and technical education to students. The college is located in a
        sprawling area of 32 acres, has four UG, eight PG and 14 Ph.D. programs.
        The institute offers Skill based Short term and add on courses. There
        are 30 faculty members catering to approx.1800 students. The campus
        area, running over 32 acres, has a vast potential for expansion of
        academic activities. As such, there is a separate library building,
        Academic block, Science wing and computer center, Hostel for boys, Guest
        house, sports field etc. The institute believes in providing quality
        education and life-long learning to the students and works tirelessly
        for realization of its vision.
      </p>
      <Qbtn />
      <Contactm />
    </>
  );
}
export default About;
