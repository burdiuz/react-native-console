// Assigned to an object, when rendering, if exists, will wrap content, like
// Map{...} or Set[...]
import { utils } from '@actualwave/log-data-renderer';

const { getCustomClassNameFrom } = utils;

export const SPACE_LEVEL = '  ';

export const INFO_TYPE = 'info';
export const LOG_TYPE = 'log';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';
export const SUCCESS_TYPE = 'success';

export const getStringWrap = (value) => {
  let pre;
  let post;
  const name = getCustomClassNameFrom(value);

  if (value instanceof Array) {
    pre = '[';
    post = ']';
  } else {
    pre = '{';
    post = '}';
  }

  pre = `${name}${pre}`;

  return { pre, post };
};
