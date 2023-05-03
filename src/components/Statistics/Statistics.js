import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
// import StatisticsControl from './StatisticsControl';
import './Statistics.css';

class Statistics extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  handlClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const Total = good + bad + neutral;
    const Percentage = Math.round((good / Total) * 100);
    console.log(Percentage);

    return (
      <div>
        <FeedbackOptions onhandlClick={this.handlClick} />

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
            <p className="Statistic__text">
              Total: <span className="Statistic__count">{Total}</span>
            </p>

            <p className="Statistic__text">
              Positive Feedback:{' '}
              <span className="Statistic__count">
                {!Percentage ? 0 : Percentage}%
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
