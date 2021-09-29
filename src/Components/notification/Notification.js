import React from "react";
import PropTypes from "prop-types";

const Notification = ({ massege }) => {
  return <p>{massege}</p>;
};

export default Notification;

Notification.propTypes = {
  massege: PropTypes.string.isRequired,
};
