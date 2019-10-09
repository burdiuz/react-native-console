import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export const Simple = memo(
  ({ value, contentFormatter }) => <Text>{contentFormatter(value)}</Text>,
  () => true,
);
Simple.propTypes = {
  value: PropTypes.string.isRequired,
};

export const SimpleText = memo(
  ({ value, contentFormatter }) => <Text>{contentFormatter(value)} </Text>,
  () => true,
);

SimpleText.propTypes = {
  value: PropTypes.string.isRequired,
};
