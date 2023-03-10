import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <img
        src="https://kartinkof.club/uploads/posts/2022-03/1648209976_1-kartinkof-club-p-grustnii-kotik-mem-1.jpg"
        alt="Cats"
        width={500}
      />
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
