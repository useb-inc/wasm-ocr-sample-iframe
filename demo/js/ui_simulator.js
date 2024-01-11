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
    _defineProperty(this, "__settings", {
      ssaRetryType: 'ENSEMBLE'
    });
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
      var setSsaType = e => {
        this.__settings.ssaRetryType = e.target.value;
      };
      document.getElementById('ssa-type').querySelectorAll('input').forEach(el => {
        el.addEventListener('change', setSsaType);
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
      document.getElementById('use-force-complete-ui').addEventListener('change', e => {
        this.__settings.useForceCompleteUI = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-auto-switch').addEventListener('change', e => {
        this.__settings.useAutoSwitchToServerMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('switch-to-server-threshold').addEventListener('change', e => {
        this.__settings.switchToServerThreshold = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-manual-switch').addEventListener('change', e => {
        this.__settings.useManualSwitchToServerMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptAllMode = !e.target.checked;
          document.getElementById('use-encrypt-all-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'none';
        } else {
          document.getElementById('use-encrypt-all-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'block';
        }
        this.__settings.useEncryptMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-all-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptMode = !e.target.checked;
          document.getElementById('use-encrypt-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'none';
        } else {
          document.getElementById('use-encrypt-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-overall-mode-div').style.display = 'block';
        }
        this.__settings.useEncryptAllMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-encrypt-overall-mode').addEventListener('change', e => {
        if (e.target.checked) {
          this.__settings.useEncryptOverallMode = !e.target.checked;
          document.getElementById('use-encrypt-mode-div').style.display = 'none';
          document.getElementById('use-encrypt-all-mode-div').style.display = 'none';
        } else {
          document.getElementById('use-encrypt-mode-div').style.display = 'block';
          document.getElementById('use-encrypt-all-mode-div').style.display = 'block';
        }
        this.__settings.useEncryptOverallMode = e.target.checked;
        this.__saveSettingsHandler();
      });

      // 추후 위에 주석 풀어야함 - START
      // document
      //   .getElementById('use-pii-encrypt-mode')
      //   .addEventListener('change', (e) => {
      //     this.__settings.usePiiEncryptMode = e.target.checked;
      //     this.__saveSettingsHandler();
      //   });
      //
      // document
      //   .getElementById('use-pii-encrypt-face')
      //   .addEventListener('change', (e) => {
      //     this.__settings.usePiiEncryptFace = e.target.checked;
      //     this.__saveSettingsHandler();
      //   });
      // 추후 위에 주석 풀어야함 - END

      document.getElementById('use-legacy-format').addEventListener('change', e => {
        this.__settings.useLegacyFormat = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-image-warping').addEventListener('change', e => {
        this.__settings.useImageWarping = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image').addEventListener('change', e => {
        this.__settings.useCompressImage = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image-max-width').addEventListener('change', e => {
        this.__settings.useCompressImageMaxWidth = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('use-compress-image-max-volume').addEventListener('change', e => {
        this.__settings.useCompressImageMaxVolume = e.target.value;
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
      document.getElementById('camera-resolution-criteria').addEventListener('change', e => {
        this.__settings.cameraResolutionCriteria = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('camera-resource-request-retry-limit').addEventListener('change', e => {
        this.__settings.cameraResourceRequestRetryLimit = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('camera-resource-request-retry-interval').addEventListener('change', e => {
        this.__settings.cameraResourceRequestRetryInterval = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById('guide-box-criteria').addEventListener('change', e => {
        this.__settings.calcGuideBoxCriteria = e.target.value;
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
      document.getElementById('use-debug-alert').addEventListener('change', e => {
        this.__settings.useDebugAlert = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('force_wasm_reload').addEventListener('change', e => {
        this.__settings.force_wasm_reload = e.target.checked;
        if (!e.target.checked) {
          this.__settings.force_wasm_reload_flag = '';
        }
        this.__saveSettingsHandler();
      });
      document.getElementById('force_wasm_reload_flag').addEventListener('change', e => {
        var checked = document.querySelector('#force_wasm_reload').value;
        this.__settings.force_wasm_reload_flag = checked ? e.target.value : '';
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
      document.getElementById('alien-back').addEventListener('click', () => {
        this.__type = 'alien-back';
        this.__settings.useFaceImage = false; // 외국인등록증 뒷면은 얼굴 없음
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5Iiwic3NhUmV0cnlUeXBlIiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInNldFNzYVR5cGUiLCJlbCIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidGV4dCIsImNvbmNhdCIsImNsaWNrIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwidWkiLCJ1c2VGb3JjZUNvbXBsZXRlVUkiLCJ1c2VBdXRvU3dpdGNoVG9TZXJ2ZXJNb2RlIiwic3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQiLCJ1c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUiLCJ1c2VFbmNyeXB0QWxsTW9kZSIsInN0eWxlIiwiZGlzcGxheSIsInVzZUVuY3J5cHRNb2RlIiwidXNlRW5jcnlwdE92ZXJhbGxNb2RlIiwidXNlTGVnYWN5Rm9ybWF0IiwidXNlSW1hZ2VXYXJwaW5nIiwidXNlQ29tcHJlc3NJbWFnZSIsInVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCIsInVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUiLCJtaXJyb3JNb2RlIiwicm90YXRpb25EZWdyZWUiLCJjYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEiLCJjYW1lcmFSZXNvdXJjZVJlcXVlc3RSZXRyeUxpbWl0IiwiY2FtZXJhUmVzb3VyY2VSZXF1ZXN0UmV0cnlJbnRlcnZhbCIsImNhbGNHdWlkZUJveENyaXRlcmlhIiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3IiwidXNlRGVidWdBbGVydCIsImZvcmNlX3dhc21fcmVsb2FkIiwiZm9yY2Vfd2FzbV9yZWxvYWRfZmxhZyIsInNvdXJjZSIsInNwbGl0IiwidXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UiLCJhcnIiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJmcmFtZUJvcmRlclN0eWxlIiwiX29iamVjdFNwcmVhZCIsIndpZHRoIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwibWFza0ZyYW1lQ29sb3JOb3RSZWFkeSIsIm1hc2tGcmFtZUNvbG9yUmVhZHkiLCJtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MiLCJtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCIsIm1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCIsIm1hc2tGcmFtZUNvbG9yU3VjY2VzcyIsIm1hc2tGcmFtZUNvbG9yRmFpbGVkIiwibWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IiLCJtYXNrRnJhbWVTdHlsZSIsImJhc2VfY29sb3IiLCJoZWlnaHQiLCJyZXNvbHV0aW9uV2lkdGgiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbkV4cGVuZFJhdGlvIiwiX190eXBlIiwiX19vbkNsaWNrU3RhcnQiLCJ1c2VGYWNlSW1hZ2UiLCJfX29uQ2xpY2tSZXN0YXJ0IiwiX19zZXRBY3RpdmVCdXR0b24iLCJ0eXBlIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZXMiOlsianMvdWlfc2ltdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpbnN0YW5jZTtcbmNsYXNzIFVJU2ltdWxhdG9yIHtcbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX29uQ2xpY2tTdGFydENhbGxiYWNrO1xuICBfX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gIF9fdHlwZTtcbiAgX19zZXR0aW5ncyA9IHtcbiAgICBzc2FSZXRyeVR5cGU6ICdFTlNFTUJMRSdcbiAgfTtcblxuICAvKiogY29uc3RydWN0b3IgKi9cbiAgY29uc3RydWN0b3Iob25DbGlja1N0YXJ0Q2FsbGJhY2ssIG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2spIHtcbiAgICBpZiAoISEhb25DbGlja1N0YXJ0Q2FsbGJhY2sgfHwgISEhb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbkNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBub3QgZXhpc3QnKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlKSByZXR1cm4gaW5zdGFuY2U7XG4gICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tTdGFydENhbGxiYWNrO1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrID0gb25DbGlja1Jlc3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLl9fYmluZEV2ZW50TGlzdGVuZXIoKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cbiAgX19iaW5kRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzLXNlY3Rpb24gaW5wdXQnKS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29sbGFwc2VkVG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSBldmVudC50YXJnZXQuaWQ/LmluY2x1ZGVzKCd0b2dnbGUnKSA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gdG9nZ2xlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICBjb25zdCBjaGV2cm9uID0gdG9nZ2xlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hldnJvbicpO1xuICAgICAgICAvLyBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAvLyBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIHNwYW4nKVxuICAgICAgICAvLyBjb25zdCBjaGV2cm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICcgLmNoZXZyb24nKVxuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vsoJHquLBdJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnW+2OvOy5mOq4sF0nO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYXBzZWRUb2dnbGUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtbWF4LXJldHJ5LWNvdW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zc2FNYXhSZXRyeUNvdW50ID0gaXNOYU4ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSA/IDAgOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNldFNzYVR5cGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNzYVJldHJ5VHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtdHlwZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFNzYVR5cGUpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0b2dnbGVDdXN0b21VSSA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlVG9wVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWlkZGxlVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQm90dG9tVUkgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3ByZXZpZXcnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZVByZXZpZXdVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1c2UtJHtwb3NpdGlvbn0tdWktdGV4dC1tc2dgKTtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCAmJiB0ZXh0Py5jaGVja2VkKSB7XG4gICAgICAgICAgdGV4dC5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VUb3BVSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWlkZGxlVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUJvdHRvbVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdWkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlLSR7cG9zaXRpb259LXVpYCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCAmJiAhdWkuY2hlY2tlZCkge1xuICAgICAgICAgIHVpLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXRvcC11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtdG9wLXVpLXRleHQtbXNnJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWlkZGxlLXVpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1taWRkbGUtdWktdGV4dC1tc2cnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdtaWRkbGUnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1ib3R0b20tdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWJvdHRvbS11aS10ZXh0LW1zZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLXByZXZpZXctdWknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ3ByZXZpZXcnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1mb3JjZS1jb21wbGV0ZS11aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRm9yY2VDb21wbGV0ZVVJID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1hdXRvLXN3aXRjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlQXV0b1N3aXRjaFRvU2VydmVyTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtdG8tc2VydmVyLXRocmVzaG9sZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc3dpdGNoVG9TZXJ2ZXJUaHJlc2hvbGQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1tYW51YWwtc3dpdGNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNYW51YWxTd2l0Y2hUb1NlcnZlck1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtbW9kZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VFbmNyeXB0QWxsTW9kZSA9ICFlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1hbGwtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1vdmVyYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW92ZXJhbGwtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRW5jcnlwdE1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtYWxsLW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRW5jcnlwdE1vZGUgPSAhZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1vdmVyYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtb3ZlcmFsbC1tb2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VFbmNyeXB0QWxsTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtZW5jcnlwdC1vdmVyYWxsLW1vZGUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlRW5jcnlwdE92ZXJhbGxNb2RlID0gIWUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1lbmNyeXB0LW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtbW9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWVuY3J5cHQtYWxsLW1vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUVuY3J5cHRPdmVyYWxsTW9kZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gU1RBUlRcbiAgICAgIC8vIGRvY3VtZW50XG4gICAgICAvLyAgIC5nZXRFbGVtZW50QnlJZCgndXNlLXBpaS1lbmNyeXB0LW1vZGUnKVxuICAgICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUGlpRW5jcnlwdE1vZGUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgLy8gICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy9cbiAgICAgIC8vIGRvY3VtZW50XG4gICAgICAvLyAgIC5nZXRFbGVtZW50QnlJZCgndXNlLXBpaS1lbmNyeXB0LWZhY2UnKVxuICAgICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUGlpRW5jcnlwdEZhY2UgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgLy8gICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8g7LaU7ZuEIOychOyXkCDso7zshJ0g7ZKA7Ja07JW87ZWoIC0gRU5EXG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbGVnYWN5LWZvcm1hdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTGVnYWN5Rm9ybWF0ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1pbWFnZS13YXJwaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VJbWFnZVdhcnBpbmcgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWNvbXByZXNzLWltYWdlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VDb21wcmVzc0ltYWdlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZS1jb21wcmVzcy1pbWFnZS1tYXgtd2lkdGgnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUNvbXByZXNzSW1hZ2VNYXhXaWR0aCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWNvbXByZXNzLWltYWdlLW1heC12b2x1bWUnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZUNvbXByZXNzSW1hZ2VNYXhWb2x1bWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pcnJvci1tb2RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5taXJyb3JNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Mucm90YXRpb25EZWdyZWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yZXNvbHV0aW9uLWNyaXRlcmlhJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5jYW1lcmFSZXNvbHV0aW9uQ3JpdGVyaWEgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yZXNvdXJjZS1yZXF1ZXN0LXJldHJ5LWxpbWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5jYW1lcmFSZXNvdXJjZVJlcXVlc3RSZXRyeUxpbWl0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmVzb3VyY2UtcmVxdWVzdC1yZXRyeS1pbnRlcnZhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuY2FtZXJhUmVzb3VyY2VSZXF1ZXN0UmV0cnlJbnRlcnZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3VpZGUtYm94LWNyaXRlcmlhJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5jYWxjR3VpZGVCb3hDcml0ZXJpYSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1jbGlwYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnNob3dDbGlwRnJhbWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1jYW52YXMtcHJldmlldycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc2hvd0NhbnZhc1ByZXZpZXcgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlLWRlYnVnLWFsZXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VEZWJ1Z0FsZXJ0ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmNlX3dhc21fcmVsb2FkJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5mb3JjZV93YXNtX3JlbG9hZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy5mb3JjZV93YXNtX3JlbG9hZF9mbGFnID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmNlX3dhc21fcmVsb2FkX2ZsYWcnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JjZV93YXNtX3JlbG9hZCcpLnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuZm9yY2Vfd2FzbV9yZWxvYWRfZmxhZyA9IGNoZWNrZWQgPyBlLnRhcmdldC52YWx1ZSA6ICcnO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tdGVtcGxhdGUnKS52YWx1ZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUuc3BsaXQoJ3gnKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICAgIFt0YXJnZXRbMF0udmFsdWUsIHRhcmdldFsxXS52YWx1ZV0gPSBbc291cmNlWzBdLCBzb3VyY2VbMV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2UtbWFzay1mcmFtZS1jb2xvci1jaGFuZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1hc2tGcmFtZUNvbG9yQ2hhbmdlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZWZhdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZWZhdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1yZXZlcnNlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JyldO1xuICAgICAgICBbYXJyWzBdLnZhbHVlLCBhcnJbMV0udmFsdWVdID0gW2FyclsxXS52YWx1ZSwgYXJyWzBdLnZhbHVlXTsgLy8gc3dhcFxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpO1xuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOyglSDsoIHsmqnrkKgnO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5zdHlsZS5jb2xvciA9ICcjNWNiODVjJztcblxuICAgICAgICAvLyDsnbjsi50g7ZSE66CI7J6EIOyKpO2DgOydvFxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItd2lkdGgnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXN0eWxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItcmFkaXVzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSxcbiAgICAgICAgICB3aWR0aDogYm9yZGVyV2lkdGgsXG4gICAgICAgICAgc3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgIHJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIG5vdF9yZWFkeTogY29sb3JOb3RSZWFkeSxcbiAgICAgICAgICByZWFkeTogY29sb3JSZWFkeSxcbiAgICAgICAgICBkZXRlY3RfZmFpbGVkOiBjb2xvckRldGVjdEZhaWxlZCxcbiAgICAgICAgICBkZXRlY3Rfc3VjY2VzczogY29sb3JEZXRlY3RTdWNjZXNzLFxuICAgICAgICAgIHJlY29nbml6ZWQ6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgb2NyX2ZhaWxlZDogY29sb3JGYWlsZWQsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3M6IGNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogY29sb3JTdWNjZXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g66eI7Iqk7YK5IO2UhOugiOyehCDsiqTtg4DsnbxcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1iYXNlLWNvbG9yJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5tYXNrRnJhbWVTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MubWFza0ZyYW1lU3R5bGUsXG4gICAgICAgICAgYmFzZV9jb2xvcjogbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IsXG4gICAgICAgICAgbm90X3JlYWR5OiBtYXNrRnJhbWVDb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBtYXNrRnJhbWVDb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IG1hc2tGcmFtZUNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBtYXNrRnJhbWVDb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogbWFza0ZyYW1lQ29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBtYXNrRnJhbWVDb2xvclN1Y2Nlc3NcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1zaW11bGF0aW9uLWlmcmFtZScpLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25XaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc29sdXRpb25FeHBlbmRSYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWV4cGVuZC1yYXRpbycpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUud2lkdGggPSByZXNvbHV0aW9uV2lkdGggKiByZXNvbHV0aW9uRXhwZW5kUmF0aW8gKyAncHgnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gcmVzb2x1dGlvbkhlaWdodCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX190eXBlKSB7XG4gICAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGNhcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnaWRjYXJkJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3BvcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAncGFzc3BvcnQnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGllbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdhbGllbic7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsaWVuLWJhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAnYWxpZW4tYmFjayc7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VGYWNlSW1hZ2UgPSBmYWxzZTsgLy8g7Jm46rWt7J2465Ox66Gd7KadIOuSt+uptOydgCDslrzqtbQg7JeG7J2MXG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9ICdjcmVkaXQnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZGNhcmQtc3NhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2lkY2FyZC1zc2EnO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzcG9ydC1zc2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSAncGFzc3BvcnQtc3NhJztcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxpZW4tc3NhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gJ2FsaWVuLXNzYSc7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRfYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBfX29uQ2xpY2tTdGFydCgpIHtcbiAgICB0aGlzLl9fc2V0QWN0aXZlQnV0dG9uKHRoaXMuX190eXBlKTtcbiAgICB0aGlzLl9fb25DbGlja1N0YXJ0Q2FsbGJhY2sodGhpcy5fX3R5cGUsIHRoaXMuX19zZXR0aW5ncyk7XG4gIH1cbiAgX19vbkNsaWNrUmVzdGFydCgpIHtcbiAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnRDYWxsYmFjaygpO1xuICB9XG4gIF9fc2V0QWN0aXZlQnV0dG9uKHR5cGUpIHtcbiAgICB0aGlzLnJlc2V0QnV0dG9uKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbiAgcmVzZXRCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG4gIF9fc2F2ZVNldHRpbmdzSGFuZGxlcigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1zZXR0aW5ncycpO1xuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaGVjaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9ICfshKTsoJXsoIHsmqknO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVSVNpbXVsYXRvcjsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSUEsUUFBUTtBQUNaLE1BQU1DLFdBQVcsQ0FBQztFQUNoQjs7RUFRQTtFQUNBQyxXQUFXQSxDQUFDQyxvQkFBb0IsRUFBRUMsc0JBQXNCLEVBQUU7SUFBQUMsZUFBQTtJQUFBQSxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQSxxQkFMN0M7TUFDWEMsWUFBWSxFQUFFO0lBQ2hCLENBQUM7SUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDSCxvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQ0Msc0JBQXNCLEVBQUU7TUFDeEQsTUFBTSxJQUFJRyxLQUFLLENBQUMsa0RBQWtELENBQUM7SUFDckU7SUFDQSxJQUFJUCxRQUFRLEVBQUUsT0FBT0EsUUFBUTtJQUM3QkEsUUFBUSxHQUFHLElBQUk7SUFDZixJQUFJLENBQUNRLHNCQUFzQixHQUFHTCxvQkFBb0I7SUFDbEQsSUFBSSxDQUFDTSx3QkFBd0IsR0FBR0wsc0JBQXNCO0lBQ3RELElBQUksQ0FBQ00sbUJBQW1CLEVBQUU7SUFDMUIsT0FBT1YsUUFBUTtFQUNqQjtFQUNBVSxtQkFBbUJBLENBQUEsRUFBRztJQUNwQkMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTTtNQUNwQkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBSTtRQUNwRUEsS0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQztRQUMzREYsS0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQztNQUM5RCxDQUFDLENBQUM7TUFDRixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQWFDLEtBQUssRUFBRTtRQUFBLElBQUFD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
