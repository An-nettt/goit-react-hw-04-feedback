import PropTypes from 'prop-types';
import { Button } from '../styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => (
    <Button type="button" key={button} onClick={() => onLeaveFeedback(button)}>
      {button}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
};
