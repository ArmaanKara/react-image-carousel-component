"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./ReactCarousel.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ReactCarousel = _ref => {
  let {
    cards,
    time
  } = _ref;
  const [index, setIndex] = (0, _react.useState)(0);
  const [currentTimeout, setCurrentTimeout] = (0, _react.useState)();
  const [sliderData, setSliderData] = (0, _react.useState)(cards);
  const [intervalValue, setintervalValue] = (0, _react.useState)(time || 5000);

  const shiftImage = (n, m) => {
    let result = n % m; //Return a positive value

    return result >= 0 ? result : result + m;
  };

  const prevSlide = () => {
    setIndex(shiftImage(index - 1, cards.length));
  };

  const nextSlide = () => {
    setIndex(shiftImage(index + 1, cards.length));
  };

  const modifiedImageSliderData = currentIndex => {
    setSliderData(sliderData.map((element, index_) => {
      return _objectSpread(_objectSpread({}, element), {}, {
        active: index_ === currentIndex
      });
    }));
  };

  (0, _react.useEffect)(() => {
    if (currentTimeout) clearTimeout(currentTimeout);
    modifiedImageSliderData(index);
    const t = setTimeout(() => {
      setIndex(shiftImage(index + 1, cards.length));
    }, intervalValue);
    setCurrentTimeout(t);
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [intervalValue, index]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel"
  }, sliderData.map((item, i) => {
    const indexLeft = shiftImage(index - 1, cards.length);
    const indexRight = shiftImage(index + 1, cards.length);
    let className = "";

    if (i === index) {
      className = "card card--active";
    } else if (i === indexLeft) {
      className = "card card--left";
    } else if (i === indexRight) {
      className = "card card--right";
    } else {
      className = "card";
    }

    return /*#__PURE__*/_react.default.createElement("img", {
      key: item.id,
      className: className,
      src: item.image,
      alt: "boat"
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => prevSlide(),
    className: "button-left"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "arrow left"
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => nextSlide(),
    className: "button-right"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "arrow right"
  }))));
};

var _default = ReactCarousel;
exports.default = _default;