/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { utils } from '@actualwave/log-data-renderer';

import { SPACE_LEVEL, getStringWrap } from './utils';

const { isNested, isList, iterateList, iterateStorage } = utils;

export class NestedText extends Component {
  static propTypes = {
    value: PropTypes.shape({}).isRequired,
    spaces: PropTypes.string,
    // more value, more levels of objects should be initially rendered as expanded
    expandLevels: PropTypes.number,
  };

  static defaultProps = {
    spaces: '',
    expandLevels: 0,
  };

  constructor(props) {
    super(props);
    this.state = { expanded: false, ...getStringWrap(this.props.value) };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...getStringWrap(props.value),
    });
  }

  onPress = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  renderCollapsedContent() {
    return <Text> ... </Text>;
  }

  renderExpandedContent() {
    const { value, space } = this.props;
    return createUINestedContent(value, space);
  }

  render() {
    const { space } = this.props;
    const { pre, post, expanded } = this.state;
    let content;

    if (expanded) {
      content = this.renderExpandedContent();
    } else {
      content = this.renderCollapsedContent();
    }

    return (
      <Text>
        <Text onPress={this.onPress} numberOfLines={2}>
          <Text>{expanded ? '-' : '+'}</Text>
          {pre}
        </Text>
        {content}
        <Text numberOfLines={2}>{expanded ? `${space}${post}` : post}</Text>
      </Text>
    );
  }
}

const createUINestedArrayContent = (list, space) => {
  const result = [];
  let text = '\n';

  iterateList(list, (value) => {
    text += space;

    if (isNested(value)) {
      result.push(<Text>{text}</Text>);
      text = '';
      result.push(<NestedText value={value} space={space} />);
    } else {
      text += value;
    }
    text += ', \n';
  });

  if (text) {
    result.push(<Text>{text}</Text>);
  }

  return result;
};

const createUINestedObjectContent = (object, space) => {
  const result = [];
  let text = '\n';

  iterateStorage(object, (value, key) => {
    text += `${space}`;

    if (isNested(key)) {
      result.push(<Text>{`${text}[`}</Text>);
      result.push(<NestedText value={key} space={space} />);
      text = ']';
    } else {
      text += key;
    }

    text += ': ';

    if (isNested(value)) {
      result.push(<Text>{text}</Text>);
      result.push(<NestedText value={value} space={space} />);
      text = '';
    } else {
      text += value;
    }

    text += ', \n';
  });

  if (text) {
    result.push(<Text>{text}</Text>);
  }

  return result;
};

const createUINestedContent = (value, initSpace) => {
  const space = `${SPACE_LEVEL}${initSpace}`;

  if (isList(value)) {
    return createUINestedArrayContent(value, space);
  }

  return createUINestedObjectContent(value, space);
};
