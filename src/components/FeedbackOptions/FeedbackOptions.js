import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className="Stat__feedback" onClick={onLeaveFeedback}>
    {options.map(option => (
      <button type="button" name={option} key={option}>
        {option}
      </button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
