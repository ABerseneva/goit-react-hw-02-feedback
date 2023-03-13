import React from 'react';
import PropTypes from 'prop-types';
import {
  FcLike,
  FcLikePlaceholder,
  FcDislike,
  FcPieChart,
  FcSynchronize,
} from 'react-icons/fc';
import { List, Item } from './StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <FcLike />
        Good: {good}
      </Item>
      <Item>
        <FcLikePlaceholder />
        Neutral: {neutral}
      </Item>
      <Item>
        <FcDislike />
        Bad: {bad}
      </Item>
      <Item>
        <FcSynchronize />
        Total: {total}
      </Item>
      <Item>
        <FcPieChart />
        Positive Feedback: {positivePercentage} %
      </Item>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
