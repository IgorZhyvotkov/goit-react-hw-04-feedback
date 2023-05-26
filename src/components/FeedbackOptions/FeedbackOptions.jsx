
import {
  FeedbackButtonList,
  FeedbackButtonListItem,
  Button} from './FeedbackOptions.styled';

function FeedbackOptions({option, onLeaveFeedback}) {
return (  
  <FeedbackButtonList>
{option.map(item=> {
  return(
    <FeedbackButtonListItem key={item}>
    <Button onClick={(e)=>onLeaveFeedback(item)}>
      {item}
    </Button>
  </FeedbackButtonListItem>
  )
})}
  </FeedbackButtonList>
)
};

export default FeedbackOptions;
