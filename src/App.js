import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import Dashboard from "./components/dashboard.jsx";
import Registeration from "./components/registeration.jsx";
import ForgetPassword from "./components/forgetpassword.jsx";
import Donation from "./components/donation.jsx";
import DonationHistory from "./components/donationHistory.jsx";
import Logout from "./components/logout.jsx";
import Volunteer from "./components/volunteer.jsx"
import Join from "./components/join.jsx"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Home} />
          <Route path="/registeration" component={Registeration} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/donation" component={Donation} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/donationHistory" component={DonationHistory} />
          <Route path="/logout" component={Logout} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/join" component={Join} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
