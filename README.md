# React Native Console

Developers Console UI and API

```javascript
import React, { Component } from 'react';
import Console, { info, log, error, warn, success } from '@actualwave/react-native-console';

const generateRows = () => {
  const result = [
    info('Something here:', 'anything else'),
    log(1, 2, 3, true, Symbol('abc-def')),
    warn(new Date()),
    success(React),
    error(new Error('Something bad happened')),
    log([
      { name: 'obj-1' },
      { name: 'obj-2' },
      { name: 'obj-3' },
      { name: 'obj-4' },
    ]),
    log(
      new Set([
        { name: 'obj-1' },
        { name: 'obj-2' },
        { name: 'obj-3' },
        { name: 'obj-4' },
      ]),
    ),
    log(
      new Map([
        [{ type: 'key' }, { type: 'value' }],
        ['string-key', { name: 'obj-1' }],
        [4, { name: 'obj-2' }],
        [true, { name: 'obj-3' }],
        [() => null, { name: 'obj-4' }],
        [new Date(), { name: 'obj-5' }],
      ]),
    ),
  ];

  const obj = {
    first: '1',
    second: '2',
    third: '3',
  };

  result.push(log('string one', obj, 'string two', 'string three'));

  obj.fourth = Object.assign({}, obj);
  obj.fifth = obj;

  result.push(log(obj));

  return result;
};

export default () => <Console rows={generateRows()} />;
```
