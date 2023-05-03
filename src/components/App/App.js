import Statistics from '../Statistics';
import Section from 'components/Section';
import Notification from 'components/Statistics/Notification';

// import FeedbackOptions from 'components/Statistics/FeedbackOptions';
import './App.css';

export default function App() {
  return (
    <div className="Container">
      <Section title="Please leave feedback">
        <Statistics
          good={0}
          neutral={0}
          bad={0}
          total={0}
          positivePercentage={0}
        />
        <Notification message="There is no feedback" />
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
      </Section>
    </div>
  );
}
