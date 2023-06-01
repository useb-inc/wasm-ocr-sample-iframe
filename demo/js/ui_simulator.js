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
    var collapsedToggle = function collapsedToggle(event) {
      var _event$target$id;
      var toggleElement = (_event$target$id = event.target.id) !== null && _event$target$id !== void 0 && _event$target$id.includes("toggle") ? event.target : event.target.parentElement;
      var section = toggleElement.parentElement;
      var label = toggleElement.querySelector('span');
      var chevron = toggleElement.querySelector('.chevron');
      // const settingsSection = document.querySelector(selector)
      // const label = document.querySelector(selector + ' span')
      // const chevron = document.querySelector(selector + ' .chevron')
      if (section.classList.contains('collapsed')) {
        section.classList.remove('collapsed');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
        label.textContent = '[접기]';
      } else {
        section.classList.add('collapsed');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
        label.textContent = '[펼치기]';
      }
    };
    document.getElementById('type-toggle').addEventListener('click', collapsedToggle);
    document.getElementById('settings-toggle').addEventListener('click', collapsedToggle);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJfb25DbGlja1N0YXJ0Q2FsbGJhY2siLCJXZWFrTWFwIiwiX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2siLCJfdHlwZSIsIl9zZXR0aW5ncyIsIl9iaW5kRXZlbnRMaXN0ZW5lciIsIldlYWtTZXQiLCJfb25DbGlja1N0YXJ0IiwiX29uQ2xpY2tSZXN0YXJ0IiwiX3NldEFjdGl2ZUJ1dHRvbiIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyIiwiVUlTaW11bGF0b3IiLCJjb25zdHJ1Y3RvciIsIm9uQ2xpY2tTdGFydENhbGxiYWNrIiwib25DbGlja1Jlc3RhcnRDYWxsYmFjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9iaW5kRXZlbnRMaXN0ZW5lcjIiLCJjYWxsIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyMiIsImNvbGxhcHNlZFRvZ2dsZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCRpZCIsInRvZ2dsZUVsZW1lbnQiLCJ0YXJnZXQiLCJpZCIsImluY2x1ZGVzIiwicGFyZW50RWxlbWVudCIsInNlY3Rpb24iLCJsYWJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGV2cm9uIiwiY29udGFpbnMiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiZSIsIl9jbGFzc1ByaXZhdGVGaWVsZEdldCIsInNzYU1heFJldHJ5Q291bnQiLCJ0b2dnbGVDdXN0b21VSSIsInBvc2l0aW9uIiwidXNlVG9wVUkiLCJjaGVja2VkIiwidXNlTWlkZGxlVUkiLCJ1c2VCb3R0b21VSSIsInRvZ2dsZUN1c3RvbVVJVGV4dE1zZyIsInVzZVRvcFVJVGV4dE1zZyIsInVzZU1pZGRsZVVJVGV4dE1zZyIsInVzZUJvdHRvbVVJVGV4dE1zZyIsIm1pcnJvck1vZGUiLCJyb3RhdGlvbkRlZ3JlZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInN0eWxlIiwiZGlzcGxheSIsInNvdXJjZSIsInNwbGl0IiwiYXJyIiwic2V0QXR0cmlidXRlIiwiY29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JOb3RSZWFkeSIsImNvbG9yUmVhZHkiLCJjb2xvckRldGVjdFN1Y2Nlc3MiLCJjb2xvckRldGVjdEZhaWxlZCIsImNvbG9yT0NSUmVjb2duaXplZCIsImNvbG9yU3VjY2VzcyIsImNvbG9yRmFpbGVkIiwiY29sb3JNYXNrRnJhbWUiLCJmcmFtZUJvcmRlclN0eWxlIiwiX29iamVjdFNwcmVhZCIsIndpZHRoIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwibWFza19mcmFtZSIsImhlaWdodCIsInJlc29sdXRpb25XaWR0aCIsInJlc29sdXRpb25IZWlnaHQiLCJyZXNvbHV0aW9uRXhwZW5kUmF0aW8iLCJfb25DbGlja1N0YXJ0MiIsIl9vbkNsaWNrUmVzdGFydDIiLCJfc2V0QWN0aXZlQnV0dG9uMiIsInR5cGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlcyI6WyJqcy91aV9zaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGluc3RhbmNlO1xuY2xhc3MgVUlTaW11bGF0b3Ige1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgI29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gICN0eXBlO1xuICAjc2V0dGluZ3MgPSB7fTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3Iob25DbGlja1N0YXJ0Q2FsbGJhY2ssIG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICBpZiAoISEhb25DbGlja1N0YXJ0Q2FsbGJhY2sgfHwgISEhb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwib25DbGljayBjYWxsYmFjayBmdW5jdGlvbiBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy4jb25DbGlja1N0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLiNvbkNsaWNrUmVzdGFydENhbGxiYWNrID0gb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLiNiaW5kRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuICAjYmluZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy1zZWN0aW9uIGlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb2xsYXBzZWRUb2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZD8uaW5jbHVkZXMoXCJ0b2dnbGVcIikgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRvZ2dsZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0b2dnbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgY2hldnJvbiA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZXZyb24nKTtcbiAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJyBzcGFuJylcbiAgICAgICAgLy8gY29uc3QgY2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIC5jaGV2cm9uJylcbiAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7KCR6riwXSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vtjrzsuZjquLBdJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlZFRvZ2dsZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3NhLW1heC1yZXRyeS1jb3VudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5zc2FNYXhSZXRyeUNvdW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUkgPSAocG9zaXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgdGhpcy4jc2V0dGluZ3MudXNlVG9wVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLiNzZXR0aW5ncy51c2VNaWRkbGVVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuI3NldHRpbmdzLnVzZUJvdHRvbVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuI3NldHRpbmdzLnVzZVRvcFVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgIHRoaXMuI3NldHRpbmdzLnVzZU1pZGRsZVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuI3NldHRpbmdzLnVzZUJvdHRvbVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLXRvcC11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLXRvcC11aS10ZXh0LW1zZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1taWRkbGUtdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ21pZGRsZScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1taWRkbGUtdWktdGV4dC1tc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtYm90dG9tLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtYm90dG9tLXVpLXRleHQtbXNnXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnYm90dG9tJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlycm9yLW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MubWlycm9yTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5yb3RhdGlvbkRlZ3JlZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1jbGlwYm9hcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc2hvd0NsaXBGcmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWNhbnZhcy1wcmV2aWV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnNob3dDYW52YXNQcmV2aWV3ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlLnNwbGl0KCd4Jyk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgICBbdGFyZ2V0WzBdLnZhbHVlLCB0YXJnZXRbMV0udmFsdWVdID0gW3NvdXJjZVswXSwgc291cmNlWzFdXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXJldmVyc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgIFthcnJbMF0udmFsdWUsIGFyclsxXS52YWx1ZV0gPSBbYXJyWzFdLnZhbHVlLCBhcnJbMF0udmFsdWVdOyAvLyBzd2FwXG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJUg7KCB7Jqp65CoJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuY29sb3IgPSAnIzVjYjg1Yyc7XG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci13aWR0aCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItc3R5bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1yYWRpdXMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1ub3QtcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck9DUlJlY29nbml6ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTWFza0ZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1hc2stZnJhbWUnKS52YWx1ZTtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLiNzZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlLFxuICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aCxcbiAgICAgICAgICBzdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgbm90X3JlYWR5OiBjb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBjb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IGNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBjb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBjb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgbWFza19mcmFtZTogY29sb3JNYXNrRnJhbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkV4cGVuZFJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tZXhwZW5kLXJhdGlvJykudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9IHJlc29sdXRpb25XaWR0aCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSByZXNvbHV0aW9uSGVpZ2h0ICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4jdHlwZSkge1xuICAgICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRjYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImlkY2FyZFwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzcG9ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJwYXNzcG9ydFwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJhbGllblwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiY3JlZGl0XCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkY2FyZC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiaWRjYXJkLXNzYVwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzcG9ydC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwicGFzc3BvcnQtc3NhXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsaWVuLXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJhbGllbi1zc2FcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuI3R5cGUgPSBcImNyZWRpdC1zc2FcIjtcbiAgICAgIC8vICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRfYnRuJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jb25DbGlja1Jlc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgI29uQ2xpY2tTdGFydCgpIHtcbiAgICB0aGlzLiNzZXRBY3RpdmVCdXR0b24odGhpcy4jdHlwZSk7XG4gICAgdGhpcy4jb25DbGlja1N0YXJ0Q2FsbGJhY2sodGhpcy4jdHlwZSwgdGhpcy4jc2V0dGluZ3MpO1xuICB9XG4gICNvbkNsaWNrUmVzdGFydCgpIHtcbiAgICB0aGlzLiNvbkNsaWNrUmVzdGFydENhbGxiYWNrKCk7XG4gIH1cbiAgI3NldEFjdGl2ZUJ1dHRvbih0eXBlKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbiAgcmVzZXRCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuICAjc2F2ZVNldHRpbmdzSGFuZGxlcigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpO1xuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGVjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJXsoIHsmqknO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVSVNpbXVsYXRvcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUTtBQUFDLElBQUFDLHFCQUFBLG9CQUFBQyxPQUFBO0FBQUEsSUFBQUMsdUJBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxLQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFBQUcsU0FBQSxvQkFBQUgsT0FBQTtBQUFBLElBQUFJLGtCQUFBLG9CQUFBQyxPQUFBO0FBQUEsSUFBQUMsYUFBQSxvQkFBQUQsT0FBQTtBQUFBLElBQUFFLGVBQUEsb0JBQUFGLE9BQUE7QUFBQSxJQUFBRyxnQkFBQSxvQkFBQUgsT0FBQTtBQUFBLElBQUFJLG9CQUFBLG9CQUFBSixPQUFBO0FBQ2IsTUFBTUssV0FBVyxDQUFDO0VBQ2hCOztFQU1BO0VBQ0FDLFdBQVdBLENBQUNDLG9CQUFvQixFQUFFQyxzQkFBc0IsRUFBRTtJQUFBQywyQkFBQSxPQUFBTCxvQkFBQTtJQUFBSywyQkFBQSxPQUFBTixnQkFBQTtJQUFBTSwyQkFBQSxPQUFBUCxlQUFBO0lBQUFPLDJCQUFBLE9BQUFSLGFBQUE7SUFBQVEsMkJBQUEsT0FBQVYsa0JBQUE7SUFBQVcsMEJBQUEsT0FBQWhCLHFCQUFBO01BQUFpQixRQUFBO01BQUFDLEtBQUE7SUFBQTtJQUFBRiwwQkFBQSxPQUFBZCx1QkFBQTtNQUFBZSxRQUFBO01BQUFDLEtBQUE7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
