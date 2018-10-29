'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var convert = require('@actualwave/log-data-renderer');
var convert__default = _interopDefault(convert);
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactNative = require('react-native');

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var getCustomClassNameFrom=convert.utils.getCustomClassNameFrom;var SPACE_LEVEL='  ';var INFO_TYPE='info';var LOG_TYPE='log';var WARNING_TYPE='warning';var ERROR_TYPE='error';var SUCCESS_TYPE='success';var getStringWrap=function getStringWrap(value){var pre;var post;var name=getCustomClassNameFrom(value);if(value instanceof Array){pre='[';post=']';}else{pre='{';post='}';}pre=""+name+pre;return {pre:pre,post:post};};

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

var _jsxFileName="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\nested.js";var isNested=convert.utils.isNested,isList=convert.utils.isList,iterateList=convert.utils.iterateList,iterateStorage=convert.utils.iterateStorage;var NestedText=function(_Component){inherits(NestedText,_Component);function NestedText(props){var _this;classCallCheck(this,NestedText);_this=possibleConstructorReturn(this,getPrototypeOf(NestedText).call(this,props));_this.onPress=function(){_this.setState({expanded:!_this.state.expanded});};_this.state=objectSpread({expanded:false},getStringWrap(_this.props.value));return _this;}createClass(NestedText,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(props){this.setState(objectSpread({},getStringWrap(props.value)));}},{key:"renderCollapsedContent",value:function renderCollapsedContent(){return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:42}}," ... ");}},{key:"renderExpandedContent",value:function renderExpandedContent(){var _this$props=this.props,value=_this$props.value,space=_this$props.space;return createUINestedContent(value,space);}},{key:"render",value:function render(){var space=this.props.space;var _this$state=this.state,pre=_this$state.pre,post=_this$state.post,expanded=_this$state.expanded;var content;if(expanded){content=this.renderExpandedContent();}else{content=this.renderCollapsedContent();}return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:62}},React__default.createElement(reactNative.Text,{onPress:this.onPress,numberOfLines:2,__source:{fileName:_jsxFileName,lineNumber:63}},React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:64}},expanded?'-':'+'),pre),content,React__default.createElement(reactNative.Text,{numberOfLines:2,__source:{fileName:_jsxFileName,lineNumber:68}},expanded?""+space+post:post));}}]);return NestedText;}(React.Component);NestedText.propTypes={value:PropTypes.shape({}).isRequired,spaces:PropTypes.string,expandLevels:PropTypes.number};NestedText.defaultProps={spaces:'',expandLevels:0};var createUINestedArrayContent=function createUINestedArrayContent(list,space){var result=[];var text='\n';iterateList(list,function(value){text+=space;if(isNested(value)){result.push(React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:82}},text));text='';result.push(React__default.createElement(NestedText,{value:value,space:space,__source:{fileName:_jsxFileName,lineNumber:84}}));}else{text+=value;}text+=', \n';});if(text){result.push(React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:92}},text));}return result;};var createUINestedObjectContent=function createUINestedObjectContent(object,space){var result=[];var text='\n';iterateStorage(object,function(value,key){text+=""+space;if(isNested(key)){result.push(React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:106}},text+"["));result.push(React__default.createElement(NestedText,{value:key,space:space,__source:{fileName:_jsxFileName,lineNumber:107}}));text=']';}else{text+=key;}text+=': ';if(isNested(value)){result.push(React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:116}},text));result.push(React__default.createElement(NestedText,{value:value,space:space,__source:{fileName:_jsxFileName,lineNumber:117}}));text='';}else{text+=value;}text+=', \n';});if(text){result.push(React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:127}},text));}return result;};var createUINestedContent=function createUINestedContent(value,initSpace){var space=""+SPACE_LEVEL+initSpace;if(isList(value)){return createUINestedArrayContent(value,space);}return createUINestedObjectContent(value,space);};

var _jsxFileName$1="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\react-native.js";var isNested$1=convert.utils.isNested;var createSimpleValue=function createSimpleValue(value){return React__default.createElement(reactNative.Text,{__source:{fileName:_jsxFileName$1,lineNumber:9}},value+" ");};var buildContent=function buildContent(content){return content.map(function(value){if(isNested$1(value)){return React__default.createElement(NestedText,{value:value,space:"",expanded:true,__source:{fileName:_jsxFileName$1,lineNumber:14}});}return createSimpleValue(value);});};

var _jsxFileName$2="d:\\www\\my\\playground\\RNTestApp\\source\\console\\source\\index.js";var contentMap=function contentMap(value){if(typeof value==='string'){return value;}return convert__default(value);};var Console=function(_Component){inherits(Console,_Component);function Console(){var _getPrototypeOf2;var _this;classCallCheck(this,Console);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn(this,(_getPrototypeOf2=getPrototypeOf(Console)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={rows:[]};_this.info=function(){for(var _len2=arguments.length,content=new Array(_len2),_key2=0;_key2<_len2;_key2++){content[_key2]=arguments[_key2];}return _this.push(content,INFO_TYPE);};_this.log=function(){for(var _len3=arguments.length,content=new Array(_len3),_key3=0;_key3<_len3;_key3++){content[_key3]=arguments[_key3];}return _this.push(content,LOG_TYPE);};_this.warn=function(){for(var _len4=arguments.length,content=new Array(_len4),_key4=0;_key4<_len4;_key4++){content[_key4]=arguments[_key4];}return _this.push(content,WARNING_TYPE);};_this.error=function(){for(var _len5=arguments.length,content=new Array(_len5),_key5=0;_key5<_len5;_key5++){content[_key5]=arguments[_key5];}return _this.push(content,ERROR_TYPE);};_this.success=function(){for(var _len6=arguments.length,content=new Array(_len6),_key6=0;_key6<_len6;_key6++){content[_key6]=arguments[_key6];}return _this.push(content,SUCCESS_TYPE);};return _this;}createClass(Console,[{key:"componentDidMount",value:function componentDidMount(){this.info('Something here:','anything else');this.log(1,2,3,true,Symbol('abc-def'));this.warn(new Date());this.success(React__default);this.error(new Error('Something bad happened'));this.log([{name:'obj-1'},{name:'obj-2'},{name:'obj-3'},{name:'obj-4'}]);this.log(new Set([{name:'obj-1'},{name:'obj-2'},{name:'obj-3'},{name:'obj-4'}]));this.log(new Map([[{type:'key'},{type:'value'}],['string-key',{name:'obj-1'}],[4,{name:'obj-2'}],[true,{name:'obj-3'}],[function(){return null;},{name:'obj-4'}],[new Date(),{name:'obj-5'}]]));var obj={first:'1',second:'2',third:'3'};this.log(obj);obj.fourth=_extends_1({},obj);obj.fifth=obj;this.log(obj);}},{key:"push",value:function push(content,level){this.setState(function(_ref2,props){var rows=_ref2.rows;return {rows:toConsumableArray(rows).concat([{level:level,content:content.map(contentMap),timestamp:Date.now()}])};});}},{key:"render",value:function render(){var rows=this.state.rows;var _this$props=this.props,style=_this$props.style,rowStyle=_this$props.rowStyle,props=objectWithoutProperties(_this$props,["style","rowStyle"]);return React__default.createElement(reactNative.View,_extends_1({},props,{style:[styles.console,style],__source:{fileName:_jsxFileName$2,lineNumber:113}}),rows.map(function(_ref3,index){var timestamp=_ref3.timestamp,content=_ref3.content,level=_ref3.level;return React__default.createElement(reactNative.Text,{key:""+timestamp+index,style:[styles.row,styles[level]],__source:{fileName:_jsxFileName$2,lineNumber:119}},buildContent(content));}));}}]);return Console;}(React.Component);Console.propTypes={rows:PropTypes.arrayOf(PropTypes.shape({message:PropTypes.string.isRequired})).isRequired,style:PropTypes.any,rowStyle:PropTypes.any,maxRows:PropTypes.number};Console.defaultProps={style:undefined,rowStyle:undefined,maxRows:50};var styles=reactNative.StyleSheet.create({console:{flex:1,borderRadius:4,borderColor:0x999999ff,borderWidth:1,alignItems:'stretch',justifyContent:'flex-start'},row:{padding:4,paddingLeft:8,borderLeftWidth:4},info:{borderLeftColor:0x999999FF,backgroundColor:0x99999933},log:{borderLeftColor:0xEEEEEEFF},warning:{borderLeftColor:0xFFCC00FF,backgroundColor:0xEEAA0033},error:{borderLeftColor:0xFF0000FF,backgroundColor:0xCC000033},success:{borderLeftColor:0x00CC00FF,backgroundColor:0x00CC0033}});

exports.default = Console;
//# sourceMappingURL=index.js.map
