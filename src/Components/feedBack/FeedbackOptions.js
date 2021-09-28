import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <button
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
