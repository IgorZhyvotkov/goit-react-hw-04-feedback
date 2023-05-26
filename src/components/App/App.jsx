import { Component } from 'react';
import { Container } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = options =>
    options.reduce((acc, currentVelue) => (acc += this.state[currentVelue]), 0);

  countPositiveFeedbackPercentage = countTotal =>
    ((100 * this.state.good) / countTotal).toFixed(0);

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback(options);
    const countTotalPercentage =
      this.countPositiveFeedbackPercentage(countTotal);

    return (
      <Container>
        <Section title={'Please leave feddback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
}

export default App;
