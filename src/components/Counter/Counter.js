import React from 'react';
import s from '../Counter/Counter.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

export default class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   onLeaveFeedback = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback,
    );

    return (
      <div className={s.container}>
        <div className={s.feedback}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback} />
          </Section>

          <Section title="Statistics">
            <ul className={s.listStat}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={countTotalFeedback}
                percentage={countPositiveFeedbackPercentage}
              />
            </ul>
          </Section>
        </div>
      </div>
    );
  }
}
