"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arrow_left = require("../icons/arrow_left");

var _arrow_left2 = _interopRequireDefault(_arrow_left);

var _arrow_right = require("../icons/arrow_right");

var _arrow_right2 = _interopRequireDefault(_arrow_right);

var _close = require("../icons/close");

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var icons = { arrowLeft: _arrow_left2.default, arrowRight: _arrow_right2.default, close: _close2.default };

var Icon = function Icon(_ref) {
  var fill = _ref.fill,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["fill", "type"]);

  var icon = icons[type];

  return _react2.default.createElement("span", _extends({ dangerouslySetInnerHTML: { __html: icon(fill) } }, props));
};

Icon.propTypes = {
  fill: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
  fill: "#fff"
};

exports.default = Icon;