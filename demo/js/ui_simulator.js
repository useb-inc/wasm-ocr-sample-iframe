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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJfb25DbGlja1N0YXJ0Q2FsbGJhY2siLCJXZWFrTWFwIiwiX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2siLCJfdHlwZSIsIl9zZXR0aW5ncyIsIl9iaW5kRXZlbnRMaXN0ZW5lciIsIldlYWtTZXQiLCJfb25DbGlja1N0YXJ0IiwiX29uQ2xpY2tSZXN0YXJ0IiwiX3NldEFjdGl2ZUJ1dHRvbiIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyIiwiVUlTaW11bGF0b3IiLCJjb25zdHJ1Y3RvciIsIm9uQ2xpY2tTdGFydENhbGxiYWNrIiwib25DbGlja1Jlc3RhcnRDYWxsYmFjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkVycm9yIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9iaW5kRXZlbnRMaXN0ZW5lcjIiLCJjYWxsIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zYXZlU2V0dGluZ3NIYW5kbGVyMiIsImdldEVsZW1lbnRCeUlkIiwic2V0dGluZ3NTZWN0aW9uIiwicXVlcnlTZWxlY3RvciIsImxhYmVsIiwiY2hldnJvbiIsImNvbnRhaW5zIiwiYWRkIiwidGV4dENvbnRlbnQiLCJlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0Iiwic3NhTWF4UmV0cnlDb3VudCIsInRhcmdldCIsInVzZUJvdHRvbVVJIiwiY2hlY2tlZCIsIm1pcnJvck1vZGUiLCJyb3RhdGlvbkRlZ3JlZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInN0eWxlIiwiZGlzcGxheSIsInNvdXJjZSIsInNwbGl0IiwiYXJyIiwiZXZlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJjb2xvck1hc2tGcmFtZSIsImZyYW1lQm9yZGVyU3R5bGUiLCJfb2JqZWN0U3ByZWFkIiwid2lkdGgiLCJyYWRpdXMiLCJub3RfcmVhZHkiLCJyZWFkeSIsImRldGVjdF9mYWlsZWQiLCJkZXRlY3Rfc3VjY2VzcyIsIm9jcl9yZWNvZ25pemVkIiwib2NyX2ZhaWxlZCIsIm9jcl9zdWNjZXNzIiwibWFza19mcmFtZSIsImhlaWdodCIsInJlc29sdXRpb25XaWR0aCIsInJlc29sdXRpb25IZWlnaHQiLCJyZXNvbHV0aW9uRXhwZW5kUmF0aW8iLCJfb25DbGlja1N0YXJ0MiIsIl9vbkNsaWNrUmVzdGFydDIiLCJfc2V0QWN0aXZlQnV0dG9uMiIsInR5cGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlcyI6WyJqcy91aV9zaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGluc3RhbmNlO1xuY2xhc3MgVUlTaW11bGF0b3Ige1xuICAvKiogcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICNvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgI29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2tcbiAgI3R5cGU7XG4gICNzZXR0aW5ncyA9IHt9O1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcihvbkNsaWNrU3RhcnRDYWxsYmFjaywgb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgIGlmICghISFvbkNsaWNrU3RhcnRDYWxsYmFjayB8fCAhISFvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvbkNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBub3QgZXhpc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuI29uQ2xpY2tTdGFydENhbGxiYWNrID0gb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy4jb25DbGlja1Jlc3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG5cbiAgICB0aGlzLiNiaW5kRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gICNiaW5kRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4gIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy1zZWN0aW9uIGlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcilcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcilcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zZWN0aW9uJylcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3Mtc2VjdGlvbiBzcGFuJylcbiAgICAgICAgY29uc3QgY2hldnJvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zZWN0aW9uIC5jaGV2cm9uJylcbiAgICAgICAgaWYgKHNldHRpbmdzU2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgc2V0dGluZ3NTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpXG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLXVwJylcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tZG93bicpXG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAn7KCR6riwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRpbmdzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKVxuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1kb3duJylcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tdXAnKVxuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ+2OvOy5mOq4sCdcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtbWF4LXJldHJ5LWNvdW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc3NhTWF4UmV0cnlDb3VudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtYm90dG9tLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MudXNlQm90dG9tVUkgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXJyb3ItbW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLm1pcnJvck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLiNzYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzLnJvdGF0aW9uRGVncmVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2xpcGJvYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3Muc2hvd0NsaXBGcmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctY2FudmFzLXByZXZpZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncy5zaG93Q2FudmFzUHJldmlldyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuI3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZS5zcGxpdCgneCcpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBbXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgW3RhcmdldFswXS52YWx1ZSwgdGFyZ2V0WzFdLnZhbHVlXSA9IFtzb3VyY2VbMF0sIHNvdXJjZVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXJldmVyc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAge1xuICAgICAgICBjb25zdCBhcnIgPSBbXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSxcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKVxuICAgICAgICBdO1xuICAgICAgICBbYXJyWzBdLnZhbHVlLCBhcnJbMV0udmFsdWVdID0gW2FyclsxXS52YWx1ZSwgYXJyWzBdLnZhbHVlXTsgICAgICAgIC8vIHN3YXBcbiAgICAgICAgdGhpcy4jc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKVxuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOyglSDsoIHsmqnrkKgnO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5jb2xvciA9ICcjNWNiODVjJztcbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXdpZHRoJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1zdHlsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXJhZGl1cycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck5vdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0U3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3Qtc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdEZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1vY3ItcmVjb2duaXplZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JNYXNrRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWFzay1mcmFtZScpLnZhbHVlO1xuXG5cbiAgICAgICAgdGhpcy4jc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi4odGhpcy4jc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSksXG4gICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRoLFxuICAgICAgICAgIHN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICBub3RfcmVhZHk6IGNvbG9yTm90UmVhZHksXG4gICAgICAgICAgcmVhZHk6IGNvbG9yUmVhZHksXG4gICAgICAgICAgZGV0ZWN0X2ZhaWxlZDogY29sb3JEZXRlY3RGYWlsZWQsXG4gICAgICAgICAgZGV0ZWN0X3N1Y2Nlc3M6IGNvbG9yRGV0ZWN0U3VjY2VzcyxcbiAgICAgICAgICBvY3JfcmVjb2duaXplZDogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIG9jcl9mYWlsZWQ6IGNvbG9yRmFpbGVkLFxuICAgICAgICAgIG9jcl9zdWNjZXNzOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgbWFza19mcmFtZTogY29sb3JNYXNrRnJhbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkV4cGVuZFJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tZXhwZW5kLXJhdGlvJykudmFsdWU7XG5cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gcmVzb2x1dGlvbldpZHRoICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9IHJlc29sdXRpb25IZWlnaHQgKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI3R5cGUpIHtcbiAgICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRjYXJkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcImlkY2FyZFwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3Nwb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcInBhc3Nwb3J0XCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiYWxpZW5cIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy4jdHlwZSA9IFwiY3JlZGl0XCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRjYXJkLXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJpZGNhcmQtc3NhXCI7XG4gICAgICAgIHRoaXMuI29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI3R5cGUgPSBcInBhc3Nwb3J0LXNzYVwiO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsaWVuLXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLiN0eXBlID0gXCJhbGllbi1zc2FcIjtcbiAgICAgICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuI3R5cGUgPSBcImNyZWRpdC1zc2FcIjtcbiAgICAgIC8vICAgdGhpcy4jb25DbGlja1N0YXJ0KCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRfYnRuJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICB0aGlzLiNvbkNsaWNrUmVzdGFydCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gICNvbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy4jc2V0QWN0aXZlQnV0dG9uKHRoaXMuI3R5cGUpO1xuICAgIHRoaXMuI29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuI3R5cGUsIHRoaXMuI3NldHRpbmdzKTtcbiAgfVxuXG4gICNvbkNsaWNrUmVzdGFydCgpIHtcbiAgICB0aGlzLiNvbkNsaWNrUmVzdGFydENhbGxiYWNrKCk7XG4gIH1cblxuICAjc2V0QWN0aXZlQnV0dG9uKHR5cGUpIHtcbiAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gICNzYXZlU2V0dGluZ3NIYW5kbGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJylcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSVNpbXVsYXRvcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRO0FBQUMsSUFBQUMscUJBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyx1QkFBQSxvQkFBQUQsT0FBQTtBQUFB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
