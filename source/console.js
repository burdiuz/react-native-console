import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList } from 'react-native';
import {
  INFO_TYPE,
  LOG_TYPE,
  WARNING_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
  row,
  RowPropType,
  StylesPropType,
} from './utils';

import { Row, createRowItemRenderer, getRowListItemKey } from './row';

const styles = StyleSheet.create({
  console: {
    flex: 1,
    borderColor: 0x999999ff,
    borderWidth: 1,
  },
  consoleContent: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export class Console extends Component {
  static propTypes = {
    styles: StylesPropType,
    style: PropTypes.any,
    rows: PropTypes.arrayOf(RowPropType),
    maxRows: PropTypes.number,
    expandDepth: PropTypes.number,
  };

  static defaultProps = {
    style: undefined,
    styles: {},
    rows: undefined,
    maxRows: 50,
    expandDepth: 1,
  };

  constructor(props) {
    super(props);
    
    this.state = { rows: props.rows || [] };
  }

  static getDerivedStateFromProps({ rows }, { rows: prevRows }) {
    if (!rows || rows === prevRows) {
      return null;
    }

    return { rows: rows || [] };
  }

  row(content, level) {
    this.setState(({ rows }) => {
      const { maxRows } = this.props;
      let nextRows = [...rows, row(content, level)];
      const { length } = nextRows;

      if (maxRows > 0 && length > maxRows) {
        nextRows = nextRows.slice(length - maxRows, length);
      }

      return {
        rows: nextRows,
      };
    });
  }

  info = (...content) => this.row(content, INFO_TYPE);

  log = (...content) => this.row(content, LOG_TYPE);

  warn = (...content) => this.row(content, WARNING_TYPE);

  error = (...content) => this.row(content, ERROR_TYPE);

  success = (...content) => this.row(content, SUCCESS_TYPE);

  shouldComponentUpdate(nextProps, { rows: nextRows }) {
    const { rows } = this.state;

    return rows !== nextRows;
  }

  render() {
    const { rows } = this.state;
    const {
      rows: propRows,
      style,
      contentContainerStyle,
      styles: propStyles,
      expandDepth,
      contentFormatter,
      ...props
    } = this.props;

    return (
      <FlatList
        {...props}
        data={rows}
        style={[styles.console, style]}
        contentContainerStyle={[styles.consoleContent, contentContainerStyle]}
        renderItem={createRowItemRenderer(propStyles, expandDepth, contentFormatter)}
        keyExtractor={getRowListItemKey}
      />
    );
  }
}
