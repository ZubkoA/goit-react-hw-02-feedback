import { Component } from 'react';
import Feedback from './Feedback';
import StatisticsControl from './StatisticsControl';
import './Statistics.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  render() {
    return (
      <>
        <Feedback onIncrement={this.handleIncrement} />
        <StatisticsControl />
      </>
    );
  }
}

export default Statistics;
