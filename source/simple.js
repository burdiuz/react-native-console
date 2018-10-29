import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export const Simple = ({ value }) => <Text>{value}</Text>;
Simple.propTypes = {
  value: PropTypes.string.isRequired,
};

export const SimpleText = ({ value }) => <Text>{value} </Text>;
SimpleText.propTypes = {
  value: PropTypes.string.isRequired,
};
