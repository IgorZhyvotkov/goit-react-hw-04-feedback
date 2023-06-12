import { useState } from 'react';
import { Container } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const countTotal = good + neutral + bad;
  const countTotalPercentage = ((100 * good) / countTotal).toFixed(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <Container>
      <Section title={'Please leave feddback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {countTotal === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotal}
            countPositiveFeedbackPercentage={countTotalPercentage}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
