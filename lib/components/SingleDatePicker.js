module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(43);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	module.exports = require("../../constants");

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	module.exports = require("react-portal");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("array-includes");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("../utils/toMomentObject");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ },
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports) {

	module.exports = require("./DayPicker");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 12 12" }, this.props),
	          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(8);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(21);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _arrayIncludes = __webpack_require__(22);

	var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

	var _toMomentObject = __webpack_require__(23);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _toLocalizedDateString = __webpack_require__(24);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _OutsideClickHandler = __webpack_require__(29);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _SingleDatePickerInput = __webpack_require__(44);

	var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

	var _DayPicker = __webpack_require__(31);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	var _close = __webpack_require__(32);

	var _close2 = _interopRequireDefault(_close);

	var _isInclusivelyAfterDay = __webpack_require__(25);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isSameDay = __webpack_require__(28);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _SingleDatePickerShape = __webpack_require__(45);

	var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

	var _constants = __webpack_require__(12);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = _SingleDatePickerShape2['default'];

	var defaultProps = {
	  date: null,
	  focused: false,
	  disabled: false,
	  readonly: false,

	  onDateChange: function () {
	    function onDateChange() {}

	    return onDateChange;
	  }(),
	  onFocusChange: function () {
	    function onFocusChange() {}

	    return onFocusChange;
	  }(),

	  isDayBlocked: function () {
	    function isDayBlocked() {
	      return false;
	    }

	    return isDayBlocked;
	  }(),
	  disabledDays: [],
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
	    }

	    return isOutsideRange;
	  }(),
	  enableOutsideDays: false,
	  numberOfMonths: 2,
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  anchorDirection: _constants.ANCHOR_LEFT,
	  withPortal: false,
	  withFullScreenPortal: false,
	  initialVisibleMonth: function () {
	    function initialVisibleMonth() {
	      return (0, _moment2['default'])();
	    }

	    return initialVisibleMonth;
	  }(),

	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),

	  // i18n
	  displayFormat: function () {
	    function displayFormat() {
	      return _moment2['default'].localeData().longDateFormat('L');
	    }

	    return displayFormat;
	  }(),
	  monthFormat: 'MMMM YYYY',
	  phrases: {
	    closeDatePicker: 'Close'
	  }
	};

	var SingleDatePicker = function (_React$Component) {
	  _inherits(SingleDatePicker, _React$Component);

	  function SingleDatePicker(props) {
	    _classCallCheck(this, SingleDatePicker);

	    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

	    _this.state = {
	      hoverDate: null
	    };

	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onDayClick = _this.onDayClick.bind(_this);

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    return _this;
	  }

	  _createClass(SingleDatePicker, [{
	    key: 'onChange',
	    value: function () {
	      function onChange(dateString) {
	        var _props = this.props;
	        var isOutsideRange = _props.isOutsideRange;
	        var onDateChange = _props.onDateChange;
	        var onFocusChange = _props.onFocusChange;

	        var date = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

	        var isValid = date && !isOutsideRange(date);
	        if (isValid) {
	          onDateChange(date);
	          onFocusChange({ focused: false });
	        } else {
	          onDateChange(null);
	        }
	      }

	      return onChange;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, modifiers, e) {
	        if (e) e.preventDefault();
	        if ((0, _arrayIncludes2['default'])(modifiers, 'blocked')) return;

	        this.props.onDateChange(day);
	        this.props.onFocusChange({ focused: null });
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        this.setState({
	          hoverDate: day
	        });
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave() {
	        this.setState({
	          hoverDate: null
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onFocus',
	    value: function () {
	      function onFocus() {
	        if (!this.props.disabled) {
	          this.props.onFocusChange({ focused: true });
	        }
	      }

	      return onFocus;
	    }()
	  }, {
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        var _props2 = this.props;
	        var focused = _props2.focused;
	        var onFocusChange = _props2.onFocusChange;
	        var shouldClearFocus = _props2.shouldClearFocus;

	        if (!focused && !shouldClearFocus) return;

	        onFocusChange({ focused: false });
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'getDateString',
	    value: function () {
	      function getDateString(date) {
	        var displayFormat = this.getDisplayFormat();
	        if (date && displayFormat) {
	          return date && date.format(displayFormat);
	        }
	        return (0, _toLocalizedDateString2['default'])(date);
	      }

	      return getDateString;
	    }()
	  }, {
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props3 = this.props;
	        var focused = _props3.focused;
	        var orientation = _props3.orientation;
	        var withPortal = _props3.withPortal;
	        var withFullScreenPortal = _props3.withFullScreenPortal;
	        var anchorDirection = _props3.anchorDirection;
	        var hoverDate = this.state.hoverDate;

	        var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
	          'SingleDatePicker__picker--show': focused,
	          'SingleDatePicker__picker--invisible': !focused,
	          'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
	          'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
	          'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
	          'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
	          'SingleDatePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
	    }()
	  }, {
	    key: 'getDisplayFormat',
	    value: function () {
	      function getDisplayFormat() {
	        var displayFormat = this.props.displayFormat;

	        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
	      }

	      return getDisplayFormat;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props4 = this.props;
	        var isDayBlocked = _props4.isDayBlocked;
	        var isOutsideRange = _props4.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        return (0, _isSameDay2['default'])(day, this.state.hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isSelected',
	    value: function () {
	      function isSelected(day) {
	        return (0, _isSameDay2['default'])(day, this.props.date);
	      }

	      return isSelected;
	    }()
	  }, {
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props5 = this.props;
	        var focused = _props5.focused;
	        var withPortal = _props5.withPortal;
	        var withFullScreenPortal = _props5.withFullScreenPortal;

	        if (withPortal || withFullScreenPortal) {
	          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: focused }, this.renderDayPicker());
	        }

	        return this.renderDayPicker();
	      }

	      return maybeRenderDayPickerWithPortal;
	    }()
	  }, {
	    key: 'renderDayPicker',
	    value: function () {
	      function renderDayPicker() {
	        var _this2 = this;

	        var _props6 = this.props;
	        var isDayBlocked = _props6.isDayBlocked;
	        var isOutsideRange = _props6.isOutsideRange;
	        var enableOutsideDays = _props6.enableOutsideDays;
	        var numberOfMonths = _props6.numberOfMonths;
	        var orientation = _props6.orientation;
	        var monthFormat = _props6.monthFormat;
	        var onPrevMonthClick = _props6.onPrevMonthClick;
	        var onNextMonthClick = _props6.onNextMonthClick;
	        var withPortal = _props6.withPortal;
	        var withFullScreenPortal = _props6.withFullScreenPortal;
	        var focused = _props6.focused;
	        var initialVisibleMonth = _props6.initialVisibleMonth;
	        var timeInput = _props6.timeInput;

	        var modifiers = {
	          blocked: function () {
	            function blocked(day) {
	              return _this2.isBlocked(day);
	            }

	            return blocked;
	          }(),
	          'blocked-calendar': function () {
	            function blockedCalendar(day) {
	              return isDayBlocked(day);
	            }

	            return blockedCalendar;
	          }(),
	          'blocked-out-of-range': function () {
	            function blockedOutOfRange(day) {
	              return isOutsideRange(day);
	            }

	            return blockedOutOfRange;
	          }(),
	          valid: function () {
	            function valid(day) {
	              return !_this2.isBlocked(day);
	            }

	            return valid;
	          }(),
	          selected: function () {
	            function selected(day) {
	              return _this2.isSelected(day);
	            }

	            return selected;
	          }()
	        };

	        var onOutsideClick = withPortal ? this.onClearFocus : function () {};

	        return _react2['default'].createElement('div', { className: this.getDayPickerContainerClasses() }, _react2['default'].createElement(_DayPicker2['default'], {
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: modifiers,
	          numberOfMonths: numberOfMonths,
	          onDayMouseDown: this.onDayClick,
	          onDayTouchTap: this.onDayClick,
	          onPrevMonthClick: onPrevMonthClick,
	          onNextMonthClick: onNextMonthClick,
	          monthFormat: monthFormat,
	          withPortal: withPortal || withFullScreenPortal,
	          hidden: !focused,
	          initialVisibleMonth: initialVisibleMonth,
	          onOutsideClick: onOutsideClick,
	          timeInput: timeInput
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          className: 'SingleDatePicker__close',
	          type: 'button',
	          onClick: this.onClearFocus
	        }, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement(_close2['default'], null)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props7 = this.props;
	        var id = _props7.id;
	        var placeholder = _props7.placeholder;
	        var focused = _props7.focused;
	        var disabled = _props7.disabled;
	        var date = _props7.date;
	        var withPortal = _props7.withPortal;
	        var withFullScreenPortal = _props7.withFullScreenPortal;
	        var readonly = _props7.readonly;

	        var onOutsideClick = withPortal || withFullScreenPortal ? function () {} : this.onClearFocus;

	        var dateString = this.getDateString(date);

	        return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
	          id: id,
	          readonly: readonly,
	          placeholder: placeholder,
	          focused: focused,
	          disabled: disabled,
	          dateValue: dateString,
	          onChange: this.onChange,
	          onFocus: this.onFocus,
	          onKeyDownShiftTab: this.onClearFocus,
	          onKeyDownTab: this.onClearFocus,
	          border: true
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return SingleDatePicker;
	}(_react2['default'].Component);

	exports['default'] = SingleDatePicker;

	SingleDatePicker.propTypes = propTypes;
	SingleDatePicker.defaultProps = defaultProps;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("./SingleDatePickerInput");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("../shapes/SingleDatePickerShape");

/***/ }
/******/ ]);