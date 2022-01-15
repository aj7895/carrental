import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
// antd css
import "antd/dist/antd.min.css";

// pages
import { Home, Login, Register, Booking, UserBookings } from "./pages/Index";

// components
import Header from "./components/Header";
import AddCar from "./pages/AddCar";
import EditCars from "./pages/EditCars";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <ProtectedRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/booking/:carid" component={Booking} />
        <ProtectedRoute path="/userbookings" component={UserBookings} />
        <ProtectedRoute path="/addcar" component={AddCar} />
        <ProtectedRoute path="/editcar/:carid" component={EditCars} />
        <ProtectedRoute path="/edituser/:userid" component={EditUser} />
        <ProtectedRoute path="/admin" component={Dashboard} />
      </Router>
    </div>
  );
};

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
