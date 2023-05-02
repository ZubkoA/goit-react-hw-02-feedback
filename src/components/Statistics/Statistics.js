import { Component } from 'react';
// import Feedback from './Feedback';
// import StatisticsControl from './StatisticsControl';
import './Statistics.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlClickGood = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        good: prevState.good + 1,
      };
    });
  };
  handlClickNeutral = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handlClickBad = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <div className="Stat__feedback">
          <h1 className="Stat__title">Please leave feedback</h1>

          <button type="button" onClick={this.handlClickGood}>
            Good
          </button>

          <button type="button" onClick={this.handlClickNeutral}>
            Neutral
          </button>

          <button type="button" onClick={this.handlClickBad}>
            Bad
          </button>
        </div>
        <div className="Statistic__wrap">
          <h2 className="Statistic__title">Statistics</h2>

          <div className="Grid">
            <p className="Statistic__text">
              Good: <span className="Statistic__count">{this.state.good}</span>
            </p>

            <p className="Statistic__text">
              Neutral:{' '}
              <span className="Statistic__count">{this.state.neutral}</span>
            </p>

            <p className="Statistic__text">
              Bad: <span className="Statistic__count">{this.state.bad}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
