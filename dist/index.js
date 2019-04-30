(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Clock", [], factory);
	else if(typeof exports === 'object')
		exports["Clock"] = factory();
	else
		root["Clock"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(40);
var toPrimitive = __webpack_require__(54);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(38);
var redefine = __webpack_require__(49);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(4);
var $iterCreate = __webpack_require__(42);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(46);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(21) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(50)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(20)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(4);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(61)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  "data-v-2de61336",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(14);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(31);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _calendar = __webpack_require__(66);

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      myDate: [],
      list: [],
      historyChose: [],
      dateTop: ""
    };
  },

  props: {
    markDate: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    markDateMore: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    textTop: {
      type: Array,
      default: function _default() {
        return ["日", "一", "二", "三", "四", "五", "六"];
      }
    },
    sundayStart: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    agoDayHide: {
      type: String,
      default: "0"
    },
    futureDayHide: {
      type: String,
      default: "2554387200"
    }
  },
  created: function created() {
    this.intStart();
    this.myDate = new Date();
  },

  methods: {
    intStart: function intStart() {
      _calendar2.default.sundayStart = this.sundayStart;
    },
    setClass: function setClass(data) {
      var obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },

    clickDay: function clickDay(item, index) {
      if (item.otherMonth === "nowMonth" && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== "nowMonth") {
        item.otherMonth === "preMonth" ? this.PreMonth(item.date) : this.NextMonth(item.date);
      }
    },
    ChoseMonth: function ChoseMonth(date) {
      var isChosedDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      date = _calendar2.default.dateFormat(date);
      this.myDate = new Date(date);
      this.$emit("changeMonth", _calendar2.default.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function PreMonth(date) {
      var isChosedDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      date = _calendar2.default.dateFormat(date);
      this.myDate = _calendar2.default.getOtherMonth(this.myDate, "preMonth");
      this.$emit("changeMonth", _calendar2.default.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function NextMonth(date) {
      var isChosedDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      date = _calendar2.default.dateFormat(date);
      this.myDate = _calendar2.default.getOtherMonth(this.myDate, "nextMonth");
      this.$emit("changeMonth", _calendar2.default.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function forMatArgs() {
      var markDate = this.markDate;
      var markDateMore = this.markDateMore;
      markDate = markDate.map(function (k) {
        return _calendar2.default.dateFormat(k);
      });
      markDateMore = markDateMore.map(function (k) {
        k.date = _calendar2.default.dateFormat(k.date);
        return k;
      });
      return [markDate, markDateMore];
    },
    getList: function getList(date, chooseDay) {
      var isChosedDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _forMatArgs = this.forMatArgs(),
          _forMatArgs2 = (0, _slicedToArray3.default)(_forMatArgs, 2),
          markDate = _forMatArgs2[0],
          markDateMore = _forMatArgs2[1];

      this.dateTop = date.getFullYear() + "\u5E74" + (date.getMonth() + 1) + "\u6708";
      var arr = _calendar2.default.getMonthList(this.myDate);
      for (var i = 0; i < arr.length; i++) {
        var markClassName = "";
        var k = arr[i];
        k.chooseDay = false;
        var nowTime = k.date;
        var t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(markDateMore), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            if (c.date === nowTime) {
              markClassName = c.className || "";
            }
          }
          //标记选中某些天 设置class
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          this.$emit("isToday", nowTime);
        }
        var flag = !k.dayHide && k.otherMonth === "nowMonth";
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit("choseDay", nowTime);
          this.historyChose.push(nowTime);
          k.chooseDay = true;
        } else if (this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted: function mounted() {
    this.getList(this.myDate);
  },

  watch: {
    markDate: {
      handler: function handler(val, oldVal) {
        this.getList(this.myDate);
      },

      deep: true
    },
    markDateMore: {
      handler: function handler(val, oldVal) {
        this.getList(this.myDate);
      },

      deep: true
    },
    agoDayHide: {
      handler: function handler(val, oldVal) {
        this.getList(this.myDate);
      },

      deep: true
    },
    futureDayHide: {
      handler: function handler(val, oldVal) {
        this.getList(this.myDate);
      },

      deep: true
    },
    sundayStart: {
      handler: function handler(val, oldVal) {
        this.intStart();
        this.getList(this.myDate);
      },

      deep: true
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(30);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(14);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(26);
module.exports = __webpack_require__(56);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(26);
module.exports = __webpack_require__(57);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(52);
var toAbsoluteIndex = __webpack_require__(51);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(37);
var hide = __webpack_require__(3);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(44);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(45);
var enumBugKeys = __webpack_require__(18);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(39).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(48);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(53);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(36)(false);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var defined = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(12);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(15);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(4);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var get = __webpack_require__(55);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(15);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(4);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(35);
var step = __webpack_require__(43);
var Iterators = __webpack_require__(4);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(20)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "@media screen and (min-width:460px){.wh_item_date[data-v-2de61336]:hover{background:#71c7a5;cursor:pointer}}[data-v-2de61336]{margin:0;padding:0}.wh_container[data-v-2de61336]{max-width:410px;margin:auto}li[data-v-2de61336]{list-style-type:none}.wh_top_changge[data-v-2de61336]{display:flex}.wh_top_changge li[data-v-2de61336]{cursor:pointer;display:flex;color:#fff;font-size:18px;flex:1;justify-content:center;align-items:center;height:47px}.wh_top_changge .wh_content_li[data-v-2de61336]{cursor:auto;flex:2.5}.wh_content_all[data-v-2de61336]{font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Helvetica Neue,STHeiti,Microsoft Yahei,Tahoma,Simsun,sans-serif;background-color:#0fc37c;width:100%;overflow:hidden;padding-bottom:8px}.wh_content[data-v-2de61336]{display:flex;flex-wrap:wrap;padding:0 3%;width:100%}.wh_content:first-child .wh_content_item[data-v-2de61336],.wh_content:first-child .wh_content_item_tag[data-v-2de61336]{color:#ddd;font-size:16px}.wh_content_item[data-v-2de61336],wh_content_item_tag[data-v-2de61336]{font-size:15px;width:13.4%;text-align:center;color:#fff;position:relative}.wh_content_item[data-v-2de61336]{height:40px}.wh_item_date[data-v-2de61336],.wh_top_tag[data-v-2de61336]{width:40px;height:40px;line-height:40px;margin:auto;display:flex;justify-content:center;align-items:center}.wh_jiantou1[data-v-2de61336]{width:12px;height:12px;border-top:2px solid #fff;border-left:2px solid #fff;transform:rotate(-45deg)}.wh_jiantou1[data-v-2de61336]:active,.wh_jiantou2[data-v-2de61336]:active{border-color:#ddd}.wh_jiantou2[data-v-2de61336]{width:12px;height:12px;border-top:2px solid #fff;border-right:2px solid #fff;transform:rotate(45deg)}.wh_content_item>.wh_isMark[data-v-2de61336]{margin:auto;border-radius:100px;background:blue;z-index:2}.wh_content_item .wh_other_dayhide[data-v-2de61336],.wh_content_item .wh_want_dayhide[data-v-2de61336]{color:#bfbfbf}.wh_content_item .wh_isToday[data-v-2de61336]{background:#000;border-radius:100px}.wh_content_item .wh_chose_day[data-v-2de61336]{background:green;border-radius:100px}", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "wh_container"
  }, [_c('div', {
    staticClass: "wh_content_all"
  }, [_c('div', {
    staticClass: "wh_top_changge"
  }, [_c('li', {
    on: {
      "click": function($event) {
        return _vm.PreMonth(_vm.myDate, false)
      }
    }
  }, [_c('div', {
    staticClass: "wh_jiantou1"
  })]), _vm._v(" "), _c('li', {
    staticClass: "wh_content_li"
  }, [_vm._v(_vm._s(_vm.dateTop))]), _vm._v(" "), _c('li', {
    on: {
      "click": function($event) {
        return _vm.NextMonth(_vm.myDate, false)
      }
    }
  }, [_c('div', {
    staticClass: "wh_jiantou2"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "wh_content"
  }, _vm._l((_vm.textTop), function(tag) {
    return _c('div', {
      key: tag,
      staticClass: "wh_content_item"
    }, [_c('div', {
      staticClass: "wh_top_tag"
    }, [_vm._v(_vm._s(tag))])])
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "wh_content"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "wh_content_item",
      on: {
        "click": function($event) {
          return _vm.clickDay(item, index)
        }
      }
    }, [_c('div', {
      staticClass: "wh_item_date",
      class: [{
        wh_isMark: item.isMark
      }, {
        wh_other_dayhide: item.otherMonth !== 'nowMonth'
      }, {
        wh_want_dayhide: item.dayHide
      }, {
        wh_isToday: item.isToday
      }, {
        wh_chose_day: item.chooseDay
      }, _vm.setClass(item)]
    }, [_vm._v(_vm._s(item.id))])])
  }), 0)])])
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(64)("0e2f8188", content, true);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(65)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    // 当某月的天数
    getDaysInOneMonth(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const d = new Date(year, month, 0);
        return d.getDate();
    },
    // 向前空几个
    getMonthweek(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dateFirstOne = new Date(year + '/' + month + '/1');
        return this.sundayStart ?
            dateFirstOne.getDay() == 0 ? 7 : dateFirstOne.getDay() :
            dateFirstOne.getDay() == 0 ? 6 : dateFirstOne.getDay() - 1;
    },
    /**
     * 获取当前日期上个月或者下个月
    */
    getOtherMonth(date, str = 'nextMonth') {
        const timeArray = this.dateFormat(date).split('/');
        const year = timeArray[0];
        const month = timeArray[1];
        const day = timeArray[2];
        let year2 = year;
        let month2;
        if (str === 'nextMonth') {
            month2 = parseInt(month) + 1;
            if (month2 == 13) {
                year2 = parseInt(year2) + 1;
                month2 = 1;
            }
        } else {
            month2 = parseInt(month) - 1;
            if (month2 == 0) {
                year2 = parseInt(year2) - 1;
                month2 = 12;
            }
        }
        let day2 = day;
        const days2 = new Date(year2, month2, 0).getDate();
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        if (day2 < 10) {
            day2 = '0' + day2;
        }
        const t2 = year2 + '/' + month2 + '/' + day2;
        return new Date(t2);
    },
    // 上个月末尾的一些日期
    getLeftArr(date) {
        const arr = [];
        const leftNum = this.getMonthweek(date);
        const num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
        const preDate = this.getOtherMonth(date, 'preMonth');
        // 上个月多少开始
        for (let i = 0; i < leftNum; i++) {
            const nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
            arr.push({
                id: num + i,
                date: nowTime,
                isToday: false,
                otherMonth: 'preMonth',
            });
        }
        return arr;
    },
    // 下个月末尾的一些日期
    getRightArr(date) {
        const arr = [];
        const leftNum = this.getMonthweek(date);
        const nextDate = this.getOtherMonth(date, 'nextMonth');
        const leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);
        var _length = 7 - leftLength % 7;
        if (leftNum+_length<=7) {
            _length = _length+7;
        }
        for (let i = 0; i < _length; i++) {
            const nowTime = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1);
            arr.push({
                id: i + 1,
                date: nowTime,
                isToday: false,
                otherMonth: 'nextMonth',
            });
        }
        return arr;
    },
    // format日期
    dateFormat(date) {
        date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/'
            + date.getDate();
    },
    // 获取某月的列表不包括上月和下月
    getMonthListNoOther(date) {
        const arr = [];
        const num = this.getDaysInOneMonth(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const toDay = this.dateFormat(new Date());

        for (let i = 0; i < num; i++) {
            const nowTime = year + '/' + month + '/' + (i + 1);
            arr.push({
                id: i + 1,
                date: nowTime,
                isToday: toDay === nowTime,
                otherMonth: 'nowMonth',
            });
        }
        return arr;
    },
    // 获取某月的列表 用于渲染
    getMonthList(date) {
        return [...this.getLeftArr(date), ...this.getMonthListNoOther(date), ...this.getRightArr(date)];
    },
    // 默认是周一开始
    sundayStart: true,
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__calendar_vue__);
/**
 * Created by ZWH on 2017/6/22.
 */

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__calendar_vue___default.a);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('clock', Clock);
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map