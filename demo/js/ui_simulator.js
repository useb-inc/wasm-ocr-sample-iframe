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
        ocr_recognized: colorOCRRecognized,
        ocr_failed: colorFailed,
        ocr_success: colorSuccess,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJfb25DbGlja1N0YXJ0Q2FsbGJhY2siLCJXZWFrTWFwIiwiX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2siLCJfdHlwZSIsIl9zZXR0aW5ncyIsIl9iaW5kRXZlbnRMaXN0ZW5lciIsIldlYWtTZXQiLCJfb25DbGlja1N0YXJ0IiwiX29uQ2xpY2tSZXN0YXJ0IiwiX3NldEFjdGl2ZUJ1dHRvbiIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyIiwiVUlTaW11bGF0b3IiLCJjb25zdHJ1Y3RvciIsIm9uQ2xpY2tTdGFydENhbGxiYWNrIiwib25DbGlja1Jlc3RhcnRDYWxsYmFjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9iaW5kRXZlbnRMaXN0ZW5lcjIiLCJjYWxsIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyMiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwiY2hldnJvbiIsImNvbnRhaW5zIiwiYWRkIiwidGV4dENvbnRlbnQiLCJlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwic3NhTWF4UmV0cnlDb3VudCIsInRhcmdldCIsInVzZUJvdHRvbVVJIiwiY2hlY2tlZCIsIm1pcnJvck1vZGUiLCJyb3RhdGlvbkRlZ3JlZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInN0eWxlIiwiZGlzcGxheSIsInNvdXJjZSIsInNwbGl0IiwiYXJyIiwiZXZlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJjb2xvck1hc2tGcmFtZSIsImZyYW1lQm9yZGVyU3R5bGUiLCJfb2JqZWN0U3ByZWFkIiwid2lkdGgiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsIm9jcl9yZWNvZ25pemVkIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwibWFza19mcmFtZSIsImhlaWdodCIsInJlc29sdXRpb25XaWR0aCIsInJlc29sdXRpb25IZWlnaHQiLCJyZXNvbHV0aW9uRXhwZW5kUmF0aW8iLCJfb25DbGlja1N0YXJ0MiIsIl9vbkNsaWNrUmVzdGFydDIiLCJfc2V0QWN0aXZlQnV0dG9uMiIsInR5cGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlcyI6WyJqcy91aV9zaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGluc3RhbmNlO1xuY2xhc3MgVUlTaW11bGF0b3Ige1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgI29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gICN0eXBlO1xuICAjc2V0dGluZ3MgPSB7fTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3Iob25DbGlja1N0YXJ0Q2FsbGJhY2ssIG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICBpZiAoISEhb25DbGlja1N0YXJ0Q2FsbGJhY2sgfHwgISEhb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwib25DbGljayBjYWxsYmFjayBmdW5jdGlvbiBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy4jb25DbGlja1N0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLiNvbkNsaWNrUmVzdGFydENhbGxiYWNrID0gb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLiNiaW5kRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuICAjYmluZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy1zZWN0aW9uIGlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXNlY3Rpb24gc3BhbicpO1xuICAgICAgICBjb25zdCBjaGV2cm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXNlY3Rpb24gLmNoZXZyb24nKTtcbiAgICAgICAgaWYgKHNldHRpbmdzU2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgc2V0dGluZ3NTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAn7KCR6riwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0aW5nc1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICftjrzsuZjquLAnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtbWF4LXJldHJ5LWNvdW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnNzYU1heFJldHJ5Q291bnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1ib3R0b20tdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MudXNlQm90dG9tVUkgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlycm9yLW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MubWlycm9yTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5yb3RhdGlvbkRlZ3JlZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1jbGlwYm9hcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc2hvd0NsaXBGcmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWNhbnZhcy1wcmV2aWV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnNob3dDYW52YXNQcmV2aWV3ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlLnNwbGl0KCd4Jyk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgICBbdGFyZ2V0WzBdLnZhbHVlLCB0YXJnZXRbMV0udmFsdWVdID0gW3NvdXJjZVswXSwgc291cmNlWzFdXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXJldmVyc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgIFthcnJbMF0udmFsdWUsIGFyclsxXS52YWx1ZV0gPSBbYXJyWzFdLnZhbHVlLCBhcnJbMF0udmFsdWVdOyAvLyBzd2FwXG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJUg7KCB7Jqp65CoJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuY29sb3IgPSAnIzVjYjg1Yyc7XG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci13aWR0aCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItc3R5bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1yYWRpdXMnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1ub3QtcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdFN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZGV0ZWN0LWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck9DUlJlY29nbml6ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itb2NyLXJlY29nbml6ZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTWFza0ZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1hc2stZnJhbWUnKS52YWx1ZTtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLiNzZXR0aW5ncy5mcmFtZUJvcmRlclN0eWxlLFxuICAgICAgICAgIHdpZHRoOiBib3JkZXJXaWR0aCxcbiAgICAgICAgICBzdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgbm90X3JlYWR5OiBjb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBjb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IGNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBjb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgb2NyX3JlY29nbml6ZWQ6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBjb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogY29sb3JTdWNjZXNzLFxuICAgICAgICAgIG1hc2tfZnJhbWU6IGNvbG9yTWFza0ZyYW1lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25XaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25FeHBlbmRSYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWV4cGVuZC1yYXRpbycpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSByZXNvbHV0aW9uV2lkdGggKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gcmVzb2x1dGlvbkhlaWdodCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuI3R5cGUpIHtcbiAgICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkY2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJpZGNhcmRcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwicGFzc3BvcnRcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiYWxpZW5cIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImNyZWRpdFwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImlkY2FyZC1zc2FcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcInBhc3Nwb3J0LXNzYVwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllbi1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiYWxpZW4tc3NhXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLiN0eXBlID0gXCJjcmVkaXQtc3NhXCI7XG4gICAgICAvLyAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0X2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gICNvbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy4jc2V0QWN0aXZlQnV0dG9uKHRoaXMuI3R5cGUpO1xuICAgIHRoaXMuI29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuI3R5cGUsIHRoaXMuI3NldHRpbmdzKTtcbiAgfVxuICAjb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgdGhpcy4jb25DbGlja1Jlc3RhcnRDYWxsYmFjaygpO1xuICB9XG4gICNzZXRBY3RpdmVCdXR0b24odHlwZSkge1xuICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgI3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVE7QUFBQyxJQUFBQyxxQkFBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLHVCQUFBLG9CQUFBRCxPQUFBO0FBQUEsSUFBQUUsS0FBQSxvQkFBQUYsT0FBQTtBQUFBLElBQUFHLFNBQUEsb0JBQUFILE9BQUE7QUFBQSxJQUFBSSxrQkFBQSxvQkFBQUMsT0FBQTtBQUFBLElBQUFDLGFBQUEsb0JBQUFELE9BQUE7QUFBQSxJQUFBRSxlQUFBLG9CQUFBRixPQUFBO0FBQUEsSUFBQUcsZ0JBQUEsb0JB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
