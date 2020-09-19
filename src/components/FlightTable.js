import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FlightTable = ({ flights }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Flight No</th>
        <th>From Location</th>
        <th>To Location</th>
        <th>Departure Time</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {flights.map((flight) => {
        return (
          <tr key={flight.is}>
            <td>
              <Link to={"/staff/" + flight.id}>{flight.name}</Link>
            </td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.departureTime}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

FlightTable.propTypes = {
  flights: PropTypes.array.isRequired,
};

export default FlightTable;
