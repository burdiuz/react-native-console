'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var convert = require('@actualwave/log-data-renderer');
var convert__default = _interopDefault(convert);
var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var isList=convert.utils.isList,getListSize=convert.utils.getListSize,getNestedWraps=convert.utils.getNestedWraps,getCustomClassNameFrom=convert.utils.getCustomClassNameFrom;var SPACE_LEVEL='  ';var INFO_TYPE='info';var LOG_TYPE='log';var WARNING_TYPE='warning';var ERROR_TYPE='error';var SUCCESS_TYPE='success';var getStringWrap=function getStringWrap(value){var wraps=getNestedWraps(value);var name=getCustomClassNameFrom(value);if(isList(value)){wraps.pre=name+"("+getListSize(value)+")"+wraps.pre;}else{wraps.pre=""+name+wraps.pre;}return wraps;};var StylesPropType=PropTypes.shape({row:PropTypes.any,info:PropTypes.any,log:PropTypes.any,warning:PropTypes.any,error:PropTypes.any,success:PropTypes.any,nested:PropTypes.any,clickable:PropTypes.any,collapseIcon:PropTypes.any,expandIcon:PropTypes.any});var LogPropType=PropTypes.oneOfType([PropTypes.string,PropTypes.shape({type:PropTypes.string})]);var RowPropType=PropTypes.shape({timestamp:PropTypes.number,level:PropTypes.string,content:PropTypes.PropTypes.arrayOf(LogPropType)});var contentMap=function contentMap(value){if(typeof value==='string'){return value;}return convert__default(value);};var row=function row(content){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:LOG_TYPE;return {level:level,content:content.map(contentMap),timestamp:Date.now()};};var info=function info(){for(var _len=arguments.length,content=new Array(_len),_key=0;_key<_len;_key++){content[_key]=arguments[_key];}return row(content,INFO_TYPE);};var log=function log(){for(var _len2=arguments.length,content=new Array(_len2),_key2=0;_key2<_len2;_key2++){content[_key2]=arguments[_key2];}return row(content,LOG_TYPE);};var warn=function warn(){for(var _len3=arguments.length,content=new Array(_len3),_key3=0;_key3<_len3;_key3++){content[_key3]=arguments[_key3];}return row(content,WARNING_TYPE);};var error=function error(){for(var _len4=arguments.length,content=new Array(_len4),_key4=0;_key4<_len4;_key4++){content[_key4]=arguments[_key4];}return row(content,ERROR_TYPE);};var success=function success(){for(var _len5=arguments.length,content=new Array(_len5),_key5=0;_key5<_len5;_key5++){content[_key5]=arguments[_key5];}return row(content,SUCCESS_TYPE);};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\nested.js";var isNested=convert.utils.isNested,isList$1=convert.utils.isList,iterateList=convert.utils.iterateList,iterateStorage=convert.utils.iterateStorage,getNestedShortContent=convert.utils.getNestedShortContent,getListSize$1=convert.utils.getListSize,getStorageSize=convert.utils.getStorageSize;var styles=reactNative.StyleSheet.create({nested:{},collapseIcon:{fontWeight:'bold'},expandIcon:{fontWeight:'bold'},clickable:{}});var getNestedSize=function getNestedSize(value){return isList$1(value)?getListSize$1(value):getStorageSize(value);};var NestedText=function(_Component){inherits(NestedText,_Component);function NestedText(props){var _this;classCallCheck(this,NestedText);_this=possibleConstructorReturn(this,getPrototypeOf(NestedText).call(this,props));_this.onPress=function(){_this.setState({expanded:!_this.state.expanded});};var _this$props=_this.props,value=_this$props.value,depth=_this$props.depth,expandDepth=_this$props.expandDepth,wrapWithNewLines=_this$props.wrapWithNewLines;_this.resetStyle(_this.props);_this.state=objectSpread({expanded:depth<expandDepth&&!!getNestedSize(value),space:SPACE_LEVEL.repeat(depth),contentSpace:SPACE_LEVEL.repeat(depth+1)},getStringWrap(value,wrapWithNewLines));return _this;}createClass(NestedText,[{key:"resetStyle",value:function resetStyle(_ref){var propStyles=_ref.styles;this.nestedStyle=[styles.nested,propStyles.nested];this.clickableStyle=[styles.clickable,propStyles.clickable];this.collapseIcon=[styles.collapseIcon,propStyles.collapseIcon];this.expandIcon=[styles.expandIcon,propStyles.expandIcon];}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(props){var _this$props2=this.props,propStyles=_this$props2.styles,value=_this$props2.value;if(propStyles!==props.styles){this.resetStyle(props);}if(value!==props.value){this.setState(objectSpread({},getStringWrap(props.value)));}}},{key:"renderCollapsedContent",value:function renderCollapsedContent(){var value=this.props.value;var size=getNestedSize(value);var content=getNestedShortContent(value);if(content===undefined){content=size?' ... ':'';}return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:98}},content);}},{key:"renderListContent",value:function renderListContent(){var contentSpace=this.state.contentSpace;var _this$props3=this.props,list=_this$props3.value,depth=_this$props3.depth,expandDepth=_this$props3.expandDepth,propStyles=_this$props3.styles;var result=[];var index=1;var text='\n';iterateList(list,function(value){text+=contentSpace;if(isNested(value)){result.push(React__default.createElement(reactNative.Text,{key:index++,__source:{fileName:_jsxFileName,lineNumber:112}},text));text='';result.push(React__default.createElement(NestedText,{key:index++,value:value,depth:depth+1,expandDepth:expandDepth,styles:propStyles,__source:{fileName:_jsxFileName,lineNumber:115}}));}else{text+=value;}text+=', \n';});if(text){result.push(React__default.createElement(reactNative.Text,{key:index,__source:{fileName:_jsxFileName,lineNumber:130}},text));}return result;}},{key:"renderStorageContent",value:function renderStorageContent(){var contentSpace=this.state.contentSpace;var _this$props4=this.props,object=_this$props4.value,depth=_this$props4.depth,expandDepth=_this$props4.expandDepth,propStyles=_this$props4.styles;var result=[];var index=1;var text='\n';iterateStorage(object,function(value,key){text+=contentSpace;if(isNested(key)){result.push(React__default.createElement(reactNative.Text,{key:index++,__source:{fileName:_jsxFileName,lineNumber:147}},text+"["));result.push(React__default.createElement(NestedText,{key:index++,value:key,depth:depth+1,expandDepth:expandDepth,styles:propStyles,__source:{fileName:_jsxFileName,lineNumber:149}}));text=']';}else{text+=key;}text+=': ';if(isNested(value)){result.push(React__default.createElement(reactNative.Text,{key:index++,__source:{fileName:_jsxFileName,lineNumber:165}},text));result.push(React__default.createElement(NestedText,{key:index++,value:value,depth:depth+1,expandDepth:expandDepth,styles:propStyles,__source:{fileName:_jsxFileName,lineNumber:167}}));text='';}else{text+=value;}text+=', \n';});if(text){result.push(React__default.createElement(reactNative.Text,{key:index,__source:{fileName:_jsxFileName,lineNumber:184}},text));}return result;}},{key:"renderExpandedContent",value:function renderExpandedContent(){var value=this.props.value;if(isList$1(value)){return this.renderListContent();}return this.renderStorageContent();}},{key:"render",value:function render(){var _this$state=this.state,pre=_this$state.pre,post=_this$state.post,expanded=_this$state.expanded,space=_this$state.space;var content;var iconStyle;if(expanded){content=this.renderExpandedContent();iconStyle=this.collapseIcon;}else{content=this.renderCollapsedContent();iconStyle=this.expandIcon;}return React__default.createElement(reactNative.Text,{style:this.nestedStyle,__source:{fileName:_jsxFileName,lineNumber:214}},React__default.createElement(reactNative.Text,{onPress:this.onPress,style:this.clickableStyle,numberOfLines:1,__source:{fileName:_jsxFileName,lineNumber:215}},React__default.createElement(reactNative.Text,{style:iconStyle,__source:{fileName:_jsxFileName,lineNumber:216}},expanded?'-':'+'),pre),content,React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:220}},expanded?""+space+post:post));}}]);return NestedText;}(React.Component);NestedText.propTypes={value:PropTypes.shape({type:PropTypes.string.isRequired}).isRequired,depth:PropTypes.number.isRequired,expandDepth:PropTypes.number.isRequired,styles:StylesPropType.isRequired,wrapWithNewLines:PropTypes.bool};NestedText.defaultProps={wrapWithNewLines:false};

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\simple.js";var Simple=function Simple(_ref){var value=_ref.value;return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName$1,lineNumber:5}},value);};Simple.propTypes={value:PropTypes.string.isRequired};var SimpleText=function SimpleText(_ref2){var value=_ref2.value;return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName$1,lineNumber:10}},value," ");};SimpleText.propTypes={value:PropTypes.string.isRequired};

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\row.js";var isNested$1=convert.utils.isNested;var styles$1=reactNative.StyleSheet.create({row:{padding:4,paddingLeft:8,borderLeftWidth:4,borderBottomWidth:1,borderBottomColor:0x66666633},info:{borderLeftColor:0x999999ff,backgroundColor:0x99999933},log:{borderLeftColor:0x66666633},warning:{borderLeftColor:0xffcc00ff,backgroundColor:0xeeaa0033},error:{borderLeftColor:0xff0000ff,backgroundColor:0xcc000033},success:{borderLeftColor:0x00cc00ff,backgroundColor:0x00cc0033}});var Row=function(_PureComponent){inherits(Row,_PureComponent);function Row(props){var _this;classCallCheck(this,Row);_this=possibleConstructorReturn(this,getPrototypeOf(Row).call(this,props));_this.resetStyle(props);return _this;}createClass(Row,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(props){var _this$props=this.props,propStyles=_this$props.styles,value=_this$props.value;if(propStyles!==props.styles||value!==props.value){this.resetStyle(props);}}},{key:"resetStyle",value:function resetStyle(_ref){var level=_ref.value.level,propStyles=_ref.styles;this.style=[styles$1.row,styles$1[level],propStyles.row,propStyles[level]];}},{key:"renderContent",value:function renderContent(){var _this$props2=this.props,content=_this$props2.value.content,expandDepth=_this$props2.expandDepth,propStyles=_this$props2.styles;return content.map(function(item,index){if(isNested$1(item)){return React__default.createElement(NestedText,{key:index,value:item,depth:0,expandDepth:expandDepth,styles:propStyles,__source:{fileName:_jsxFileName$2,lineNumber:75}});}return React__default.createElement(SimpleText,{key:index,value:item,__source:{fileName:_jsxFileName$2,lineNumber:78}});});}},{key:"render",value:function render(){return React__default.createElement(reactNative.Text,{style:this.style,__source:{fileName:_jsxFileName$2,lineNumber:83}},this.renderContent());}}]);return Row;}(React.PureComponent);Row.propTypes={styles:StylesPropType.isRequired,value:RowPropType.isRequired,expandDepth:PropTypes.number.isRequired};

var _jsxFileName$3="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\rows.js";var Rows=function(_Component){inherits(Rows,_Component);function Rows(){var _getPrototypeOf2;var _this;classCallCheck(this,Rows);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Rows)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.renderRow=function(value,index){var timestamp=value.timestamp;var _this$props=_this.props,styles=_this$props.styles,expandDepth=_this$props.expandDepth;return React__default.createElement(Row,{key:""+timestamp+index,value:value,styles:styles,expandDepth:expandDepth,__source:{fileName:_jsxFileName$3,lineNumber:19}});};return _this;}createClass(Rows,[{key:"render",value:function render(){var rows=this.props.rows;return React__default.createElement(React.Fragment,{__source:{fileName:_jsxFileName$3,lineNumber:26}},rows.map(this.renderRow));}}]);return Rows;}(React.Component);Rows.propTypes={styles:StylesPropType.isRequired,rows:PropTypes.arrayOf(RowPropType).isRequired,expandDepth:PropTypes.number.isRequired};

var _jsxFileName$4="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\console.js";var styles$2=reactNative.StyleSheet.create({console:{flex:1,borderColor:0x999999ff,borderWidth:1},consoleContent:{alignItems:'stretch',justifyContent:'flex-start'}});var Console=function(_Component){inherits(Console,_Component);function Console(props){var _this;classCallCheck(this,Console);_this=possibleConstructorReturn(this,getPrototypeOf(Console).call(this,props));_this.info=function(){for(var _len=arguments.length,content=new Array(_len),_key=0;_key<_len;_key++){content[_key]=arguments[_key];}return _this.row(content,INFO_TYPE);};_this.log=function(){for(var _len2=arguments.length,content=new Array(_len2),_key2=0;_key2<_len2;_key2++){content[_key2]=arguments[_key2];}return _this.row(content,LOG_TYPE);};_this.warn=function(){for(var _len3=arguments.length,content=new Array(_len3),_key3=0;_key3<_len3;_key3++){content[_key3]=arguments[_key3];}return _this.row(content,WARNING_TYPE);};_this.error=function(){for(var _len4=arguments.length,content=new Array(_len4),_key4=0;_key4<_len4;_key4++){content[_key4]=arguments[_key4];}return _this.row(content,ERROR_TYPE);};_this.success=function(){for(var _len5=arguments.length,content=new Array(_len5),_key5=0;_key5<_len5;_key5++){content[_key5]=arguments[_key5];}return _this.row(content,SUCCESS_TYPE);};_this.state={rows:props.rows||[]};return _this;}createClass(Console,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(props){var rows=this.props.rows;if(rows!==props.rows){this.setState({rows:props.rows||[]});}}},{key:"row",value:function row$$1(content,level){var _this2=this;this.setState(function(_ref){var rows=_ref.rows;var maxRows=_this2.props.maxRows;var nextRows=toConsumableArray(rows).concat([row(content,level)]);var _nextRows=nextRows,length=_nextRows.length;if(maxRows>0&&length>maxRows){nextRows=nextRows.slice(length-maxRows,length);}return {rows:nextRows};});}},{key:"render",value:function render(){var rows=this.state.rows;var _this$props=this.props,propRows=_this$props.rows,style=_this$props.style,contentContainerStyle=_this$props.contentContainerStyle,propStyles=_this$props.styles,expandDepth=_this$props.expandDepth,props=objectWithoutProperties(_this$props,["rows","style","contentContainerStyle","styles","expandDepth"]);return React__default.createElement(reactNative.ScrollView,_extends_1({},props,{style:[styles$2.console,style],contentContainerStyle:[styles$2.consoleContent,contentContainerStyle],__source:{fileName:_jsxFileName$4,lineNumber:97}}),React__default.createElement(Rows,{rows:rows,styles:propStyles,expandDepth:expandDepth,__source:{fileName:_jsxFileName$4,lineNumber:102}}));}}]);return Console;}(React.Component);Console.propTypes={styles:StylesPropType,style:PropTypes.any,rows:PropTypes.arrayOf(RowPropType),maxRows:PropTypes.number,expandDepth:PropTypes.number};Console.defaultProps={style:undefined,styles:{},rows:[],maxRows:50,expandDepth:1};

exports.Rows = Rows;
exports.row = row;
exports.info = info;
exports.log = log;
exports.warn = warn;
exports.error = error;
exports.success = success;
exports.INFO_TYPE = INFO_TYPE;
exports.LOG_TYPE = LOG_TYPE;
exports.WARNING_TYPE = WARNING_TYPE;
exports.ERROR_TYPE = ERROR_TYPE;
exports.SUCCESS_TYPE = SUCCESS_TYPE;
exports.default = Console;
//# sourceMappingURL=index.js.map
