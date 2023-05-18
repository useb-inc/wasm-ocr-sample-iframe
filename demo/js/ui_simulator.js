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
        label.textContent = '[접기]';
      } else {
        settingsSection.classList.add('collapsed');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
        label.textContent = '[펼치기]';
      }
    });
    document.getElementById('ssa-max-retry-count').addEventListener('change', e => {
      _classPrivateFieldGet(this, _settings).ssaMaxRetryCount = e.target.value;
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    });
    var toggleCustomUI = (position, event) => {
      switch (position) {
        case 'top':
          _classPrivateFieldGet(this, _settings).useTopUI = event.target.checked;
          break;
        case 'middle':
          _classPrivateFieldGet(this, _settings).useMiddleUI = event.target.checked;
          break;
        case 'bottom':
          _classPrivateFieldGet(this, _settings).useBottomUI = event.target.checked;
          break;
      }
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    };
    var toggleCustomUITextMsg = (position, event) => {
      switch (position) {
        case 'top':
          _classPrivateFieldGet(this, _settings).useTopUITextMsg = event.target.checked;
          break;
        case 'middle':
          _classPrivateFieldGet(this, _settings).useMiddleUITextMsg = event.target.checked;
          break;
        case 'bottom':
          _classPrivateFieldGet(this, _settings).useBottomUITextMsg = event.target.checked;
          break;
      }
      _classPrivateMethodGet(this, _saveSettingsHandler, _saveSettingsHandler2).call(this);
    };
    document.getElementById("use-top-ui").addEventListener("change", e => {
      toggleCustomUI('top', e);
    });
    document.getElementById("use-top-ui-text-msg").addEventListener("change", e => {
      toggleCustomUITextMsg('top', e);
    });
    document.getElementById("use-middle-ui").addEventListener("change", e => {
      toggleCustomUI('middle', e);
    });
    document.getElementById("use-middle-ui-text-msg").addEventListener("change", e => {
      toggleCustomUITextMsg('middle', e);
    });
    document.getElementById("use-bottom-ui").addEventListener("change", e => {
      toggleCustomUI('bottom', e);
    });
    document.getElementById("use-bottom-ui-text-msg").addEventListener("change", e => {
      toggleCustomUITextMsg('bottom', e);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJfb25DbGlja1N0YXJ0Q2FsbGJhY2siLCJXZWFrTWFwIiwiX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2siLCJfdHlwZSIsIl9zZXR0aW5ncyIsIl9iaW5kRXZlbnRMaXN0ZW5lciIsIldlYWtTZXQiLCJfb25DbGlja1N0YXJ0IiwiX29uQ2xpY2tSZXN0YXJ0IiwiX3NldEFjdGl2ZUJ1dHRvbiIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyIiwiVUlTaW11bGF0b3IiLCJjb25zdHJ1Y3RvciIsIm9uQ2xpY2tTdGFydENhbGxiYWNrIiwib25DbGlja1Jlc3RhcnRDYWxsYmFjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9iaW5kRXZlbnRMaXN0ZW5lcjIiLCJjYWxsIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyMiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwiY2hldnJvbiIsImNvbnRhaW5zIiwiYWRkIiwidGV4dENvbnRlbnQiLCJlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwic3NhTWF4UmV0cnlDb3VudCIsInRhcmdldCIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJldmVudCIsInVzZVRvcFVJIiwiY2hlY2tlZCIsInVzZU1pZGRsZVVJIiwidXNlQm90dG9tVUkiLCJ0b2dnbGVDdXN0b21VSVRleHRNc2ciLCJ1c2VUb3BVSVRleHRNc2ciLCJ1c2VNaWRkbGVVSVRleHRNc2ciLCJ1c2VCb3R0b21VSVRleHRNc2ciLCJtaXJyb3JNb2RlIiwicm90YXRpb25EZWdyZWUiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJzdHlsZSIsImRpc3BsYXkiLCJzb3VyY2UiLCJzcGxpdCIsImFyciIsInNldEF0dHJpYnV0ZSIsImNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImNvbG9yTm90UmVhZHkiLCJjb2xvclJlYWR5IiwiY29sb3JEZXRlY3RTdWNjZXNzIiwiY29sb3JEZXRlY3RGYWlsZWQiLCJjb2xvck9DUlJlY29nbml6ZWQiLCJjb2xvclN1Y2Nlc3MiLCJjb2xvckZhaWxlZCIsImNvbG9yTWFza0ZyYW1lIiwiZnJhbWVCb3JkZXJTdHlsZSIsIl9vYmplY3RTcHJlYWQiLCJ3aWR0aCIsInJhZGl1cyIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X2ZhaWxlZCIsImRldGVjdF9zdWNjZXNzIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsIm1hc2tfZnJhbWUiLCJoZWlnaHQiLCJyZXNvbHV0aW9uV2lkdGgiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbkV4cGVuZFJhdGlvIiwiX29uQ2xpY2tTdGFydDIiLCJfb25DbGlja1Jlc3RhcnQyIiwiX3NldEFjdGl2ZUJ1dHRvbjIiLCJ0eXBlIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZXMiOlsianMvdWlfc2ltdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpbnN0YW5jZTtcbmNsYXNzIFVJU2ltdWxhdG9yIHtcbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAjb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gICNvbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICAjdHlwZTtcbiAgI3NldHRpbmdzID0ge307XG5cbiAgLyoqIGNvbnN0cnVjdG9yICovXG4gIGNvbnN0cnVjdG9yKG9uQ2xpY2tTdGFydENhbGxiYWNrLCBvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgaWYgKCEhIW9uQ2xpY2tTdGFydENhbGxiYWNrIHx8ICEhIW9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm9uQ2xpY2sgY2FsbGJhY2sgZnVuY3Rpb24gcGFyYW1ldGVyIGlzIG5vdCBleGlzdFwiKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuI29uQ2xpY2tTdGFydENhbGxiYWNrID0gb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy4jb25DbGlja1Jlc3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy4jYmluZEV2ZW50TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbiAgI2JpbmRFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3Mtc2VjdGlvbiBpbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtc2VjdGlvbicpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zZWN0aW9uIHNwYW4nKTtcbiAgICAgICAgY29uc3QgY2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zZWN0aW9uIC5jaGV2cm9uJyk7XG4gICAgICAgIGlmIChzZXR0aW5nc1NlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICAgIHNldHRpbmdzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vsoJHquLBdJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0aW5nc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7Y687LmY6riwXSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NzYS1tYXgtcmV0cnktY291bnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc3NhTWF4UmV0cnlDb3VudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuI3NldHRpbmdzLnVzZVRvcFVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy4jc2V0dGluZ3MudXNlTWlkZGxlVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VCb3R0b21VSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJVGV4dE1zZyA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VUb3BVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VNaWRkbGVVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VCb3R0b21VSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS10b3AtdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS10b3AtdWktdGV4dC1tc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCd0b3AnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtbWlkZGxlLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtbWlkZGxlLXVpLXRleHQtbXNnXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLWJvdHRvbS11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnYm90dG9tJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLWJvdHRvbS11aS10ZXh0LW1zZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pcnJvci1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLm1pcnJvck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi1kZWdyZWUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Mucm90YXRpb25EZWdyZWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2xpcGJvYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnNob3dDbGlwRnJhbWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1jYW52YXMtcHJldmlld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5zaG93Q2FudmFzUHJldmlldyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gXCJyZXNwb25zaXZlXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZS5zcGxpdCgneCcpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgICAgW3RhcmdldFswXS52YWx1ZSwgdGFyZ2V0WzFdLnZhbHVlXSA9IFtzb3VyY2VbMF0sIHNvdXJjZVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1yZXZlcnNlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICBbYXJyWzBdLnZhbHVlLCBhcnJbMV0udmFsdWVdID0gW2FyclsxXS52YWx1ZSwgYXJyWzBdLnZhbHVlXTsgLy8gc3dhcFxuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCVIOyggeyaqeuQqCc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmNvbG9yID0gJyM1Y2I4NWMnO1xuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItd2lkdGgnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXN0eWxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItcmFkaXVzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck1hc2tGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1tYXNrLWZyYW1lJykudmFsdWU7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLmZyYW1lQm9yZGVyU3R5bGUgPSB7XG4gICAgICAgICAgLi4udGhpcy4jc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSxcbiAgICAgICAgICB3aWR0aDogYm9yZGVyV2lkdGgsXG4gICAgICAgICAgc3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgIHJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIG5vdF9yZWFkeTogY29sb3JOb3RSZWFkeSxcbiAgICAgICAgICByZWFkeTogY29sb3JSZWFkeSxcbiAgICAgICAgICBkZXRlY3RfZmFpbGVkOiBjb2xvckRldGVjdEZhaWxlZCxcbiAgICAgICAgICBkZXRlY3Rfc3VjY2VzczogY29sb3JEZXRlY3RTdWNjZXNzLFxuICAgICAgICAgIHJlY29nbml6ZWQ6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgb2NyX2ZhaWxlZDogY29sb3JGYWlsZWQsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3M6IGNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG1hc2tfZnJhbWU6IGNvbG9yTWFza0ZyYW1lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25XaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25FeHBlbmRSYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWV4cGVuZC1yYXRpbycpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSByZXNvbHV0aW9uV2lkdGggKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gcmVzb2x1dGlvbkhlaWdodCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuI3R5cGUpIHtcbiAgICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkY2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJpZGNhcmRcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwicGFzc3BvcnRcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiYWxpZW5cIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImNyZWRpdFwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImlkY2FyZC1zc2FcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcInBhc3Nwb3J0LXNzYVwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllbi1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiYWxpZW4tc3NhXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLiN0eXBlID0gXCJjcmVkaXQtc3NhXCI7XG4gICAgICAvLyAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0X2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gICNvbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy4jc2V0QWN0aXZlQnV0dG9uKHRoaXMuI3R5cGUpO1xuICAgIHRoaXMuI29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuI3R5cGUsIHRoaXMuI3NldHRpbmdzKTtcbiAgfVxuICAjb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgdGhpcy4jb25DbGlja1Jlc3RhcnRDYWxsYmFjaygpO1xuICB9XG4gICNzZXRBY3RpdmVCdXR0b24odHlwZSkge1xuICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgI3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVE7QUFBQyxJQUFBQyxxQkFBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLHVCQUFBLG9CQUFBRCxPQUFBO0FBQUEsSUFBQUUsS0FBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFHLFNBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxrQkFB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
