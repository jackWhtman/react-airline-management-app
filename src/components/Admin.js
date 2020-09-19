import React from "react";

import Header from "./Header";
import LogOut from "./LogOut";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropType from "prop-types";

function Admin({ isAdmin, isLoggedIn }) {
  // console.log(isAdmin);
  // console.log(isLoggedIn);
  return (
    <>
      {!isAdmin && <Redirect to="/staff" />}
      <div>
        <Header />
        <h1>Admin</h1>
        <LogOut />
      </div>
    </>
  );
}

Admin.propType = {
  isAdmin: PropType.bool.isRequired,
};
function mapState(state) {
  return {
    isAdmin: state.currentUser.isAdmin,
  };
}

export default connect(mapState)(Admin);
