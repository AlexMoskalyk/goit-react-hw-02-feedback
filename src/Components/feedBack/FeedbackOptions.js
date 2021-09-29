import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          name={option}
          type="button"
          className={styles.btnFeedback}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
