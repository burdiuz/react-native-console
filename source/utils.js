import PropTypes from 'prop-types';
import convert, { utils } from '@actualwave/log-data-renderer';

const { isList, getListSize, getNestedWraps, getCustomClassNameFrom } = utils;

export const SPACE_LEVEL = '  ';

export const INFO_TYPE = 'info';
export const LOG_TYPE = 'log';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';
export const SUCCESS_TYPE = 'success';

export const getStringWrap = (value) => {
  const wraps = getNestedWraps(value);

  const name = getCustomClassNameFrom(value);

  if (isList(value)) {
    wraps.pre = `${name}(${getListSize(value)})${wraps.pre}`;
  } else {
    wraps.pre = `${name}${wraps.pre}`;
  }

  return wraps;
};

export const StylesPropType = PropTypes.shape({
  row: PropTypes.any,
  info: PropTypes.any,
  log: PropTypes.any,
  warning: PropTypes.any,
  error: PropTypes.any,
  success: PropTypes.any,
  nested: PropTypes.any,
  clickable: PropTypes.any,
  collapseIcon: PropTypes.any,
  expandIcon: PropTypes.any,
});

export const LogPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    type: PropTypes.string,
  }),
]);

export const RowPropType = PropTypes.shape({
  timestamp: PropTypes.number,
  level: PropTypes.string,
  content: PropTypes.PropTypes.arrayOf(LogPropType),
});

const contentMap = (value) => {
  if (typeof value === 'string') {
    // shortcut for log strings to not wrap them with quotes
    return value;
  }

  return convert(value);
};

export const row = (content, level = LOG_TYPE) => ({
  level,
  content: content.map(contentMap),
  timestamp: Date.now(),
});

export const info = (...content) => row(content, INFO_TYPE);

export const log = (...content) => row(content, LOG_TYPE);

export const warn = (...content) => row(content, WARNING_TYPE);

export const error = (...content) => row(content, ERROR_TYPE);

export const success = (...content) => row(content, SUCCESS_TYPE);
