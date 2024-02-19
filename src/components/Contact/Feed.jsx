import React from "react";
import "./Feed.css";
export default function Feed() {
  return (
    <>
      <h2 class="heading">FEED BACK FORM</h2>
      <div class="container2 tc">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Mail Id</label>
            </div>
            <div class="col-75">
              <input
                type="email"
                id="email"
                name="mailid"
                placeholder="Your mail id.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Country</label>
            </div>
            <div class="col-75">
              <select id="country" name="country">
                <option value="none">Select Country</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="russia">Russia</option>
                <option value="japan">Japan</option>
                <option value="india">India</option>
                <option value="china">China</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="feed_back">Feed Back</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
