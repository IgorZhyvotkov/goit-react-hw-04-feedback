import { Component } from 'react';
import { Container } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
   return this.state.good + this.state.neutral + this.state.bad;
  };

  // countPositiveFeedbackPercentage = countTotal => ((100 * this.state.good) / countTotal).toFixed(0);

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    // const countPositiveFeedbackPercentage = (
    //   (100 * good) /
    //   countTotalFeedback
    // ).toFixed(0);

    return (
      <Container>
        <Section title={'Please leave feddback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            // countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
