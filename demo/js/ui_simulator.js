function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var instance;
var _onClickStartCallback = /*#__PURE__*/new WeakMap();
var _onClickRestartCallback = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
var _settings = /*#__PURE__*/new WeakMap();
var _bindEventListener = /*#__PURE__*/new WeakSet();
var _onClickStart = /*#__PURE__*/new WeakSet();
var _onClickRestart = /*#__PURE__*/new WeakSet();
var _setActiveButton = /*#__PURE__*/new WeakSet();
var _saveSettingsHandler = /*#__PURE__*/new WeakSet();
class UISimulator {
  /** private properties */

  /** constructor */
  constructor(onClickStartCallback, onClickRestartCallback) {
    _classPrivateMethodInitSpec(this, _saveSettingsHandler);
    _classPrivateMethodInitSpec(this, _setActiveButton);
    _classPrivateMethodInitSpec(this, _onClickRestart);
    _classPrivateMethodInitSpec(this, _onClickStart);
    _classPrivateMethodInitSpec(this, _bindEventListener);
    _classPrivateFieldInitSpec(this, _onClickStartCallback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onClickRestartCallback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _type, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _settings, {
      writable: true,
      value: {}
    });
    if (!!!onClickStartCallback || !!!onClickRestartCallback) {
      throw new Error("onClick callback function parameter is not exist");
    }
    if (instance) return instance;
    instance = this;
    _classPrivateFieldSet(this, _onClickStartCallback, onClickStartCallback);
    _classPrivateFieldSet(this, _onClickRestartCallback, onClickRestartCallback);
    _classPrivateMethodGet(this, _bindEventListener, _bindEventListener2).call(this);
    return instance;
  }
  resetButton() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
    });
  }
}
function _bindEventListener2() {
  window.onload = () => {
    document.querySelectorAll('.settings-section input').forEach(input => {
      input.addEventListener('keyup', _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2));
      input.addEventListener('change', _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2));
    });
    document.getElementById('settings-toggle').addEventListener('click', () => {
      var settingsSection = document.querySelector('.settings-section');
      var label = document.querySelector('.settings-section span');
      var chevron = document.querySelector('.settings-section .chevron');
      if (settingsSection.classList.contains('collapsed')) {
        settingsSection.classList.remove('collapsed');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
        label.textContent = '접기';
      } else {
        settingsSection.classList.add('collapsed');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
        label.textContent = '펼치기';
      }
    });
    document.getElementById('ssa-max-retry-count').addEventListener('change', e => {
      _classPrivateFieldGet(this, _settings).ssaMaxRetryCount = e.target.value;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById("use-bottom-ui").addEventListener("change", e => {
      _classPrivateFieldGet(this, _settings).useBottomUI = e.target.checked;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById("mirror-mode").addEventListener("change", e => {
      _classPrivateFieldGet(this, _settings).mirrorMode = e.target.checked;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById('rotation-degree').addEventListener('change', e => {
      _classPrivateFieldGet(this, _settings).rotationDegree = e.target.value;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById("show-clipboard").addEventListener("change", e => {
      _classPrivateFieldGet(this, _settings).showClipFrame = e.target.checked;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById("show-canvas-preview").addEventListener("change", e => {
      _classPrivateFieldGet(this, _settings).showCanvasPreview = e.target.checked;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById('resolution-template').addEventListener('change', () => {
      if (document.getElementById('resolution-template').value === "custom") {
        document.getElementById('resolution-custom').style.display = 'block';
      } else if (document.getElementById('resolution-template').value === "responsive") {
        document.getElementById('resolution-custom').style.display = 'none';
      } else {
        document.getElementById('resolution-custom').style.display = 'none';
        var source = document.getElementById('resolution-template').value.split('x');
        var target = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
        [target[0].value, target[1].value] = [source[0], source[1]];
      }
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById('resolution-reverse-button').addEventListener('click', () => {
      var arr = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
      [arr[0].value, arr[1].value] = [arr[1].value, arr[0].value]; // swap
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    document.getElementById('save-settings').addEventListener('click', event => {
      var target = document.getElementById('save-settings');
      target.setAttribute('disabled', 'disabled');
      target.querySelector('span').textContent = '설정 적용됨';
      target.querySelector('i').style.display = 'inline-block';
      target.querySelector('i').style.color = '#5cb85c';
      var borderWidth = document.getElementById('border-width').value;
      var borderStyle = document.getElementById('border-style').value;
      var borderRadius = document.getElementById('border-radius').value;
      var colorNotReady = document.getElementById('color-not-ready').value;
      var colorReady = document.getElementById('color-ready').value;
      var colorDetectSuccess = document.getElementById('color-detect-success').value;
      var colorDetectFailed = document.getElementById('color-detect-failed').value;
      var colorOCRRecognized = document.getElementById('color-ocr-recognized').value;
      var colorSuccess = document.getElementById('color-success').value;
      var colorFailed = document.getElementById('color-failed').value;
      var colorMaskFrame = document.getElementById('color-mask-frame').value;
      _classPrivateFieldGet(this, _settings).frameBorderStyle = _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _settings).frameBorderStyle), {}, {
        width: borderWidth,
        style: borderStyle,
        radius: borderRadius,
        not_ready: colorNotReady,
        ready: colorReady,
        detect_failed: colorDetectFailed,
        detect_success: colorDetectSuccess,
        recognized: colorOCRRecognized,
        recognized_with_ssa: colorOCRRecognized,
        ocr_failed: colorFailed,
        ocr_success: colorSuccess,
        ocr_success_with_ssa: colorSuccess,
        mask_frame: colorMaskFrame
      });
      if (document.getElementById('resolution-template').value === "responsive") {
        document.getElementById('resolution-simulation-iframe').style.width = '';
        document.getElementById('resolution-simulation-iframe').style.height = '';
      } else {
        var resolutionWidth = document.getElementById('resolution-width').value;
        var resolutionHeight = document.getElementById('resolution-height').value;
        var resolutionExpendRatio = document.getElementById('resolution-expend-ratio').value;
        document.getElementById('resolution-simulation-iframe').style.width = resolutionWidth * resolutionExpendRatio + 'px';
        document.getElementById('resolution-simulation-iframe').style.height = resolutionHeight * resolutionExpendRatio + 'px';
      }
      if (_classPrivateFieldGet(this, _type)) {
        _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
      }
    });
    document.getElementById("idcard").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "idcard");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("passport").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "passport");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("alien").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "alien");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("credit").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "credit");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("idcard-ssa").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "idcard-ssa");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("passport-ssa").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "passport-ssa");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });
    document.getElementById("alien-ssa").addEventListener("click", () => {
      _classPrivateFieldSet(this, _type, "alien-ssa");
      _classPrivateMethodGet(this, _onClickStart, _onClickStart2).call(this);
    });

    // document.getElementById("credit-ssa").addEventListener("click", () => {
    //   this.#type = "credit-ssa";
    //   this.#onClickStart();
    // });

    document.getElementById('restart_btn').addEventListener("click", () => {
      _classPrivateMethodGet(this, _onClickRestart, _onClickRestart2).call(this);
    });
  };
}
function _onClickStart2() {
  _classPrivateMethodGet(this, _setActiveButton, _setActiveButton2).call(this, _classPrivateFieldGet(this, _type));
  _classPrivateFieldGet(this, _onClickStartCallback).call(this, _classPrivateFieldGet(this, _type), _classPrivateFieldGet(this, _settings));
}
function _onClickRestart2() {
  _classPrivateFieldGet(this, _onClickRestartCallback).call(this);
}
function _setActiveButton2(type) {
  this.resetButton();
  document.getElementById(type).classList.add("active");
}
function _saveSettingsHandler2() {
  var button = document.getElementById('save-settings');
  button.removeAttribute('disabled');
  button.querySelector('.fa-check').style.display = 'none';
  button.querySelector('span').textContent = '설정적용';
}
export default UISimulator;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJfb25DbGlja1N0YXJ0Q2FsbGJhY2siLCJXZWFrTWFwIiwiX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2siLCJfdHlwZSIsIl9zZXR0aW5ncyIsIl9iaW5kRXZlbnRMaXN0ZW5lciIsIldlYWtTZXQiLCJfb25DbGlja1N0YXJ0IiwiX29uQ2xpY2tSZXN0YXJ0IiwiX3NldEFjdGl2ZUJ1dHRvbiIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyIiwiVUlTaW11bGF0b3IiLCJjb25zdHJ1Y3RvciIsIm9uQ2xpY2tTdGFydENhbGxiYWNrIiwib25DbGlja1Jlc3RhcnRDYWxsYmFjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9iaW5kRXZlbnRMaXN0ZW5lcjIiLCJjYWxsIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyMiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwiY2hldnJvbiIsImNvbnRhaW5zIiwiYWRkIiwidGV4dENvbnRlbnQiLCJlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwic3NhTWF4UmV0cnlDb3VudCIsInRhcmdldCIsInVzZUJvdHRvbVVJIiwiY2hlY2tlZCIsIm1pcnJvck1vZGUiLCJyb3RhdGlvbkRlZ3JlZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInN0eWxlIiwiZGlzcGxheSIsInNvdXJjZSIsInNwbGl0IiwiYXJyIiwiZXZlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJjb2xvck1hc2tGcmFtZSIsImZyYW1lQm9yZGVyU3R5bGUiLCJfb2JqZWN0U3ByZWFkIiwid2lkdGgiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsInJlY29nbml6ZWQiLCJyZWNvZ25pemVkX3dpdGhfc3NhIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwib2NyX3N1Y2Nlc3Nfd2l0aF9zc2EiLCJtYXNrX2ZyYW1lIiwiaGVpZ2h0IiwicmVzb2x1dGlvbldpZHRoIiwicmVzb2x1dGlvbkhlaWdodCIsInJlc29sdXRpb25FeHBlbmRSYXRpbyIsIl9vbkNsaWNrU3RhcnQyIiwiX29uQ2xpY2tSZXN0YXJ0MiIsIl9zZXRBY3RpdmVCdXR0b24yIiwidHlwZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VzIjpbImpzL3VpX3NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5zdGFuY2U7XG5jbGFzcyBVSVNpbXVsYXRvciB7XG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgI29uQ2xpY2tTdGFydENhbGxiYWNrO1xuICAjb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgI3R5cGU7XG4gICNzZXR0aW5ncyA9IHt9O1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcihvbkNsaWNrU3RhcnRDYWxsYmFjaywgb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgIGlmICghISFvbkNsaWNrU3RhcnRDYWxsYmFjayB8fCAhISFvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvbkNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBub3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLiNvbkNsaWNrU3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tTdGFydENhbGxiYWNrO1xuICAgIHRoaXMuI29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICAgIHRoaXMuI2JpbmRFdmVudExpc3RlbmVyKCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG4gICNiaW5kRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzLXNlY3Rpb24gaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtc2VjdGlvbiBzcGFuJyk7XG4gICAgICAgIGNvbnN0IGNoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtc2VjdGlvbiAuY2hldnJvbicpO1xuICAgICAgICBpZiAoc2V0dGluZ3NTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgICBzZXR0aW5nc1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICfsoJHquLAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRpbmdzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ+2OvOy5mOq4sCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NzYS1tYXgtcmV0cnktY291bnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc3NhTWF4UmV0cnlDb3VudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLWJvdHRvbS11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VCb3R0b21VSSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXJyb3ItbW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5taXJyb3JNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tZGVncmVlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnJvdGF0aW9uRGVncmVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWNsaXBib2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5zaG93Q2xpcEZyYW1lID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2FudmFzLXByZXZpZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc2hvd0NhbnZhc1ByZXZpZXcgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJjdXN0b21cIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUuc3BsaXQoJ3gnKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICAgIFt0YXJnZXRbMF0udmFsdWUsIHRhcmdldFsxXS52YWx1ZV0gPSBbc291cmNlWzBdLCBzb3VyY2VbMV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tcmV2ZXJzZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgW2FyclswXS52YWx1ZSwgYXJyWzFdLnZhbHVlXSA9IFthcnJbMV0udmFsdWUsIGFyclswXS52YWx1ZV07IC8vIHN3YXBcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpO1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOyglSDsoIHsmqnrkKgnO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5jb2xvciA9ICcjNWNiODVjJztcbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXdpZHRoJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1zdHlsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXJhZGl1cycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck5vdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0U3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3Qtc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdEZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1vY3ItcmVjb2duaXplZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JNYXNrRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWFzay1mcmFtZScpLnZhbHVlO1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlID0ge1xuICAgICAgICAgIC4uLnRoaXMuI3NldHRpbmdzLmZyYW1lQm9yZGVyU3R5bGUsXG4gICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRoLFxuICAgICAgICAgIHN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICBub3RfcmVhZHk6IGNvbG9yTm90UmVhZHksXG4gICAgICAgICAgcmVhZHk6IGNvbG9yUmVhZHksXG4gICAgICAgICAgZGV0ZWN0X2ZhaWxlZDogY29sb3JEZXRlY3RGYWlsZWQsXG4gICAgICAgICAgZGV0ZWN0X3N1Y2Nlc3M6IGNvbG9yRGV0ZWN0U3VjY2VzcyxcbiAgICAgICAgICByZWNvZ25pemVkOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIG9jcl9mYWlsZWQ6IGNvbG9yRmFpbGVkLFxuICAgICAgICAgIG9jcl9zdWNjZXNzOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6IGNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBtYXNrX2ZyYW1lOiBjb2xvck1hc2tGcmFtZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJyZXNwb25zaXZlXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25IZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uRXhwZW5kUmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1leHBlbmQtcmF0aW8nKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gcmVzb2x1dGlvbldpZHRoICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9IHJlc29sdXRpb25IZWlnaHQgKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiN0eXBlKSB7XG4gICAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiaWRjYXJkXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3Nwb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcInBhc3Nwb3J0XCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsaWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImFsaWVuXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJjcmVkaXRcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRjYXJkLXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJpZGNhcmQtc3NhXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3Nwb3J0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJwYXNzcG9ydC1zc2FcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW4tc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImFsaWVuLXNzYVwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgdGhpcy4jdHlwZSA9IFwiY3JlZGl0LXNzYVwiO1xuICAgICAgLy8gICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydF9idG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiNvbkNsaWNrUmVzdGFydCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICAjb25DbGlja1N0YXJ0KCkge1xuICAgIHRoaXMuI3NldEFjdGl2ZUJ1dHRvbih0aGlzLiN0eXBlKTtcbiAgICB0aGlzLiNvbkNsaWNrU3RhcnRDYWxsYmFjayh0aGlzLiN0eXBlLCB0aGlzLiNzZXR0aW5ncyk7XG4gIH1cbiAgI29uQ2xpY2tSZXN0YXJ0KCkge1xuICAgIHRoaXMuI29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2soKTtcbiAgfVxuICAjc2V0QWN0aXZlQnV0dG9uKHR5cGUpIHtcbiAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuICByZXNldEJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG4gICNzYXZlU2V0dGluZ3NIYW5kbGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhLWNoZWNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOygleyggeyaqSc7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVJU2ltdWxhdG9yOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRO0FBQUMsSUFBQUMscUJBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyx1QkFBQSxvQkFBQUQsT0FBQTtBQUFBLElBQUFFLEtBQUEsb0JBQUFGLE9B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
