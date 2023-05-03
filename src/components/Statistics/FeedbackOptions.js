import React from 'react';

const FeedbackOptions = ({ onhandlClick }) => (
  <div className="Stat__feedback" onClick={onhandlClick}>
    <button type="button" name="good">
      Good
    </button>
    <button type="button" name="neutral">
      Neutral
    </button>
    <button type="button" name="bad">
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
