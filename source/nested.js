/* eslint-disable no-use-before-define */
import React, { memo, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { utils } from '@actualwave/log-data-renderer';

import { SPACE_LEVEL, getStringWrap, StylesPropType } from './utils';

const {
  isNested,
  isList,
  iterateList,
  iterateStorage,
  getNestedShortContent,
  getListSize,
  getStorageSize,
} = utils;

const styles = StyleSheet.create({
  nested: {},
  collapseIcon: {
    fontWeight: 'bold',
  },
  expandIcon: {
    fontWeight: 'bold',
  },
  clickable: {},
});

const getNestedSize = (value) => (isList(value) ? getListSize(value) : getStorageSize(value));

const CollapsedContent = ({ value }) => {
  const size = getNestedSize(value);

  let content = getNestedShortContent(value);

  if (content === undefined) {
    content = size ? ' ... ' : '';
  }

  return <Text>{content}</Text>;
};

const renderCollapsedContent = ({ value }) => <CollapsedContent value={value} />;

const ListContent = ({
  value: list,
  depth,
  expandDepth,
  contentSpace,
  contentFormatter,
  styles: propStyles,
}) => {
  const result = [];
  let index = 1;
  let text = '\n';

  iterateList(list, (value) => {
    text += contentSpace;

    if (isNested(value)) {
      result.push(<Text key={index++}>{text}</Text>);
      text = '';
      result.push(
        <NestedText
          key={index++}
          value={value}
          depth={depth + 1}
          expandDepth={expandDepth}
          contentFormatter={contentFormatter}
          styles={propStyles}
        />,
      );
    } else {
      text += contentFormatter(value);
    }
    text += ', \n';
  });

  if (text) {
    result.push(<Text key={index}>{text}</Text>);
  }

  return result;
};

const StorageContent = ({
  value: object,
  depth,
  expandDepth,
  contentSpace,
  contentFormatter,
  styles: propStyles,
}) => {
  const result = [];
  let index = 1;
  let text = '\n';

  iterateStorage(object, (value, key) => {
    text += contentSpace;

    if (isNested(key)) {
      result.push(<Text key={index++}>{`${text}[`}</Text>);
      result.push(
        <NestedText
          key={index++}
          value={key}
          depth={depth + 1}
          expandDepth={expandDepth}
          contentFormatter={contentFormatter}
          styles={propStyles}
        />,
      );
      text = ']';
    } else {
      text += contentFormatter(key);
    }

    text += ': ';

    if (isNested(value)) {
      result.push(<Text key={index++}>{text}</Text>);
      result.push(
        <NestedText
          key={index++}
          value={value}
          depth={depth + 1}
          expandDepth={expandDepth}
          contentFormatter={contentFormatter}
          styles={propStyles}
        />,
      );
      text = '';
    } else {
      text += contentFormatter(value);
    }

    text += ', \n';
  });

  if (text) {
    result.push(<Text key={index}>{text}</Text>);
  }

  return <>{result}</>;
};

const renderExpandedContent = (props) => {
  const { value, depth } = props;

  const contentSpace = SPACE_LEVEL.repeat(depth + 1);

  if (isList(value)) {
    return <ListContent {...props} contentSpace={contentSpace} />;
  }

  return <StorageContent {...props} contentSpace={contentSpace} />;
};

const NestedContainer = ({
  expanded,
  space,
  pre,
  post,
  onPress,
  children,
  customStyles: { nestedStyle, clickableStyle, collapseIcon, expandIcon },
}) => (
  <Text style={nestedStyle}>
    <Text onPress={onPress} style={clickableStyle} numberOfLines={1}>
      {expanded ? <Text style={collapseIcon}>-</Text> : <Text style={expandIcon}>+</Text>}
      {pre}
    </Text>
    {children}
    <Text>{expanded ? `${space}${post}` : post}</Text>
  </Text>
);

const NestedTextView = memo(
  (props) => {
    const { value, expanded, depth, wrapWithNewLines, onPress, styles: propStyles } = props;

    const customStyles = useMemo(
      () => ({
        nestedStyle: [styles.nested, propStyles.nested],
        clickableStyle: [styles.clickable, propStyles.clickable],
        collapseIcon: [styles.collapseIcon, propStyles.collapseIcon],
        expandIcon: [styles.expandIcon, propStyles.expandIcon],
      }),
      [],
    );

    const data = useMemo(
      () => ({
        space: SPACE_LEVEL.repeat(depth),
        ...getStringWrap(value, wrapWithNewLines),
      }),
      [],
    );

    return (
      <NestedContainer expanded={expanded} {...data} onPress={onPress} customStyles={customStyles}>
        {expanded ? renderExpandedContent(props) : renderCollapsedContent(props)}
      </NestedContainer>
    );
  },
  ({ expanded: a }, { expanded: b }) => a === b,
);

export const NestedText = (props) => {
  const { value, depth, expandDepth } = props;
  const [expanded, setExpanded] = useState(depth < expandDepth && !!getNestedSize(value));

  return <NestedTextView {...props} expanded={expanded} onPress={() => setExpanded(!expanded)} />;
};

NestedText.propTypes = {
  value: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  depth: PropTypes.number.isRequired,
  expandDepth: PropTypes.number.isRequired,
  styles: StylesPropType.isRequired,
  wrapWithNewLines: PropTypes.bool,
  contentFormatter: PropTypes.func,
};

NestedText.defaultProps = {
  wrapWithNewLines: false,
  contentFormatter: (str) => str,
};
