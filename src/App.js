import React from "react";
import Sidebar from "pages/profiledit/components/Sidebar";
import Profile from "pages/profiledit/Profile";
import Billings from "pages/billings/Billings";
import { routes } from "routes/index.js";
import BillingCard from "pages/billings/components/BillingCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
        <Switch>
          <Route exact path={'/'} component={Sidebar} />
          <Route path={routes.profile} component={Profile} />
          <Route path={routes.billings} component={Billings} />
          <Route path={routes.card} component={BillingCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
