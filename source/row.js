import React, { memo, useMemo } from 'react';
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

export const Row = memo(
  ({ value: { content, level }, expandDepth, contentFormatter, styles: propStyles }) => {
    const containerStyle = useMemo(
      () => [styles.row, styles[level], propStyles.row, propStyles[level]],
      [propStyles],
    );

    return (
      <Text style={containerStyle}>
        {content.map((item, index) => {
          if (isNested(item)) {
            return (
              <NestedText
                key={index}
                value={item}
                depth={0}
                expandDepth={expandDepth}
                contentFormatter={contentFormatter}
                styles={propStyles}
              />
            );
          }

          return <SimpleText key={index} value={item} contentFormatter={contentFormatter} />;
        })}
      </Text>
    );
  },
  ({ value: a1, styles: a2 }, { value: b1, styles: b2 }) => a1 === b1 && a2 === b2,
);

Row.propTypes = {
  styles: StylesPropType.isRequired,
  value: RowPropType.isRequired,
  expandDepth: PropTypes.number.isRequired,
};

export const createRowItemRenderer = (styles, expandDepth, contentFormatter = (str) => str) => ({
  item,
}) => (
  <Row value={item} styles={styles} expandDepth={expandDepth} contentFormatter={contentFormatter} />
);
export const getRowListItemKey = ({ timestamp }, index) => `${timestamp}${index}`;
