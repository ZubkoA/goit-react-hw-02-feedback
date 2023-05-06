import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="Stat__feedback" onClick={onLeaveFeedback}>
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
