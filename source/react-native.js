import React from 'react';
import { Text } from 'react-native';
import { utils } from '@actualwave/log-data-renderer';

const { isNested } = utils;

import { NestedText } from './nested';

const createSimpleValue = (value) => <Text>{`${value} `}</Text>;

export const buildContent = (content) =>
  content.map((value) => {
    if (isNested(value)) {
      return <NestedText value={value} space="" expanded={true} />;
    }

    return createSimpleValue(value);
  });
