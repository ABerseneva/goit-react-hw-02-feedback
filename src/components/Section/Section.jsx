import React from 'react';
import PropTypes from 'prop-types';
import { Title, Sect } from './SectionStyled';

const Section = ({ title, children }) => {
  return (
    <Sect>
      {title && <Title>{title}</Title>}
      {children}
    </Sect>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
