import React, { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
// import Notifications from './components/Notification';

import { FEEDBACK_OPTIONS } from '../data/constans';




import './App.css';

class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handlefeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPozitivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPozitivePercentage();
    return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handlefeedback}/>
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral } bad={bad} total={total} positivePercentage={positivePercentage} />
        {/* <Notification /> */}
      </Section>
      </div>
    )
  }
}

export default App;
