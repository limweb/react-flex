'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _getPrefix = require('./getPrefix');

var _getPrefix2 = _interopRequireDefault(_getPrefix);

var _flex2className = require('./flex2className');

var _flex2className2 = _interopRequireDefault(_flex2className);

var props2className = function props2className(props) {
  var prefix = (0, _getPrefix2['default'])(props);

  var column = !!props.column;
  var row = !column && !!props.row;

  var className = (0, _join2['default'])(props.className, prefix, (0, _flex2className2['default'])(props, prefix), props.alignItems ? prefix + '-align-items-' + props.alignItems : null, props.alignContent ? prefix + '-align-content-' + props.alignContent : null, props.justifyContent ? prefix + '-justify-content-' + props.justifyContent : null, props.wrap ? prefix + '-wrap' : null, row ? prefix + '-row' : null, column ? prefix + '-column' : null);

  return className;
};

var Flex = function Flex(props) {

  var Factory = props.factory || _react2['default'].createFactory('div');
  var className = props2className(props);

  var allProps = (0, _objectAssign2['default'])({}, props, {
    className: className
  });

  if (props.factory) {
    return props.factory(allProps);
  }

  return _react2['default'].createElement('div', allProps);
};

Flex.defaultProps = {
  row: true,
  wrap: true
};

Flex.propTypes = {

  flex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),

  row: _react.PropTypes.bool,
  column: _react.PropTypes.bool,
  wrap: _react.PropTypes.bool,

  alignItems: _react.PropTypes.string,
  alignContent: _react.PropTypes.string,
  justifyContent: _react.PropTypes.string
};

exports['default'] = Flex;
module.exports = exports['default'];