import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { RowPropType, StylesPropType } from './utils';

import { Row, getRowListItemKey } from './row';

export const Rows = ({ rows, styles, expandDepth, contentFormatter }) => (
  <>
    {rows.map((item, index) => (
      <Row
        key={getRowListItemKey(item, index)}
        value={value}
        styles={styles}
        expandDepth={expandDepth}
        contentFormatter={contentFormatter}
      />
    ))}
  </>
);

Rows.propTypes = {
  styles: StylesPropType.isRequired,
  rows: PropTypes.arrayOf(RowPropType).isRequired,
  expandDepth: PropTypes.number.isRequired,
};
