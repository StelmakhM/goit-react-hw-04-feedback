import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalReviews, setTotalReviews] = useState({
    good,
    neutral,
    bad,
  });

  useEffect(() => {
    setTotalReviews({
      good,
      neutral,
      bad,
    });
  }, [good, neutral, bad]);

  const onLeaveFeedback = option => {
    switch (option[0]) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        throw new Error('Unexpected input error');
    }
  };

  const countTotalFeedback = () => {
    return Object.values(totalReviews).reduce((acc, current) => acc + current);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((good / countTotalFeedback()) * 100);
    return isFinite(percentage) ? `${percentage} %` : '';
  };

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={totalReviews}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
