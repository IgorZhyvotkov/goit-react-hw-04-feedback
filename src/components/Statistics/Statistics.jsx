import { StatisticksTitle, StatisticksList, StatisticksListItem } from './Statistics.styled';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
   <>
    <StatisticksList>
      <StatisticksListItem>Good: {good}</StatisticksListItem>
      <StatisticksListItem>Neutral: {neutral}</StatisticksListItem>
      <StatisticksListItem>Bad: {bad}</StatisticksListItem>
      <StatisticksListItem>Total: {countTotalFeedback}</StatisticksListItem>
      <StatisticksListItem>
        Positive feedback: {countPositiveFeedbackPercentage}%
      </StatisticksListItem>
    </StatisticksList>
    </>
  );
}

export default Statistics;
