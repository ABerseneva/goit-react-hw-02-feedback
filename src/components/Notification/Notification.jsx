import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrap } from './NotificationStyled';

const Notification = ({ message }) => {
  return (
    <Wrap>
      <Title>{message}</Title>
      <img
        src="https://kartinkof.club/uploads/posts/2022-03/1648209976_1-kartinkof-club-p-grustnii-kotik-mem-1.jpg"
        alt="Cats"
        width={500}
      />
    </Wrap>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
