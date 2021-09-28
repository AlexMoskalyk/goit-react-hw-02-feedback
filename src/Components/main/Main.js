import React, { Component } from "react";
import FeedbackOptions from "../feedBack/FeedbackOptions";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";

class Main extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  Increment = (e) => {
    const name = e.currenttarget.name;
    this.setState((prevStats) => ({
      [name]: prevStats[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const valueFeedback = this.countTotalFeedback();
    const goodPercentage = valueFeedback
      ? (this.state.good / valueFeedback) * 100
      : 0;
    return Number(goodPercentage).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalfeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const addFeedback = this.Increment();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={addFeedback}
            options={[good, neutral, bad]}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalfeedback}
            positivePercentage={percentage}
          />
        </Section>
      </>
    );
  }
}

export default Main;
