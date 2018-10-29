import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import convert from '@actualwave/log-data-renderer';

import {
  INFO_TYPE,
  LOG_TYPE,
  WARNING_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
} from './utils';

import { buildContent } from './react-native';

const MATCH_NONE = [];

const contentMap = (value) => {
  if (typeof value === 'string') {
    // shortcut for log strings to not wrap them with quotes
    return value;
  }

  return convert(value);
};

// if gets rendered too much, convert to  pure component
// OR make Console item pure component(which may react to touches, so it will have state)
const FullHeightText = ({ text, children, ...props }) => (
  <Text {...props} numberOfLines={(text.match(/\n/g) || MATCH_NONE).length + 1}>
    {text}
    {children}
  </Text>
);

class Console extends Component {
  state = { rows: [] };

  componentDidMount() {
    // TEST DATA
    this.info('Something here:', 'anything else');
    this.log(1, 2, 3, true, Symbol('abc-def'));
    this.warn(new Date());
    this.success(React);
    this.error(new Error('Something bad happened'));
    this.log([
      { name: 'obj-1' },
      { name: 'obj-2' },
      { name: 'obj-3' },
      { name: 'obj-4' },
    ]);
    this.log(
      new Set([
        { name: 'obj-1' },
        { name: 'obj-2' },
        { name: 'obj-3' },
        { name: 'obj-4' },
      ]),
    );
    this.log(
      new Map([
        [{ type: 'key' }, { type: 'value' }],
        ['string-key', { name: 'obj-1' }],
        [4, { name: 'obj-2' }],
        [true, { name: 'obj-3' }],
        [() => null, { name: 'obj-4' }],
        [new Date(), { name: 'obj-5' }],
      ]),
    );

    const obj = {
      first: '1',
      second: '2',
      third: '3',
    };

    this.log(obj);

    obj.fourth = Object.assign({}, obj);
    obj.fifth = obj;

    this.log(obj);
  }

  push(content, level) {
    this.setState(({ rows }, props) => ({
      rows: [
        ...rows,
        {
          level,
          content: content.map(contentMap),
          timestamp: Date.now(),
        },
      ],
    }));
  }

  info = (...content) => this.push(content, INFO_TYPE);

  log = (...content) => this.push(content, LOG_TYPE);

  warn = (...content) => this.push(content, WARNING_TYPE);

  error = (...content) => this.push(content, ERROR_TYPE);

  success = (...content) => this.push(content, SUCCESS_TYPE);

  render() {
    const { rows } = this.state;
    const { style, rowStyle, ...props } = this.props;

    return (
      <View {...props} style={[styles.console, style]}>
        {rows.map(({ timestamp, content, level }, index) => {
          // this should be a row container which displays
          // visual style of the log level
          // <FullHeightText text={message} style={[styles.row, rowStyle]} />
          return (
            <Text key={`${timestamp}${index}`} style={[styles.row, styles[level]]}>
              {buildContent(content)}
            </Text>
          );
        })}
      </View>
    );
  }
}

Console.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
  style: PropTypes.any,
  rowStyle: PropTypes.any,
  maxRows: PropTypes.number,
};

Console.defaultProps = {
  style: undefined,
  rowStyle: undefined,
  maxRows: 50,
};

const styles = StyleSheet.create({
  console: {
    flex: 1,
    borderRadius: 4,
    borderColor: 0x999999ff,
    borderWidth: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  row: {
    padding: 4,
    paddingLeft: 8,
    borderLeftWidth: 4,
  },
  info: {
    borderLeftColor: 0x999999FF,
    backgroundColor: 0x99999933,
  },
  log: {
    borderLeftColor: 0xEEEEEEFF,
  },
  warning: {
    borderLeftColor: 0xFFCC00FF,
    backgroundColor: 0xEEAA0033,
  },
  error: {
    borderLeftColor: 0xFF0000FF,
    backgroundColor: 0xCC000033,
  },
  success: {
    borderLeftColor: 0x00CC00FF,
    backgroundColor: 0x00CC0033,
  },
});

export default Console;
