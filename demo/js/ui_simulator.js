function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var instance;
class UISimulator {
  /** private properties */

  /** constructor */
  constructor(onClickStartCallback, onClickRestartCallback) {
    _defineProperty(this, "__onClickStartCallback", void 0);
    _defineProperty(this, "__onClickRestartCallback", void 0);
    _defineProperty(this, "__type", void 0);
    _defineProperty(this, "__settings", {});
    if (!!!onClickStartCallback || !!!onClickRestartCallback) {
      throw new Error('onClick callback function parameter is not exist');
    }
    if (instance) return instance;
    instance = this;
    this.__onClickStartCallback = onClickStartCallback;
    this.__onClickRestartCallback = onClickRestartCallback;
    this.__bindEventListener();
    return instance;
  }
  __bindEventListener() {
    window.onload = () => {
      document.querySelectorAll('.settings-section input').forEach(input => {
        input.addEventListener('keyup', this.__saveSettingsHandler);
        input.addEventListener('change', this.__saveSettingsHandler);
      });
      var collapsedToggle = function collapsedToggle(event) {
        var _event$target$id;
        var toggleElement = (_event$target$id = event.target.id) !== null && _event$target$id !== void 0 && _event$target$id.includes('toggle') ? event.target : event.target.parentElement;
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
        this.__settings.ssaMaxRetryCount = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value);
        this.__saveSettingsHandler();
      });
      var toggleCustomUI = (position, event) => {
        switch (position) {
          case 'top':
            this.__settings.useTopUI = event.target.checked;
            break;
          case 'middle':
            this.__settings.useMiddleUI = event.target.checked;
            break;
          case 'bottom':
            this.__settings.useBottomUI = event.target.checked;
            break;
          case 'preview':
            this.__settings.usePreviewUI = event.target.checked;
            break;
          case 'capture':
            this.__settings.useCaptureUI = event.target.checked;
            break;
        }
        var text = document.getElementById("use-".concat(position, "-ui-text-msg"));
        if (!event.target.checked && text !== null && text !== void 0 && text.checked) {
          text.click();
        }
        this.__saveSettingsHandler();
      };
      var toggleCustomUITextMsg = (position, event) => {
        switch (position) {
          case 'top':
            this.__settings.useTopUITextMsg = event.target.checked;
            break;
          case 'middle':
            this.__settings.useMiddleUITextMsg = event.target.checked;
            break;
          case 'bottom':
            this.__settings.useBottomUITextMsg = event.target.checked;
            break;
        }
        var ui = document.getElementById("use-".concat(position, "-ui"));
        if (event.target.checked && !ui.checked) {
          ui.click();
        }
        this.__saveSettingsHandler();
      };
      document.getElementById('use-top-ui').addEventListener('change', e => {
        toggleCustomUI('top', e);
      });
      document.getElementById('use-top-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('top', e);
      });
      document.getElementById('use-middle-ui').addEventListener('change', e => {
        toggleCustomUI('middle', e);
      });
      document.getElementById('use-middle-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('middle', e);
      });
      document.getElementById('use-bottom-ui').addEventListener('change', e => {
        toggleCustomUI('bottom', e);
      });
      document.getElementById('use-bottom-ui-text-msg').addEventListener('change', e => {
        toggleCustomUITextMsg('bottom', e);
      });
      document.getElementById('use-preview-ui').addEventListener('change', e => {
        toggleCustomUI('preview', e);
      });
      document.getElementById('use-capture-ui').addEventListener('change', e => {
        toggleCustomUI('capture', e);
      });
      document.getElementById('use-encrypt-mode').addEventListener('change', e => {
        this.__settings.useEncryptMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-legacy-format').addEventListener('change', e => {
        this.__settings.useLegacyFormat = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('mirror-mode').addEventListener('change', e => {
        this.__settings.mirrorMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('rotation-degree').addEventListener('change', e => {
        this.__settings.rotationDegree = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('show-clipboard').addEventListener('change', e => {
        this.__settings.showClipFrame = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('show-canvas-preview').addEventListener('change', e => {
        this.__settings.showCanvasPreview = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('resolution-template').addEventListener('change', () => {
        if (document.getElementById('resolution-template').value === 'custom') {
          document.getElementById('resolution-custom').style.display = 'block';
        } else if (document.getElementById('resolution-template').value === 'responsive') {
          document.getElementById('resolution-custom').style.display = 'none';
        } else {
          document.getElementById('resolution-custom').style.display = 'none';
          var source = document.getElementById('resolution-template').value.split('x');
          var target = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
          [target[0].value, target[1].value] = [source[0], source[1]];
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('use-mask-frame-color-change').addEventListener('change', e => {
        this.__settings.useMaskFrameColorChange = e.target.checked;
        if (e.target.checked) {
          document.getElementById('mask-frame-color-default').style.display = 'none';
          document.getElementById('mask-frame-color-custom').style.display = 'block';
        } else {
          document.getElementById('mask-frame-color-default').style.display = 'block';
          document.getElementById('mask-frame-color-custom').style.display = 'none';
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('resolution-reverse-button').addEventListener('click', () => {
        var arr = [document.getElementById('resolution-width'), document.getElementById('resolution-height')];
        [arr[0].value, arr[1].value] = [arr[1].value, arr[0].value]; // swap
        this.__saveSettingsHandler();
      });
      document.getElementById('save-settings').addEventListener('click', event => {
        var target = document.getElementById('save-settings');
        target.setAttribute('disabled', 'disabled');
        target.querySelector('span').textContent = '설정 적용됨';
        target.querySelector('i').style.display = 'inline-block';
        target.querySelector('i').style.color = '#5cb85c';

        // 인식 프레임 스타일
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
        this.__settings.frameBorderStyle = _objectSpread(_objectSpread({}, this.__settings.frameBorderStyle), {}, {
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
          ocr_success_with_ssa: colorSuccess
        });

        // 마스킹 프레임 스타일
        var maskFrameColorNotReady = document.getElementById('mask-frame-color-not-ready').value;
        var maskFrameColorReady = document.getElementById('mask-frame-color-ready').value;
        var maskFrameColorDetectSuccess = document.getElementById('mask-frame-color-detect-success').value;
        var maskFrameColorDetectFailed = document.getElementById('mask-frame-color-detect-failed').value;
        var maskFrameColorOCRRecognized = document.getElementById('mask-frame-color-ocr-recognized').value;
        var maskFrameColorSuccess = document.getElementById('mask-frame-color-success').value;
        var maskFrameColorFailed = document.getElementById('mask-frame-color-failed').value;
        var maskFrameColorBaseColor = document.getElementById('mask-frame-color-base-color').value;
        this.__settings.maskFrameStyle = _objectSpread(_objectSpread({}, this.__settings.maskFrameStyle), {}, {
          base_color: maskFrameColorBaseColor,
          not_ready: maskFrameColorNotReady,
          ready: maskFrameColorReady,
          detect_failed: maskFrameColorDetectFailed,
          detect_success: maskFrameColorDetectSuccess,
          recognized: maskFrameColorOCRRecognized,
          recognized_with_ssa: maskFrameColorOCRRecognized,
          ocr_failed: maskFrameColorFailed,
          ocr_success: maskFrameColorSuccess,
          ocr_success_with_ssa: maskFrameColorSuccess
        });
        if (document.getElementById('resolution-template').value === 'responsive') {
          document.getElementById('resolution-simulation-iframe').style.width = '';
          document.getElementById('resolution-simulation-iframe').style.height = '';
        } else {
          var resolutionWidth = document.getElementById('resolution-width').value;
          var resolutionHeight = document.getElementById('resolution-height').value;
          var resolutionExpendRatio = document.getElementById('resolution-expend-ratio').value;
          document.getElementById('resolution-simulation-iframe').style.width = resolutionWidth * resolutionExpendRatio + 'px';
          document.getElementById('resolution-simulation-iframe').style.height = resolutionHeight * resolutionExpendRatio + 'px';
        }
        if (this.__type) {
          this.__onClickStart();
        }
      });
      document.getElementById('idcard').addEventListener('click', () => {
        this.__type = 'idcard';
        this.__onClickStart();
      });
      document.getElementById('passport').addEventListener('click', () => {
        this.__type = 'passport';
        this.__onClickStart();
      });
      document.getElementById('alien').addEventListener('click', () => {
        this.__type = 'alien';
        this.__onClickStart();
      });
      document.getElementById('credit').addEventListener('click', () => {
        this.__type = 'credit';
        this.__onClickStart();
      });
      document.getElementById('idcard-ssa').addEventListener('click', () => {
        this.__type = 'idcard-ssa';
        this.__onClickStart();
      });
      document.getElementById('passport-ssa').addEventListener('click', () => {
        this.__type = 'passport-ssa';
        this.__onClickStart();
      });
      document.getElementById('alien-ssa').addEventListener('click', () => {
        this.__type = 'alien-ssa';
        this.__onClickStart();
      });
      document.getElementById('restart_btn').addEventListener('click', () => {
        this.__onClickRestart();
      });
    };
  }
  __onClickStart() {
    this.__setActiveButton(this.__type);
    this.__onClickStartCallback(this.__type, this.__settings);
  }
  __onClickRestart() {
    this.__onClickRestartCallback();
  }
  __setActiveButton(type) {
    this.resetButton();
    document.getElementById(type).classList.add('active');
  }
  resetButton() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  }
  __saveSettingsHandler() {
    var button = document.getElementById('save-settings');
    button.removeAttribute('disabled');
    button.querySelector('.fa-check').style.display = 'none';
    button.querySelector('span').textContent = '설정적용';
  }
}
export default UISimulator;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwidGV4dCIsImNvbmNhdCIsImNsaWNrIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidWkiLCJ1c2VFbmNyeXB0TW9kZSIsInVzZUxlZ2FjeUZvcm1hdCIsIm1pcnJvck1vZGUiLCJyb3RhdGlvbkRlZ3JlZSIsInNob3dDbGlwRnJhbWUiLCJzaG93Q2FudmFzUHJldmlldyIsInN0eWxlIiwiZGlzcGxheSIsInNvdXJjZSIsInNwbGl0IiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJhcnIiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJmcmFtZUJvcmRlclN0eWxlIiwiX29iamVjdFNwcmVhZCIsIndpZHRoIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwibWFza0ZyYW1lQ29sb3JOb3RSZWFkeSIsIm1hc2tGcmFtZUNvbG9yUmVhZHkiLCJtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MiLCJtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCIsIm1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCIsIm1hc2tGcmFtZUNvbG9yU3VjY2VzcyIsIm1hc2tGcmFtZUNvbG9yRmFpbGVkIiwibWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IiLCJtYXNrRnJhbWVTdHlsZSIsImJhc2VfY29sb3IiLCJoZWlnaHQiLCJyZXNvbHV0aW9uV2lkdGgiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbkV4cGVuZFJhdGlvIiwiX190eXBlIiwiX19vbkNsaWNrU3RhcnQiLCJfX29uQ2xpY2tSZXN0YXJ0IiwiX19zZXRBY3RpdmVCdXR0b24iLCJ0eXBlIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZXMiOlsianMvdWlfc2ltdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpbnN0YW5jZTtcbmNsYXNzIFVJU2ltdWxhdG9yIHtcbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX29uQ2xpY2tTdGFydENhbGxiYWNrO1xuICBfX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gIF9fdHlwZTtcbiAgX19zZXR0aW5ncyA9IHt9O1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcihvbkNsaWNrU3RhcnRDYWxsYmFjaywgb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgIGlmICghISFvbkNsaWNrU3RhcnRDYWxsYmFjayB8fCAhISFvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29uQ2xpY2sgY2FsbGJhY2sgZnVuY3Rpb24gcGFyYW1ldGVyIGlzIG5vdCBleGlzdCcpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UpIHJldHVybiBpbnN0YW5jZTtcbiAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5fX29uQ2xpY2tTdGFydENhbGxiYWNrID0gb25DbGlja1N0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICAgIHRoaXMuX19iaW5kRXZlbnRMaXN0ZW5lcigpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuICBfX2JpbmRFdmVudExpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3Mtc2VjdGlvbiBpbnB1dCcpLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb2xsYXBzZWRUb2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZD8uaW5jbHVkZXMoJ3RvZ2dsZScpID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0b2dnbGVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdG9nZ2xlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGNoZXZyb24gPSB0b2dnbGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGV2cm9uJyk7XG4gICAgICAgIC8vIGNvbnN0IHNldHRpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIC8vIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICcgc3BhbicpXG4gICAgICAgIC8vIGNvbnN0IGNoZXZyb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yICsgJyAuY2hldnJvbicpXG4gICAgICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi11cCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LmFkZCgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnW+ygkeq4sF0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jaGV2cm9uLWRvd24nKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdb7Y687LmY6riwXSc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxhcHNlZFRvZ2dsZSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYXBzZWRUb2dnbGUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NzYS1tYXgtcmV0cnktY291bnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNzYU1heFJldHJ5Q291bnQgPSBpc05hTihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpID8gMCA6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUkgPSAocG9zaXRpb24sIGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVRvcFVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcmV2aWV3JzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VQcmV2aWV3VUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhcHR1cmUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUNhcHR1cmVVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1c2UtJHtwb3NpdGlvbn0tdWktdGV4dC1tc2dgKTtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCAmJiB0ZXh0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGV4dC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VUb3BVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWlkZGxlVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdWkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpYCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCAmJiAhdWkuY2hlY2tlZCkge1xuICAgICAgICAgIHVpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXRvcC11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtdG9wLXVpLXRleHQtbXNnJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWlkZGxlLXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1taWRkbGUtdWktdGV4dC1tc2cnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1ib3R0b20tdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWJvdHRvbS11aS10ZXh0LW1zZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXByZXZpZXctdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3ByZXZpZXcnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1jYXB0dXJlLXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdjYXB0dXJlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VFbmNyeXB0TW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbGVnYWN5LWZvcm1hdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTGVnYWN5Rm9ybWF0ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pcnJvci1tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5taXJyb3JNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Mucm90YXRpb25EZWdyZWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctY2xpcGJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zaG93Q2xpcEZyYW1lID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctY2FudmFzLXByZXZpZXcnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNob3dDYW52YXNQcmV2aWV3ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlLnNwbGl0KCd4Jyk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgICBbdGFyZ2V0WzBdLnZhbHVlLCB0YXJnZXRbMV0udmFsdWVdID0gW3NvdXJjZVswXSwgc291cmNlWzFdXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLW1hc2stZnJhbWUtY29sb3ItY2hhbmdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNYXNrRnJhbWVDb2xvckNoYW5nZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGVmYXVsdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGVmYXVsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tcmV2ZXJzZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgW2FyclswXS52YWx1ZSwgYXJyWzFdLnZhbHVlXSA9IFthcnJbMV0udmFsdWUsIGFyclswXS52YWx1ZV07IC8vIHN3YXBcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJUg7KCB7Jqp65CoJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuY29sb3IgPSAnIzVjYjg1Yyc7XG5cbiAgICAgICAgLy8g7J247IudIO2UhOugiOyehCDsiqTtg4DsnbxcbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXdpZHRoJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvcmRlci1zdHlsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBib3JkZXJSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXJhZGl1cycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvck5vdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0U3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3Qtc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckRldGVjdEZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1vY3ItcmVjb2duaXplZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvclN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3VjY2VzcycpLnZhbHVlO1xuICAgICAgICBjb25zdCBjb2xvckZhaWxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLmZyYW1lQm9yZGVyU3R5bGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5fX3NldHRpbmdzLmZyYW1lQm9yZGVyU3R5bGUsXG4gICAgICAgICAgd2lkdGg6IGJvcmRlcldpZHRoLFxuICAgICAgICAgIHN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICBub3RfcmVhZHk6IGNvbG9yTm90UmVhZHksXG4gICAgICAgICAgcmVhZHk6IGNvbG9yUmVhZHksXG4gICAgICAgICAgZGV0ZWN0X2ZhaWxlZDogY29sb3JEZXRlY3RGYWlsZWQsXG4gICAgICAgICAgZGV0ZWN0X3N1Y2Nlc3M6IGNvbG9yRGV0ZWN0U3VjY2VzcyxcbiAgICAgICAgICByZWNvZ25pemVkOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgcmVjb2duaXplZF93aXRoX3NzYTogY29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIG9jcl9mYWlsZWQ6IGNvbG9yRmFpbGVkLFxuICAgICAgICAgIG9jcl9zdWNjZXNzOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3Nfd2l0aF9zc2E6IGNvbG9yU3VjY2Vzc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOuniOyKpO2CuSDtlITroIjsnoQg7Iqk7YOA7J28XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1ub3QtcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yRGV0ZWN0U3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGV0ZWN0LWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvck9DUlJlY29nbml6ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1vY3ItcmVjb2duaXplZCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvclN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yQmFzZUNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItYmFzZS1jb2xvcicpLnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MubWFza0ZyYW1lU3R5bGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5fX3NldHRpbmdzLm1hc2tGcmFtZVN0eWxlLFxuICAgICAgICAgIGJhc2VfY29sb3I6IG1hc2tGcmFtZUNvbG9yQmFzZUNvbG9yLFxuICAgICAgICAgIG5vdF9yZWFkeTogbWFza0ZyYW1lQ29sb3JOb3RSZWFkeSxcbiAgICAgICAgICByZWFkeTogbWFza0ZyYW1lQ29sb3JSZWFkeSxcbiAgICAgICAgICBkZXRlY3RfZmFpbGVkOiBtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCxcbiAgICAgICAgICBkZXRlY3Rfc3VjY2VzczogbWFza0ZyYW1lQ29sb3JEZXRlY3RTdWNjZXNzLFxuICAgICAgICAgIHJlY29nbml6ZWQ6IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiBtYXNrRnJhbWVDb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgb2NyX2ZhaWxlZDogbWFza0ZyYW1lQ29sb3JGYWlsZWQsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3M6IG1hc2tGcmFtZUNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogbWFza0ZyYW1lQ29sb3JTdWNjZXNzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25IZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uRXhwZW5kUmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1leHBlbmQtcmF0aW8nKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLndpZHRoID0gcmVzb2x1dGlvbldpZHRoICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9IHJlc29sdXRpb25IZWlnaHQgKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fdHlwZSkge1xuICAgICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRjYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2lkY2FyZCc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3Nwb3J0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ3Bhc3Nwb3J0JztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxpZW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnYWxpZW4nO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVkaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnY3JlZGl0JztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWRjYXJkLXNzYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdpZGNhcmQtc3NhJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3BvcnQtc3NhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ3Bhc3Nwb3J0LXNzYSc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsaWVuLXNzYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdhbGllbi1zc2EnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0X2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgX19vbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy5fX3NldEFjdGl2ZUJ1dHRvbih0aGlzLl9fdHlwZSk7XG4gICAgdGhpcy5fX29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuX190eXBlLCB0aGlzLl9fc2V0dGluZ3MpO1xuICB9XG4gIF9fb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2soKTtcbiAgfVxuICBfX3NldEFjdGl2ZUJ1dHRvbih0eXBlKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBfX3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVE7QUFDWixNQUFNQyxXQUFXLENBQUM7RUFDaEI7O0VBTUE7RUFDQUMsV0FBV0EsQ0FBQ0Msb0JBQW9CLEVBQUVDLHNCQUFzQixFQUFFO0lBQUFDLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEscUJBSDdDLENBQUMsQ0FBQztJQUliLElBQUksQ0FBQyxDQUFDLENBQUNGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDQyxzQkFBc0IsRUFBRTtNQUN4RCxNQUFNLElBQUlFLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztJQUNyRTtJQUNBLElBQUlOLFFBQVEsRUFBRSxPQUFPQSxRQUFRO0lBQzdCQSxRQUFRLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBQ08sc0JBQXNCLEdBQUdKLG9CQUFvQjtJQUNsRCxJQUFJLENBQUNLLHdCQUF3QixHQUFHSixzQkFBc0I7SUFDdEQsSUFBSSxDQUFDSyxtQkFBbUIsRUFBRTtJQUMxQixPQUFPVCxRQUFRO0VBQ2pCO0VBQ0FTLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ3BCQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxNQUFNO01BQ3BCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1FBQ3BFQSxLQUFLLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDO1FBQzNERixLQUFLLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDO01BQzlELENBQUMsQ0FBQztNQUNGLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBYUMsS0FBSyxFQUFFO1FBQUEsSUFBQUMsZ0JBQUE7UUFDdkMsSUFBTUMsYUFBYSxHQUFHLENBQUFELGdCQUFBLEdBQUFELEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLGNBQUFILGdCQUFBLGVBQWZBLGdCQUFBLENBQWlCSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUdMLEtBQUssQ0FBQ0csTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0csYUFBYTtRQUNyRyxJQUFNQyxPQUFPLEdBQUdMLGFBQWEsQ0FBQ0ksYUFBYTtRQUMzQyxJQUFNRSxLQUFLLEdBQUdOLGFBQWEsQ0FBQ08sYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqRCxJQUFNQyxPQUFPLEdBQUdSLGFBQWEsQ0FBQ08sYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN2RDtRQUNBO1FBQ0E7UUFDQSxJQUFJRixPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1VBQzNDTCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFdBQVcsQ0FBQztVQUNyQ0gsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7VUFDekNILE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7VUFDeENOLEtBQUssQ0FBQ08sV0FBVyxHQUFHLE1BQU07UUFDNUIsQ0FBQyxNQUFNO1VBQ0xSLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDO1VBQ2xDSixPQUFPLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1VBQzNDSCxPQUFPLENBQUNDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQztVQUN0Q04sS0FBSyxDQUFDTyxXQUFXLEdBQUcsT0FBTztRQUM3QjtNQUNGLENBQUM7TUFDRHRCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRUUsZUFBZSxDQUFDO01BQ2pGTixRQUFRLENBQUN1QixjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRUUsZUFBZSxDQUFDO01BQ3JGTixRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUM3RSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsZ0JBQWdCLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSixDQUFDLENBQUNkLE1BQU0sQ0FBQ21CLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHRCxRQUFRLENBQUNKLENBQUMsQ0FBQ2QsTUFBTSxDQUFDbUIsS0FBSyxDQUFDO1FBQ2pHLElBQUksQ0FBQ3hCLHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGLElBQU15QixjQUFjLEdBQUdBLENBQUNDLFFBQVEsRUFBRXhCLEtBQUssS0FBSztRQUMxQyxRQUFRd0IsUUFBUTtVQUNkLEtBQUssS0FBSztZQUNSLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxRQUFRLEdBQUd6QixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDL0M7VUFDRixLQUFLLFFBQVE7WUFDWCxJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsV0FBVyxHQUFHM0IsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPO1lBQ2xEO1VBQ0YsS0FBSyxRQUFRO1lBQ1gsSUFBSSxDQUFDUixVQUFVLENBQUNVLFdBQVcsR0FBRzVCLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTztZQUNsRDtVQUNGLEtBQUssU0FBUztZQUNaLElBQUksQ0FBQ1IsVUFBVSxDQUFDVyxZQUFZLEdBQUc3QixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDbkQ7VUFDRixLQUFLLFNBQVM7WUFDWixJQUFJLENBQUNSLFVBQVUsQ0FBQ1ksWUFBWSxHQUFHOUIsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPO1lBQ25EO1FBQU07UUFFVixJQUFNSyxJQUFJLEdBQUd0QyxRQUFRLENBQUN1QixjQUFjLFFBQUFnQixNQUFBLENBQVFSLFFBQVEsa0JBQWU7UUFDbkUsSUFBSSxDQUFDeEIsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPLElBQUlLLElBQUksYUFBSkEsSUFBSSxlQUFKQSxJQUFJLENBQUVMLE9BQU8sRUFBRTtVQUMxQ0ssSUFBSSxDQUFDRSxLQUFLLEVBQUU7UUFDZDtRQUNBLElBQUksQ0FBQ25DLHFCQUFxQixFQUFFO01BQzlCLENBQUM7TUFDRCxJQUFNb0MscUJBQXFCLEdBQUdBLENBQUNWLFFBQVEsRUFBRXhCLEtBQUssS0FBSztRQUNqRCxRQUFRd0IsUUFBUTtVQUNkLEtBQUssS0FBSztZQUNSLElBQUksQ0FBQ04sVUFBVSxDQUFDaUIsZUFBZSxHQUFHbkMsS0FBSyxDQUFDRyxNQUFNLENBQUN1QixPQUFPO1lBQ3REO1VBQ0YsS0FBSyxRQUFRO1lBQ1gsSUFBSSxDQUFDUixVQUFVLENBQUNrQixrQkFBa0IsR0FBR3BDLEtBQUssQ0FBQ0csTUFBTSxDQUFDdUIsT0FBTztZQUN6RDtVQUNGLEtBQUssUUFBUTtZQUNYLElBQUksQ0FBQ1IsVUFBVSxDQUFDbUIsa0JBQWtCLEdBQUdyQyxLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU87WUFDekQ7UUFBTTtRQUVWLElBQU1ZLEVBQUUsR0FBRzdDLFFBQVEsQ0FBQ3VCLGNBQWMsUUFBQWdCLE1BQUEsQ0FBUVIsUUFBUSxTQUFNO1FBQ3hELElBQUl4QixLQUFLLENBQUNHLE1BQU0sQ0FBQ3VCLE9BQU8sSUFBSSxDQUFDWSxFQUFFLENBQUNaLE9BQU8sRUFBRTtVQUN2Q1ksRUFBRSxDQUFDTCxLQUFLLEVBQUU7UUFDWjtRQUNBLElBQUksQ0FBQ25DLHFCQUFxQixFQUFFO01BQzlCLENBQUM7TUFDREwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3BFTSxjQUFjLENBQUMsS0FBSyxFQUFFTixDQUFDLENBQUM7TUFDMUIsQ0FBQyxDQUFDO01BQ0Z4QixRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUM3RWlCLHFCQUFxQixDQUFDLEtBQUssRUFBRWpCLENBQUMsQ0FBQztNQUNqQyxDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUN2RU0sY0FBYyxDQUFDLFFBQVEsRUFBRU4sQ0FBQyxDQUFDO01BQzdCLENBQUMsQ0FBQztNQUNGeEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDaEZpQixxQkFBcUIsQ0FBQyxRQUFRLEVBQUVqQixDQUFDLENBQUM7TUFDcEMsQ0FBQyxDQUFDO01BQ0Z4QixRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDdkVNLGNBQWMsQ0FBQyxRQUFRLEVBQUVOLENBQUMsQ0FBQztNQUM3QixDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ2hGaUIscUJBQXFCLENBQUMsUUFBUSxFQUFFakIsQ0FBQyxDQUFDO01BQ3BDLENBQUMsQ0FBQztNQUNGeEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDeEVNLGNBQWMsQ0FBQyxTQUFTLEVBQUVOLENBQUMsQ0FBQztNQUM5QixDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3hFTSxjQUFjLENBQUMsU0FBUyxFQUFFTixDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDO01BQ0Z4QixRQUFRLENBQUN1QixjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUMxRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ3FCLGNBQWMsR0FBR3RCLENBQUMsQ0FBQ2QsTUFBTSxDQUFDdUIsT0FBTztRQUNqRCxJQUFJLENBQUM1QixxQkFBcUIsRUFBRTtNQUM5QixDQUFDLENBQUM7TUFDRkwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDM0UsSUFBSSxDQUFDQyxVQUFVLENBQUNzQixlQUFlLEdBQUd2QixDQUFDLENBQUNkLE1BQU0sQ0FBQ3VCLE9BQU87UUFDbEQsSUFBSSxDQUFDNUIscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUNyRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ3VCLFVBQVUsR0FBR3hCLENBQUMsQ0FBQ2QsTUFBTSxDQUFDdUIsT0FBTztRQUM3QyxJQUFJLENBQUM1QixxQkFBcUIsRUFBRTtNQUM5QixDQUFDLENBQUM7TUFDRkwsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVvQixDQUFDLElBQUk7UUFDekUsSUFBSSxDQUFDQyxVQUFVLENBQUN3QixjQUFjLEdBQUd6QixDQUFDLENBQUNkLE1BQU0sQ0FBQ21CLEtBQUs7UUFDL0MsSUFBSSxDQUFDeEIscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFb0IsQ0FBQyxJQUFJO1FBQ3hFLElBQUksQ0FBQ0MsVUFBVSxDQUFDeUIsYUFBYSxHQUFHMUIsQ0FBQyxDQUFDZCxNQUFNLENBQUN1QixPQUFPO1FBQ2hELElBQUksQ0FBQzVCLHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGTCxRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUM3RSxJQUFJLENBQUNDLFVBQVUsQ0FBQzBCLGlCQUFpQixHQUFHM0IsQ0FBQyxDQUFDZCxNQUFNLENBQUN1QixPQUFPO1FBQ3BELElBQUksQ0FBQzVCLHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGTCxRQUFRLENBQUN1QixjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNO1FBQzlFLElBQUlKLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDTSxLQUFLLEtBQUssUUFBUSxFQUFFO1VBQ3JFN0IsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM2QixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1FBQ3RFLENBQUMsTUFBTSxJQUFJckQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUNNLEtBQUssS0FBSyxZQUFZLEVBQUU7VUFDaEY3QixRQUFRLENBQUN1QixjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07UUFDckUsQ0FBQyxNQUFNO1VBQ0xyRCxRQUFRLENBQUN1QixjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzZCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFDbkUsSUFBTUMsTUFBTSxHQUFHdEQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUNNLEtBQUssQ0FBQzBCLEtBQUssQ0FBQyxHQUFHLENBQUM7VUFDOUUsSUFBTTdDLE1BQU0sR0FBRyxDQUFDVixRQUFRLENBQUN1QixjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBRXZCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1VBQzFHLENBQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ21CLEtBQUssRUFBRW5CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ21CLEtBQUssQ0FBQyxHQUFHLENBQUN5QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RDtRQUNBLElBQUksQ0FBQ2pELHFCQUFxQixFQUFFO01BQzlCLENBQUMsQ0FBQztNQUNGTCxRQUFRLENBQUN1QixjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRW9CLENBQUMsSUFBSTtRQUNyRixJQUFJLENBQUNDLFVBQVUsQ0FBQytCLHVCQUF1QixHQUFHaEMsQ0FBQyxDQUFDZCxNQUFNLENBQUN1QixPQUFPO1FBQzFELElBQUlULENBQUMsQ0FBQ2QsTUFBTSxDQUFDdUIsT0FBTyxFQUFFO1VBQ3BCakMsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDBCQUEwQixDQUFDLENBQUM2QixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1VBQzFFckQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM2QixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1FBQzVFLENBQUMsTUFBTTtVQUNMckQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDBCQUEwQixDQUFDLENBQUM2QixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1VBQzNFckQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM2QixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQzNFO1FBQ0EsSUFBSSxDQUFDaEQscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDbkYsSUFBTXFELEdBQUcsR0FBRyxDQUFDekQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUV2QixRQUFRLENBQUN1QixjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2RyxDQUFDa0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsS0FBSyxFQUFFNEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQzRCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEtBQUssRUFBRTRCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzVCLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDeEIscUJBQXFCLEVBQUU7TUFDOUIsQ0FBQyxDQUFDO01BQ0ZMLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRUcsS0FBSyxJQUFJO1FBQzFFLElBQU1HLE1BQU0sR0FBR1YsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGVBQWUsQ0FBQztRQUN2RGIsTUFBTSxDQUFDZ0QsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDM0NoRCxNQUFNLENBQUNNLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ00sV0FBVyxHQUFHLFFBQVE7UUFDbkRaLE1BQU0sQ0FBQ00sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDb0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsY0FBYztRQUN4RDNDLE1BQU0sQ0FBQ00sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDb0MsS0FBSyxDQUFDTyxLQUFLLEdBQUcsU0FBUzs7UUFFakQ7UUFDQSxJQUFNQyxXQUFXLEdBQUc1RCxRQUFRLENBQUN1QixjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNNLEtBQUs7UUFDakUsSUFBTWdDLFdBQVcsR0FBRzdELFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ00sS0FBSztRQUNqRSxJQUFNaUMsWUFBWSxHQUFHOUQsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDTSxLQUFLO1FBQ25FLElBQU1rQyxhQUFhLEdBQUcvRCxRQUFRLENBQUN1QixjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ00sS0FBSztRQUN0RSxJQUFNbUMsVUFBVSxHQUFHaEUsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDTSxLQUFLO1FBQy9ELElBQU1vQyxrQkFBa0IsR0FBR2pFLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDTSxLQUFLO1FBQ2hGLElBQU1xQyxpQkFBaUIsR0FBR2xFLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDTSxLQUFLO1FBQzlFLElBQU1zQyxrQkFBa0IsR0FBR25FLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDTSxLQUFLO1FBQ2hGLElBQU11QyxZQUFZLEdBQUdwRSxRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNNLEtBQUs7UUFDbkUsSUFBTXdDLFdBQVcsR0FBR3JFLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ00sS0FBSztRQUNqRSxJQUFJLENBQUNKLFVBQVUsQ0FBQzZDLGdCQUFnQixHQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDM0IsSUFBSSxDQUFDOUMsVUFBVSxDQUFDNkMsZ0JBQWdCO1VBQ25DRSxLQUFLLEVBQUVaLFdBQVc7VUFDbEJSLEtBQUssRUFBRVMsV0FBVztVQUNsQlksTUFBTSxFQUFFWCxZQUFZO1VBQ3BCWSxTQUFTLEVBQUVYLGFBQWE7VUFDeEJZLEtBQUssRUFBRVgsVUFBVTtVQUNqQlksYUFBYSxFQUFFVixpQkFBaUI7VUFDaENXLGNBQWMsRUFBRVosa0JBQWtCO1VBQ2xDYSxVQUFVLEVBQUVYLGtCQUFrQjtVQUM5QlksbUJBQW1CLEVBQUVaLGtCQUFrQjtVQUN2Q2EsVUFBVSxFQUFFWCxXQUFXO1VBQ3ZCWSxXQUFXLEVBQUViLFlBQVk7VUFDekJjLG9CQUFvQixFQUFFZDtRQUFZLEVBQ25DOztRQUVEO1FBQ0EsSUFBTWUsc0JBQXNCLEdBQUduRixRQUFRLENBQUN1QixjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQ00sS0FBSztRQUMxRixJQUFNdUQsbUJBQW1CLEdBQUdwRixRQUFRLENBQUN1QixjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQ00sS0FBSztRQUNuRixJQUFNd0QsMkJBQTJCLEdBQUdyRixRQUFRLENBQUN1QixjQUFjLENBQUMsaUNBQWlDLENBQUMsQ0FBQ00sS0FBSztRQUNwRyxJQUFNeUQsMEJBQTBCLEdBQUd0RixRQUFRLENBQUN1QixjQUFjLENBQUMsZ0NBQWdDLENBQUMsQ0FBQ00sS0FBSztRQUNsRyxJQUFNMEQsMkJBQTJCLEdBQUd2RixRQUFRLENBQUN1QixjQUFjLENBQUMsaUNBQWlDLENBQUMsQ0FBQ00sS0FBSztRQUNwRyxJQUFNMkQscUJBQXFCLEdBQUd4RixRQUFRLENBQUN1QixjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQ00sS0FBSztRQUN2RixJQUFNNEQsb0JBQW9CLEdBQUd6RixRQUFRLENBQUN1QixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQ00sS0FBSztRQUNyRixJQUFNNkQsdUJBQXVCLEdBQUcxRixRQUFRLENBQUN1QixjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQ00sS0FBSztRQUM1RixJQUFJLENBQUNKLFVBQVUsQ0FBQ2tFLGNBQWMsR0FBQXBCLGFBQUEsQ0FBQUEsYUFBQSxLQUN6QixJQUFJLENBQUM5QyxVQUFVLENBQUNrRSxjQUFjO1VBQ2pDQyxVQUFVLEVBQUVGLHVCQUF1QjtVQUNuQ2hCLFNBQVMsRUFBRVMsc0JBQXNCO1VBQ2pDUixLQUFLLEVBQUVTLG1CQUFtQjtVQUMxQlIsYUFBYSxFQUFFVSwwQkFBMEI7VUFDekNULGNBQWMsRUFBRVEsMkJBQTJCO1VBQzNDUCxVQUFVLEVBQUVTLDJCQUEyQjtVQUN2Q1IsbUJBQW1CLEVBQUVRLDJCQUEyQjtVQUNoRFAsVUFBVSxFQUFFUyxvQkFBb0I7VUFDaENSLFdBQVcsRUFBRU8scUJBQXFCO1VBQ2xDTixvQkFBb0IsRUFBRU07UUFBcUIsRUFDNUM7UUFDRCxJQUFJeEYsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUNNLEtBQUssS0FBSyxZQUFZLEVBQUU7VUFDekU3QixRQUFRLENBQUN1QixjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQzZCLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxFQUFFO1VBQ3hFeEUsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUM2QixLQUFLLENBQUN5QyxNQUFNLEdBQUcsRUFBRTtRQUMzRSxDQUFDLE1BQU07VUFDTCxJQUFNQyxlQUFlLEdBQUc5RixRQUFRLENBQUN1QixjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ00sS0FBSztVQUN6RSxJQUFNa0UsZ0JBQWdCLEdBQUcvRixRQUFRLENBQUN1QixjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQ00sS0FBSztVQUMzRSxJQUFNbUUscUJBQXFCLEdBQUdoRyxRQUFRLENBQUN1QixjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQ00sS0FBSztVQUN0RjdCLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDNkIsS0FBSyxDQUFDb0IsS0FBSyxHQUFHc0IsZUFBZSxHQUFHRSxxQkFBcUIsR0FBRyxJQUFJO1VBQ3BIaEcsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUM2QixLQUFLLENBQUN5QyxNQUFNLEdBQUdFLGdCQUFnQixHQUFHQyxxQkFBcUIsR0FBRyxJQUFJO1FBQ3hIO1FBQ0EsSUFBSSxJQUFJLENBQUNDLE1BQU0sRUFBRTtVQUNmLElBQUksQ0FBQ0MsY0FBYyxFQUFFO1FBQ3ZCO01BQ0YsQ0FBQyxDQUFDO01BQ0ZsRyxRQUFRLENBQUN1QixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNoRSxJQUFJLENBQUM2RixNQUFNLEdBQUcsUUFBUTtRQUN0QixJQUFJLENBQUNDLGNBQWMsRUFBRTtNQUN2QixDQUFDLENBQUM7TUFDRmxHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2xFLElBQUksQ0FBQzZGLE1BQU0sR0FBRyxVQUFVO1FBQ3hCLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLENBQUMsQ0FBQztNQUNGbEcsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0QsSUFBSSxDQUFDNkYsTUFBTSxHQUFHLE9BQU87UUFDckIsSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0ZsRyxRQUFRLENBQUN1QixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNoRSxJQUFJLENBQUM2RixNQUFNLEdBQUcsUUFBUTtRQUN0QixJQUFJLENBQUNDLGNBQWMsRUFBRTtNQUN2QixDQUFDLENBQUM7TUFDRmxHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3BFLElBQUksQ0FBQzZGLE1BQU0sR0FBRyxZQUFZO1FBQzFCLElBQUksQ0FBQ0MsY0FBYyxFQUFFO01BQ3ZCLENBQUMsQ0FBQztNQUNGbEcsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDdEUsSUFBSSxDQUFDNkYsTUFBTSxHQUFHLGNBQWM7UUFDNUIsSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDdkIsQ0FBQyxDQUFDO01BQ0ZsRyxRQUFRLENBQUN1QixjQUFjLENBQUMsV0FBVyxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNuRSxJQUFJLENBQUM2RixNQUFNLEdBQUcsV0FBVztRQUN6QixJQUFJLENBQUNDLGNBQWMsRUFBRTtNQUN2QixDQUFDLENBQUM7TUFDRmxHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ25CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3JFLElBQUksQ0FBQytGLGdCQUFnQixFQUFFO01BQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7RUFDSDtFQUNBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNFLGlCQUFpQixDQUFDLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0lBQ25DLElBQUksQ0FBQ3RHLHNCQUFzQixDQUFDLElBQUksQ0FBQ3NHLE1BQU0sRUFBRSxJQUFJLENBQUN4RSxVQUFVLENBQUM7RUFDM0Q7RUFDQTBFLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ3ZHLHdCQUF3QixFQUFFO0VBQ2pDO0VBQ0F3RyxpQkFBaUJBLENBQUNDLElBQUksRUFBRTtJQUN0QixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQnRHLFFBQVEsQ0FBQ3VCLGNBQWMsQ0FBQzhFLElBQUksQ0FBQyxDQUFDbkYsU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3ZEO0VBQ0FpRixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFNQyxPQUFPLEdBQUd2RyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuRHNHLE9BQU8sQ0FBQ3JHLE9BQU8sQ0FBQ3NHLE1BQU0sSUFBSTtNQUN4QkEsTUFBTSxDQUFDdEYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKO0VBQ0FmLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQ3RCLElBQU1tRyxNQUFNLEdBQUd4RyxRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3ZEaUYsTUFBTSxDQUFDQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xDRCxNQUFNLENBQUN4RixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNvQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3hEbUQsTUFBTSxDQUFDeEYsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDTSxXQUFXLEdBQUcsTUFBTTtFQUNuRDtBQUNGO0FBQ0EsZUFBZWpDLFdBQVcifQ==
