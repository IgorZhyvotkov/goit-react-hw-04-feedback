
import {
  FeedbackButtonList,
  FeedbackButtonListItem,
  Button} from './FeedbackOptions.styled';

function FeedbackOptions({options, onLeaveFeedback}) {
return (  
  <FeedbackButtonList>
{options.map(name=> {
  return(
    <FeedbackButtonListItem key={name}>
    <Button  onClick={()=>onLeaveFeedback(name)}>
      {name}
    </Button>
  </FeedbackButtonListItem>
  )
})}
  </FeedbackButtonList>
)
};

export default FeedbackOptions;
