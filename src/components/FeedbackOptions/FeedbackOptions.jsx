import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedBackOptionStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => (
        <Button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
