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

  // hendleClickGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // hendleClickNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // hendleClickBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = (
      (100 * good) /
      countTotalFeedback
    ).toFixed(0);

    return (
      <Container>
        <Section title={'Please leave feddback'}>
          <FeedbackOptions option={options} />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
