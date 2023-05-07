import { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import { Notification, Statistics } from '../Statistics';
import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = () => {
    return Object.keys(this.state);
  };
  handlClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + bad + neutral)) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const Total = this.countTotalFeedback();
    const Options = this.options();
    return (
      <div className="Container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handlClick}
            options={Options}
          />
        </Section>
        <Section title="Statistics">
          {Total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
