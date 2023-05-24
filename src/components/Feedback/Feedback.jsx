import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  FeedbackHeader,
  FeedbackButtonList,
  FeedbackButtonListItem,
  Button,
  StatisticksList,
  StatisticksListItem,
} from './Feedback.styled';

class Feedback extends Component {
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
  // totalFeedback = () => {
  //  return (total = this.state.good + this.state.neutral + this.state.bad;) 
  // };

  render() {
    const { good, neutral, bad } = this.state;

    console.log(this.state);
    return (
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
          <StatisticksListItem>Total: {this.state.good + this.state.neutral + this.state.bad}</StatisticksListItem>
          <StatisticksListItem>Positive feedback: {}</StatisticksListItem>
        </StatisticksList>
      </Section>
    );
  }
}
Feedback.propTypes = {
  // bla: PropTypes.string,
};

export default Feedback;
