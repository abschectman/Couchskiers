import {Route} from "react-router-dom";
import React from "react";
import SignUpConainer from "./session/signup_container"
import Login from "./modal/modal_container"
import Dash from "./dash/dash_container"
import ChatRoom from "../components/chat/reservation_container"
import Edit from "./user/edit_user_container"
import Location from "./location/location_container"
import Ref from "./refer/ref_container"
import {AuthRoute, ProtectedRoute} from "../util/route_util"
const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignUpConainer} />
    <AuthRoute path="/signup" component={Login} />
    <ProtectedRoute path="/banana/:userId" component={Edit} />
    <ProtectedRoute path="/refs/:userId" component={Ref} />
    <ProtectedRoute exact path="/users/:userId" component={Dash} />
    <Route path="/locations/:locationId" component={Location} />
    <Route path="/messages/:reservationId" component={ChatRoom} />
  </div>
);

export default App;
