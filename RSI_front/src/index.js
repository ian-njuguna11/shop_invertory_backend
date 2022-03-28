import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.5.0";


import AdminLayout from "layouts/Admin.js";
import LoginLayout from "layouts/Login.js";
import SignUpLayout from "layouts/SignUp.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={(props) => <LoginLayout {...props} />} />
      <Route path="/SignUp" render={(props) => <SignUpLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/products" render={(props) => <ListProductComponent {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
