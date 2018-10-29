/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
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

export class NestedText extends Component {
  static propTypes = {
    value: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
    depth: PropTypes.number.isRequired,
    expandDepth: PropTypes.number.isRequired,
    styles: StylesPropType.isRequired,
    wrapWithNewLines: PropTypes.bool,
  };

  static defaultProps = {
    wrapWithNewLines: false,
  };

  constructor(props) {
    super(props);

    const { value, depth, expandDepth, wrapWithNewLines } = this.props;

    this.resetStyle(this.props);
    this.state = {
      expanded: depth < expandDepth && !!getNestedSize(value),
      space: SPACE_LEVEL.repeat(depth),
      contentSpace: SPACE_LEVEL.repeat(depth + 1),
      ...getStringWrap(value, wrapWithNewLines),
    };
  }

  resetStyle({ styles: propStyles }) {
    this.nestedStyle = [styles.nested, propStyles.nested];
    this.clickableStyle = [styles.clickable, propStyles.clickable];
    this.collapseIcon = [styles.collapseIcon, propStyles.collapseIcon];
    this.expandIcon = [styles.expandIcon, propStyles.expandIcon];
  }

  componentWillReceiveProps(props) {
    const { styles: propStyles, value } = this.props;

    if (propStyles !== props.styles) {
      this.resetStyle(props);
    }

    if (value !== props.value) {
      this.setState({
        ...getStringWrap(props.value),
      });
    }
  }

  onPress = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  renderCollapsedContent() {
    const { value } = this.props;
    const size = getNestedSize(value);

    let content = getNestedShortContent(value);

    if (content === undefined) {
      content = size ? ' ... ' : '';
    }

    return <Text>{content}</Text>;
  }

  renderListContent() {
    const { contentSpace } = this.state;
    const { value: list, depth, expandDepth, styles: propStyles } = this.props;
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
            styles={propStyles}
          />,
        );
      } else {
        text += value;
      }
      text += ', \n';
    });

    if (text) {
      result.push(<Text key={index}>{text}</Text>);
    }

    return result;
  }

  renderStorageContent() {
    const { contentSpace } = this.state;
    const { value: object, depth, expandDepth, styles: propStyles } = this.props;
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
            styles={propStyles}
          />,
        );
        text = ']';
      } else {
        text += key;
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
            styles={propStyles}
          />,
        );
        text = '';
      } else {
        text += value;
      }

      text += ', \n';
    });

    if (text) {
      result.push(<Text key={index}>{text}</Text>);
    }

    return result;
  }

  renderExpandedContent() {
    const { value } = this.props;

    if (isList(value)) {
      return this.renderListContent();
    }

    return this.renderStorageContent();
  }

  render() {
    const { pre, post, expanded, space } = this.state;
    let content;
    let iconStyle;

    if (expanded) {
      content = this.renderExpandedContent();
      iconStyle = this.collapseIcon;
    } else {
      content = this.renderCollapsedContent();
      iconStyle = this.expandIcon;
    }

    return (
      <Text style={this.nestedStyle}>
        <Text onPress={this.onPress} style={this.clickableStyle} numberOfLines={1}>
          <Text style={iconStyle}>{expanded ? '-' : '+'}</Text>
          {pre}
        </Text>
        {content}
        <Text>{expanded ? `${space}${post}` : post}</Text>
      </Text>
    );
  }
}
