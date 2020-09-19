import React, { useEffect } from "react";
import Header from "./Header";
import LogOut from "./LogOut";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as flightActions from "../Redux/actions/flightAction";
import FlightTable from "./FlightTable";
import PropType from "prop-types";

function Staff({ action, isLoggedIn, flights }) {
  console.log(flights.length);
  useEffect(() => {
    if (flights.length === 0) {
      action.loadFlights();
    }
  });

  return (
    <>
      {!isLoggedIn && <Redirect to="/" />}

      <div>
        <Header />
        <LogOut />
        <h1>Staff</h1>
        <FlightTable flights={flights} />
      </div>
    </>
  );
}

Staff.propType = {
  action: PropType.object.isRequired,
  isLoggedIn: PropType.bool.isRequired,
  flights: PropType.array.isRequired,
};

function mapState(state) {
  return {
    isLoggedIn: state.currentUser.isLoggedIn,
    flights: state.flights,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(flightActions, dispatch),
  };
}

export default connect(mapState, mapDispatchToProps)(Staff);
