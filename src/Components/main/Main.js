import React, { Component, Fragment } from "react";
import FeedbackOptions from "../feedBack/FeedbackOptions";
import Notification from "../notification/Notification";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";
import styles from "./Main.module.css";

class Main extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  increment = (e) => {
    const name = e.target.name;
    this.setState((prevStats) => ({
      [name]: prevStats[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  // const { good, neutral, bad } = this.state;
  // const total = good + neutral + bad;
  // return total;

  countPositiveFeedbackPercentage = () => {
    const valueFeedback = this.countTotalFeedback();
    const goodPercentage = valueFeedback
      ? (this.state.good / valueFeedback) * 100
      : 0;
    return Number(goodPercentage).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalfeedback = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;
    const addIncrement = this.increment;

    return (
      <>
        <div className={styles.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={addIncrement}
              options={Object.keys(this.state)}
            />
          </Section>

          <Section title="Statistics">
            {totalfeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalfeedback()}
                positivePercentage={percentage()}
              />
            ) : (
              <Notification massege="No feedback given" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default Main;
