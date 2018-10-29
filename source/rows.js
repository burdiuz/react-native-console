import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { RowPropType, StylesPropType } from './utils';

import { Row } from './row';

export class Rows extends Component {
  static propTypes = {
    styles: StylesPropType.isRequired,
    rows: PropTypes.arrayOf(RowPropType).isRequired,
    expandDepth: PropTypes.number.isRequired,
  };

  renderRow = (value, index) => {
    const { timestamp } = value;
    const { styles, expandDepth } = this.props;

    return (
      <Row key={`${timestamp}${index}`} value={value} styles={styles} expandDepth={expandDepth} />
    );
  };

  render() {
    const { rows } = this.props;

    return <Fragment>{rows.map(this.renderRow)}</Fragment>;
  }
}
