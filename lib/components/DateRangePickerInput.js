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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _propTypes = __webpack_require__(1);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DateInput = __webpack_require__(29);

	var _DateInput2 = _interopRequireDefault(_DateInput);

	var _arrowRight = __webpack_require__(30);

	var _arrowRight2 = _interopRequireDefault(_arrowRight);

	var _close = __webpack_require__(27);

	var _close2 = _interopRequireDefault(_close);

	var _constants = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  startDateId: _propTypes2['default'].string,
	  startDatePlaceholderText: _propTypes2['default'].string,

	  endDateId: _propTypes2['default'].string,
	  endDatePlaceholderText: _propTypes2['default'].string,

	  onStartDateFocus: _propTypes2['default'].func,
	  onEndDateFocus: _propTypes2['default'].func,
	  onStartDateChange: _propTypes2['default'].func,
	  onEndDateChange: _propTypes2['default'].func,
	  onStartDateShiftTab: _propTypes2['default'].func,
	  onEndDateTab: _propTypes2['default'].func,
	  onClearDates: _propTypes2['default'].func,

	  startDate: _propTypes2['default'].string,
	  endDate: _propTypes2['default'].string,

	  isStartDateFocused: _propTypes2['default'].bool,
	  isEndDateFocused: _propTypes2['default'].bool,
	  showClearDates: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,

	  // i18n
	  phrases: _propTypes2['default'].shape({
	    clearDates: _propTypes2['default'].node
	  })
	};

	var defaultProps = {
	  startDateId: _constants.START_DATE,
	  endDateId: _constants.END_DATE,
	  startDatePlaceholderText: 'Start Date',
	  endDatePlaceholderText: 'End Date',
	  onStartDateFocus: function () {
	    function onStartDateFocus() {}

	    return onStartDateFocus;
	  }(),
	  onEndDateFocus: function () {
	    function onEndDateFocus() {}

	    return onEndDateFocus;
	  }(),
	  onStartDateChange: function () {
	    function onStartDateChange() {}

	    return onStartDateChange;
	  }(),
	  onEndDateChange: function () {
	    function onEndDateChange() {}

	    return onEndDateChange;
	  }(),
	  onStartDateShiftTab: function () {
	    function onStartDateShiftTab() {}

	    return onStartDateShiftTab;
	  }(),
	  onEndDateTab: function () {
	    function onEndDateTab() {}

	    return onEndDateTab;
	  }(),
	  onClearDates: function () {
	    function onClearDates() {}

	    return onClearDates;
	  }(),

	  isStartDateFocused: false,
	  isEndDateFocused: false,
	  showClearDates: false,
	  disabled: false,

	  // i18n
	  phrases: {
	    clearDates: 'Clear Dates'
	  }
	};

	var DateRangePickerInput = function (_React$Component) {
	  _inherits(DateRangePickerInput, _React$Component);

	  function DateRangePickerInput(props) {
	    _classCallCheck(this, DateRangePickerInput);

	    var _this = _possibleConstructorReturn(this, (DateRangePickerInput.__proto__ || Object.getPrototypeOf(DateRangePickerInput)).call(this, props));

	    _this.state = {
	      isClearDatesHovered: false
	    };

	    _this.onClearDatesMouseEnter = _this.onClearDatesMouseEnter.bind(_this);
	    _this.onClearDatesMouseLeave = _this.onClearDatesMouseLeave.bind(_this);
	    return _this;
	  }

	  _createClass(DateRangePickerInput, [{
	    key: 'onClearDatesMouseEnter',
	    value: function () {
	      function onClearDatesMouseEnter() {
	        this.setState({
	          isClearDatesHovered: true
	        });
	      }

	      return onClearDatesMouseEnter;
	    }()
	  }, {
	    key: 'onClearDatesMouseLeave',
	    value: function () {
	      function onClearDatesMouseLeave() {
	        this.setState({
	          isClearDatesHovered: false
	        });
	      }

	      return onClearDatesMouseLeave;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _state = this.state,
	            startDateString = _state.startDateString,
	            endDateString = _state.endDateString,
	            isClearDatesHovered = _state.isClearDatesHovered;
	        var _props = this.props,
	            startDate = _props.startDate,
	            startDateId = _props.startDateId,
	            startDatePlaceholderText = _props.startDatePlaceholderText,
	            isStartDateFocused = _props.isStartDateFocused,
	            onStartDateChange = _props.onStartDateChange,
	            onStartDateFocus = _props.onStartDateFocus,
	            onStartDateShiftTab = _props.onStartDateShiftTab,
	            endDate = _props.endDate,
	            endDateId = _props.endDateId,
	            endDatePlaceholderText = _props.endDatePlaceholderText,
	            isEndDateFocused = _props.isEndDateFocused,
	            onEndDateChange = _props.onEndDateChange,
	            onEndDateFocus = _props.onEndDateFocus,
	            onEndDateTab = _props.onEndDateTab,
	            onClearDates = _props.onClearDates,
	            showClearDates = _props.showClearDates,
	            disabled = _props.disabled,
	            phrases = _props.phrases;


	        var startDateValue = startDate || startDateString;
	        var endDateValue = endDate || endDateString;

	        return _react2['default'].createElement(
	          'div',
	          {
	            className: (0, _classnames2['default'])('DateRangePickerInput', {
	              'DateRangePickerInput--disabled': disabled
	            })
	          },
	          _react2['default'].createElement(_DateInput2['default'], {
	            id: startDateId,
	            placeholder: startDatePlaceholderText,
	            dateValue: startDateValue,
	            focused: isStartDateFocused,
	            disabled: disabled,

	            onChange: onStartDateChange,
	            onFocus: onStartDateFocus,
	            onKeyDownShiftTab: onStartDateShiftTab
	          }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'DateRangePickerInput__arrow' },
	            _react2['default'].createElement(_arrowRight2['default'], null)
	          ),
	          _react2['default'].createElement(_DateInput2['default'], {
	            id: endDateId,
	            placeholder: endDatePlaceholderText,
	            dateValue: endDateValue,
	            focused: isEndDateFocused,
	            disabled: disabled,

	            onChange: onEndDateChange,
	            onFocus: onEndDateFocus,
	            onKeyDownTab: onEndDateTab
	          }),
	          showClearDates && _react2['default'].createElement(
	            'button',
	            {
	              type: 'button',
	              className: (0, _classnames2['default'])('DateRangePickerInput__clear-dates', {
	                'DateRangePickerInput__clear-dates--hide': !(startDateValue || endDateValue),
	                'DateRangePickerInput__clear-dates--hover': isClearDatesHovered
	              }),
	              onMouseEnter: this.onClearDatesMouseEnter,
	              onMouseLeave: this.onClearDatesMouseLeave,
	              onClick: onClearDates
	            },
	            _react2['default'].createElement(
	              'span',
	              { className: 'screen-reader-only' },
	              phrases.clearDates
	            ),
	            _react2['default'].createElement(_close2['default'], null)
	          )
	        );
	      }

	      return render;
	    }()
	  }]);

	  return DateRangePickerInput;
	}(_react2['default'].Component);

	exports['default'] = DateRangePickerInput;


	DateRangePickerInput.propTypes = propTypes;
	DateRangePickerInput.defaultProps = defaultProps;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	module.exports = require("../../constants");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

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

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	module.exports = require("./DateInput");

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

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
	          _extends({ viewBox: "0 0 1000 1000" }, this.props),
	          _react2["default"].createElement("path", { d: "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ })

/******/ });