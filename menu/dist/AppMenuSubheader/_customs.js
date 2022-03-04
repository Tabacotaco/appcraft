"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRecognizeEffect = useRecognizeEffect;

var _react = require("react");

var _context = require("../utils/_context");

function useRecognizeEffect(uid) {
  var _useContext = (0, _react.useContext)(_context.AppMenuContext),
      onRecognize = _useContext.onRecognize;

  var option = (0, _react.useMemo)(function () {
    return {
      uid: uid
    };
  }, [uid]);
  (0, _react.useEffect)(function () {
    onRecognize(option);
    return function () {
      return onRecognize(uid);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);
}