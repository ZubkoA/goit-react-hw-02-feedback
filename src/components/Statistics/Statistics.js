import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Flex">
      <p className="Statistic__text">
        Good: <span className="Statistic__count">{good}</span>
      </p>

      <p className="Statistic__text">
        Neutral: <span className="Statistic__count">{neutral}</span>
      </p>

      <p className="Statistic__text">
        Bad: <span className="Statistic__count">{bad}</span>
      </p>
      <p className="Statistic__text">
        Total:{' '}
        <span className="Statistic__count">{total(good, neutral, bad)}</span>
      </p>

      <p className="Statistic__text">
        Positive Feedback:{' '}
        <span className="Statistic__count">
          {!positivePercentage(good, neutral, bad)
            ? 0
            : positivePercentage(good, neutral, bad)}
          %
        </span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
export default Statistics;
