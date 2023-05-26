import { Component } from 'react';
import {
  Container,
  Section,
  FeedbackHeader,
  FeedbackButtonList,
  FeedbackButtonListItem,
  Button,
  StatisticksList,
  StatisticksListItem,
} from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  hendleClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  hendleClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral+ bad;
    const countPositiveFeedbackPercentage = ((100*good) / countTotalFeedback).toFixed(0);

    return (
      <Container>
        <Section>
          <FeedbackHeader>Please leave feddback</FeedbackHeader>
          <FeedbackButtonList>
            <FeedbackButtonListItem>
              <Button onClick={this.hendleClickGood}>Good</Button>
            </FeedbackButtonListItem>
            <FeedbackButtonListItem>
              <Button onClick={this.hendleClickNeutral}>Neutral</Button>
            </FeedbackButtonListItem>
            <FeedbackButtonListItem>
              <Button onClick={this.hendleClickBad}>Bad</Button>
            </FeedbackButtonListItem>
          </FeedbackButtonList>

          <FeedbackHeader>Statistics</FeedbackHeader>
          <StatisticksList>
            <StatisticksListItem>Good: {good}</StatisticksListItem>
            <StatisticksListItem>Neutral: {neutral}</StatisticksListItem>
            <StatisticksListItem>Bad: {bad}</StatisticksListItem>
            <StatisticksListItem>
              Total: {countTotalFeedback}
            </StatisticksListItem>
            <StatisticksListItem>Positive feedback: {countPositiveFeedbackPercentage}%</StatisticksListItem>
          </StatisticksList>
        </Section>
      </Container>
    );
  }
}

export default App;
