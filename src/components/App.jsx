import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

export default function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [option]: prevReviews[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(reviews).reduce((acc, current) => acc + current);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((reviews.good / countTotalFeedback()) * 100);
    return isFinite(percentage) ? `${percentage} %` : '';
  };

  return (
    <>
      <Section title="Please, leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={reviews} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={reviews.good}
            neutral={reviews.neutral}
            bad={reviews.bad}
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
