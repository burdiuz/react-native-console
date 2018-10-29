import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { utils } from '@actualwave/log-data-renderer';

import { NestedText } from './nested';
import { SimpleText } from './simple';

import { RowPropType, StylesPropType } from './utils';

const { isNested } = utils;

const styles = StyleSheet.create({
  row: {
    padding: 4,
    paddingLeft: 8,
    borderLeftWidth: 4,
    borderBottomWidth: 1,
    borderBottomColor: 0x66666633,
  },
  info: {
    borderLeftColor: 0x999999ff,
    backgroundColor: 0x99999933,
  },
  log: {
    borderLeftColor: 0x66666633,
  },
  warning: {
    borderLeftColor: 0xffcc00ff,
    backgroundColor: 0xeeaa0033,
  },
  error: {
    borderLeftColor: 0xff0000ff,
    backgroundColor: 0xcc000033,
  },
  success: {
    borderLeftColor: 0x00cc00ff,
    backgroundColor: 0x00cc0033,
  },
});

export class Row extends PureComponent {
  static propTypes = {
    styles: StylesPropType.isRequired,
    value: RowPropType.isRequired,
    expandDepth: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.resetStyle(props);
  }

  componentWillReceiveProps(props) {
    const { styles: propStyles, value } = this.props;

    if (propStyles !== props.styles || value !== props.value) {
      this.resetStyle(props);
    }
  }

  resetStyle({ value: { level }, styles: propStyles }) {
    this.style = [styles.row, styles[level], propStyles.row, propStyles[level]];
  }

  renderContent() {
    const {
      value: { content },
      expandDepth,
      styles: propStyles,
    } = this.props;

    return content.map((item, index) => {
      if (isNested(item)) {
        return <NestedText key={index} value={item} depth={0} expandDepth={expandDepth} styles={propStyles} />;
      }

      return <SimpleText key={index} value={item} />;
    });
  }

  render() {
    return <Text style={this.style}>{this.renderContent()}</Text>;
  }
}
