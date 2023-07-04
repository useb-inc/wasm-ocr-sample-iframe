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

      // document.getElementById("credit-ssa").addEventListener("click", () => {
      //   this.__type = "credit-ssa";
      //   this.__onClickStart();
      // });

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidXNlQ2FwdHVyZVVJIiwidGV4dCIsImNvbmNhdCIsImNsaWNrIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidWkiLCJtaXJyb3JNb2RlIiwicm90YXRpb25EZWdyZWUiLCJzaG93Q2xpcEZyYW1lIiwic2hvd0NhbnZhc1ByZXZpZXciLCJzdHlsZSIsImRpc3BsYXkiLCJzb3VyY2UiLCJzcGxpdCIsInVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlIiwiYXJyIiwic2V0QXR0cmlidXRlIiwiY29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JOb3RSZWFkeSIsImNvbG9yUmVhZHkiLCJjb2xvckRldGVjdFN1Y2Nlc3MiLCJjb2xvckRldGVjdEZhaWxlZCIsImNvbG9yT0NSUmVjb2duaXplZCIsImNvbG9yU3VjY2VzcyIsImNvbG9yRmFpbGVkIiwiZnJhbWVCb3JkZXJTdHlsZSIsIl9vYmplY3RTcHJlYWQiLCJ3aWR0aCIsInJhZGl1cyIsIm5vdF9yZWFkeSIsInJlYWR5IiwiZGV0ZWN0X2ZhaWxlZCIsImRldGVjdF9zdWNjZXNzIiwicmVjb2duaXplZCIsInJlY29nbml6ZWRfd2l0aF9zc2EiLCJvY3JfZmFpbGVkIiwib2NyX3N1Y2Nlc3MiLCJvY3Jfc3VjY2Vzc193aXRoX3NzYSIsIm1hc2tGcmFtZUNvbG9yTm90UmVhZHkiLCJtYXNrRnJhbWVDb2xvclJlYWR5IiwibWFza0ZyYW1lQ29sb3JEZXRlY3RTdWNjZXNzIiwibWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQiLCJtYXNrRnJhbWVDb2xvck9DUlJlY29nbml6ZWQiLCJtYXNrRnJhbWVDb2xvclN1Y2Nlc3MiLCJtYXNrRnJhbWVDb2xvckZhaWxlZCIsIm1hc2tGcmFtZUNvbG9yQmFzZUNvbG9yIiwibWFza0ZyYW1lU3R5bGUiLCJiYXNlX2NvbG9yIiwiaGVpZ2h0IiwicmVzb2x1dGlvbldpZHRoIiwicmVzb2x1dGlvbkhlaWdodCIsInJlc29sdXRpb25FeHBlbmRSYXRpbyIsIl9fdHlwZSIsIl9fb25DbGlja1N0YXJ0IiwiX19vbkNsaWNrUmVzdGFydCIsIl9fc2V0QWN0aXZlQnV0dG9uIiwidHlwZSIsInJlc2V0QnV0dG9uIiwiYnV0dG9ucyIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VzIjpbImpzL3VpX3NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5zdGFuY2U7XG5jbGFzcyBVSVNpbXVsYXRvciB7XG4gIC8qKiBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgX19vbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgX19vbkNsaWNrUmVzdGFydENhbGxiYWNrO1xuICBfX3R5cGU7XG4gIF9fc2V0dGluZ3MgPSB7fTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3Iob25DbGlja1N0YXJ0Q2FsbGJhY2ssIG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICBpZiAoISEhb25DbGlja1N0YXJ0Q2FsbGJhY2sgfHwgISEhb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbkNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBub3QgZXhpc3QnKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tTdGFydENhbGxiYWNrO1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrID0gb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLl9fYmluZEV2ZW50TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbiAgX19iaW5kRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzLXNlY3Rpb24gaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29sbGFwc2VkVG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSBldmVudC50YXJnZXQuaWQ/LmluY2x1ZGVzKCd0b2dnbGUnKSA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gdG9nZ2xlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICBjb25zdCBjaGV2cm9uID0gdG9nZ2xlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hldnJvbicpO1xuICAgICAgICAvLyBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAvLyBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIHNwYW4nKVxuICAgICAgICAvLyBjb25zdCBjaGV2cm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICcgLmNoZXZyb24nKVxuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vsoJHquLBdJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnW+2OvOy5mOq4sF0nO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYXBzZWRUb2dnbGUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtbWF4LXJldHJ5LWNvdW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zc2FNYXhSZXRyeUNvdW50ID0gaXNOYU4ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSA/IDAgOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VUb3BVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNaWRkbGVVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VCb3R0b21VSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJldmlldyc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUHJldmlld1VJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYXB0dXJlJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VDYXB0dXJlVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpLXRleHQtbXNnYCk7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgdGV4dD8uY2hlY2tlZCkge1xuICAgICAgICAgIHRleHQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJVGV4dE1zZyA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlVG9wVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VCb3R0b21VSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVzZS0ke3Bvc2l0aW9ufS11aWApO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgIXVpLmNoZWNrZWQpIHtcbiAgICAgICAgICB1aS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS10b3AtdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXRvcC11aS10ZXh0LW1zZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ3RvcCcsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLW1pZGRsZS11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWlkZGxlLXVpLXRleHQtbXNnJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtYm90dG9tLXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1ib3R0b20tdWktdGV4dC1tc2cnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1wcmV2aWV3LXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdwcmV2aWV3JywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtY2FwdHVyZS11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnY2FwdHVyZScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlycm9yLW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLm1pcnJvck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tZGVncmVlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5yb3RhdGlvbkRlZ3JlZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNob3dDbGlwRnJhbWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1jYW52YXMtcHJldmlldycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc2hvd0NhbnZhc1ByZXZpZXcgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUuc3BsaXQoJ3gnKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICAgIFt0YXJnZXRbMF0udmFsdWUsIHRhcmdldFsxXS52YWx1ZV0gPSBbc291cmNlWzBdLCBzb3VyY2VbMV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWFzay1mcmFtZS1jb2xvci1jaGFuZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZWZhdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZWZhdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1yZXZlcnNlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICBbYXJyWzBdLnZhbHVlLCBhcnJbMV0udmFsdWVdID0gW2FyclsxXS52YWx1ZSwgYXJyWzBdLnZhbHVlXTsgLy8gc3dhcFxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpO1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOyglSDsoIHsmqnrkKgnO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5jb2xvciA9ICcjNWNiODVjJztcblxuICAgICAgICAvLyDsnbjsi50g7ZSE66CI7J6EIOyKpO2DgOydvFxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItd2lkdGgnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXN0eWxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItcmFkaXVzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSxcbiAgICAgICAgICB3aWR0aDogYm9yZGVyV2lkdGgsXG4gICAgICAgICAgc3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgIHJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIG5vdF9yZWFkeTogY29sb3JOb3RSZWFkeSxcbiAgICAgICAgICByZWFkeTogY29sb3JSZWFkeSxcbiAgICAgICAgICBkZXRlY3RfZmFpbGVkOiBjb2xvckRldGVjdEZhaWxlZCxcbiAgICAgICAgICBkZXRlY3Rfc3VjY2VzczogY29sb3JEZXRlY3RTdWNjZXNzLFxuICAgICAgICAgIHJlY29nbml6ZWQ6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgb2NyX2ZhaWxlZDogY29sb3JGYWlsZWQsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3M6IGNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogY29sb3JTdWNjZXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g66eI7Iqk7YK5IO2UhOugiOyehCDsiqTtg4DsnbxcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1iYXNlLWNvbG9yJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5tYXNrRnJhbWVTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MubWFza0ZyYW1lU3R5bGUsXG4gICAgICAgICAgYmFzZV9jb2xvcjogbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IsXG4gICAgICAgICAgbm90X3JlYWR5OiBtYXNrRnJhbWVDb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBtYXNrRnJhbWVDb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IG1hc2tGcmFtZUNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBtYXNrRnJhbWVDb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogbWFza0ZyYW1lQ29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBtYXNrRnJhbWVDb2xvclN1Y2Nlc3NcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25XaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25FeHBlbmRSYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWV4cGVuZC1yYXRpbycpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSByZXNvbHV0aW9uV2lkdGggKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gcmVzb2x1dGlvbkhlaWdodCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX190eXBlKSB7XG4gICAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGNhcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnaWRjYXJkJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3BvcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAncGFzc3BvcnQnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGllbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdhbGllbic7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdjcmVkaXQnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGNhcmQtc3NhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2lkY2FyZC1zc2EnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzcG9ydC1zc2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAncGFzc3BvcnQtc3NhJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxpZW4tc3NhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2FsaWVuLXNzYSc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vICAgdGhpcy5fX3R5cGUgPSBcImNyZWRpdC1zc2FcIjtcbiAgICAgIC8vICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0X2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgX19vbkNsaWNrU3RhcnQoKSB7XG4gICAgdGhpcy5fX3NldEFjdGl2ZUJ1dHRvbih0aGlzLl9fdHlwZSk7XG4gICAgdGhpcy5fX29uQ2xpY2tTdGFydENhbGxiYWNrKHRoaXMuX190eXBlLCB0aGlzLl9fc2V0dGluZ3MpO1xuICB9XG4gIF9fb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2soKTtcbiAgfVxuICBfX3NldEFjdGl2ZUJ1dHRvbih0eXBlKSB7XG4gICAgdGhpcy5yZXNldEJ1dHRvbigpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuICBfX3NhdmVTZXR0aW5nc0hhbmRsZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtc2V0dGluZ3MnKTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtY2hlY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCV7KCB7JqpJztcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUlTaW11bGF0b3I7Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUlBLFFBQVE7QUFDWixNQUFNQyxXQUFXLENBQUM7RUFDaEI7O0VBTUE7RUFDQUMsV0FBV0EsQ0FBQ0Msb0JBQW9CLEVBQUVDLHNCQUFzQixFQUFFO0lBQUFDLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUEscUJBSDdDLENBQUMsQ0FBQztJQUliLElBQUksQ0FBQyxDQUFDLENBQUNGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDQyxzQkFBc0IsRUFBRTtNQUN4RCxNQUFNLElBQUlFLEtBQUssQ0FBQyxrREFBa0QsQ0FBQztJQUNyRTtJQUNBLElBQUlOLFFBQVEsRUFBRSxPQUFPQSxRQUFRO0lBQzdCQSxRQUFRLEdBQUcsSUFBSTtJQUNmLElBQUksQ0FBQ08sc0JBQXNCLEdBQUdKLG9CQUFvQjtJQUNsRCxJQUFJ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
