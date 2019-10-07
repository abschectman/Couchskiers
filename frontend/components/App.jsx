import {Route} from "react-router-dom";
import React from "react";
import SignUpConainer from "./session/signup_container"
import Login from "./modal/modal_container"
import Dash from "./dash/dash_container"
import Edit from "./user/edit_user_container"
import {AuthRoute, ProtectedRoute} from "../util/route_util"
const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignUpConainer} />
    <AuthRoute path="/signup" component={Login} />
    <ProtectedRoute path="users/banana/:userId" component={Edit} />
    <ProtectedRoute path="/users/:userId" component={Dash} />
  </div>
);

export default App;
