import React from "react";
import "./Title.css";
function Title({ subtitle, title }) {
  return (
    <>
      <div id="heading">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </>
  );
}
export default Title;
