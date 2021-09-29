import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
