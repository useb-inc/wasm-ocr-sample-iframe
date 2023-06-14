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
      throw new Error("onClick callback function parameter is not exist");
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
        this.__saveSettingsHandler();
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
      document.getElementById("use-preview-ui").addEventListener("change", e => {
        toggleCustomUI('preview', e);
      });
      document.getElementById("mirror-mode").addEventListener("change", e => {
        this.__settings.mirrorMode = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById('rotation-degree').addEventListener('change', e => {
        this.__settings.rotationDegree = e.target.value;
        this.__saveSettingsHandler();
      });
      document.getElementById("show-clipboard").addEventListener("change", e => {
        this.__settings.showClipFrame = e.target.checked;
        this.__saveSettingsHandler();
      });
      document.getElementById("show-canvas-preview").addEventListener("change", e => {
        this.__settings.showCanvasPreview = e.target.checked;
        this.__saveSettingsHandler();
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
        this.__saveSettingsHandler();
      });
      document.getElementById("use-mask-frame-color-change").addEventListener("change", e => {
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

        // Body Background color
        this.__settings.bodyBackgroundColor = document.getElementById('body-background-color').value;

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
        if (this.__type) {
          this.__onClickStart();
        }
      });
      document.getElementById("idcard").addEventListener("click", () => {
        this.__type = "idcard";
        this.__onClickStart();
      });
      document.getElementById("passport").addEventListener("click", () => {
        this.__type = "passport";
        this.__onClickStart();
      });
      document.getElementById("alien").addEventListener("click", () => {
        this.__type = "alien";
        this.__onClickStart();
      });
      document.getElementById("credit").addEventListener("click", () => {
        this.__type = "credit";
        this.__onClickStart();
      });
      document.getElementById("idcard-ssa").addEventListener("click", () => {
        this.__type = "idcard-ssa";
        this.__onClickStart();
      });
      document.getElementById("passport-ssa").addEventListener("click", () => {
        this.__type = "passport-ssa";
        this.__onClickStart();
      });
      document.getElementById("alien-ssa").addEventListener("click", () => {
        this.__type = "alien-ssa";
        this.__onClickStart();
      });

      // document.getElementById("credit-ssa").addEventListener("click", () => {
      //   this.__type = "credit-ssa";
      //   this.__onClickStart();
      // });

      document.getElementById('restart_btn').addEventListener("click", () => {
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
    document.getElementById(type).classList.add("active");
  }
  resetButton() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdWlfc2ltdWxhdG9yLmpzIiwibmFtZXMiOlsiaW5zdGFuY2UiLCJVSVNpbXVsYXRvciIsImNvbnN0cnVjdG9yIiwib25DbGlja1N0YXJ0Q2FsbGJhY2siLCJvbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJfX29uQ2xpY2tTdGFydENhbGxiYWNrIiwiX19vbkNsaWNrUmVzdGFydENhbGxiYWNrIiwiX19iaW5kRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3NhdmVTZXR0aW5nc0hhbmRsZXIiLCJjb2xsYXBzZWRUb2dnbGUiLCJldmVudCIsIl9ldmVudCR0YXJnZXQkaWQiLCJ0b2dnbGVFbGVtZW50IiwidGFyZ2V0IiwiaWQiLCJpbmNsdWRlcyIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hldnJvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImUiLCJfX3NldHRpbmdzIiwic3NhTWF4UmV0cnlDb3VudCIsImlzTmFOIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInRvZ2dsZUN1c3RvbVVJIiwicG9zaXRpb24iLCJ1c2VUb3BVSSIsImNoZWNrZWQiLCJ1c2VNaWRkbGVVSSIsInVzZUJvdHRvbVVJIiwidXNlUHJldmlld1VJIiwidG9nZ2xlQ3VzdG9tVUlUZXh0TXNnIiwidXNlVG9wVUlUZXh0TXNnIiwidXNlTWlkZGxlVUlUZXh0TXNnIiwidXNlQm90dG9tVUlUZXh0TXNnIiwibWlycm9yTW9kZSIsInJvdGF0aW9uRGVncmVlIiwic2hvd0NsaXBGcmFtZSIsInNob3dDYW52YXNQcmV2aWV3Iiwic3R5bGUiLCJkaXNwbGF5Iiwic291cmNlIiwic3BsaXQiLCJ1c2VNYXNrRnJhbWVDb2xvckNoYW5nZSIsImFyciIsInNldEF0dHJpYnV0ZSIsImNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJjb2xvck5vdFJlYWR5IiwiY29sb3JSZWFkeSIsImNvbG9yRGV0ZWN0U3VjY2VzcyIsImNvbG9yRGV0ZWN0RmFpbGVkIiwiY29sb3JPQ1JSZWNvZ25pemVkIiwiY29sb3JTdWNjZXNzIiwiY29sb3JGYWlsZWQiLCJmcmFtZUJvcmRlclN0eWxlIiwiX29iamVjdFNwcmVhZCIsIndpZHRoIiwicmFkaXVzIiwibm90X3JlYWR5IiwicmVhZHkiLCJkZXRlY3RfZmFpbGVkIiwiZGV0ZWN0X3N1Y2Nlc3MiLCJyZWNvZ25pemVkIiwicmVjb2duaXplZF93aXRoX3NzYSIsIm9jcl9mYWlsZWQiLCJvY3Jfc3VjY2VzcyIsIm9jcl9zdWNjZXNzX3dpdGhfc3NhIiwibWFza0ZyYW1lQ29sb3JOb3RSZWFkeSIsIm1hc2tGcmFtZUNvbG9yUmVhZHkiLCJtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MiLCJtYXNrRnJhbWVDb2xvckRldGVjdEZhaWxlZCIsIm1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCIsIm1hc2tGcmFtZUNvbG9yU3VjY2VzcyIsIm1hc2tGcmFtZUNvbG9yRmFpbGVkIiwibWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IiLCJtYXNrRnJhbWVTdHlsZSIsImJhc2VfY29sb3IiLCJoZWlnaHQiLCJyZXNvbHV0aW9uV2lkdGgiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbkV4cGVuZFJhdGlvIiwiX190eXBlIiwiX19vbkNsaWNrU3RhcnQiLCJfX29uQ2xpY2tSZXN0YXJ0IiwiX19zZXRBY3RpdmVCdXR0b24iLCJ0eXBlIiwicmVzZXRCdXR0b24iLCJidXR0b25zIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZXMiOlsianMvdWlfc2ltdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpbnN0YW5jZTtcbmNsYXNzIFVJU2ltdWxhdG9yIHtcbiAgLyoqIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBfX29uQ2xpY2tTdGFydENhbGxiYWNrO1xuICBfX29uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gIF9fdHlwZTtcbiAgX19zZXR0aW5ncyA9IHt9O1xuXG4gIC8qKiBjb25zdHJ1Y3RvciAqL1xuICBjb25zdHJ1Y3RvcihvbkNsaWNrU3RhcnRDYWxsYmFjaywgb25DbGlja1Jlc3RhcnRDYWxsYmFjaykge1xuICAgIGlmICghISFvbkNsaWNrU3RhcnRDYWxsYmFjayB8fCAhISFvbkNsaWNrUmVzdGFydENhbGxiYWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvbkNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBub3QgZXhpc3RcIik7XG4gICAgfVxuICAgIGlmIChpbnN0YW5jZSkgcmV0dXJuIGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gdGhpcztcbiAgICB0aGlzLl9fb25DbGlja1N0YXJ0Q2FsbGJhY2sgPSBvbkNsaWNrU3RhcnRDYWxsYmFjaztcbiAgICB0aGlzLl9fb25DbGlja1Jlc3RhcnRDYWxsYmFjayA9IG9uQ2xpY2tSZXN0YXJ0Q2FsbGJhY2s7XG4gICAgdGhpcy5fX2JpbmRFdmVudExpc3RlbmVyKCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG4gIF9fYmluZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy1zZWN0aW9uIGlucHV0JykuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZFRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0b2dnbGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmlkPy5pbmNsdWRlcyhcInRvZ2dsZVwiKSA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gdG9nZ2xlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRvZ2dsZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICBjb25zdCBjaGV2cm9uID0gdG9nZ2xlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hldnJvbicpO1xuICAgICAgICAvLyBjb25zdCBzZXR0aW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAvLyBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IgKyAnIHNwYW4nKVxuICAgICAgICAvLyBjb25zdCBjaGV2cm9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciArICcgLmNoZXZyb24nKVxuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZXZyb24tdXAnKTtcbiAgICAgICAgICBjaGV2cm9uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZXZyb24tZG93bicpO1xuICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1vsoJHquLBdJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgIGNoZXZyb24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2hldnJvbi1kb3duJyk7XG4gICAgICAgICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdmYS1jaGV2cm9uLXVwJyk7XG4gICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSAnW+2OvOy5mOq4sF0nO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtdG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYXBzZWRUb2dnbGUpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sbGFwc2VkVG9nZ2xlKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzc2EtbWF4LXJldHJ5LWNvdW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5zc2FNYXhSZXRyeUNvdW50ID0gaXNOYU4ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSA/IDAgOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJID0gKHBvc2l0aW9uLCBldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VUb3BVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VNaWRkbGVVSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VCb3R0b21VSSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJldmlldyc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlUHJldmlld1VJID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvZ2dsZUN1c3RvbVVJVGV4dE1zZyA9IChwb3NpdGlvbiwgZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlVG9wVUlUZXh0TXNnID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgdGhpcy5fX3NldHRpbmdzLnVzZU1pZGRsZVVJVGV4dE1zZyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRoaXMuX19zZXR0aW5ncy51c2VCb3R0b21VSVRleHRNc2cgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtdG9wLXVpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJKCd0b3AnLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtdG9wLXVpLXRleHQtbXNnXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRvZ2dsZUN1c3RvbVVJVGV4dE1zZygndG9wJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLW1pZGRsZS11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgnbWlkZGxlJywgZSk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlLW1pZGRsZS11aS10ZXh0LW1zZ1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSVRleHRNc2coJ21pZGRsZScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1ib3R0b20tdWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUkoJ2JvdHRvbScsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1ib3R0b20tdWktdGV4dC1tc2dcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgdG9nZ2xlQ3VzdG9tVUlUZXh0TXNnKCdib3R0b20nLCBlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2UtcHJldmlldy11aVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0b2dnbGVDdXN0b21VSSgncHJldmlldycsIGUpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pcnJvci1tb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5taXJyb3JNb2RlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLWRlZ3JlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Mucm90YXRpb25EZWdyZWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fX3NhdmVTZXR0aW5nc0hhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LWNsaXBib2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc2hvd0NsaXBGcmFtZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1jYW52YXMtcHJldmlld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3Muc2hvd0NhbnZhc1ByZXZpZXcgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlID09PSBcInJlc3BvbnNpdmVcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tY3VzdG9tJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi10ZW1wbGF0ZScpLnZhbHVlLnNwbGl0KCd4Jyk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXdpZHRoJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLWhlaWdodCcpXTtcbiAgICAgICAgICBbdGFyZ2V0WzBdLnZhbHVlLCB0YXJnZXRbMV0udmFsdWVdID0gW3NvdXJjZVswXSwgc291cmNlWzFdXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fc2F2ZVNldHRpbmdzSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZS1tYXNrLWZyYW1lLWNvbG9yLWNoYW5nZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MudXNlTWFza0ZyYW1lQ29sb3JDaGFuZ2UgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRlZmF1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWN1c3RvbScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLWRlZmF1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1jdXN0b20nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXJldmVyc2UtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi13aWR0aCcpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzb2x1dGlvbi1oZWlnaHQnKV07XG4gICAgICAgIFthcnJbMF0udmFsdWUsIGFyclsxXS52YWx1ZV0gPSBbYXJyWzFdLnZhbHVlLCBhcnJbMF0udmFsdWVdOyAvLyBzd2FwXG4gICAgICAgIHRoaXMuX19zYXZlU2V0dGluZ3NIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSAn7ISk7KCVIOyggeyaqeuQqCc7XG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLnN0eWxlLmNvbG9yID0gJyM1Y2I4NWMnO1xuXG4gICAgICAgIC8vIEJvZHkgQmFja2dyb3VuZCBjb2xvclxuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuYm9keUJhY2tncm91bmRDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5LWJhY2tncm91bmQtY29sb3InKS52YWx1ZTtcblxuICAgICAgICAvLyDsnbjsi50g7ZSE66CI7J6EIOyKpO2DgOydvFxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItd2lkdGgnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9yZGVyLXN0eWxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3JkZXItcmFkaXVzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yTm90UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itbm90LXJlYWR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yUmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRGV0ZWN0RmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWRldGVjdC1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29sb3JPQ1JSZWNvZ25pemVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zdWNjZXNzJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbG9yRmFpbGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLWZhaWxlZCcpLnZhbHVlO1xuICAgICAgICB0aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MuZnJhbWVCb3JkZXJTdHlsZSxcbiAgICAgICAgICB3aWR0aDogYm9yZGVyV2lkdGgsXG4gICAgICAgICAgc3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgICAgIHJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIG5vdF9yZWFkeTogY29sb3JOb3RSZWFkeSxcbiAgICAgICAgICByZWFkeTogY29sb3JSZWFkeSxcbiAgICAgICAgICBkZXRlY3RfZmFpbGVkOiBjb2xvckRldGVjdEZhaWxlZCxcbiAgICAgICAgICBkZXRlY3Rfc3VjY2VzczogY29sb3JEZXRlY3RTdWNjZXNzLFxuICAgICAgICAgIHJlY29nbml6ZWQ6IGNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICByZWNvZ25pemVkX3dpdGhfc3NhOiBjb2xvck9DUlJlY29nbml6ZWQsXG4gICAgICAgICAgb2NyX2ZhaWxlZDogY29sb3JGYWlsZWQsXG4gICAgICAgICAgb2NyX3N1Y2Nlc3M6IGNvbG9yU3VjY2VzcyxcbiAgICAgICAgICBvY3Jfc3VjY2Vzc193aXRoX3NzYTogY29sb3JTdWNjZXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g66eI7Iqk7YK5IO2UhOugiOyehCDsiqTtg4DsnbxcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JOb3RSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW5vdC1yZWFkeScpLnZhbHVlO1xuICAgICAgICBjb25zdCBtYXNrRnJhbWVDb2xvclJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItcmVhZHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RTdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc2stZnJhbWUtY29sb3ItZGV0ZWN0LXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JEZXRlY3RGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1kZXRlY3QtZmFpbGVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLW9jci1yZWNvZ25pemVkJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1hc2tGcmFtZUNvbG9yU3VjY2VzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNrLWZyYW1lLWNvbG9yLXN1Y2Nlc3MnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JGYWlsZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1mYWlsZWQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzay1mcmFtZS1jb2xvci1iYXNlLWNvbG9yJykudmFsdWU7XG4gICAgICAgIHRoaXMuX19zZXR0aW5ncy5tYXNrRnJhbWVTdHlsZSA9IHtcbiAgICAgICAgICAuLi50aGlzLl9fc2V0dGluZ3MubWFza0ZyYW1lU3R5bGUsXG4gICAgICAgICAgYmFzZV9jb2xvcjogbWFza0ZyYW1lQ29sb3JCYXNlQ29sb3IsXG4gICAgICAgICAgbm90X3JlYWR5OiBtYXNrRnJhbWVDb2xvck5vdFJlYWR5LFxuICAgICAgICAgIHJlYWR5OiBtYXNrRnJhbWVDb2xvclJlYWR5LFxuICAgICAgICAgIGRldGVjdF9mYWlsZWQ6IG1hc2tGcmFtZUNvbG9yRGV0ZWN0RmFpbGVkLFxuICAgICAgICAgIGRldGVjdF9zdWNjZXNzOiBtYXNrRnJhbWVDb2xvckRldGVjdFN1Y2Nlc3MsXG4gICAgICAgICAgcmVjb2duaXplZDogbWFza0ZyYW1lQ29sb3JPQ1JSZWNvZ25pemVkLFxuICAgICAgICAgIHJlY29nbml6ZWRfd2l0aF9zc2E6IG1hc2tGcmFtZUNvbG9yT0NSUmVjb2duaXplZCxcbiAgICAgICAgICBvY3JfZmFpbGVkOiBtYXNrRnJhbWVDb2xvckZhaWxlZCxcbiAgICAgICAgICBvY3Jfc3VjY2VzczogbWFza0ZyYW1lQ29sb3JTdWNjZXNzLFxuICAgICAgICAgIG9jcl9zdWNjZXNzX3dpdGhfc3NhOiBtYXNrRnJhbWVDb2xvclN1Y2Nlc3NcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXRlbXBsYXRlJykudmFsdWUgPT09IFwicmVzcG9uc2l2ZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNvbHV0aW9uLXNpbXVsYXRpb24taWZyYW1lJykuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24td2lkdGgnKS52YWx1ZTtcbiAgICAgICAgICBjb25zdCByZXNvbHV0aW9uSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24taGVpZ2h0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkV4cGVuZFJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tZXhwZW5kLXJhdGlvJykudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS53aWR0aCA9IHJlc29sdXRpb25XaWR0aCAqIHJlc29sdXRpb25FeHBlbmRSYXRpbyArICdweCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc29sdXRpb24tc2ltdWxhdGlvbi1pZnJhbWUnKS5zdHlsZS5oZWlnaHQgPSByZXNvbHV0aW9uSGVpZ2h0ICogcmVzb2x1dGlvbkV4cGVuZFJhdGlvICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3R5cGUpIHtcbiAgICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcImlkY2FyZFwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3BvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcInBhc3Nwb3J0XCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGllblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwiYWxpZW5cIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fdHlwZSA9IFwiY3JlZGl0XCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZGNhcmQtc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJpZGNhcmQtc3NhXCI7XG4gICAgICAgIHRoaXMuX19vbkNsaWNrU3RhcnQoKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzcG9ydC1zc2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX3R5cGUgPSBcInBhc3Nwb3J0LXNzYVwiO1xuICAgICAgICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZW4tc3NhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX190eXBlID0gXCJhbGllbi1zc2FcIjtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tTdGFydCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0LXNzYVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLl9fdHlwZSA9IFwiY3JlZGl0LXNzYVwiO1xuICAgICAgLy8gICB0aGlzLl9fb25DbGlja1N0YXJ0KCk7XG4gICAgICAvLyB9KTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRfYnRuJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fX29uQ2xpY2tSZXN0YXJ0KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIF9fb25DbGlja1N0YXJ0KCkge1xuICAgIHRoaXMuX19zZXRBY3RpdmVCdXR0b24odGhpcy5fX3R5cGUpO1xuICAgIHRoaXMuX19vbkNsaWNrU3RhcnRDYWxsYmFjayh0aGlzLl9fdHlwZSwgdGhpcy5fX3NldHRpbmdzKTtcbiAgfVxuICBfX29uQ2xpY2tSZXN0YXJ0KCkge1xuICAgIHRoaXMuX19vbkNsaWNrUmVzdGFydENhbGxiYWNrKCk7XG4gIH1cbiAgX19zZXRBY3RpdmVCdXR0b24odHlwZSkge1xuICAgIHRoaXMucmVzZXRCdXR0b24oKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIHJlc2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbiAgX19zYXZlU2V0dGluZ3NIYW5kbGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXNldHRpbmdzJyk7XG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhLWNoZWNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gJ+yEpOygleyggeyaqSc7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVJU2ltdWxhdG9yOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxRQUFRO0FBQ1osTUFBTUMsV0FBVyxDQUFDO0VBQ2hCOztFQU1BO0VBQ0FDLFdBQVdBLENBQUNDLG9CQUFvQixFQUFFQyxzQkFBc0IsRUFBRTtJQUFBQyxlQUFBO0lBQUFBLGVBQUE7SUFBQUEsZUFBQTtJQUFBQSxlQUFBLHFCQUg3QyxDQUFDLENBQUM7SUFJYixJQUFJLENBQUMsQ0FBQyxDQUFDRixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQ0Msc0JBQXNCLEVBQUU7TUFDeEQsTUFBTSxJQUFJRSxLQUFLLENBQUMsa0RBQWtELENBQUM7SUFDckU7SUFDQSxJQUFJTixRQUFRLEVBQUUsT0FBT0EsUUFBUTtJQUM3QkEsUUFBUSxHQUFHLElBQUk7SUFDZixJQUFJLENBQUNPLHNCQUFzQixHQUFHSixvQkFBb0I7SUFDbEQsSUFBSSxDQUFDSyx3QkFBd0IsR0FBR0osc0JBQXNCO0lBQ3RELElBQUksQ0FBQ0ssbUJBQW1CLEVBQUU7SUFDMUIsT0FBT1QsUUFBUTtFQUNqQjtFQUNBUyxtQkFBbUJBLENBQUEsRUFBRztJQUNwQkMsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTTtNQUNwQkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBSTtRQUNwRUEsS0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQztRQUMzREYsS0FBSyxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQztNQUM5RCxDQUFDLENBQUM7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
