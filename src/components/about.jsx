import React, { Component } from "react";
import logo from "./initial-logo.jpg";
import NavigationBar from "./navigationBar";

class About extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} className="Home-logo" alt="logo" />
              </div>
              <div className="col" style={{ paddingTop: "3%" }}>

                <h2 className="text"> About Us </h2>
                <p>
                  Using our expertise in the field of technology and our desire to improve the planet in general, we targeted few aforementioned development goals that primarily aim to reduce the inequalities amongst humans by promoting the act of sharing and reuse.
</p> <p>
                  As our idea is based on the concept of sharing and hence is appropriately named Share. Share is a web app/platform that links those who wish to donate and give something back to their community, to those who know the best possible paths to help the poor i.e., the NGOs.
</p><p>
                  Using Share people would be able to list their items to donate easily on their web platform by simply filling up a few forms and then NGOs will be able to use that information to collect those items and then set up donation spots or even regular camps to give back to those who need it most. There would also be an option to act as a volunteer and provide drop-off/pickup services as well. The platform is flexible enough to be implemented everywhere and can expand as more NGOs become a part of the plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
