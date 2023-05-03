import React from 'react';

const FeedbackOptions = ({ onhandlClick }) => (
  <div className="Stat__feedback">
    <button type="button" name="good" onClick={onhandlClick}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onhandlClick}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onhandlClick}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
